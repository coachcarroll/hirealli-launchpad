import { ArrowRight, Phone, CheckCircle2, Headphones, Search, Share2, ChevronRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProofChip from "@/components/ProofChip";
import RoleCard from "@/components/RoleCard";
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
      "Architecture & Engineering"
    ],
    "Home Services": [
      "Plumbing",
      "Electrical",
      "HVAC (Heating & Cooling)",
      "Cleaning & Housekeeping",
      "Landscaping & Lawn Care",
      "Pest Control",
      "Home Remodeling",
      "Roofing"
    ]
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
      "Plumbing": "/industries/plumbing",
      "Electrical": "/industries/electrical",
      "HVAC (Heating & Cooling)": "/industries/hvac",
      "Cleaning & Housekeeping": "/industries/cleaning",
      "Landscaping & Lawn Care": "/industries/landscaping",
      "Pest Control": "/industries/pest-control",
      "Home Remodeling": "/industries/home-remodeling",
      "Roofing": "/industries/roofing"
    };
    
    navigate(industryRoutes[industry]);
  };

  const handleBack = () => {
    setSelectedCategory(null);
  };
  const problems = [
    "Missed calls and slow follow-ups → lost revenue",
    "Anonymous site traffic you can't monetize",
    "Content that stalls because your team is busy",
  ];

  const outcomes = [
    { icon: CheckCircle2, text: "30% more qualified leads in 30 days" },
    { icon: CheckCircle2, text: "24/7 reception with zero missed calls" },
    { icon: CheckCircle2, text: "Hidden buyers turned into pipeline" },
    { icon: CheckCircle2, text: "Consistent content without hiring" },
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
                Live Demo Available Now
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Service Businesses: Increase your pipeline by <span className="text-accent">30%</span> in 30 days - Hire Alli today!
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Lead Detection, Voice, and Social Media that help service businesses convert every contact into revenue.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-6">
              <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow text-lg" asChild>
                <a href="tel:+1234567890">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Alli Live
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg"
                onClick={() => setIndustryDialogOpen(true)}
              >
                Select Your Industry
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

              <p className="text-sm text-muted-foreground mb-8">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stop Losing Money to These Silent Killers
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every day without Alli, you're bleeding opportunities
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
                <h3 className="text-xl font-bold mb-3 group-hover:text-destructive transition-colors">Ghost Traffic You Can&apos;t Capture</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  97% of your website visitors leave anonymous. That&apos;s pipeline walking away because you can&apos;t identify ready buyers.
                </p>
                <p className="text-sm font-semibold text-primary">
                  Alli turns web traffic into real opportunities.
                </p>
              </div>
            </div>

            <div className="group relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border-2 border-destructive/20 hover:border-destructive/50 transition-all duration-500 hover:shadow-[0_20px_50px_-12px_hsl(var(--destructive)/0.3)] hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-destructive via-destructive to-destructive/50 rounded-t-2xl" />
              <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-destructive to-destructive/70 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                  <Phone className="w-8 h-8 text-destructive-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-destructive transition-colors">Missed Calls = Lost Revenue</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Every unanswered call is a prospect choosing your competitor. Most small businesses lose up to 40% of potential leads because of missed calls or slow follow-up.
                </p>
                <p className="text-sm font-semibold text-primary">
                  Alli makes sure that never happens.
                </p>
              </div>
            </div>

            <div className="group relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border-2 border-destructive/20 hover:border-destructive/50 transition-all duration-500 hover:shadow-[0_20px_50px_-12px_hsl(var(--destructive)/0.3)] hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-destructive via-destructive to-destructive/50 rounded-t-2xl" />
              <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-destructive to-destructive/70 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                  <Share2 className="w-8 h-8 text-destructive-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-destructive transition-colors">Invisible When Buyers Are Looking</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Inconsistent content means prospects never see you. Your team&apos;s too busy to post, so deals go to whoever stayed visible.
                </p>
                <p className="text-sm font-semibold text-primary">
                  Alli keeps your business top-of-mind when customers are ready to buy.
                </p>
              </div>
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
              icon={Search}
              title="Lead Detection — See Who's Interested"
              description="Identifies anonymous website visitors and alerts you when high-value leads are browsing."
              features={[
                "Turns web traffic into real opportunities",
                "Identify anonymous visitors",
                "Instant alerts for hot leads",
                "CRM integration",
              ]}
              link="/roles/lead-detection"
            />
            <RoleCard
              icon={Headphones}
              title="Voice — Your 24/7 Receptionist"
              description="Answers every call, qualifies leads, books appointments."
              features={[
                "Sounds human, never misses a call",
                "Screens out the junk",
                "Smart qualification & routing",
                "After-call summaries & appointment setting",
              ]}
              link="/roles/receptionist"
            />
            <RoleCard
              icon={Share2}
              title="Social Media — Automatic Brand Awareness"
              description="Consistent posting, engagement, and brand voice—without the hassle."
              features={[
                "Keep your business top-of-mind when customers are ready to buy",
                "Consistent posting cadence",
                "On-brand creative",
                "Performance reporting",
              ]}
              link="/roles/social-media"
            />
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
            <p className="text-xl text-muted-foreground">
              Real metrics that transform your business
            </p>
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

      {/* Industry Selector Dialog */}
      <Dialog open={industryDialogOpen} onOpenChange={setIndustryDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>
              {selectedCategory ? selectedCategory : "Select Your Industry"}
            </DialogTitle>
            <DialogDescription>
              {selectedCategory 
                ? "Choose your specific service type" 
                : "Choose your industry category to get started"}
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
