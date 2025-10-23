import { Headphones, Check, Clock, Phone, MessageSquare, Calendar } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import ProofChip from "@/components/ProofChip";

const Receptionist = () => {
  const workflow = [
    {
      step: "1",
      title: "Answer",
      description: "Alli picks up every call instantly—24/7, no holidays, no sick days.",
    },
    {
      step: "2",
      title: "Qualify",
      description: "Smart questions identify high-value callers and filter out spam.",
    },
    {
      step: "3",
      title: "Route",
      description: "Transfer qualified calls to the right team member based on your rules.",
    },
    {
      step: "4",
      title: "Book",
      description: "Schedule appointments directly into your calendar with CRM sync.",
    },
  ];

  const features = [
    "24/7 inbound call coverage—never miss an opportunity",
    "Smart lead qualification and spam detection",
    "Custom knowledge base tailored to your business",
    "After-call summaries delivered via email/text",
    "Appointment setting with calendar integration",
    "Call recording and transcription for compliance",
  ];

  const tiers = [
    {
      name: "Starter",
      price: "$200/mo",
      calls: "600 calls/month",
      features: ["24/7 answering", "Business FAQs", "After-call summaries"],
    },
    {
      name: "Growth",
      price: "$500/mo",
      calls: "1,600 calls/month",
      features: ["Everything in Starter", "Call recording", "Smart qualification", "Spam detection"],
    },
    {
      name: "Professional",
      price: "$1,000/mo",
      calls: "3,000 calls/month",
      features: ["Everything in Growth", "Custom routing", "Appointment setting", "CRM integration"],
    },
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Never Miss a Call",
      description: "Alli answers instantly, 24/7/365. No voicemail, no missed opportunities.",
    },
    {
      icon: MessageSquare,
      title: "Smart Qualification",
      description: "Automatically qualify leads and route high-value calls to your team.",
    },
    {
      icon: Calendar,
      title: "Instant Booking",
      description: "Prospects can schedule appointments without waiting for a callback.",
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
              <Headphones className="w-4 h-4" />
              AI Receptionist
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Never Miss a Call—Even When Your Team's Slammed
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Alli answers every call, qualifies leads, routes to the right person, and books appointments—24/7 without breaks, benefits, or training.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" asChild>
                <a href="tel:+1234567890">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Alli Live Demo
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/pricing">See Pricing</Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <ProofChip metric="+46%" label="answer rate improvement" variant="success" />
              <ProofChip metric="24/7" label="coverage, no breaks" />
              <ProofChip metric="<2s" label="average pickup time" variant="success" />
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
              From call to booked appointment in four steps
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Your Front Desk, Always Covered
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Every missed call is a missed opportunity. Alli ensures your business is always available—answering, qualifying, and booking—without adding payroll.
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

            <div className="space-y-6">
              {benefits.map((benefit) => (
                <Card key={benefit.title} className="border-primary/20">
                  <CardContent className="pt-6 flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{benefit.title}</h4>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Call Volume</h2>
            <p className="text-xl text-muted-foreground">
              Scale based on your inbound call traffic
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {tiers.map((tier, index) => (
              <Card key={tier.name} className={index === 2 ? "border-primary" : ""}>
                <CardHeader>
                  <CardTitle>{tier.name}</CardTitle>
                  <CardDescription>{tier.calls}</CardDescription>
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

      {/* Live Demo CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-8 md:p-12 text-center">
              <Phone className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Hear Alli in Action—Right Now
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Call our live demo line. No actors. No edits. Just Alli doing what Alli does.
              </p>
              <Button size="lg" asChild>
                <a href="tel:+1234567890">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Live Demo
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="p-8 md:p-12 rounded-2xl bg-primary/5 border border-primary/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stop Losing Calls to Voicemail
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Every unanswered call is revenue walking out the door. Alli makes sure you never miss another one.
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

export default Receptionist;
