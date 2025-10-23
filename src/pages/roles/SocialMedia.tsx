import { Share2, Check, Camera, TrendingUp, Calendar, BarChart3 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import ProofChip from "@/components/ProofChip";

const SocialMedia = () => {
  const workflow = [
    {
      step: "1",
      title: "Plan",
      description: "We analyze your business, audience, and goals to create a custom content calendar.",
    },
    {
      step: "2",
      title: "Capture",
      description: "Optional Brand Scout visits your location to capture authentic, on-brand visuals.",
    },
    {
      step: "3",
      title: "Approve",
      description: "Review and approve content before it goes live. You stay in control.",
    },
    {
      step: "4",
      title: "Publish",
      description: "We handle posting, optimization, and performance tracking—automatically.",
    },
  ];

  const features = [
    "Custom content calendar aligned with your business",
    "1-5 posts per week, on-brand and consistent",
    "Optional Brand Scout for on-site content capture",
    "2D graphics, video editing, and AI-powered ads",
    "Facebook & Instagram story ads for retargeting",
    "Performance dashboard and monthly reporting",
    "Social Media Bootcamp & training guides",
  ];

  const adsBenefits = [
    {
      title: "Get in Front of New Eyes",
      description: "Your ideal customers aren't searching for you yet—they don't even know you exist. AI Ads put you in their feed, introducing your business to people who need what you offer but haven't found you yet.",
    },
    {
      title: "The Rule of 7 Works",
      description: "It takes an average of 7 exposures before someone remembers your brand. Our AI Ads ensure you reach that recognition threshold by appearing throughout their day—morning coffee, lunch break, evening scroll.",
    },
    {
      title: "Retargeting Closes the Deal",
      description: "97% of first-time visitors leave without converting. Retargeting ads bring them back by showing your message to people who already visited your site or engaged with your content—turning browsers into buyers.",
    },
  ];

  const tiers = [
    {
      name: "Starter",
      price: "$150/mo",
      frequency: "1 post per week",
      content: "Industry content",
      features: ["Basic posting", "Standard graphics"],
    },
    {
      name: "Professional",
      price: "$200/mo",
      frequency: "5 posts per week",
      content: "Industry content",
      features: ["Consistent cadence", "Professional graphics", "Analytics dashboard"],
    },
    {
      name: "Custom",
      price: "$400/mo",
      frequency: "5 posts per week",
      content: "Custom branded",
      features: ["Everything in Professional", "Custom branded content", "Priority support"],
    },
    {
      name: "Elite + Scout",
      price: "$600/mo",
      frequency: "5 posts per week",
      content: "Custom + on-site",
      features: ["Everything in Custom", "Brand Scout on-site visits", "Video capture & editing"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-glow/5 pointer-events-none" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Share2 className="w-4 h-4" />
              Social Media Manager
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Posting Shouldn't Be a Full-Time Job
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Alli keeps your content calendar moving—planned, captured, approved, and published—so you stay visible without the daily grind.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" asChild>
                <Link to="/pricing">See Pricing</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/results">View Results</Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <ProofChip metric="+62%" label="profile visits (28 days)" variant="success" />
              <ProofChip metric="5x" label="consistent posting frequency" />
              <ProofChip metric="100%" label="on-brand content" variant="success" />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground">
              Four steps to consistent, on-brand content
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {workflow.map((item) => (
              <Card key={item.step}>
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-primary">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why AI Ads Matter */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why AI Ads Are a Game-Changer for Small Businesses
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Organic reach is dead. Only 2-3% of your followers see your posts. Ads put you in front of everyone else—the people who don't know you yet.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {adsBenefits.map((benefit) => (
              <Card key={benefit.title} className="border-primary/20">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-primary/5 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              The Power of Retargeting
            </h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-muted-foreground mb-6">
                  Think of retargeting as your business following up with prospects automatically. Someone visits your website, checks out your services, then leaves. With retargeting ads, your business stays top-of-mind—appearing in their feed over the next days and weeks.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span>10x higher conversion rates than cold traffic</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span>Brings back 97% of visitors who left without buying</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span>Works while you sleep—automated follow-up 24/7</span>
                  </li>
                </ul>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border">
                <div className="text-center mb-4">
                  <div className="text-5xl font-bold text-primary mb-2">7x</div>
                  <p className="text-sm text-muted-foreground">People need to see your brand before they remember you</p>
                </div>
                <div className="border-t border-border pt-4 mt-4">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold">97%</div>
                      <div className="text-xs text-muted-foreground">Leave without buying</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">10x</div>
                      <div className="text-xs text-muted-foreground">Higher conversion</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">24/7</div>
                      <div className="text-xs text-muted-foreground">Auto follow-up</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Organic Posts + Paid Ads = Complete Visibility
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Organic content keeps your current followers engaged. Paid ads introduce you to everyone else. Together, they build a complete social media presence that grows your business without hiring a full-time team.
              </p>
              <ul className="space-y-4">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <Calendar className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-semibold mb-2">Consistent Cadence</h4>
                  <p className="text-sm text-muted-foreground">Never miss a post with automated scheduling</p>
                </CardContent>
              </Card>
              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <Camera className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-semibold mb-2">Brand Scout</h4>
                  <p className="text-sm text-muted-foreground">On-site content capture available</p>
                </CardContent>
              </Card>
              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <TrendingUp className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-semibold mb-2">Performance Tracking</h4>
                  <p className="text-sm text-muted-foreground">Real-time analytics and insights</p>
                </CardContent>
              </Card>
              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <BarChart3 className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-semibold mb-2">Monthly Reports</h4>
                  <p className="text-sm text-muted-foreground">Clear ROI and engagement metrics</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Level</h2>
            <p className="text-xl text-muted-foreground">
              Scale up or down based on your needs
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {tiers.map((tier, index) => (
              <Card key={tier.name} className={index === 3 ? "border-primary" : ""}>
                <CardHeader>
                  <CardTitle>{tier.name}</CardTitle>
                  <CardDescription>{tier.frequency}</CardDescription>
                  <div className="text-3xl font-bold mt-4">{tier.price}</div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="text-sm font-medium text-muted-foreground mb-2">Content Type:</div>
                    <div className="text-sm font-semibold">{tier.content}</div>
                  </div>
                  <ul className="space-y-2">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button size="lg" asChild>
              <Link to="/pricing">Build Your Plan</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="p-8 md:p-12 rounded-2xl bg-primary/5 border border-primary/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stop Letting Social Media Slide
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Alli keeps your content consistent, on-brand, and performing—without adding headcount.
            </p>
            <Button size="lg" asChild>
              <Link to="/pricing">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SocialMedia;
