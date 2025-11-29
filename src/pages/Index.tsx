import { ArrowRight, CheckCircle2, Search, ShieldCheck, Share2, MailCheck, ChevronRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import alliHeadshot from "@/assets/alli-headshot.jpg";

const Index = () => {
  const navigate = useNavigate();
  const [industryDialogOpen, setIndustryDialogOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);

  const industries = {
    "Professional Services": [
      "Legal Services",
      "Accounting & Tax",
      "Business Consulting",
      "Marketing & Advertising",
      "IT & Tech Support",
      "Financial Planning",
      "Human Resources",
      "Architecture & Engineering",
    ],
    "Home Services": [
      "Plumbing",
      "Electrical",
      "HVAC (Heating & Cooling)",
      "Cleaning & Housekeeping",
      "Landscaping & Lawn Care",
      "Pest Control",
      "Home Remodeling",
      "Roofing",
    ],
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  const handleIndustrySelect = (industry: string) => {
    setSelectedIndustry(industry);
    setIndustryDialogOpen(false);
    setSelectedCategory(null);

    // Map industry names to routes
    const industryRoutes: { [key: string]: string } = {
      "Legal Services": "/industries/legal-services",
      "Accounting & Tax": "/industries/accounting-tax",
      "Business Consulting": "/industries/business-consulting",
      "Marketing & Advertising": "/industries/marketing-advertising",
      "IT & Tech Support": "/industries/it-tech-support",
      "Financial Planning": "/industries/financial-planning",
      "Human Resources": "/industries/human-resources",
      "Architecture & Engineering": "/industries/architecture-engineering",
      Plumbing: "/industries/plumbing",
      Electrical: "/industries/electrical",
      "HVAC (Heating & Cooling)": "/industries/hvac",
      "Cleaning & Housekeeping": "/industries/cleaning",
      "Landscaping & Lawn Care": "/industries/landscaping",
      "Pest Control": "/industries/pest-control",
      "Home Remodeling": "/industries/home-remodeling",
      Roofing: "/industries/roofing",
    };

    navigate(industryRoutes[industry]);
  };

  const handleBack = () => {
    setSelectedCategory(null);
  };
  const outcomes = [
    { icon: CheckCircle2, text: "Identify up to ~30% of anonymous visitors" },
    { icon: CheckCircle2, text: "1,000+ leads uncovered for Dan Martell in 10 days" },
    { icon: CheckCircle2, text: "Email-ready contact lists delivered automatically" },
    { icon: CheckCircle2, text: "Retargeting-ready audiences without extra pixel work" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-primary-glow/5 to-transparent pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl opacity-20 pointer-events-none" />

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="text-center md:text-left order-2 md:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                AI Lead Detection for Service Businesses
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Turn anonymous website visitors into revenue — without adding headcount
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Alli identifies up to ~30% of your traffic and delivers email-ready contacts so you can follow up fast and stay compliant.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-6">
                <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow text-lg" asChild>
                  <Link to="/pricing">
                    Start free detection
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg" onClick={() => setIndustryDialogOpen(true)}>
                  See if Alli fits your industry
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>

              <p className="text-sm text-muted-foreground mb-2">
                Phone numbers are provided for match-back only. TCPA-compliant outreach is email-first.
              </p>
              <p className="text-sm text-muted-foreground">
                Try Alli for 30 days. If you don't feel it paid for itself in new business, get a full refund.
              </p>
            </div>

            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-primary-glow to-primary rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary-glow/30 rounded-2xl blur-xl animate-pulse" />
                <img
                  src={alliHeadshot}
                  alt="Meet Alli - Your AI Team Member"
                  className="relative rounded-2xl shadow-2xl max-w-sm w-full ring-1 ring-primary/10 transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-muted/20 via-destructive/5 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-destructive/10 via-destructive/5 to-transparent" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-destructive/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-destructive/30 to-transparent" />

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 rounded-full bg-destructive/10 border border-destructive/20 text-destructive text-sm font-medium mb-4">
              The Hidden Revenue Drains
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stop losing the visitors you already paid for</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Alli surfaces the buyers hiding in your SEO, paid ads, and social traffic.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border-2 border-destructive/20 hover:border-destructive/50 transition-all duration-500 hover:shadow-[0_20px_50px_-12px_hsl(var(--destructive)/0.3)] hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-destructive via-destructive to-destructive/50 rounded-t-2xl" />
              <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-destructive to-destructive/70 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                  <Search className="w-8 h-8 text-destructive-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-destructive transition-colors">
                  Anonymous Traffic = Lost Pipeline
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  97% of visitors leave without filling a form. Alli identifies up to ~30% so you can follow up.
                </p>
                <p className="text-sm font-semibold text-primary">Know exactly who's on your site.</p>
              </div>
            </div>

            <div className="group relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border-2 border-destructive/20 hover:border-destructive/50 transition-all duration-500 hover:shadow-[0_20px_50px_-12px_hsl(var(--destructive)/0.3)] hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-destructive via-destructive to-destructive/50 rounded-t-2xl" />
              <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-destructive to-destructive/70 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                  <Share2 className="w-8 h-8 text-destructive-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-destructive transition-colors">
                  Ad Spend Without Follow-Up
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  You're paying for SEO, paid, and social clicks. Without identities, that spend never becomes pipeline.
                </p>
                <p className="text-sm font-semibold text-primary">Alli converts traffic into outreach-ready contacts.</p>
              </div>
            </div>

            <div className="group relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border-2 border-destructive/20 hover:border-destructive/50 transition-all duration-500 hover:shadow-[0_20px_50px_-12px_hsl(var(--destructive)/0.3)] hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-destructive via-destructive to-destructive/50 rounded-t-2xl" />
              <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-destructive to-destructive/70 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                  <ShieldCheck className="w-8 h-8 text-destructive-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-destructive transition-colors">
                  Compliance Missteps Are Costly
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  TCPA forbids calling or texting anonymous visitors. Alli keeps you compliant with email-first outreach and phone numbers for match-back only.
                </p>
                <p className="text-sm font-semibold text-primary">Stay safe while you scale.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* How Alli Works */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How Alli Works</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Lead detection is the front door. Retargeting and voice stay as upsells once you see value inside the app.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative p-8 rounded-2xl bg-card/60 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-2 transition-all duration-300 shadow-lg">
                  <Search className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3">Identify & Enrich</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Install one script; detect up to ~30% of anonymous visitors.</li>
                  <li>Built for service businesses with SEO, paid, or social traffic.</li>
                  <li>Includes firmographic enrichment and match-back phone numbers.</li>
                </ul>
              </div>
            </div>

            <div className="group relative p-8 rounded-2xl bg-card/60 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-2 transition-all duration-300 shadow-lg">
                  <MailCheck className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3">Deliver & Sync</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Email-ready contacts with clear compliance notes.</li>
                  <li>CSV downloads plus CRM sync so you can activate quickly.</li>
                  <li>Phone numbers are for match-back only; outreach is email-first.</li>
                </ul>
              </div>
            </div>

            <div className="group relative p-8 rounded-2xl bg-card/60 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-2 transition-all duration-300 shadow-lg">
                  <Share2 className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3">Activate & Upsell</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Send campaigns from your existing tools or let us guide messaging.</li>
                  <li>Retargeting ads and voice live as in-app upsells after you see results.</li>
                  <li>Lifecycle prompts (30/60/90 days) keep new revenue opportunities in front of you.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Outcomes */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary-glow/5 to-accent/5" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl opacity-30" />

        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-4">
              <CheckCircle2 className="w-4 h-4" />
              Proven Results
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
              Outcomes That Matter
            </h2>
            <p className="text-xl text-muted-foreground">Real metrics that transform your business</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {outcomes.map((outcome, index) => (
              <div
                key={index}
                className="group relative flex items-start gap-5 p-8 rounded-2xl bg-card/80 backdrop-blur-sm border-2 border-accent/20 hover:border-accent/50 transition-all duration-500 hover:shadow-[0_20px_50px_-12px_hsl(var(--accent)/0.25)] hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                  <outcome.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <p className="relative text-lg font-medium leading-relaxed pt-2">{outcome.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Compliance & Activation */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-card/70 border border-border rounded-2xl p-8 md:p-10 shadow-lg">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold mb-2">Stay compliant while you follow up</h3>
                <p className="text-muted-foreground max-w-3xl">
                  Alli delivers email-ready contacts with match-back phone numbers. TCPA rules mean outreach is email-first — no texting or calling anonymous visitors.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild className="bg-gradient-to-r from-primary to-primary-glow">
                  <Link to="/pricing">Start free detection</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/results">See proof</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-card/80 border border-primary/20 rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <div className="flex-1 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wide">
                  Case Study
                </div>
                <h3 className="text-3xl font-bold">Dan Martell identified 1,000+ leads in 10 days</h3>
                <p className="text-lg text-muted-foreground">
                  Alli unlocked more than a thousand contacts from existing traffic in under two weeks — before any upsells.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Instant visibility into high-intent visitors.</li>
                  <li>Email-ready delivery kept outreach compliant.</li>
                  <li>Retargeting audiences created automatically for later activation.</li>
                </ul>
              </div>
              <div className="flex-1 bg-gradient-to-br from-primary/10 to-primary-glow/10 border border-primary/20 rounded-xl p-6 space-y-4">
                <div className="text-4xl font-bold text-primary">1,000+</div>
                <p className="text-muted-foreground">leads uncovered in 10 days</p>
                <div className="text-2xl font-semibold">30%</div>
                <p className="text-muted-foreground">traffic visibility target</p>
                <div className="text-lg font-medium">Email-first, TCPA-safe outreach</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Reversal */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-secondary/10 to-secondary/5 border-2 border-secondary/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">30-Day Money-Back Guarantee</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Try Alli for 30 days. If you don't feel it paid for itself in new business, get a full refund. No
              questions asked.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow text-lg" asChild>
              <Link to="/pricing">
                Start free detection
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-16 px-4 bg-gradient-to-b from-muted/30 via-background to-background">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">What to do next</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Follow these steps to launch AI lead detection and stay compliant.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-border bg-card/70 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Start your free detection</h3>
              <p className="text-muted-foreground">
                Pick a plan on the pricing page (freemium works) and get your unique tracking snippet.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-border bg-card/70 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Install the script</h3>
              <p className="text-muted-foreground">
                Drop the snippet on your site. Alli starts detecting within hours and emails you as contacts arrive.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-border bg-card/70 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Email-first follow-up</h3>
              <p className="text-muted-foreground">
                Phone numbers are match-back only. Use email to reach out, or sync to your CRM and run retargeting audiences.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow" asChild>
              <Link to="/pricing">Go to pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />

      {/* Industry Selector Dialog */}
      <Dialog open={industryDialogOpen} onOpenChange={setIndustryDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{selectedCategory ? selectedCategory : "Select Your Industry"}</DialogTitle>
            <DialogDescription>
              {selectedCategory ? "Choose your specific service type" : "Choose your industry category to get started"}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-3 mt-4">
            {!selectedCategory ? (
              // Step 1: Category Selection
              Object.keys(industries).map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategorySelect(category)}
                  className="w-full p-4 rounded-lg border-2 border-border hover:border-primary hover:bg-primary/5 transition-all text-left flex items-center justify-between group"
                >
                  <span className="font-medium text-lg">{category}</span>
                  <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </button>
              ))
            ) : (
              // Step 2: Industry Selection
              <>
                <button
                  onClick={handleBack}
                  className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 mb-2"
                >
                  <ChevronRight className="w-4 h-4 rotate-180" />
                  Back to categories
                </button>
                {industries[selectedCategory as keyof typeof industries].map((industry) => (
                  <button
                    key={industry}
                    onClick={() => handleIndustrySelect(industry)}
                    className="w-full p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all text-left"
                  >
                    <span className="text-base">{industry}</span>
                  </button>
                ))}
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
