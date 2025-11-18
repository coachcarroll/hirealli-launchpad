import { Share2, Check, Camera, TrendingUp, Calendar, BarChart3, Users, Repeat, Eye, Zap, Star, ChevronDown, X } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import ProofChip from "@/components/ProofChip";
import adExampleSquare1 from "@/assets/ad-example-square-1.png";
import adExampleSquare2 from "@/assets/ad-example-square-2.png";
import adExampleVertical1 from "@/assets/ad-example-vertical-1.png";
import socialMediaHero from "@/assets/alli-social-hero.png";

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
      popular: true,
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

  const testimonials = [
    {
      name: "Sarah Mitchell",
      business: "Mitchell Roofing",
      role: "Owner",
      content: "We went from posting once a month to 5 times a week. Our profile visits increased 62% in the first month alone. Alli handles everything—I just approve the content.",
      rating: 5,
    },
    {
      name: "Mike Chen",
      business: "Chen's HVAC Services",
      role: "Marketing Director",
      content: "The retargeting ads are a game-changer. We're seeing 3x more conversions from website visitors who previously would have just disappeared.",
      rating: 5,
    },
    {
      name: "Jessica Rodriguez",
      business: "Rodriguez Plumbing",
      role: "Owner",
      content: "Brand Scout came to our shop, captured amazing content, and we had professional posts ready in 48 hours. It's like having a full marketing team for a fraction of the cost.",
      rating: 5,
    },
  ];

  const comparisonData = [
    {
      feature: "Monthly Cost",
      diy: "$0 (but 10+ hours/mo)",
      agency: "$2,000-$5,000",
      alli: "$150-$600",
    },
    {
      feature: "Content Creation",
      diy: "You do everything",
      agency: "Slow turnaround",
      alli: "AI + optional on-site",
    },
    {
      feature: "Posting Frequency",
      diy: "Inconsistent",
      agency: "Fixed schedule",
      alli: "1-5x per week",
    },
    {
      feature: "Paid Ads Included",
      diy: "No",
      agency: "Extra $500-$2,000",
      alli: "Yes (Standard+)",
    },
    {
      feature: "Analytics",
      diy: "Manual tracking",
      agency: "Monthly reports",
      alli: "Real-time dashboard",
    },
    {
      feature: "Your Time Required",
      diy: "10-15 hours/mo",
      agency: "5-8 hours/mo",
      alli: "30 min/mo (approvals)",
    },
  ];

  const faqs = [
    {
      question: "Do I have to approve every post before it goes live?",
      answer: "Yes. You review and approve all content before it's published. We handle the creation, you maintain control.",
    },
    {
      question: "What if I don't have professional photos or videos?",
      answer: "No problem! Our Starter and Professional plans use industry-standard stock content. If you want custom branded content, our Elite + Scout plan includes on-site visits to capture your team, location, and work in action.",
    },
    {
      question: "Can I cancel anytime?",
      answer: "Absolutely. All plans are month-to-month with no long-term contracts. Cancel anytime with 30 days notice.",
    },
    {
      question: "How do the paid ads work? Do I need a big ad budget?",
      answer: "Alli manages your ad campaigns on Facebook and Instagram. You set your budget (we recommend starting with $300-500/month for ads), and our AI optimizes targeting, creative, and bidding to maximize results. Ad spend is separate from your Alli subscription.",
    },
    {
      question: "What industries do you work with?",
      answer: "We specialize in service businesses: roofing, plumbing, HVAC, landscaping, cleaning, home services, and more. If you serve local customers, we can help you grow.",
    },
    {
      question: "How quickly can I get started?",
      answer: "Most clients are live within 7 days. We'll onboard you, learn your business, create your first content batch, and schedule your approval call—all within a week.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-glow/5 pointer-events-none" />

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                <Share2 className="w-4 h-4" />
                Social Media Manager
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Posting Shouldn't Be a Full-Time Job
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                Your ideal customers scroll past hundreds of posts daily. Alli makes sure yours are among them—with consistent organic content AND strategic ads that turn scrollers into customers.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="text-base">
                  <Link to="/pricing">See Pricing</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-base">
                  <Link to="/results">View Results</Link>
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                <ProofChip metric="237%" label="Average Increase in Website Visitors" variant="success" />
                <ProofChip metric="10+" label="Hours Saved Per Month" />
                <ProofChip metric="3x" label="Audience Engagement" variant="success" />
              </div>
            </div>

            {/* Right Image */}
            <div className="relative lg:order-last">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-glow/20 blur-3xl rounded-full opacity-40" />
              <div className="relative">
                <img
                  src={socialMediaHero}
                  alt="Social Media Management Dashboard"
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
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

      {/* See Your Industry in Action */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              See Your Industry in Action
            </h2>
            <p className="text-xl text-muted-foreground">
              Real ads we're running right now for businesses just like yours
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Link to="/industries/roofing">
              <Card className="border-primary/20 hover:border-primary transition-all duration-300 cursor-pointer hover-scale">
                <CardContent className="pt-6">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary-glow/20 rounded-lg mb-4 flex items-center justify-center">
                    <Camera className="w-16 h-16 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-center">Roofing</h3>
                  <p className="text-sm text-muted-foreground text-center mt-2">
                    See real campaigns for roofing contractors
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/industries/plumbing">
              <Card className="border-primary/20 hover:border-primary transition-all duration-300 cursor-pointer hover-scale">
                <CardContent className="pt-6">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary-glow/20 rounded-lg mb-4 flex items-center justify-center">
                    <TrendingUp className="w-16 h-16 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-center">Plumbing</h3>
                  <p className="text-sm text-muted-foreground text-center mt-2">
                    View successful plumbing ad examples
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/industries/hvac">
              <Card className="border-primary/20 hover:border-primary transition-all duration-300 cursor-pointer hover-scale">
                <CardContent className="pt-6">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary-glow/20 rounded-lg mb-4 flex items-center justify-center">
                    <BarChart3 className="w-16 h-16 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-center">HVAC</h3>
                  <p className="text-sm text-muted-foreground text-center mt-2">
                    Explore HVAC business success stories
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>

          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-6 text-center">
                AI-Created Ads in Action
              </h3>
              <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
                Real ads our AI has created and is currently running for businesses across different industries
              </p>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Camera className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Square Format</h4>
                      <p className="text-xs text-muted-foreground">Facebook & Instagram Feed</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6">
                    Eye-catching graphics designed to stop the scroll and drive engagement
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="aspect-square overflow-hidden rounded-lg border-2 border-border shadow-md hover:shadow-xl transition-shadow">
                      <img src={adExampleSquare1} alt="Square format ad example 1" className="w-full h-full object-cover" />
                    </div>
                    <div className="aspect-square overflow-hidden rounded-lg border-2 border-border shadow-md hover:shadow-xl transition-shadow">
                      <img src={adExampleSquare2} alt="Square format ad example 2" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-card rounded-lg border border-border">
                    <div className="grid grid-cols-3 gap-4 text-center text-sm">
                      <div>
                        <div className="font-bold text-primary">20K+</div>
                        <div className="text-xs text-muted-foreground">Impressions</div>
                      </div>
                      <div>
                        <div className="font-bold text-primary">3.2%</div>
                        <div className="text-xs text-muted-foreground">CTR</div>
                      </div>
                      <div>
                        <div className="font-bold text-primary">$0.12</div>
                        <div className="text-xs text-muted-foreground">Per Click</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Eye className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Vertical Format</h4>
                      <p className="text-xs text-muted-foreground">Stories, Reels & TikTok</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6">
                    Full-screen mobile experiences that capture attention and drive action
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="aspect-[9/16] overflow-hidden rounded-lg border-2 border-border shadow-md hover:shadow-xl transition-shadow">
                      <img src={adExampleVertical1} alt="Vertical format ad example 1" className="w-full h-full object-cover" />
                    </div>
                    <div className="aspect-[9/16] overflow-hidden rounded-lg border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-primary-glow/10 flex items-center justify-center">
                      <div className="text-center p-4">
                        <Camera className="w-12 h-12 text-primary mx-auto mb-3" />
                        <p className="text-sm font-medium">Your Custom Video Ads</p>
                        <p className="text-xs text-muted-foreground mt-2">With Elite + Scout plan</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-card rounded-lg border border-border">
                    <div className="grid grid-cols-3 gap-4 text-center text-sm">
                      <div>
                        <div className="font-bold text-primary">150K+</div>
                        <div className="text-xs text-muted-foreground">Views</div>
                      </div>
                      <div>
                        <div className="font-bold text-primary">8.5%</div>
                        <div className="text-xs text-muted-foreground">Engagement</div>
                      </div>
                      <div>
                        <div className="font-bold text-primary">$0.08</div>
                        <div className="text-xs text-muted-foreground">Per View</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose the plan that fits your business goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiers.map((tier) => (
              <Card
                key={tier.name}
                className={tier.popular ? "border-primary shadow-lg relative" : "border-border"}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <div className="mt-4">
                    <div className="text-4xl font-bold">{tier.price}</div>
                    <div className="text-sm text-muted-foreground mt-2">{tier.frequency}</div>
                    <div className="text-sm text-muted-foreground">{tier.content}</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full mt-6"
                    variant={tier.popular ? "default" : "outline"}
                    asChild
                  >
                    <Link to="/pricing">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              DIY vs Agency vs Alli
            </h2>
            <p className="text-xl text-muted-foreground">
              See how Alli stacks up against the alternatives
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-card rounded-lg overflow-hidden">
              <thead>
                <tr className="border-b border-border">
                  <th className="p-4 text-left font-semibold">Feature</th>
                  <th className="p-4 text-center font-semibold">DIY</th>
                  <th className="p-4 text-center font-semibold">Agency</th>
                  <th className="p-4 text-center font-semibold bg-primary/5">
                    <div className="flex items-center justify-center gap-2">
                      <Star className="w-4 h-4 text-primary" />
                      Alli
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr
                    key={row.feature}
                    className={index % 2 === 0 ? "bg-muted/20" : ""}
                  >
                    <td className="p-4 font-medium">{row.feature}</td>
                    <td className="p-4 text-center text-sm text-muted-foreground">{row.diy}</td>
                    <td className="p-4 text-center text-sm text-muted-foreground">{row.agency}</td>
                    <td className="p-4 text-center text-sm font-semibold bg-primary/5">{row.alli}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Real results from real businesses
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="border-t border-border pt-4">
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.business}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about Alli's Social Media Manager
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary">Q</span>
                    </div>
                    {faq.question}
                  </h3>
                  <div className="flex items-start gap-3 pl-9">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
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
