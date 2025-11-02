import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Zap, Shield, Clock, Play, Building2 } from "lucide-react";
import { SEO } from "@/components/SEO";
import alliTeam from "@/assets/alli-team.png";

const Electrical = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <SEO
        title="AI for Electricians - 24/7 Call Answering & Scheduling"
        description="Electrical contractors: Never miss an emergency call or service request. AI receptionist answers 24/7, books jobs, and qualifies leads while you're on-site."
        keywords="electrician AI, electrical contractor automation, electrician lead generation, emergency electrical calls, electrician receptionist"
        canonical="/industries/electrical"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
                Home Services
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI Marketing for <span className="text-primary">Electrical Services</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Power up your lead generation with AI that captures residential and commercial opportunities 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link to="/pricing">Get Started Today</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="https://go.oncehub.com/cmcsalesteam" target="_blank" rel="noopener noreferrer">
                    <Play className="w-5 h-5 mr-2" />
                    Watch Demo
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-glow/20 rounded-2xl blur-2xl" />
              <img 
                src={alliTeam} 
                alt="Alli AI Assistant for Electrical Services" 
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/5 to-primary-glow/5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-card border border-border hover:shadow-xl transition-all">
              <div className="text-5xl font-bold text-primary mb-2">5x</div>
              <div className="text-lg font-medium mb-2">More Commercial Leads</div>
              <div className="text-sm text-muted-foreground">targeted outreach</div>
            </div>
            <div className="text-center p-8 rounded-xl bg-card border border-border hover:shadow-xl transition-all">
              <div className="text-5xl font-bold text-primary mb-2">24/7</div>
              <div className="text-lg font-medium mb-2">Emergency Response Ready</div>
              <div className="text-sm text-muted-foreground">never miss a call</div>
            </div>
            <div className="text-center p-8 rounded-xl bg-card border border-border hover:shadow-xl transition-all">
              <div className="text-5xl font-bold text-primary mb-2">40%</div>
              <div className="text-lg font-medium mb-2">Lower Cost Per Job</div>
              <div className="text-sm text-muted-foreground">vs traditional advertising</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Electricians Choose Alli</h2>
            <p className="text-xl text-muted-foreground">From emergency calls to commercial contracts</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Instant Lead Capture</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Capture emergency service calls and commercial project inquiries the moment they come in.
                </p>
                <div className="flex items-center gap-2 text-sm text-primary">
                  <Check className="w-4 h-4" />
                  <span>Instant SMS notifications</span>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-secondary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Build Trust Online</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Showcase your licensed, insured status and safety record to win homeowner and business confidence.
                </p>
                <div className="flex items-center gap-2 text-sm text-primary">
                  <Check className="w-4 h-4" />
                  <span>Credential highlighting</span>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-6">
                  <Clock className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Fill Your Schedule</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Keep your calendar full with a steady stream of both emergency and scheduled electrical work.
                </p>
                <div className="flex items-center gap-2 text-sm text-primary">
                  <Check className="w-4 h-4" />
                  <span>Smart scheduling integration</span>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-glow to-secondary flex items-center justify-center mb-6">
                  <Building2 className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Target Commercial Projects</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  AI marketing helps you reach contractors, property managers, and businesses needing electrical services.
                </p>
                <div className="flex items-center gap-2 text-sm text-primary">
                  <Check className="w-4 h-4" />
                  <span>B2B lead qualification</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-muted/50 to-background">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-4">
              Real Results
            </div>
            <h2 className="text-3xl font-bold mb-4">Rodriguez Electric Success Story</h2>
            <p className="text-xl text-muted-foreground">
              Tripling commercial work in under a year
            </p>
          </div>
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2">
                <div className="p-10 flex flex-col justify-center bg-gradient-to-br from-primary/5 to-transparent">
                  <blockquote className="text-xl italic mb-6 leading-relaxed">
                    "We tripled our commercial work in under a year. Alli positions us as the go-to electrical contractor for businesses and property managers. The AI never sleeps, so we never miss an opportunity."
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-2xl font-bold text-primary">
                      CR
                    </div>
                    <div>
                      <div className="font-semibold text-lg">Carlos Rodriguez</div>
                      <div className="text-sm text-muted-foreground">Owner, Rodriguez Electric</div>
                    </div>
                  </div>
                </div>
                <div className="bg-primary/10 flex items-center justify-center p-10">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-primary mb-2">3x</div>
                    <div className="text-xl font-medium mb-4">Commercial Work</div>
                    <div className="text-sm text-muted-foreground">in under 1 year</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Power Up Your Business?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            See how Alli can help you win more residential and commercial electrical work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg" asChild>
              <Link to="/pricing">Get Started Today</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg" asChild>
              <a href="https://go.oncehub.com/cmcsalesteam" target="_blank" rel="noopener noreferrer">
                Schedule a Demo
              </a>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            ✓ No contracts required  •  ✓ Setup in 48 hours  •  ✓ US-based support
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Electrical;
