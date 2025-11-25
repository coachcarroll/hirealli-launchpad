import { Check, TrendingUp, Users, Zap, Award, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Elite = () => {
  const valueStack = [
    { item: "12-Month Alli License", value: "$7,500" },
    { item: "AI Bootcamp + Playbook", value: "$800" },
    { item: "Done-For-You CRM Sync", value: "$1,000" },
    { item: "Bonuses (Training, Access, Advisory)", value: "$2,500" },
  ];

  const bonuses = [
    {
      icon: Users,
      title: "Conversion Playbook Training",
      description: "Behind-the-scenes training with the Martell Media team on 'How to Convert Visitor Intelligence into Revenue — Legally & Effectively.'",
      value: "$1,500 Value"
    },
    {
      icon: Rocket,
      title: "Early Access Tools",
      description: "Get early access to our upcoming engagement tools before the market sees them.",
      value: "$500 Value"
    },
    {
      icon: Award,
      title: "Advisory Board Access",
      description: "Quarterly client advisory calls where you help shape Alli's roadmap.",
      value: "$500 Value"
    }
  ];

  const benefits = [
    "Name & Email",
    "Location & Intent",
    "Visit History",
    "Automatic CRM Sync"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold mb-6">
            Dan Martell's Elite Coaching Group Exclusive
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            The Invisible Pipeline:<br />Stop Paying for Ghosts
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Today I'll show you a tool that will increase your pipeline 30% in the next 30 days!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <a href="#offer">Get Started - $4,997</a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
              <a href="#proof">See The Proof</a>
            </Button>
          </div>
        </div>
      </section>

      {/* The Core Problem */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">The Core Problem</h2>
            <p className="text-xl text-muted-foreground">Most Businesses Are Blind</p>
          </div>
          <Card className="border-2 border-destructive/20">
            <CardContent className="pt-8 text-center">
              <p className="text-2xl md:text-3xl font-semibold mb-4">
                You pay for clicks, content, and SEO...
              </p>
              <p className="text-4xl md:text-5xl font-bold text-destructive">
                but about 97% of your visitors never call, never form-fill, never convert.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* The Visibility Gap */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">The Visibility Gap</h2>
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-2xl">Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Shows you anonymous numbers.</p>
              </CardContent>
            </Card>
            
            <div className="text-center">
              <div className="inline-block px-6 py-3 bg-destructive/10 border-2 border-destructive rounded-lg">
                <p className="text-xl font-bold text-destructive">THE GAP</p>
                <p className="text-sm text-muted-foreground mt-2">You can't close people you can't see.</p>
              </div>
            </div>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-2xl">CRM</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Shows you closed deals.</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12 p-8 bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-lg">
            <p className="text-2xl md:text-3xl font-semibold">
              If I could show you how to unlock <span className="text-primary font-bold">500 warm leads a month</span> from traffic you're already getting...
            </p>
            <p className="text-xl text-muted-foreground mt-4">
              With no extra ad spend, no new headcount, and no new tools to learn.
            </p>
          </div>
        </div>
      </section>

      {/* Proof: Dan's World */}
      <section id="proof" className="py-16 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Proof: Dan's World</h2>
            <p className="text-xl text-muted-foreground">Here's what happened when we dropped the Alli pixel onto the site:</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { icon: TrendingUp, text: "Identified 200+ leads hiding in existing traffic" },
              { icon: Users, text: "Recovered checkout abandoners" },
              { icon: Zap, text: "Found YouTube viewers who didn't engage" }
            ].map((item, index) => (
              <Card key={index} className="border-primary/20">
                <CardContent className="pt-6">
                  <item.icon className="w-12 h-12 text-primary mb-4 mx-auto" />
                  <p className="text-center font-semibold">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <p className="text-center text-xl font-semibold text-primary">
            This isn't theory. It's live right now.
          </p>
        </div>
      </section>

      {/* Introducing Alli AI */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Introducing Alli AI</h2>
            <p className="text-2xl text-primary font-semibold">Turn Anonymous Traffic into Named Leads</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <Card key={index}>
                <CardContent className="pt-6 text-center">
                  <Check className="w-8 h-8 text-primary mx-auto mb-3" />
                  <p className="font-semibold">{benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* How It Works */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <CardTitle>Install Pixel</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Simple install, same as a Meta or GTM tag.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <CardTitle>Identify</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Alli identifies real humans behind the traffic.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <CardTitle>Push to CRM</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Lead data syncs in real-time for instant follow-up.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Simple ROI */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Simple ROI</h2>
          <p className="text-xl mb-4">The Math is Simple</p>
          <p className="text-2xl md:text-3xl font-semibold">
            You don't need crazy traffic for this to make sense.
          </p>
          <div className="mt-8 p-8 bg-primary/10 rounded-lg">
            <p className="text-xl md:text-2xl">
              If your average customer is worth <span className="font-bold text-primary">$5k–$10k</span>, then just <span className="font-bold text-primary">1–2 extra deals</span> in a year more than pay for Alli.
            </p>
          </div>
        </div>
      </section>

      {/* The Elite Offer */}
      <section id="offer" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">The Elite Offer</h2>
            <p className="text-xl text-muted-foreground">What You Get:</p>
          </div>

          <Card className="max-w-3xl mx-auto mb-12 border-2 border-primary">
            <CardContent className="pt-8">
              <div className="space-y-4 mb-6">
                {valueStack.map((item, index) => (
                  <div key={index} className="flex justify-between items-center pb-4 border-b border-border last:border-0">
                    <span className="font-semibold">{item.item}</span>
                    <span className="text-primary font-bold">{item.value}</span>
                  </div>
                ))}
              </div>
              <div className="text-center pt-6 border-t-2 border-primary">
                <p className="text-sm text-muted-foreground mb-2">TOTAL VALUE</p>
                <p className="text-4xl font-bold text-primary">$11,800+</p>
              </div>
            </CardContent>
          </Card>

          {/* Bonuses */}
          <h3 className="text-3xl font-bold text-center mb-8">Plus These Exclusive Bonuses:</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {bonuses.map((bonus, index) => (
              <Card key={index} className="border-primary/20">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mb-4">
                    <bonus.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">Bonus #{index + 1}</CardTitle>
                  <CardDescription className="text-base font-semibold text-primary">{bonus.value}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold mb-2">{bonus.title}</p>
                  <p className="text-sm text-muted-foreground">{bonus.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pricing CTA */}
          <Card className="max-w-3xl mx-auto bg-gradient-to-br from-primary/10 via-background to-primary-glow/10 border-2 border-primary">
            <CardContent className="pt-8 text-center">
              <p className="text-sm text-muted-foreground mb-2">TOTAL VALUE</p>
              <p className="text-3xl text-muted-foreground line-through mb-4">$11,800+</p>
              
              <div className="mb-6">
                <p className="text-lg font-semibold mb-2">Early Adopter Elite Member Special!</p>
                <p className="text-6xl font-bold text-primary mb-2">$4,997</p>
                <p className="text-sm text-destructive font-semibold">Limited to First 10 People Only</p>
              </div>

              <Button size="lg" className="text-xl px-12 py-6 mb-6" asChild>
                <Link to="/pricing">Claim Your Spot Now</Link>
              </Button>

              <div className="pt-6 border-t border-border">
                <p className="text-lg font-semibold mb-4">30-Day Unconditional Money-Back Guarantee</p>
                <p className="text-muted-foreground">
                  Install Alli. Let it run. If you don't feel massive value, you get 100% back. No conditions.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final Question */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">One More Question…</h2>
          <p className="text-3xl md:text-4xl font-semibold mb-8">
            Would <span className="text-primary">1 Deal</span> Be Worth The Trade?
          </p>
          <p className="text-xl text-muted-foreground mb-8">
            The Real Question Is… Is It Worth Gambling A Few Minutes of Your Time To Check This Out... (Which If It Does Even Half Of What I've Claimed Today, It Will Pay For Itself) After Your FIRST Closed Deal
          </p>
          <Button size="lg" className="text-xl px-12 py-6" asChild>
            <Link to="/pricing">Yes, I'm Ready - $4,997</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Elite;
