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
  const [socialPosts, setSocialPosts] = useState(3); // 0, 1, 2, 3 (0=off, 1=1/wk, 2=5/wk, 3=5+Scout)
  const [socialAds, setSocialAds] = useState(0); // 0, 1, 2, 3 (0=none, 1=2D, 2=2D+Video, 3=Full)
  const [voiceMinutes, setVoiceMinutes] = useState(2); // 0, 1, 2, 3 (0=off, 1=600, 2=1600, 3=3000)
  const [leadDetect, setLeadDetect] = useState(0); // 0, 1, 2, 3 (0=off, 1=250, 2=250+alerts, 3=2500+CRM)

  const socialPostsPrices = [0, 297, 497, 797];
  const socialAdsPrices = [0, 200, 400, 600];
  const voicePrices = [0, 200, 500, 1000];
  const leadPrices = [0, 100, 250, 500];

  const calculateTotal = () => {
    const monthly = socialPostsPrices[socialPosts] + socialAdsPrices[socialAds] + voicePrices[voiceMinutes] + leadPrices[leadDetect];
    return isAnnual ? Math.round(monthly * 12 * 0.83) : monthly;
  };

  const getMonthlyPrice = () => {
    return socialPostsPrices[socialPosts] + socialAdsPrices[socialAds] + voicePrices[voiceMinutes] + leadPrices[leadDetect];
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Build Your <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Perfect Plan</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Choose exactly what you need. Scale as you grow.
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
                Annual <span className="text-secondary">(Save 17%)</span>
              </Label>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Configuration Panel */}
            <div className="lg:col-span-2 space-y-6">
              {/* Social Media */}
              <Card>
                <CardHeader>
                  <CardTitle>Social Media Management</CardTitle>
                  <CardDescription>Consistent content without the headache</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <Label>Posts per week</Label>
                      <ProofChip metric="+62%" label="profile visits (28 days)" variant="success" />
                    </div>
                    <Slider
                      value={[socialPosts]}
                      onValueChange={(value) => setSocialPosts(value[0])}
                      max={3}
                      step={1}
                      className="mb-2"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Off</span>
                      <span>1/week</span>
                      <span>5/week</span>
                      <span>5 + Scout</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <Label>Ad creative level</Label>
                    </div>
                    <Slider
                      value={[socialAds]}
                      onValueChange={(value) => setSocialAds(value[0])}
                      max={3}
                      step={1}
                      className="mb-2"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>None</span>
                      <span>2D</span>
                      <span>2D+Video</span>
                      <span>Full Stack</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* AI Voice */}
              <Card>
                <CardHeader>
                  <CardTitle>AI Voice (Receptionist)</CardTitle>
                  <CardDescription>24/7 answering and qualification</CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <Label>Monthly minutes</Label>
                      <ProofChip metric="+46%" label="answer rate (30 days)" variant="success" />
                    </div>
                    <Slider
                      value={[voiceMinutes]}
                      onValueChange={(value) => setVoiceMinutes(value[0])}
                      max={3}
                      step={1}
                      className="mb-2"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Off</span>
                      <span>600</span>
                      <span>1,600</span>
                      <span>3,000</span>
                    </div>
                  </div>

                  {voiceMinutes > 0 && (
                    <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm font-medium mb-2">Includes:</p>
                      <ul className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                        {["24/7 inbound", "Business FAQs", "Call summaries", "Call recording", "Smart qualification", "Spam detection", "Custom routing", "Appointment setting"].map((feature) => (
                          <li key={feature} className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-accent" />
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
                <CardContent>
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <Label>Leads identified per month</Label>
                      <ProofChip metric="7" label="booked calls per 250 IDs" />
                    </div>
                    <Slider
                      value={[leadDetect]}
                      onValueChange={(value) => setLeadDetect(value[0])}
                      max={3}
                      step={1}
                      className="mb-2"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Off</span>
                      <span>250</span>
                      <span>250+alerts</span>
                      <span>2500+CRM</span>
                    </div>
                  </div>
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
                  {socialPosts > 0 && (
                    <div className="flex justify-between text-sm">
                      <span>Social Media</span>
                      <span className="font-semibold">${socialPostsPrices[socialPosts] + socialAdsPrices[socialAds]}/mo</span>
                    </div>
                  )}
                  {voiceMinutes > 0 && (
                    <div className="flex justify-between text-sm">
                      <span>AI Voice</span>
                      <span className="font-semibold">${voicePrices[voiceMinutes]}/mo</span>
                    </div>
                  )}
                  {leadDetect > 0 && (
                    <div className="flex justify-between text-sm">
                      <span>Lead Detection</span>
                      <span className="font-semibold">${leadPrices[leadDetect]}/mo</span>
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
                          <span className="font-semibold text-secondary">${calculateTotal()}/yr</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-accent">You save</span>
                          <span className="font-semibold text-accent">${getMonthlyPrice() * 12 - calculateTotal()}/yr</span>
                        </div>
                      </>
                    )}
                  </div>

                  <div className="pt-4">
                    <div className="text-3xl font-bold mb-1">
                      ${isAnnual ? calculateTotal() : getMonthlyPrice()}
                    </div>
                    <div className="text-sm text-muted-foreground mb-4">
                      {isAnnual ? "per year" : "per month"}
                    </div>
                    <Button className="w-full bg-gradient-to-r from-primary to-primary-glow" size="lg">
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
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
