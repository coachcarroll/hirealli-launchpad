import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@18.5.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const logStep = (step: string, details?: any) => {
  const detailsStr = details ? ` - ${JSON.stringify(details)}` : '';
  console.log(`[CREATE-FREEMIUM] ${step}${detailsStr}`);
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

    const { name, email, phone, company, website, smsConsent } = await req.json();
    logStep("Received request", { name, email, company, website });

    if (!email || !name) {
      throw new Error("Email and name are required");
    }

    const stripe = new Stripe(stripeKey, { apiVersion: "2025-08-27.basil" });

    // Check if customer already exists
    const existingCustomers = await stripe.customers.list({ email, limit: 1 });
    let customer;

    if (existingCustomers.data.length > 0) {
      customer = existingCustomers.data[0];
      logStep("Found existing customer", { customerId: customer.id });
      
      // Update customer with latest info
      customer = await stripe.customers.update(customer.id, {
        name,
        phone,
        metadata: {
          company,
          website,
          sms_consent: smsConsent ? "true" : "false",
        },
      });
      logStep("Updated existing customer");
    } else {
      // Create new customer
      customer = await stripe.customers.create({
        email,
        name,
        phone,
        metadata: {
          company,
          website,
          sms_consent: smsConsent ? "true" : "false",
        },
      });
      logStep("Created new customer", { customerId: customer.id });
    }

    // Check if customer already has an active subscription to this price
    const existingSubscriptions = await stripe.subscriptions.list({
      customer: customer.id,
      status: "active",
      limit: 10,
    });

    const hasFreemiumSub = existingSubscriptions.data.some((sub: Stripe.Subscription) => 
      sub.items.data.some((item: Stripe.SubscriptionItem) => item.price.id === "price_1SZd0BD8hbSdYbHs5cFUEiWr")
    );

    if (hasFreemiumSub) {
      logStep("Customer already has freemium subscription");
      return new Response(JSON.stringify({ 
        success: true, 
        message: "You already have an active freemium subscription",
        customerId: customer.id 
      }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      });
    }

    // Create subscription with the freemium price (no payment required for $0)
    const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      items: [{ price: "price_1SZd0BD8hbSdYbHs5cFUEiWr" }],
      expand: ["latest_invoice"],
    });

    logStep("Created subscription", { subscriptionId: subscription.id, status: subscription.status });

    return new Response(JSON.stringify({ 
      success: true, 
      customerId: customer.id,
      subscriptionId: subscription.id,
      status: subscription.status
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    logStep("ERROR in create-freemium-subscription", { message: errorMessage });
    return new Response(JSON.stringify({ error: errorMessage }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
