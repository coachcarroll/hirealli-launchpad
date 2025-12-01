import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, Info, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { FreemiumModal } from "@/components/FreemiumModal";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Feature {
  included: boolean;
  detail?: string;
}

interface TierFeatures {
  [key: string]: Feature;
}

interface Tier {
  name: string;
  subtitle: string;
  monthlyPrice: number;
  annualPrice: number;
  description: string;
  cta: string;
  highlighted: boolean;
  features: TierFeatures;
}

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [showFreemiumModal, setShowFreemiumModal] = useState(false);
  const { toast } = useToast();

  // Price IDs for main tiers
  const tierPriceIds = {
    Pro: {
      monthly: "price_1STAhyD8hbSdYbHszW2XZgQp",
      annual: "price_1STAi9D8hbSdYbHs5wWR0ddg"
    },
    Growth: {
      monthly: "price_1STAiND8hbSdYbHst0j2wH5c",
      annual: "price_1STAibD8hbSdYbHsBshYng1W"
    },
    Starter: {
      monthly: "price_1STAiyD8hbSdYbHsZLFM97kR",
      annual: "price_1STAjED8hbSdYbHs0Bx2m5U4"
    },
  };

  const handleCheckout = async (priceId: string, tierName: string) => {
    try {
      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: { priceId }
      });

      if (error) throw error;

      if (data?.url) {
        window.open(data.url, '_blank');
      }
    } catch (error) {
      console.error('Checkout error:', error);
      toast({
        title: "Error",
        description: "Failed to start checkout. Please try again.",
        variant: "destructive",
      });
    }
  };


  const tiers: Tier[] = [
    {
      name: "Pro",
      subtitle: "For teams with heavy inbound traffic",
      monthlyPrice: 1495,
      annualPrice: 15000,
      description: "2,500 detected contacts/month",
      cta: "Get Started",
      highlighted: false,
      features: {
        leadDetection: { included: true, detail: "2,500 detected contacts/month" },
        coverage: { included: true, detail: "Up to ~30% of traffic" },
        delivery: { included: true, detail: "Google Sheet + CSV + API" },
        emailReady: { included: true, detail: "Compliance notes included" },
        crmSync: { included: false },
        alerts: { included: true, detail: "Daily summaries" },
        retargetingPrep: { included: true },
        compliance: { included: true },
        onboarding: { included: true },
        support: { included: true, detail: "Priority support" },
        guarantee: { included: true },
      },
    },
    {
      name: "Growth",
      subtitle: "Best for scaling service businesses",
      monthlyPrice: 695,
      annualPrice: 7500,
      description: "1,000 detected contacts/month",
      cta: "Get Started",
      highlighted: true,
      features: {
        leadDetection: { included: true, detail: "1,000 detected contacts/month" },
        coverage: { included: true, detail: "Up to ~30% of traffic" },
        delivery: { included: true, detail: "Google Sheet + CSV + CRM sync" },
        emailReady: { included: true },
        crmSync: { included: false },
        alerts: { included: false },
        retargetingPrep: { included: true },
        compliance: { included: true },
        onboarding: { included: true },
        support: { included: true, detail: "Priority support" },
        guarantee: { included: true },
      },
    },
    {
      name: "Starter",
      subtitle: "Great for testing on steady traffic",
      monthlyPrice: 295,
      annualPrice: 3000,
      description: "250 detected contacts/month",
      cta: "Get Started",
      highlighted: false,
      features: {
        leadDetection: { included: true, detail: "250 detected contacts/month" },
        coverage: { included: true, detail: "Up to ~25% of traffic" },
        delivery: { included: true, detail: "Google Sheet" },
        emailReady: { included: true },
        crmSync: { included: false },
        alerts: { included: false },
        retargetingPrep: { included: false },
        compliance: { included: true },
        onboarding: { included: true },
        support: { included: true, detail: "Email support" },
        guarantee: { included: true },
      },
    },
    {
      name: "Freemium",
      subtitle: "Try Alli on your traffic",
      monthlyPrice: 0,
      annualPrice: 0,
      description: "50 detected contacts total",
      cta: "Start Free Trial",
      highlighted: false,
      features: {
        leadDetection: { included: true, detail: "50 detected contacts total" },
        coverage: { included: true, detail: "Limited sample" },
        delivery: { included: true, detail: "Google Sheet" },
        emailReady: { included: true },
        crmSync: { included: false },
        alerts: { included: false },
        retargetingPrep: { included: false },
        compliance: { included: true },
        onboarding: { included: false },
        support: { included: true, detail: "Email support" },
        guarantee: { included: false },
      },
    },
  ];

  const allFeatures = [
    { key: "delivery", label: "Data delivery" },
    { key: "emailReady", label: "Email-ready contacts (TCPA-safe)" },
    { key: "crmSync", label: "CRM sync" },
    { key: "alerts", label: "Alerts & summaries" },
    { key: "retargetingPrep", label: "Retargeting-ready audiences" },
    { key: "compliance", label: "Compliance guidance" },
    { key: "onboarding", label: "White-Glove Onboarding" },
    { key: "support", label: "Support" },
    { key: "guarantee", label: "Money-Back Guarantee" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-32 pb-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            AI Lead Detection Pricing
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Transparent plans for turning anonymous visitors into compliant, email-ready leads. Retargeting and voice stay as upsells after you see value.
          </p>
          
          {/* Annual/Monthly Toggle */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className={`text-sm ${!isAnnual ? "font-semibold" : "text-muted-foreground"}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-16 h-8 rounded-full bg-primary transition-colors"
            >
              <div
                className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white transition-transform ${
                  isAnnual ? "translate-x-8" : ""
                }`}
              />
            </button>
            <span className={`text-sm ${isAnnual ? "font-semibold" : "text-muted-foreground"}`}>
              Annual
            </span>
            {isAnnual && (
              <Badge variant="secondary" className="ml-2">Save up to 15%</Badge>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {tiers.map((tier) => {
            const displayPrice = isAnnual ? Math.round(tier.annualPrice / 12) : tier.monthlyPrice;
            
            return (
              <Card
                key={tier.name}
                className={`relative ${
                  tier.highlighted
                    ? "border-primary shadow-[0_0_40px_hsl(var(--primary)/0.3)] scale-105 z-10 bg-gradient-to-br from-primary/10 via-card to-accent/10"
                    : "border-border hover:border-primary/50 hover:shadow-lg"
                } transition-all duration-300`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-4 py-1 shadow-lg">
                      Recommended
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl mb-2">{tier.name}</CardTitle>
                  <CardDescription className="text-sm mb-4">{tier.subtitle}</CardDescription>
                  <div className="mb-2">
                    {tier.monthlyPrice === 0 ? (
                      <span className="text-4xl font-bold">Free</span>
                    ) : (
                      <>
                        <span className="text-4xl font-bold">
                          ${displayPrice}
                        </span>
                        <span className="text-muted-foreground">/mo</span>
                      </>
                    )}
                  </div>
                  {isAnnual && tier.annualPrice > 0 && (
                    <p className="text-xs text-muted-foreground">
                      Billed annually at ${tier.annualPrice}
                    </p>
                  )}
                  <p className="text-sm text-muted-foreground mt-2">{tier.description}</p>
                </CardHeader>

                <CardContent className="space-y-3">
                  {Object.entries(tier.features)
                    .filter(([key]) => key !== 'leadDetection' && key !== 'coverage')
                    .slice(0, 6)
                    .map(([key, feature]) => (
                      feature.included && (
                        <div key={key} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-foreground">
                            {allFeatures.find(f => f.key === key)?.label}
                            {feature.detail && (
                              <span className="text-foreground"> - {feature.detail}</span>
                            )}
                          </span>
                        </div>
                      )
                    ))}
                </CardContent>

                <CardFooter className="pt-4">
                  <Button
                    className={`w-full ${
                      tier.highlighted 
                        ? "bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/50" 
                        : ""
                    }`}
                    variant={tier.highlighted ? "default" : "outline"}
                    onClick={() => {
                      if (tier.name === "Freemium") {
                        setShowFreemiumModal(true);
                      } else {
                        const priceId = isAnnual 
                          ? tierPriceIds[tier.name as keyof typeof tierPriceIds].annual
                          : tierPriceIds[tier.name as keyof typeof tierPriceIds].monthly;
                        handleCheckout(priceId, tier.name);
                      }
                    }}
                  >
                    {tier.cta}
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* What happens next */}
        <div className="relative mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-6 relative">
            {/* Arrow connectors for desktop */}
            <div className="hidden md:block absolute top-1/2 left-1/3 w-1/6 -translate-y-1/2 -translate-x-1/2 z-0">
              <ArrowRight className="w-full h-12 text-primary/40" strokeWidth={1.5} />
            </div>
            <div className="hidden md:block absolute top-1/2 left-2/3 w-1/6 -translate-y-1/2 -translate-x-1/2 z-0">
              <ArrowRight className="w-full h-12 text-primary/40" strokeWidth={1.5} />
            </div>

            <Card className="border-border bg-card/70 hover:border-primary/50 transition-all duration-300 relative z-10">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mb-4 text-primary-foreground font-bold text-xl">
                  1
                </div>
                <CardTitle>Pick your plan</CardTitle>
                <CardDescription>Freemium works to test detection on your own traffic.</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                We generate your tracking snippet and share quick install instructions.
              </CardContent>
            </Card>

            <Card className="border-border bg-card/70 hover:border-primary/50 transition-all duration-300 relative z-10">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mb-4 text-primary-foreground font-bold text-xl">
                  2
                </div>
                <CardTitle>Install & watch leads roll in</CardTitle>
                <CardDescription>Detection begins within hours on live traffic.</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Alli emails you compliant, email-ready contacts. Phone numbers are match-back only — no texting or calling anonymized visitors.
              </CardContent>
            </Card>

            <Card className="border-border bg-card/70 hover:border-primary/50 transition-all duration-300 relative z-10">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mb-4 text-primary-foreground font-bold text-xl">
                  3
                </div>
                <CardTitle>Activate with email or retargeting</CardTitle>
                <CardDescription>Stay compliant and convert more of your spend.</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Sync to your CRM or export CSV. In-app prompts unlock retargeting and voice upsells once you see detection value.
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Compare Plans Section */}
        <div className="text-center py-8 mb-12">
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" variant="outline" className="gap-2">
                <Info className="w-5 h-5" />
                Need help choosing? Compare all features
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Feature Comparison</DialogTitle>
                <DialogDescription>
                  Compare all features across our pricing tiers
                </DialogDescription>
              </DialogHeader>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 font-semibold">Feature</th>
                      {tiers.map((tier) => (
                        <th key={tier.name} className="p-3 font-semibold text-center">
                          {tier.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {allFeatures.map((feature) => (
                      <tr key={feature.key} className="border-b hover:bg-muted/50">
                        <td className="p-3 text-sm">{feature.label}</td>
                        {tiers.map((tier) => {
                          const tierFeature = tier.features[feature.key];
                          return (
                            <td key={tier.name} className="p-3 text-center">
                              {tierFeature?.included ? (
                                <div className="flex flex-col items-center gap-1">
                                  <Check className="w-5 h-5 text-primary" />
                                  {tierFeature.detail && (
                                    <span className="text-xs text-muted-foreground">
                                      {tierFeature.detail}
                                    </span>
                                  )}
                                </div>
                              ) : (
                                <X className="w-5 h-5 text-muted-foreground mx-auto" />
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Trust Section */}
        <div className="text-center py-12 border-t border-border">
          <h2 className="text-2xl font-bold mb-4">Every Plan Includes</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div>
              <h3 className="font-semibold mb-2">White-Glove Onboarding</h3>
              <p className="text-sm text-muted-foreground">
                Personalized setup and training for your team
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Priority Support</h3>
              <p className="text-sm text-muted-foreground">
                In-app support with quick response times
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="py-16 border-t border-border">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Is Alli TCPA-compliant?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Yes. TCPA forbids calling or texting anonymous visitors. Alli keeps you compliant with email-first outreach and provides phone numbers for match-back only. You can use detected contacts for verified email campaigns and retargeting audiences, but never for cold calling or texting anonymized visitors.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">What makes Alli different from other visitor identification tools?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Alli focuses on email-ready, compliant contact enrichment. We don't just give you company names or IP addresses—we provide verified individual contacts with business emails so you can actually follow up. Plus, our compliance guidance keeps you safe while you scale.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">How quickly will I see results?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Most customers start seeing detected leads within hours of installing the tracking snippet. Your first batch of email-ready contacts typically arrives within 24-48 hours, depending on your traffic volume.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">What if I don't see ROI in 30 days?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We offer a money-back guarantee on paid plans. If Alli hasn't paid for itself in detected leads within 30 days, we'll refund your first month—no questions asked.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">What kind of traffic works best with Alli?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Alli performs best with steady organic SEO traffic, paid search campaigns, and social media traffic. Service businesses with 500+ monthly visitors see the most value. B2B and high-ticket service providers typically see higher identification rates than pure ecommerce.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Can I upgrade or downgrade my plan?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Yes, absolutely. You can upgrade or downgrade at any time. Upgrades take effect immediately, and downgrades will apply at your next billing cycle. Your detected contacts quota will adjust accordingly.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">How does the Freemium plan work?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The Freemium plan gives you 50 detected contacts total—not per month. This is perfect for testing Alli's detection accuracy on your actual traffic before committing to a paid plan. Once you hit 50 detections, you'll need to upgrade to continue receiving new leads.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">What's included with CRM sync?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  CRM sync (available on Growth and Pro plans) automatically pushes your detected leads into your CRM as new contacts or enriches existing records. We support major CRMs including HubSpot, Salesforce, Pipedrive, and more. Setup takes just a few minutes with our guided integration flow.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">How do retargeting-ready audiences work?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Retargeting-ready audiences (Growth and Pro plans) let you build custom audiences from your detected leads for Facebook, Google, and LinkedIn ads. Alli formats your contact lists for easy upload to ad platforms, helping you stay top-of-mind with warm prospects who've already visited your site.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">What types of businesses benefit most from Alli?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Service businesses with longer sales cycles see the biggest impact—think consultants, agencies, home services, legal firms, financial advisors, and B2B SaaS. Any business where leads research before buying and where identifying early-stage prospects provides a competitive advantage will see strong ROI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      
      <FreemiumModal 
        open={showFreemiumModal} 
        onOpenChange={setShowFreemiumModal}
      />
    </div>
  );
};

export default Pricing;
