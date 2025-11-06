import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, Info } from "lucide-react";
import { Link } from "react-router-dom";
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

  const tiers: Tier[] = [
    {
      name: "Pro",
      subtitle: "Maximum Scale",
      monthlyPrice: 1495,
      annualPrice: 15000,
      description: "Unlimited power for serious growth",
      cta: "Get Started",
      highlighted: false,
      features: {
        leadDetection: { included: true, detail: "2,500 leads/month" },
        receptionist: { included: true, detail: "3,000 calls/month" },
        socialMedia: { included: true, detail: "5 posts/week" },
        ads: { included: false },
        crmSync: { included: true },
        support: { included: true, detail: "Priority support" },
        onboarding: { included: true },
        guarantee: { included: true },
        aiBootcamp: { included: true },
        callRecording: { included: true },
        spamDetection: { included: true },
        customKnowledge: { included: true },
        afterCallSummary: { included: true },
        appointmentSetting: { included: true },
        automatedIntake: { included: true },
        crmIntegration: { included: true },
      },
    },
    {
      name: "Growth",
      subtitle: "Most Popular",
      monthlyPrice: 695,
      annualPrice: 7500,
      description: "Complete AI automation suite",
      cta: "Get Started",
      highlighted: true,
      features: {
        leadDetection: { included: true, detail: "250 leads/month" },
        receptionist: { included: true, detail: "1,600 calls/month" },
        socialMedia: { included: true, detail: "5 posts/week" },
        ads: { included: false },
        crmSync: { included: false },
        support: { included: true, detail: "Priority support" },
        onboarding: { included: true },
        guarantee: { included: true },
        aiBootcamp: { included: true },
        callRecording: { included: true },
        spamDetection: { included: true },
        customKnowledge: { included: true },
        afterCallSummary: { included: true },
        smartLeadQualification: { included: true },
      },
    },
    {
      name: "Starter",
      subtitle: "Essential Growth",
      monthlyPrice: 295,
      annualPrice: 3000,
      description: "Automate leads and customer support",
      cta: "Get Started",
      highlighted: false,
      features: {
        leadDetection: { included: true, detail: "250 leads/month" },
        receptionist: { included: true, detail: "600 calls/month" },
        socialMedia: { included: false },
        ads: { included: false },
        crmSync: { included: false },
        support: { included: true, detail: "Priority support" },
        onboarding: { included: true },
        guarantee: { included: true },
        afterCallSummary: { included: true },
        businessFAQs: { included: true },
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
        receptionist: { included: false },
        socialMedia: { included: false },
        ads: { included: false },
        crmSync: { included: false },
        support: { included: true, detail: "Email support" },
        onboarding: { included: false },
        guarantee: { included: false },
        instantLeadTracker: { included: true },
      },
    },
  ];

  const allFeatures = [
    { key: "leadDetection", label: "Lead Detection & Tracking" },
    { key: "instantLeadTracker", label: "Instant Lead Tracker Update" },
    { key: "aiBootcamp", label: "AI Lead Detect Bootcamp" },
    { key: "crmSync", label: "CRM Sync" },
    { key: "receptionist", label: "24/7 AI Receptionist" },
    { key: "businessFAQs", label: "Business Information FAQs" },
    { key: "afterCallSummary", label: "After Call Summary" },
    { key: "callRecording", label: "Call Recording & Analytics" },
    { key: "smartLeadQualification", label: "Smart Lead Qualification" },
    { key: "spamDetection", label: "Spam Detection" },
    { key: "customKnowledge", label: "Customized Knowledge Base" },
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
                    ? "border-primary shadow-xl scale-105 z-10"
                    : "border-border hover:border-primary/50 hover:shadow-lg"
                } transition-all duration-300`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">
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
                    className="w-full"
                    variant={tier.highlighted ? "default" : "outline"}
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
