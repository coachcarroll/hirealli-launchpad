import { Search, Check, Zap, Users, Bell, Database } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import ProofChip from "@/components/ProofChip";
import alliMagGlass from "@/assets/alli-mag-glass.png";

const LeadDetection = () => {
  const workflow = [
    {
      step: "1",
      title: "Pixel",
      description: "Install our tracking pixel on your website—takes less than 5 minutes.",
    },
    {
      step: "2",
      title: "Identify",
      description: "We match anonymous visitors to real business contacts and decision-makers.",
    },
    {
      step: "3",
      title: "Notify",
      description: "Get instant alerts when high-value prospects visit your site.",
    },
    {
      step: "4",
      title: "Sync",
      description: "Leads automatically sync to your CRM, ready for outreach.",
    },
  ];

  const features = [
    "Identify 250-2,500+ anonymous website visitors monthly",
    "Instant email and text alerts for hot leads",
    "Full contact details: name, company, title, contact info",
    "CRM integration with automatic sync",
    "AI Lead Detect Bootcamp & follow-up guides",
    "Real-time lead tracker dashboard",
  ];

  const tiers = [
    {
      name: "Starter",
      price: "$100/mo",
      leads: "250 leads/month",
      features: ["Instant Lead Tracker", "Basic contact info"],
    },
    {
      name: "Growth",
      price: "$250/mo",
      leads: "250 leads/month",
      features: ["Everything in Starter", "Email/Text notifications", "Bootcamp & Guide"],
    },
    {
      name: "Professional",
      price: "$500/mo",
      leads: "2,500 leads/month",
      features: ["Everything in Growth", "CRM Sync", "Priority support", "Advanced filtering"],
    },
  ];

  const useCases = [
    {
      icon: Users,
      title: "B2B Services",
      description: "Identify decision-makers researching your services before they reach out to competitors.",
    },
    {
      icon: Zap,
      title: "High-Ticket Sales",
      description: "Know exactly when prospects are actively researching before they go cold.",
    },
    {
      icon: Database,
      title: "Pipeline Building",
      description: "Turn passive website traffic into active outreach opportunities automatically.",
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
              <Search className="w-4 h-4" />
              Lead Detective
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Turn Anonymous Clicks Into Named Opportunities
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Most of your website traffic leaves without a trace. Alli identifies who they are, alerts you instantly, and syncs them to your CRM—ready for follow-up.
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
              <ProofChip metric="7" label="booked calls per 250 IDs" variant="success" />
              <ProofChip metric="2,500" label="leads identified monthly" />
              <ProofChip metric="<5min" label="installation time" variant="success" />
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
              From anonymous visitor to CRM contact in four steps
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

      {/* Key Features */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-glow/20 rounded-2xl blur-2xl" />
                <img 
                  src={alliMagGlass} 
                  alt="Alli AI - Lead Detective" 
                  className="relative rounded-2xl shadow-2xl w-full"
                />
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Stop Losing Leads to the Void
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Your website is your most expensive marketing asset. Yet 98% of visitors leave without converting. Alli turns that anonymous traffic into actionable leads—automatically.
              </p>
              <ul className="space-y-4 mb-8">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="space-y-4">
                {useCases.map((useCase) => (
                  <Card key={useCase.title} className="border-primary/20">
                    <CardContent className="pt-6 flex gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <useCase.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">{useCase.title}</h4>
                        <p className="text-sm text-muted-foreground">{useCase.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Volume</h2>
            <p className="text-xl text-muted-foreground">
              Scale based on your traffic and sales capacity
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {tiers.map((tier, index) => (
              <Card key={tier.name} className={index === 2 ? "border-primary" : ""}>
                <CardHeader>
                  <CardTitle>{tier.name}</CardTitle>
                  <CardDescription>{tier.leads}</CardDescription>
                  <div className="text-3xl font-bold mt-4">{tier.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
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

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                The Hidden Opportunity in Your Traffic
              </h3>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">98%</div>
                  <p className="text-muted-foreground">of visitors leave without converting</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">70%</div>
                  <p className="text-muted-foreground">are identifiable businesses</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">3x</div>
                  <p className="text-muted-foreground">conversion rate when you reach out first</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="p-8 md:p-12 rounded-2xl bg-primary/5 border border-primary/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stop Guessing Who's Interested
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Alli shows you exactly who's researching your business—before they call your competitor.
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

export default LeadDetection;
