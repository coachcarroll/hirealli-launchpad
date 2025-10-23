import { Share2, Check, Camera, TrendingUp, Calendar, BarChart3, Users, Repeat, Eye, Zap } from "lucide-react";
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
              Your ideal customers scroll past hundreds of posts daily. Alli makes sure yours are among them—with consistent organic content AND strategic ads that turn scrollers into customers.
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
              <ProofChip metric="7x" label="exposures to build recognition" />
              <ProofChip metric="10x" label="higher conversion with retargeting" variant="success" />
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Social Media Problem Every Small Business Faces
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              You post regularly. You put in the work. But your business isn't growing. Here's why.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-destructive/50">
              <CardContent className="pt-6">
                <div className="text-5xl font-bold text-destructive mb-4">2-3%</div>
                <h3 className="text-xl font-bold mb-3">Organic Reach is Dead</h3>
                <p className="text-muted-foreground mb-4">
                  Only 2-3% of your followers see your organic posts. That means if you have 1,000 followers, only 20-30 people see each post you work so hard to create.
                </p>
                <p className="text-sm text-muted-foreground">
                  Facebook and Instagram prioritize paid content. Organic reach has dropped by 95% since 2012.
                </p>
              </CardContent>
            </Card>

            <Card className="border-destructive/50">
              <CardContent className="pt-6">
                <div className="text-5xl font-bold text-destructive mb-4">97%</div>
                <h3 className="text-xl font-bold mb-3">First-Time Visitors Leave</h3>
                <p className="text-muted-foreground mb-4">
                  97% of people who see your content for the first time don't convert. They scroll past, forget about you, and move on with their day.
                </p>
                <p className="text-sm text-muted-foreground">
                  Without retargeting ads to bring them back, you're losing nearly every potential customer.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Solution: Organic + Paid = Complete Visibility
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Organic content keeps current followers engaged. Paid ads introduce you to everyone else. Together, they build the visibility your business needs to grow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Organic Posts */}
            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Organic Posts</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Keep your existing followers engaged and your profile active with consistent, on-brand content.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>1-5 posts per week, never miss a beat</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Industry or custom branded content</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Professional graphics and videos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Optional Brand Scout for on-site capture</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Paid Ads */}
            <Card className="border-primary">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
                    <Zap className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold">AI Ads</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Reach thousands of people who don't know you yet—your future customers who need what you sell.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>20,000+ impressions per month</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>2D graphics + video ads</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Facebook & Instagram Story ads</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Retargeting ads to bring visitors back</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Comparison */}
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-8 text-center">The Visibility Difference</h3>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-sm font-medium text-muted-foreground mb-2">Organic Posts Only</div>
                  <div className="text-4xl font-bold text-destructive mb-2">30</div>
                  <p className="text-sm text-muted-foreground">people see your content (2-3% of 1,000 followers)</p>
                </div>
                <div>
                  <div className="text-sm font-medium text-muted-foreground mb-2">Organic + Basic Ads</div>
                  <div className="text-4xl font-bold text-primary mb-2">20,030</div>
                  <p className="text-sm text-muted-foreground">people see your brand each month</p>
                </div>
                <div>
                  <div className="text-sm font-medium text-muted-foreground mb-2">Full Suite + Retargeting</div>
                  <div className="text-4xl font-bold text-primary mb-2">150,000+</div>
                  <p className="text-sm text-muted-foreground">impressions with professional video ads</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why AI Ads Work */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why AI Ads Are Non-Negotiable for Small Businesses
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your ideal customers aren't searching for you—they don't even know you exist. Ads change that.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardContent className="pt-6">
                <Eye className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Get in Front of New Eyes</h3>
                <p className="text-muted-foreground">
                  Your perfect customers scroll right past you every day because they don't know you exist. AI Ads put you in their feed—introducing your business to people who need what you offer.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Repeat className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">The Rule of 7 Works</h3>
                <p className="text-muted-foreground">
                  It takes 7+ exposures before someone remembers your brand. Our AI ensures you hit that threshold by showing up throughout their day—morning coffee, lunch break, evening scroll.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Build Recognition Fast</h3>
                <p className="text-muted-foreground">
                  From "never heard of them" to "I see them everywhere" in 30 days. Consistent ad presence builds the credibility and familiarity that turns scrollers into customers.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Recognition Journey */}
          <Card className="bg-card border-border">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-8 text-center">The Recognition Journey</h3>
              <div className="grid md:grid-cols-7 gap-4">
                {[
                  { num: "1", label: "Never seen this" },
                  { num: "2", label: "Maybe I saw this" },
                  { num: "3", label: "Looks familiar" },
                  { num: "4", label: "I've seen them" },
                  { num: "5", label: "They're everywhere" },
                  { num: "6", label: "That company again" },
                  { num: "7", label: "I should check them out" },
                ].map((step) => (
                  <div key={step.num} className="text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                      <span className="text-lg font-bold text-primary">{step.num}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{step.label}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Retargeting Deep Dive */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Secret Weapon: Retargeting Ads
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              97% of first-time visitors leave without converting. Retargeting brings them back—automatically.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">How Retargeting Works</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Think of retargeting as your business following up with prospects automatically. Someone visits your website, checks out your services, then leaves. With retargeting ads, your business stays top-of-mind—appearing in their feed over the next days and weeks.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold mb-1">10x higher conversion rates</div>
                    <p className="text-sm text-muted-foreground">Retargeting converts 10x better than cold traffic because they already know you</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold mb-1">Recovers 97% of lost visitors</div>
                    <p className="text-sm text-muted-foreground">Brings back the people who left without buying—turning browsers into buyers</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold mb-1">Works 24/7 automatically</div>
                    <p className="text-sm text-muted-foreground">Set it once, run forever—your automated follow-up salesperson</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="text-6xl font-bold text-primary mb-2">97%</div>
                    <p className="text-muted-foreground">of visitors leave without buying</p>
                  </div>
                  <div className="border-t border-border pt-4">
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">10x</div>
                      <p className="text-sm text-muted-foreground">higher conversion with retargeting</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-4">Without Retargeting</h4>
                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div>1,000 visitors → 3% convert = 30 customers</div>
                  </div>
                  <h4 className="font-semibold mb-4 pt-4 border-t">With Retargeting</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div>1,000 visitors → 3% convert = 30 customers</div>
                    <div>970 retargeted → 5% convert = 48 customers</div>
                    <div className="font-semibold text-primary pt-2">Total: 78 customers (2.6x more revenue)</div>
                  </div>
                </CardContent>
              </Card>
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
              Four steps to consistent, on-brand content that actually gets seen
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

      {/* Pricing Tiers */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Level</h2>
            <p className="text-xl text-muted-foreground">
              Scale up or down based on your needs—combine with AI Ads for maximum impact
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
              <Link to="/pricing">Build Your Complete Plan</Link>
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Add AI Ads starting at $397/mo for 20,000+ impressions
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="p-8 md:p-12 rounded-2xl bg-primary/5 border border-primary/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stop Losing to Businesses That Show Up More
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Your competitors are posting consistently AND running ads. You're doing neither. Alli levels the playing field—without hiring a team.
            </p>
            <Button size="lg" asChild>
              <Link to="/pricing">Get Started Today</Link>
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              30-day money-back guarantee. Cancel anytime.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SocialMedia;
