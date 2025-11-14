import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
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

interface SocialMediaTier {
  name: string;
  monthlyPrice: number;
  annualPrice: number;
  description: string;
  features: {
    brandedAdsPerQuarter: string;
    videoAdsPerQuarter: string;
    monthlyAdSpend: string;
    socialPostsPerWeek: string;
    organicContent: string;
    fbInstagramStoryAds: boolean;
    bootcampGuide: boolean;
    analyticsDashboard: boolean;
  };
  isCustom?: boolean;
}

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);
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

  // Price IDs for social media add-ons
  const socialMediaPriceIds = {
    STANDARD: {
      monthly: "price_1SQbstD8hbSdYbHsmWlbcbll",
      annual: "price_1STAuFD8hbSdYbHsaI3D7r6n"
    },
    DELUXE: {
      monthly: "price_1SQbt1D8hbSdYbHsJozS17O9",
      annual: "price_1STAuhD8hbSdYbHsuxmsekDE"
    },
    PREMIUM: {
      monthly: "price_1SQbtID8hbSdYbHshDaNvnEd",
      annual: "price_1STAusD8hbSdYbHsOk7tpQSl"
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

  const handleContactSales = () => {
    window.location.href = "mailto:sales@example.com?subject=Custom Social Media Package Inquiry";
  };


  const tiers: Tier[] = [
    {
      name: "Pro",
      subtitle: "PLATINUM",
      monthlyPrice: 1495,
      annualPrice: 15000,
      description: "Maximum scale for serious growth",
      cta: "Get Started",
      highlighted: false,
      features: {
        leadDetection: { included: true, detail: "2,500 leads/month" },
        instantLeadTracker: { included: true },
        instantNotification: { included: true },
        aiBootcamp: { included: true },
        crmSync: { included: true },
        receptionist: { included: true, detail: "3,000 calls/month" },
        businessFAQs: { included: true },
        afterCallSummary: { included: true },
        callRecording: { included: true },
        smartLeadQualification: { included: true },
        spamDetection: { included: true },
        customKnowledge: { included: true },
        outboundVoice: { included: false },
        outboundText: { included: false },
        appointmentSetting: { included: false },
        automatedIntake: { included: false },
        crmIntegration: { included: false },
        socialMedia: { included: false },
        ads: { included: false },
        support: { included: true, detail: "Priority support" },
        onboarding: { included: true },
        guarantee: { included: true },
      },
    },
    {
      name: "Growth",
      subtitle: "GOLD",
      monthlyPrice: 695,
      annualPrice: 7500,
      description: "Complete AI automation suite",
      cta: "Get Started",
      highlighted: true,
      features: {
        leadDetection: { included: true, detail: "250 leads/month" },
        instantLeadTracker: { included: true },
        instantNotification: { included: true },
        aiBootcamp: { included: true },
        crmSync: { included: false },
        receptionist: { included: true, detail: "1,600 calls/month" },
        businessFAQs: { included: true },
        afterCallSummary: { included: true },
        callRecording: { included: true },
        smartLeadQualification: { included: true },
        spamDetection: { included: true },
        customKnowledge: { included: false },
        outboundVoice: { included: false },
        outboundText: { included: false },
        appointmentSetting: { included: false },
        automatedIntake: { included: false },
        crmIntegration: { included: false },
        socialMedia: { included: false },
        ads: { included: false },
        support: { included: true, detail: "Priority support" },
        onboarding: { included: true },
        guarantee: { included: true },
      },
    },
    {
      name: "Starter",
      subtitle: "SILVER",
      monthlyPrice: 295,
      annualPrice: 3000,
      description: "Automate leads and customer support",
      cta: "Get Started",
      highlighted: false,
      features: {
        leadDetection: { included: true, detail: "250 leads/month" },
        instantLeadTracker: { included: true },
        instantNotification: { included: false },
        aiBootcamp: { included: false },
        crmSync: { included: false },
        receptionist: { included: true, detail: "600 calls/month" },
        businessFAQs: { included: true },
        afterCallSummary: { included: true },
        callRecording: { included: false },
        smartLeadQualification: { included: false },
        spamDetection: { included: false },
        customKnowledge: { included: false },
        outboundVoice: { included: false },
        outboundText: { included: false },
        appointmentSetting: { included: false },
        automatedIntake: { included: false },
        crmIntegration: { included: false },
        socialMedia: { included: false },
        ads: { included: false },
        support: { included: true, detail: "Priority support" },
        onboarding: { included: true },
        guarantee: { included: true },
      },
    },
    {
      name: "Freemium",
      subtitle: "Try Before You Buy",
      monthlyPrice: 0,
      annualPrice: 0,
      description: "Perfect for testing Alli's capabilities",
      cta: "Start Free Trial",
      highlighted: false,
      features: {
        leadDetection: { included: true, detail: "10 leads/month" },
        instantLeadTracker: { included: true },
        instantNotification: { included: false },
        aiBootcamp: { included: false },
        crmSync: { included: false },
        receptionist: { included: false },
        businessFAQs: { included: false },
        afterCallSummary: { included: false },
        callRecording: { included: false },
        smartLeadQualification: { included: false },
        spamDetection: { included: false },
        customKnowledge: { included: false },
        outboundVoice: { included: false },
        outboundText: { included: false },
        appointmentSetting: { included: false },
        automatedIntake: { included: false },
        crmIntegration: { included: false },
        socialMedia: { included: false },
        ads: { included: false },
        support: { included: true, detail: "Email support" },
        onboarding: { included: false },
        guarantee: { included: false },
      },
    },
  ];

  const socialMediaTiers: SocialMediaTier[] = [
    {
      name: "STANDARD",
      monthlyPrice: 397,
      annualPrice: Math.round((297 * 0.83 * 12) + (100 * 12)), // 17% discount on $297 fee only, not on $100 ad spend
      description: "Essential social media presence with AI-powered ads",
      features: {
        brandedAdsPerQuarter: "3",
        videoAdsPerQuarter: "-",
        monthlyAdSpend: "$100",
        socialPostsPerWeek: "-",
        organicContent: "-",
        fbInstagramStoryAds: false,
        bootcampGuide: true,
        analyticsDashboard: true,
      },
    },
    {
      name: "DELUXE",
      monthlyPrice: 897,
      annualPrice: Math.round((497 * 0.83 * 12) + (400 * 12)), // 17% discount on $497 fee only, not on $400 ad spend
      description: "Comprehensive social strategy with video content",
      features: {
        brandedAdsPerQuarter: "3",
        videoAdsPerQuarter: "2",
        monthlyAdSpend: "$400",
        socialPostsPerWeek: "5",
        organicContent: "Industry",
        fbInstagramStoryAds: true,
        bootcampGuide: true,
        analyticsDashboard: true,
      },
    },
    {
      name: "PREMIUM",
      monthlyPrice: 1497,
      annualPrice: Math.round((997 * 0.83 * 12) + (500 * 12)), // 17% discount on $997 fee only, not on $500 ad spend
      description: "Maximum impact with custom organic content",
      features: {
        brandedAdsPerQuarter: "3",
        videoAdsPerQuarter: "2",
        monthlyAdSpend: "$500",
        socialPostsPerWeek: "5",
        organicContent: "Custom",
        fbInstagramStoryAds: true,
        bootcampGuide: true,
        analyticsDashboard: true,
      },
    },
    {
      name: "CUSTOM PACKAGE",
      monthlyPrice: 0,
      annualPrice: 0,
      description: "Tailored solution for enterprise-level social media",
      isCustom: true,
      features: {
        brandedAdsPerQuarter: "Unlimited",
        videoAdsPerQuarter: "Unlimited",
        monthlyAdSpend: "$1000+",
        socialPostsPerWeek: "TBD",
        organicContent: "✓",
        fbInstagramStoryAds: true,
        bootcampGuide: true,
        analyticsDashboard: true,
      },
    },
  ];

  const allFeatures = [
    { key: "leadDetection", label: "Lead Detection & Tracking" },
    { key: "instantLeadTracker", label: "Instant Lead Tracker Update" },
    { key: "instantNotification", label: "Instant Notification (Email or Text)" },
    { key: "aiBootcamp", label: "AI Lead Detect Bootcamp & Guide" },
    { key: "crmSync", label: "CRM Sync" },
    { key: "receptionist", label: "24/7 AI Receptionist" },
    { key: "businessFAQs", label: "Business Information FAQs" },
    { key: "afterCallSummary", label: "After Call Summary" },
    { key: "callRecording", label: "Call Recording" },
    { key: "smartLeadQualification", label: "Smart Lead Qualification / Notification" },
    { key: "spamDetection", label: "Spam Detection" },
    { key: "customKnowledge", label: "Customized Knowledge Base / Call Routing" },
    { key: "outboundVoice", label: "Outbound Voice Calls" },
    { key: "outboundText", label: "Outbound Text Messages" },
    { key: "appointmentSetting", label: "Appointment Setting" },
    { key: "automatedIntake", label: "Automated Intake Process" },
    { key: "crmIntegration", label: "CRM Integration" },
    { key: "socialMedia", label: "Social Media Management" },
    { key: "ads", label: "AI-Powered Advertising" },
    { key: "onboarding", label: "White-Glove Onboarding" },
    { key: "support", label: "Support" },
    { key: "guarantee", label: "Money-Back Guarantee" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Every plan includes white-glove onboarding and priority support
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

          <p className="text-sm text-muted-foreground mt-2">
            Need custom pricing? <Link to="/configurator" className="text-primary hover:underline">Try our advanced configurator</Link>
          </p>
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
                  {Object.entries(tier.features).slice(0, 6).map(([key, feature]) => (
                    feature.included && (
                      <div key={key} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">
                          {allFeatures.find(f => f.key === key)?.label}
                          {feature.detail && (
                            <span className="text-muted-foreground"> - {feature.detail}</span>
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
                        toast({
                          title: "Coming Soon",
                          description: "Free trial signup will be available soon!",
                        });
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

        {/* Social Media Add-On Section */}
        <div className="py-16 border-t border-border bg-gradient-to-br from-primary/5 via-accent/5 to-background rounded-lg">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/30">
              Optional Add-On
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Enrich Your Plan with Social Media Management
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-2">
              Already have social media covered? No problem! Our core tiers focus on Lead Detection and AI Receptionist.
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Want us to handle your social media too? Add one of these packages to any tier above.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialMediaTiers.map((tier) => {
              const displayPrice = tier.isCustom 
                ? null 
                : (isAnnual ? Math.round(tier.annualPrice / 12) : tier.monthlyPrice);
              
              return (
                <Card
                  key={tier.name}
                  className="group border-border hover:border-primary/50 hover:shadow-[0_8px_30px_hsl(var(--primary)/0.15)] transition-all duration-300 bg-gradient-to-br from-card via-card to-primary/5 backdrop-blur-sm overflow-hidden relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                  <CardHeader className="text-center pb-6">
                    <Badge variant="outline" className="mb-3 mx-auto w-fit bg-gradient-to-r from-primary/20 to-accent/20 border-primary/40 text-primary font-semibold">
                      Add-On
                    </Badge>
                    <CardTitle className="text-xl mb-2">{tier.name}</CardTitle>
                    <div className="mb-2">
                      {tier.isCustom ? (
                        <span className="text-3xl font-bold">Custom</span>
                      ) : (
                        <>
                          <span className="text-3xl font-bold">
                            ${displayPrice}
                          </span>
                          <span className="text-muted-foreground">/mo</span>
                        </>
                      )}
                    </div>
                    {isAnnual && !tier.isCustom && (
                      <p className="text-xs text-muted-foreground">
                        Billed annually at ${tier.annualPrice}
                      </p>
                    )}
                    <p className="text-sm text-muted-foreground mt-2">{tier.description}</p>
                  </CardHeader>

                  <CardContent className="space-y-2 text-sm">
                    <div className="flex justify-between py-1.5 border-b border-border/50">
                      <span className="text-muted-foreground">Branded 2D Ads</span>
                      <span className="font-medium">{tier.features.brandedAdsPerQuarter}/qtr</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-border/50">
                      <span className="text-muted-foreground">Branded Video Ads</span>
                      <span className="font-medium">{tier.features.videoAdsPerQuarter}/qtr</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-border/50">
                      <span className="text-muted-foreground">Monthly Ad Spend</span>
                      <span className="font-medium">{tier.features.monthlyAdSpend}</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-border/50">
                      <span className="text-muted-foreground">Social Posts/Week</span>
                      <span className="font-medium">{tier.features.socialPostsPerWeek}</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-border/50">
                      <span className="text-muted-foreground">Organic Content</span>
                      <span className="font-medium">{tier.features.organicContent}</span>
                    </div>
                    <div className="flex items-center gap-2 py-1.5">
                      {tier.features.fbInstagramStoryAds ? (
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      ) : (
                        <X className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                      )}
                      <span className="text-muted-foreground">FB & Instagram Story Ads</span>
                    </div>
                    <div className="flex items-center gap-2 py-1.5">
                      {tier.features.bootcampGuide ? (
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      ) : (
                        <X className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                      )}
                      <span className="text-muted-foreground">Bootcamp & Guide Book</span>
                    </div>
                    <div className="flex items-center gap-2 py-1.5">
                      {tier.features.analyticsDashboard ? (
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      ) : (
                        <X className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                      )}
                      <span className="text-muted-foreground">Analytics Dashboard</span>
                    </div>
                  </CardContent>

                  <CardFooter className="pt-4">
                    <Button
                      className="w-full group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent group-hover:text-primary-foreground transition-all duration-300"
                      variant="outline"
                      onClick={() => {
                        if (tier.isCustom) {
                          handleContactSales();
                        } else {
                          const priceId = isAnnual
                            ? socialMediaPriceIds[tier.name as keyof typeof socialMediaPriceIds].annual
                            : socialMediaPriceIds[tier.name as keyof typeof socialMediaPriceIds].monthly;
                          handleCheckout(priceId, tier.name);
                        }
                      }}
                    >
                      {tier.isCustom ? "Contact Sales" : "Get Started"}
                    </Button>
                  </CardFooter>
                  </div>
                </Card>
              );
            })}
          </div>
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
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
