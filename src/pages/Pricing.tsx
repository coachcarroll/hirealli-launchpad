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
import { FreemiumModal } from "@/components/FreemiumModal";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [socialPosts, setSocialPosts] = useState(0); // 0=off, 1=1/wk, 2=5/wk industry, 3=5/wk custom, 4=5/wk + scout
  const [adsLevel, setAdsLevel] = useState(0); // 0=off, 1=standard, 2=deluxe, 3=premium
  const [voiceLevel, setVoiceLevel] = useState(0); // 0=off, 1=600 calls, 2=1600 calls, 3=3000 calls
  const [leadLevel, setLeadLevel] = useState(0); // 0=freemium (10 free leads), 1=250 leads, 2=250+alerts, 3=2500+CRM
  const [showFreemiumModal, setShowFreemiumModal] = useState(false);

  // Updated pricing to match carroll.media
  const socialPostsPrices = [0, 150, 200, 400, 600]; // Off, 1/wk, 5/wk industry, 5/wk custom, 5/wk + scout
  const adsPrices = [0, 397, 797, 1497]; // Off, Standard (2D), Deluxe (2D+Video), Premium (Full Stack)
  const voicePrices = [0, 197, 500, 1000]; // Off, Base (197), Mid, Premium
  const leadPrices = [0, 97, 297, 497]; // Freemium (10 free leads), Starter (97), Pro (297), Enterprise (497)

  // Bundle logic: Full Stack ads includes free AI Voice (base) + AI Lead Detection (starter)
  const isPremiumBundle = adsLevel === 3;
  
  // Freemium logic: Only AI Lead Detection at freemium level (0), everything else off
  const isFreemiumOnly = leadLevel === 0 && adsLevel === 0 && voiceLevel === 0 && socialPosts === 0;
  
  const calculateTotal = () => {
    let voiceCost = voicePrices[voiceLevel];
    let leadCost = leadPrices[leadLevel];
    
    // If Premium bundle selected, first tier of Voice and Lead Detection is FREE
    if (isPremiumBundle) {
      if (voiceLevel === 1) voiceCost = 0;
      if (leadLevel === 1) leadCost = 0;
    }
    
    // Freemium is always free
    if (leadLevel === 0) leadCost = 0;
    
    const monthly = socialPostsPrices[socialPosts] + adsPrices[adsLevel] + voiceCost + leadCost;
    return isAnnual ? Math.round(monthly * 12 * 0.83) : monthly;
  };

  const getMonthlyPrice = () => {
    let voiceCost = voicePrices[voiceLevel];
    let leadCost = leadPrices[leadLevel];
    
    // If Premium bundle selected, first tier of Voice and Lead Detection is FREE
    if (isPremiumBundle) {
      if (voiceLevel === 1) voiceCost = 0;
      if (leadLevel === 1) leadCost = 0;
    }
    
    // Freemium is always free
    if (leadLevel === 0) leadCost = 0;
    
    return socialPostsPrices[socialPosts] + adsPrices[adsLevel] + voiceCost + leadCost;
  };

  const getBundleSavings = () => {
    if (!isPremiumBundle) return 0;
    let savings = 0;
    if (voiceLevel === 1) savings += voicePrices[1];
    if (leadLevel === 1) savings += leadPrices[1];
    return savings;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Freemium Badge at Top */}
          {isFreemiumOnly && (
            <div className="mb-8 p-6 bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/30 rounded-lg text-center">
              <p className="font-bold text-xl text-primary mb-2">Freemium Trial Unlocked! 🎉</p>
              <p className="text-muted-foreground">
                Get started with 10 free leads per month - no credit card required. See who&apos;s on your website and turn anonymous visitors into real opportunities.
              </p>
            </div>
          )}

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Choose Your Alli Plan
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              White-glove onboarding, priority support, cancel anytime.{isAnnual && " 30-day money-back guarantee."}
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
              {/* Lead Detection */}
              <Card>
                <CardHeader>
                  <CardTitle>Lead Detection</CardTitle>
                  <CardDescription>Collect more leads from the website traffic you are already getting.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <div className="mb-4">
                      <Label>Leads identified per month</Label>
                    </div>
                    <Slider
                      value={[leadLevel]}
                      onValueChange={(value) => setLeadLevel(value[0])}
                      max={3}
                      step={1}
                      className="mb-2"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Freemium</span>
                      <span>Starter</span>
                      <span>Growth</span>
                      <span>Pro</span>
                    </div>
                  </div>

                  {leadLevel >= 0 && (
                    <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm font-medium mb-2">Includes:</p>
                      <ul className="grid gap-2 text-sm text-muted-foreground">
                        {leadLevel === 0 && (
                          <>
                            <li className="flex items-center gap-2">
                              <Check className="w-4 h-4 text-primary" />
                              <span>10 Free Leads per Month</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="w-4 h-4 text-primary" />
                              <span>See Who&apos;s On Your Website</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="w-4 h-4 text-primary" />
                              <span>Basic Lead Tracker</span>
                            </li>
                          </>
                        )}
                        {leadLevel >= 1 && (
                          <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-primary" />
                            <span>Instant Lead Tracker</span>
                          </li>
                        )}
                        {leadLevel >= 2 && (
                          <>
                            <li className="flex items-center gap-2">
                              <Check className="w-4 h-4 text-primary" />
                              <span>Email/Text Notifications</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="w-4 h-4 text-primary" />
                              <span>Bootcamp & Guide</span>
                            </li>
                          </>
                        )}
                        {leadLevel >= 3 && (
                          <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-primary" />
                            <span>CRM Sync</span>
                          </li>
                        )}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* AI Voice */}
              <Card>
                <CardHeader>
                  <CardTitle>Receptionist</CardTitle>
                  <CardDescription>Answer, qualify, and route—24/7</CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <div className="mb-4">
                      <Label>Monthly call volume</Label>
                    </div>
                    <Slider
                      value={[voiceLevel]}
                      onValueChange={(value) => setVoiceLevel(value[0])}
                      max={3}
                      step={1}
                      className="mb-2"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Off</span>
                      <span>Starter</span>
                      <span>Growth</span>
                      <span>Pro</span>
                    </div>
                  </div>

                  {voiceLevel > 0 && (
                    <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm font-medium mb-2">Includes:</p>
                      <ul className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-primary" />
                          <span>24/7 inbound</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-primary" />
                          <span>Business FAQs</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-primary" />
                          <span>Call summaries</span>
                        </li>
                        {voiceLevel >= 2 && (
                          <>
                            <li className="flex items-center gap-2">
                              <Check className="w-4 h-4 text-primary" />
                              <span>Call recording</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="w-4 h-4 text-primary" />
                              <span>Smart qualification</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="w-4 h-4 text-primary" />
                              <span>Spam detection</span>
                            </li>
                          </>
                        )}
                        {voiceLevel >= 3 && (
                          <>
                            <li className="flex items-center gap-2">
                              <Check className="w-4 h-4 text-primary" />
                              <span>Custom routing</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="w-4 h-4 text-primary" />
                              <span>Appointment setting</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="w-4 h-4 text-primary" />
                              <span>CRM integration</span>
                            </li>
                          </>
                        )}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card>
                <CardHeader>
                  <CardTitle>Social Media</CardTitle>
                  <CardDescription>Never worry about managing your social media again.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="mb-4">
                      <Label>Posts per week</Label>
                    </div>
                    <Slider
                      value={[socialPosts]}
                      onValueChange={(value) => setSocialPosts(value[0])}
                      max={4}
                      step={1}
                      className="mb-2"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Off</span>
                      <span>1/week</span>
                      <span>5/week</span>
                      <span>5/wk Custom</span>
                      <span>5 + Scout</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <Label>Ad creative level</Label>
                    </div>
                    <Slider
                      value={[adsLevel]}
                      onValueChange={(value) => setAdsLevel(value[0])}
                      max={3}
                      step={1}
                      className="mb-2"
                    />
                     <div className="flex justify-between text-sm text-muted-foreground">
                      <span>None</span>
                      <span>Standard</span>
                      <span>Deluxe</span>
                      <span>Premium</span>
                    </div>
                  </div>

                  {/* Premium Bundle Badge */}
                  {isPremiumBundle && (
                    <div className="p-4 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-lg">
                      <p className="font-semibold text-primary mb-2">🎁 Premium Bundle Unlocked!</p>
                      <p className="text-sm text-muted-foreground">
                        Get AI Voice (Base) + AI Lead Detection (Starter) FREE
                        {isAnnual && " + One-time Brand Scout Visit"}
                      </p>
                      <p className="text-xs text-primary mt-2">
                        Up to ${voicePrices[1] + leadPrices[1]}/mo value included
                      </p>
                    </div>
                  )}

                  {(socialPosts > 0 || adsLevel > 0) && (
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm font-medium mb-2">Includes:</p>
                      <ul className="grid gap-2 text-sm text-muted-foreground">
                        {socialPosts > 0 && (
                          <>
                            <li className="flex items-center gap-2">
                              <Check className="w-4 h-4 text-primary" />
                              <span>{socialPosts === 1 ? '1 post per week' : '5 posts per week'}</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="w-4 h-4 text-primary" />
                              <span>{socialPosts >= 3 ? 'Custom branded content' : 'Industry content'}</span>
                            </li>
                            {socialPosts === 4 && (
                              <li className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-primary" />
                                <span>Brand Scout for on-site content capture</span>
                              </li>
                            )}
                          </>
                        )}
                        {adsLevel >= 1 && (
                          <>
                            <li className="flex items-center gap-2">
                              <Check className="w-4 h-4 text-primary" />
                              <span>3 Branded 2D Ads (per quarter)</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="w-4 h-4 text-primary" />
                              <span>${adsLevel === 1 ? 100 : adsLevel === 2 ? 400 : 500} monthly ad spend</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="w-4 h-4 text-primary" />
                              <span>Social Media Bootcamp & Guide</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="w-4 h-4 text-primary" />
                              <span>Analytics Dashboard</span>
                            </li>
                          </>
                        )}
                        {adsLevel >= 2 && (
                          <>
                            <li className="flex items-center gap-2">
                              <Check className="w-4 h-4 text-primary" />
                              <span>2 Branded Video Ads (per quarter)</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="w-4 h-4 text-primary" />
                              <span>Facebook & Instagram Story Ads</span>
                            </li>
                          </>
                        )}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Summary Card */}
            <div className="lg:col-span-1 lg:row-start-1">
              <Card className="sticky top-4 md:top-24 border-primary/20 z-10">
                <CardHeader>
                  <CardTitle>Your Plan Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Stacked Products */}
                  {leadLevel > 0 && (
                    <div className="flex justify-between text-sm">
                      <span>Lead Detection ({leadLevel === 1 ? 'Starter' : leadLevel === 2 ? 'Growth' : 'Pro'})</span>
                      <span className={`font-semibold ${isPremiumBundle && leadLevel === 1 ? 'line-through text-muted-foreground' : ''}`}>
                        ${isPremiumBundle && leadLevel === 1 ? '0' : leadPrices[leadLevel]}/mo
                      </span>
                    </div>
                  )}
                  {voiceLevel > 0 && (
                    <div className="flex justify-between text-sm">
                      <span>Receptionist ({voiceLevel === 1 ? 'Starter' : voiceLevel === 2 ? 'Growth' : 'Pro'})</span>
                      <span className={`font-semibold ${isPremiumBundle && voiceLevel === 1 ? 'line-through text-muted-foreground' : ''}`}>
                        ${isPremiumBundle && voiceLevel === 1 ? '0' : voicePrices[voiceLevel]}/mo
                      </span>
                    </div>
                  )}
                  {socialPosts > 0 && (
                    <div className="flex justify-between text-sm">
                      <span>Social Posts ({socialPosts === 1 ? '1/week' : socialPosts === 2 ? '5/week Industry' : socialPosts === 3 ? '5/week Custom' : '5/week + Scout'})</span>
                      <span className="font-semibold">${socialPostsPrices[socialPosts]}/mo</span>
                    </div>
                  )}
                  {adsLevel > 0 && (
                    <div className="flex justify-between text-sm">
                      <span>Ad Creative ({adsLevel === 1 ? 'Standard' : adsLevel === 2 ? 'Deluxe' : 'Premium'})</span>
                      <span className="font-semibold">${adsPrices[adsLevel]}/mo</span>
                    </div>
                  )}
                  
                  {/* Show bundle savings */}
                  {isPremiumBundle && getBundleSavings() > 0 && (
                    <div className="flex justify-between text-sm text-primary">
                      <span>Bundle Savings</span>
                      <span className="font-semibold">-${getBundleSavings()}/mo</span>
                    </div>
                  )}
                  
                  {/* Monthly Total */}
                  <div className="pt-4 border-t border-border">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold">Monthly Total</span>
                      <span className="text-3xl font-bold">
                        ${isAnnual ? Math.round(calculateTotal() / 12).toLocaleString() : getMonthlyPrice().toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <div className="text-sm text-muted-foreground mb-4">
                      {isAnnual ? "per month, billed annually" : "per month"}
                    </div>
                    <Button 
                      className="w-full" 
                      size="lg"
      onClick={async () => {
        if (isFreemiumOnly) {
          setShowFreemiumModal(true);
        } else {
          try {
            const monthlyAmount = getMonthlyPrice();
            
            if (monthlyAmount === 0) {
              toast.error("Please select at least one service");
              return;
            }

            const { data, error } = await supabase.functions.invoke('create-checkout', {
              body: { 
                monthlyAmount,
                isAnnual 
              }
            });

            if (error) throw error;
            
            if (data?.url) {
              window.open(data.url, '_blank');
            }
          } catch (error) {
            console.error('Checkout error:', error);
            toast.error("Failed to create checkout session");
          }
        }
      }}
                    >
                      {isFreemiumOnly ? "Start Free Trial" : "Get Started"}
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
      <FreemiumModal open={showFreemiumModal} onOpenChange={setShowFreemiumModal} />
    </div>
  );
};

export default Pricing;
