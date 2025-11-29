import { Shield, Zap, TrendingUp, Clock, DollarSign, Users } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const WhyAlli = () => {
  const pillars = [
    {
      icon: Shield,
      title: "Proof-First Approach",
      description: "We don't ask you to trust us—we show you. Live demos, real metrics, no actors.",
    },
    {
      icon: Zap,
      title: "Works in Hours, Not Weeks",
      description: "Most clients see their first detected leads within 48 hours of installing the script.",
    },
    {
      icon: TrendingUp,
      title: "Measurable ROI",
      description: "Detection-first metrics: traffic coverage, contacts delivered, email-ready lists created.",
    },
    {
      icon: Clock,
      title: "Always On",
      description: "Alli watches every visit so you never miss high-intent traffic again.",
    },
    {
      icon: DollarSign,
      title: "Fraction of the Cost",
      description: "Turn existing ad spend into revenue without adding headcount.",
    },
    {
      icon: Users,
      title: "White-Glove Onboarding",
      description: "Our team sets everything up for you. You approve, we execute.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="text-primary">Alli</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Alli is your AI lead detection teammate — the front door that unlocks compliant outreach and pipeline growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {pillars.map((pillar, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-border hover:border-primary/50">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mb-4">
                    <pillar.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{pillar.title}</h3>
                  <p className="text-muted-foreground">{pillar.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-primary-glow/5 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Alli's Promise</h2>
            <div className="space-y-4 max-w-3xl mx-auto">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-lg">
              <strong>Scale without adding payroll.</strong> Turn anonymous traffic into leads without hiring SDRs.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-lg">
              <strong>Measurable outcomes, not vague promises.</strong> We track detected visitors, coverage rate, and email-ready contacts delivered.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-lg">
              <strong>Risk-free guarantee.</strong> Try Alli for 30 days. If it doesn't pay for itself, get your money back.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-lg">
              <strong>Product-first, not sales-first.</strong> We lead with detection proof and real metrics because the product speaks for itself.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              See Alli in Action
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Start with the freemium plan to see detection results on your own traffic. Upsells for retargeting and voice live inside the app once you see value.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhyAlli;
