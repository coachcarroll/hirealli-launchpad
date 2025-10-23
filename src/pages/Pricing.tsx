import { useState } from "react";
import { Check, Search } from "lucide-react";
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
  
  const plans = [
    {
      name: "SILVER",
      monthly: 295,
      annual: 3000,
      description: "Perfect for growing businesses",
      features: {
        leadDetect: {
          price: 100,
          leads: "250",
          instantTracker: true,
          instantNotification: false,
          bootcamp: false,
          crmSync: false,
        },
        aiVoice: {
          price: 200,
          calls: "600",
          features: [
            "24/7 Inbound Support",
            "Business Information FAQs",
            "After Call Summary",
          ],
        },
      },
    },
    {
      name: "GOLD",
      monthly: 595,
      annual: 6000,
      description: "Most popular for scaling teams",
      isPopular: true,
      features: {
        leadDetect: {
          price: 250,
          leads: "250",
          instantTracker: true,
          instantNotification: true,
          bootcamp: true,
          crmSync: false,
        },
        aiVoice: {
          price: 500,
          calls: "1,600",
          features: [
            "Everything in Silver",
            "Call Recording",
            "Smart Lead Qualification",
            "Spam Detection",
          ],
        },
      },
    },
    {
      name: "PLATINUM",
      monthly: 1485,
      annual: 15000,
      description: "Enterprise-grade solution",
      features: {
        leadDetect: {
          price: 500,
          leads: "2,500",
          instantTracker: true,
          instantNotification: true,
          bootcamp: true,
          crmSync: true,
        },
        aiVoice: {
          price: 1000,
          calls: "3,000",
          features: [
            "Everything in Gold",
            "Customized Knowledge Base",
            "Outbound Voice & Text",
            "Appointment Setting",
            "Automated Intake Process",
            "CRM Integration",
          ],
        },
      },
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Choose Your <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Alli Plan</span>
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
                Annual <span className="text-accent">(Save 17%)</span>
              </Label>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan) => (
              <Card key={plan.name} className={`relative ${plan.isPopular ? 'border-primary shadow-xl' : ''}`}>
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 bg-gradient-to-r from-primary to-primary-glow text-primary-foreground text-sm font-semibold rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <div className="text-4xl font-bold mb-2">
                      ${isAnnual ? plan.annual.toLocaleString() : plan.monthly}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {isAnnual ? 'per year' : 'per month'}
                    </div>
                    {isAnnual && (
                      <div className="text-sm text-accent mt-1">
                        Save ${(plan.monthly * 12 - plan.annual).toLocaleString()}
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* AI Lead Detect Features */}
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Search className="w-4 h-4 text-primary" />
                      AI Lead Detection
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-accent" />
                        <span>{plan.features.leadDetect.leads} leads per month</span>
                      </div>
                      {plan.features.leadDetect.instantTracker && (
                        <div className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-accent" />
                          <span>Instant Lead Tracker</span>
                        </div>
                      )}
                      {plan.features.leadDetect.instantNotification && (
                        <div className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-accent" />
                          <span>Instant Notifications</span>
                        </div>
                      )}
                      {plan.features.leadDetect.bootcamp && (
                        <div className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-accent" />
                          <span>Bootcamp & Guide</span>
                        </div>
                      )}
                      {plan.features.leadDetect.crmSync && (
                        <div className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-accent" />
                          <span>CRM Sync</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* AI Voice Features */}
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary" />
                      AI Voice
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-accent" />
                        <span>{plan.features.aiVoice.calls} calls per month</span>
                      </div>
                      {plan.features.aiVoice.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-accent" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button 
                    className={`w-full ${plan.isPopular ? 'bg-gradient-to-r from-primary to-primary-glow' : ''}`}
                    variant={plan.isPopular ? 'default' : 'outline'}
                    size="lg"
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Custom Package CTA */}
          <Card className="bg-gradient-to-br from-primary/5 to-primary-glow/5 border-primary/20">
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

          {/* Guarantee Section */}
          <div className="mt-16 text-center max-w-3xl mx-auto">
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
