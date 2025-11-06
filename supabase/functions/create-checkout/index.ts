import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@18.5.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const logStep = (step: string, details?: any) => {
  const detailsStr = details ? ` - ${JSON.stringify(details)}` : '';
  console.log(`[CREATE-CHECKOUT] ${step}${detailsStr}`);
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    logStep("Function started");

    const stripeKey = Deno.env.get("STRIPE_SECRET_KEY");
    if (!stripeKey) throw new Error("STRIPE_SECRET_KEY is not set");
    logStep("Stripe key verified");

    const { monthlyAmount, isAnnual } = await req.json();
    logStep("Received request", { monthlyAmount, isAnnual });

    if (!monthlyAmount || monthlyAmount <= 0) {
      throw new Error("Invalid monthly amount provided");
    }

    // Try to get authenticated user, but allow guest checkout
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? ""
    );

    const authHeader = req.headers.get("Authorization");
    let userEmail: string | undefined;
    let customerId: string | undefined;

    if (authHeader) {
      const token = authHeader.replace("Bearer ", "");
      const { data: userData } = await supabaseClient.auth.getUser(token);
      userEmail = userData.user?.email;
      logStep("User authenticated", { email: userEmail });
    } else {
      logStep("Guest checkout - no auth header");
    }

    const stripe = new Stripe(stripeKey, { apiVersion: "2025-08-27.basil" });

    // If we have a user email, check for existing customer
    if (userEmail) {
      const customers = await stripe.customers.list({ email: userEmail, limit: 1 });
      if (customers.data.length > 0) {
        customerId = customers.data[0].id;
        logStep("Found existing customer", { customerId });
      }
    }

    // Create a price on the fly
    const unitAmount = isAnnual 
      ? Math.round((monthlyAmount * 12 * 0.83) * 100) // Annual with 17% discount, in cents
      : Math.round(monthlyAmount * 100); // Monthly in cents
    
    logStep("Creating price", { unitAmount, isAnnual });

    // Create checkout session with inline price
    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      customer_email: customerId ? undefined : userEmail,
      line_items: [{
        price_data: {
          currency: 'usd',
          unit_amount: unitAmount,
          recurring: {
            interval: isAnnual ? 'year' : 'month'
          },
          product_data: {
            name: isAnnual ? 'Alli Services (Annual)' : 'Alli Services (Monthly)',
            description: `Custom Alli subscription - $${monthlyAmount}/mo${isAnnual ? ' (billed annually with 17% savings)' : ''}`
          }
        },
        quantity: 1
      }],
      mode: "subscription",
      billing_address_collection: "required",
      phone_number_collection: {
        enabled: true,
      },
      success_url: `${req.headers.get("origin")}/pricing?success=true`,
      cancel_url: `${req.headers.get("origin")}/pricing?canceled=true`,
      subscription_data: {
        metadata: {
          billing_cycle: isAnnual ? 'annual' : 'monthly',
          monthly_amount: monthlyAmount.toString()
        }
      },
    });

    logStep("Checkout session created", { sessionId: session.id, url: session.url });

    return new Response(JSON.stringify({ url: session.url }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    logStep("ERROR in create-checkout", { message: errorMessage });
    return new Response(JSON.stringify({ error: errorMessage }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
