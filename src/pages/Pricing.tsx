import { useState } from "react";
import { Check } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import ProofChip from "@/components/ProofChip";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [organicPosts, setOrganicPosts] = useState(0); // 0=off, 1=industry, 2=custom
  const [adsLevel, setAdsLevel] = useState(0); // 0=off, 1=standard, 2=deluxe, 3=premium
  const [voiceLevel, setVoiceLevel] = useState(0); // 0=off, 1=600 calls, 2=1600 calls, 3=3000 calls
  const [leadLevel, setLeadLevel] = useState(0); // 0=off, 1=250 leads, 2=250+alerts, 3=2500+CRM

  // Pricing from Sheet 2
  const organicPrices = [0, 200, 400]; // Off, Industry content, Custom content
  const adsPrices = [0, 397, 897, 1497]; // Off, Standard, Deluxe, Premium
  const voicePrices = [0, 200, 500, 1000]; // Off, 600 calls, 1600 calls, 3000 calls
  const leadPrices = [0, 100, 250, 500]; // Off, 250 leads, 250+alerts, 2500+CRM

  const organicLabels = ["Off", "Industry (5/wk)", "Custom (5/wk)"];
  const adsLabels = ["Off", "Standard", "Deluxe", "Premium"];
  const voiceLabels = ["Off", "600 calls", "1,600 calls", "3,000 calls"];
  const leadLabels = ["Off", "250 leads", "250 + alerts", "2,500 + CRM"];

  const getMonthlyPrice = () => {
    return organicPrices[organicPosts] + adsPrices[adsLevel] + voicePrices[voiceLevel] + leadPrices[leadLevel];
  };

  const calculateAnnualPrice = () => {
    const monthly = getMonthlyPrice();
    return Math.round(monthly * 12 * 0.83); // 17% discount
  };

  const getAdsFeatures = () => {
    if (adsLevel === 0) return [];
    const features = [];
    if (adsLevel >= 1) {
      features.push("3 Branded 2D Ads (per quarter)");
      features.push(`$${adsLevel === 1 ? 100 : adsLevel === 2 ? 400 : 500} monthly ad spend`);
      features.push("Social Media Bootcamp & Guide");
      features.push("Analytics Dashboard");
    }
    if (adsLevel >= 2) {
      features.push("2 Branded Video Ads (per quarter)");
      features.push("Facebook & Instagram Story Ads");
    }
    return features;
  };

  const getVoiceFeatures = () => {
    if (voiceLevel === 0) return [];
    const features = [
      "24/7 Inbound Support",
      "Business Information FAQs",
      "After Call Summary",
    ];
    if (voiceLevel >= 2) {
      features.push("Call Recording");
      features.push("Smart Lead Qualification");
      features.push("Spam Detection");
    }
    if (voiceLevel >= 3) {
      features.push("Customized Knowledge Base");
      features.push("Outbound Voice & Text");
      features.push("Appointment Setting");
      features.push("CRM Integration");
    }
    return features;
  };

  const getLeadFeatures = () => {
    if (leadLevel === 0) return [];
    const features = ["Instant Lead Tracker Update"];
    if (leadLevel >= 2) {
      features.push("Instant Notification (Email/Text)");
      features.push("AI Lead Detect Bootcamp & Guide");
    }
    if (leadLevel >= 3) {
      features.push("CRM Sync");
    }
    return features;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Choose Your Alli Plan
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              White-glove onboarding, priority support, cancel anytime. 30-day money-back guarantee on annual subscriptions.
            </p>

            {/* Annual Toggle */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <Label htmlFor="annual-toggle" className={!isAnnual ? "font-semibold" : ""}>Monthly</Label>
              <Switch
                id="annual-toggle"
                checked={isAnnual}
                onCheckedChange={setIsAnnual}
              />
              <Label htmlFor="annual-toggle" className={isAnnual ? "font-semibold" : ""}>
                Annual (Save 17%)
              </Label>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Configuration Panel */}
            <div className="lg:col-span-2 space-y-6">
              {/* Organic Content */}
              <Card>
                <CardHeader>
                  <CardTitle>Organic Social Media Posts</CardTitle>
                  <CardDescription>Consistent organic content to keep your brand visible</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <Label>Content level</Label>
                      {organicPosts > 0 && <ProofChip metric="+62%" label="profile visits" variant="success" />}
                    </div>
                    <Slider
                      value={[organicPosts]}
                      onValueChange={(value) => setOrganicPosts(value[0])}
                      max={2}
                      step={1}
                      className="mb-2"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      {organicLabels.map((label) => (
                        <span key={label}>{label}</span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Paid Ads */}
              <Card>
                <CardHeader>
                  <CardTitle>AI Ads (Social Media Advertising)</CardTitle>
                  <CardDescription>Branded ad creative and media buying</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <Label>Ad package level</Label>
                    </div>
                    <Slider
                      value={[adsLevel]}
                      onValueChange={(value) => setAdsLevel(value[0])}
                      max={3}
                      step={1}
                      className="mb-2"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      {adsLabels.map((label) => (
                        <span key={label}>{label}</span>
                      ))}
                    </div>
                  </div>

                  {adsLevel > 0 && (
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm font-medium mb-2">Includes:</p>
                      <ul className="grid gap-2 text-sm text-muted-foreground">
                        {getAdsFeatures().map((feature) => (
                          <li key={feature} className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* AI Voice */}
              <Card>
                <CardHeader>
                  <CardTitle>AI Voice (Receptionist)</CardTitle>
                  <CardDescription>24/7 answering and qualification</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <Label>Monthly call volume</Label>
                      {voiceLevel > 0 && <ProofChip metric="+46%" label="answer rate" variant="success" />}
                    </div>
                    <Slider
                      value={[voiceLevel]}
                      onValueChange={(value) => setVoiceLevel(value[0])}
                      max={3}
                      step={1}
                      className="mb-2"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      {voiceLabels.map((label) => (
                        <span key={label}>{label}</span>
                      ))}
                    </div>
                  </div>

                  {voiceLevel > 0 && (
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm font-medium mb-2">Includes:</p>
                      <ul className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                        {getVoiceFeatures().map((feature) => (
                          <li key={feature} className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Lead Detection */}
              <Card>
                <CardHeader>
                  <CardTitle>AI Lead Detection</CardTitle>
                  <CardDescription>Identify anonymous visitors and turn them into pipeline</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <Label>Monthly leads identified</Label>
                      {leadLevel > 0 && <ProofChip metric="7" label="booked calls per 250 IDs" />}
                    </div>
                    <Slider
                      value={[leadLevel]}
                      onValueChange={(value) => setLeadLevel(value[0])}
                      max={3}
                      step={1}
                      className="mb-2"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      {leadLabels.map((label) => (
                        <span key={label}>{label}</span>
                      ))}
                    </div>
                  </div>

                  {leadLevel > 0 && (
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm font-medium mb-2">Includes:</p>
                      <ul className="grid gap-2 text-sm text-muted-foreground">
                        {getLeadFeatures().map((feature) => (
                          <li key={feature} className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Summary Card */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24 border-primary/20">
                <CardHeader>
                  <CardTitle>Your Plan Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {organicPosts > 0 && (
                    <div className="flex justify-between text-sm">
                      <span>Organic Posts</span>
                      <span className="font-semibold">${organicPrices[organicPosts]}/mo</span>
                    </div>
                  )}
                  {adsLevel > 0 && (
                    <div className="flex justify-between text-sm">
                      <span>AI Ads</span>
                      <span className="font-semibold">${adsPrices[adsLevel]}/mo</span>
                    </div>
                  )}
                  {voiceLevel > 0 && (
                    <div className="flex justify-between text-sm">
                      <span>AI Voice</span>
                      <span className="font-semibold">${voicePrices[voiceLevel]}/mo</span>
                    </div>
                  )}
                  {leadLevel > 0 && (
                    <div className="flex justify-between text-sm">
                      <span>Lead Detection</span>
                      <span className="font-semibold">${leadPrices[leadLevel]}/mo</span>
                    </div>
                  )}
                  
                  <div className="pt-4 border-t border-border">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Monthly</span>
                      <span className="font-semibold">${getMonthlyPrice()}/mo</span>
                    </div>
                    {isAnnual && (
                      <>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm text-muted-foreground">Annual (17% off)</span>
                          <span className="font-semibold text-primary">${calculateAnnualPrice().toLocaleString()}/yr</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-primary">You save</span>
                          <span className="font-semibold text-primary">${(getMonthlyPrice() * 12 - calculateAnnualPrice()).toLocaleString()}/yr</span>
                        </div>
                      </>
                    )}
                  </div>

                  <div className="pt-4">
                    <div className="text-3xl font-bold mb-1">
                      ${isAnnual ? calculateAnnualPrice().toLocaleString() : getMonthlyPrice()}
                    </div>
                    <div className="text-sm text-muted-foreground mb-4">
                      {isAnnual ? "per year" : "per month"}
                    </div>
                    <Button className="w-full" size="lg">
                      Get Started
                    </Button>
                    <p className="text-xs text-center text-muted-foreground mt-3">
                      30-day money-back guarantee
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Custom Package CTA */}
          <div className="mt-16">
            <Card className="bg-muted/30 border-primary/20">
              <CardContent className="p-8 md:p-12 text-center">
                <h2 className="text-3xl font-bold mb-4">Need a Custom Package?</h2>
                <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Looking for unlimited leads, custom integrations, or enterprise features? Let's build a plan that fits your needs.
                </p>
                <Button size="lg" variant="outline" className="text-lg">
                  Call for Pricing
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Guarantee Section */}
          <div className="mt-12 text-center max-w-3xl mx-auto">
            <div className="p-8 rounded-2xl bg-secondary/10 border border-secondary/20">
              <h3 className="text-2xl font-bold mb-4">30-Day Money-Back Guarantee</h3>
              <p className="text-muted-foreground">
                Try Alli risk-free for 30 days. If you don't feel it paid for itself in new business, get a full refund. No questions asked.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
