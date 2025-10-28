import { ArrowRight, Phone, CheckCircle2, Headphones, Search, Share2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProofChip from "@/components/ProofChip";
import RoleCard from "@/components/RoleCard";
import alliHeadshot from "@/assets/alli-headshot.jpg";

const Index = () => {
  const problems = [
    "Missed calls and slow follow-ups → lost revenue",
    "Anonymous site traffic you can't monetize",
    "Content that stalls because your team is busy",
  ];

  const outcomes = [
    { icon: CheckCircle2, text: "40% more qualified prospects in 30 days" },
    { icon: CheckCircle2, text: "24/7 reception with zero missed calls" },
    { icon: CheckCircle2, text: "Hidden buyers turned into pipeline" },
    { icon: CheckCircle2, text: "Consistent content without hiring" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-glow/5 pointer-events-none" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="text-center md:text-left order-2 md:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Live Demo Available Now
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                SMBs book <span className="text-primary">40% more</span><br />
                qualified prospects in 30 days<br />
                with Alli—<span className="text-secondary">no new hires</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Alli runs your reception, detects hidden buyers, and ships content—so you add pipeline without adding payroll.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-6">
              <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow text-lg" asChild>
                <a href="tel:+1234567890">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Alli Live (no edits)
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg" asChild>
                <Link to="/pricing">
                  Build Your Plan
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>

              <p className="text-sm text-muted-foreground mb-8">
                Try Alli for 30 days. If you don't feel it paid for itself in new business, get a full refund.
              </p>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <ProofChip metric="+46%" label="avg answer rate" variant="success" />
                <ProofChip metric="7" label="booked calls per 250 IDs" />
                <ProofChip metric="+62%" label="profile visits" variant="success" />
              </div>
            </div>

            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-glow/20 rounded-2xl blur-2xl" />
                <img 
                  src={alliHeadshot} 
                  alt="Meet Alli - Your AI Team Member" 
                  className="relative rounded-2xl shadow-2xl max-w-sm w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-destructive/5 via-muted/30 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-destructive/10 via-transparent to-transparent opacity-50" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 rounded-full bg-destructive/10 border border-destructive/20 text-destructive text-sm font-medium mb-4">
              The Hidden Revenue Drains
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stop Losing Money to These Silent Killers
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every day without Alli, you're bleeding opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative p-8 rounded-2xl bg-card border-2 border-destructive/20 hover:border-destructive/40 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-destructive to-destructive/50 rounded-t-2xl" />
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-destructive to-destructive/70 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Phone className="w-7 h-7 text-destructive-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">Missed Calls = Lost Revenue</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every unanswered call is a prospect choosing your competitor. Slow follow-ups kill deals before they start.
              </p>
            </div>

            <div className="group relative p-8 rounded-2xl bg-card border-2 border-destructive/20 hover:border-destructive/40 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-destructive to-destructive/50 rounded-t-2xl" />
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-destructive to-destructive/70 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Search className="w-7 h-7 text-destructive-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">Ghost Traffic You Can't Capture</h3>
              <p className="text-muted-foreground leading-relaxed">
                97% of your website visitors leave anonymous. That's pipeline walking away because you can't identify ready buyers.
              </p>
            </div>

            <div className="group relative p-8 rounded-2xl bg-card border-2 border-destructive/20 hover:border-destructive/40 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-destructive to-destructive/50 rounded-t-2xl" />
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-destructive to-destructive/70 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Share2 className="w-7 h-7 text-destructive-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">Invisible When Buyers Are Looking</h3>
              <p className="text-muted-foreground leading-relaxed">
                Inconsistent content means prospects never see you. Your team's too busy to post, so deals go to whoever stayed visible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Alli Works */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How Alli Works in Your Business
            </h2>
            <p className="text-xl text-muted-foreground">
              Three roles. One AI teammate. Zero new hires.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <RoleCard
              icon={Headphones}
              title="Receptionist"
              description="Answer, qualify, and route—24/7."
              features={[
                "Never miss a call again",
                "Smart qualification & routing",
                "After-call summaries",
                "Appointment setting & CRM sync",
              ]}
              link="/roles/receptionist"
            />
            <RoleCard
              icon={Search}
              title="Lead Detection"
              description="Turn anonymous clicks into names, alerts, and CRM records."
              features={[
                "Identify anonymous visitors",
                "Instant alerts for hot leads",
                "CRM integration",
                "Track hidden buyers",
              ]}
              link="/roles/lead-detection"
            />
            <RoleCard
              icon={Share2}
              title="Social Media"
              description="Plan, capture, publish, and optimize—optionally with a Brand Scout on-site."
              features={[
                "Consistent posting cadence",
                "On-brand creative",
                "Optional on-site capture",
                "Performance reporting",
              ]}
              link="/roles/social-media"
            />
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-primary-glow/5">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Outcomes That Matter
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {outcomes.map((outcome, index) => (
              <div key={index} className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border">
                <outcome.icon className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-lg">{outcome.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Reversal */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-secondary/10 to-secondary/5 border-2 border-secondary/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              30-Day Money-Back Guarantee
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Try Alli for 30 days. If you don't feel it paid for itself in new business, get a full refund. No questions asked.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow text-lg" asChild>
              <Link to="/pricing">
                Build Your Plan
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
