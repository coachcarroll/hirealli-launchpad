import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Wind, Thermometer, TrendingUp, Play, Calendar } from "lucide-react";
import { SEO } from "@/components/SEO";
import alliTeam from "@/assets/alli-team.png";

const HVAC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <SEO
        title="AI for HVAC Companies - Capture Every Service Call"
        description="HVAC businesses: Answer calls 24/7 during peak season, schedule maintenance, and capture emergency heating/cooling requests. Never miss a service opportunity again."
        keywords="HVAC AI, HVAC automation, heating cooling lead generation, HVAC receptionist, HVAC business software, air conditioning leads"
        canonical="/industries/hvac"
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
                AI Marketing for <span className="text-primary">HVAC Companies</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Keep your calendar full year-round with AI that captures emergency calls and maintenance contracts.
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
                alt="Alli AI Assistant for HVAC" 
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
              <div className="text-5xl font-bold text-primary mb-2">6x</div>
              <div className="text-lg font-medium mb-2">More Installation Leads</div>
              <div className="text-sm text-muted-foreground">seasonal campaigns</div>
            </div>
            <div className="text-center p-8 rounded-xl bg-card border border-border hover:shadow-xl transition-all">
              <div className="text-5xl font-bold text-primary mb-2">200+</div>
              <div className="text-lg font-medium mb-2">Maintenance Contracts</div>
              <div className="text-sm text-muted-foreground">recurring revenue</div>
            </div>
            <div className="text-center p-8 rounded-xl bg-card border border-border hover:shadow-xl transition-all">
              <div className="text-5xl font-bold text-primary mb-2">50%</div>
              <div className="text-lg font-medium mb-2">Lower Marketing Cost</div>
              <div className="text-sm text-muted-foreground">per qualified lead</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why HVAC Companies Trust Alli</h2>
            <p className="text-xl text-muted-foreground">Smart automation for seasonal success</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mb-6">
                  <Wind className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Emergency Call Capture</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Never miss a breakdown call. Alli answers 24/7 and dispatches you to emergency service opportunities.
                </p>
                <div className="flex items-center gap-2 text-sm text-primary">
                  <Check className="w-4 h-4" />
                  <span>After-hours support included</span>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center mb-6">
                  <Thermometer className="w-8 h-8 text-secondary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Seasonal Campaign Automation</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Automatically ramp up marketing before peak heating and cooling seasons to maximize installations.
                </p>
                <div className="flex items-center gap-2 text-sm text-primary">
                  <Calendar className="w-4 h-4" />
                  <span>Set it and forget it</span>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Build Recurring Revenue</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Convert one-time service calls into ongoing maintenance contracts for predictable monthly income.
                </p>
                <div className="flex items-center gap-2 text-sm text-primary">
                  <Check className="w-4 h-4" />
                  <span>Automated contract reminders</span>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-glow to-secondary flex items-center justify-center mb-6">
                  <Check className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Commercial Opportunities</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Reach property managers and business owners with large HVAC systems needing regular service.
                </p>
                <div className="flex items-center gap-2 text-sm text-primary">
                  <Check className="w-4 h-4" />
                  <span>B2B lead targeting</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Study Section - Summers */}
      <section className="py-16 px-4 bg-gradient-to-br from-muted/50 to-background">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-4">
              Success Story
            </div>
            <h2 className="text-3xl font-bold mb-4">Summers Plumbing Heating & Cooling</h2>
            <p className="text-xl text-muted-foreground">
              New Albany, IN - From seasonal gaps to consistent growth
            </p>
          </div>
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-5">
                <div className="md:col-span-3 p-10 flex flex-col justify-center bg-gradient-to-br from-primary/5 to-transparent">
                  <blockquote className="text-xl italic mb-6 leading-relaxed">
                    "We've had great results... a very, very big increase in our Facebook following, a lot more revenue, online bookings... just really, really had great success and been very pleased."
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-2xl font-bold text-primary">
                      AB
                    </div>
                    <div>
                      <div className="font-semibold text-lg">Adam Bernd</div>
                      <div className="text-sm text-muted-foreground">General Manager, Summers - New Albany, IN</div>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-2 bg-primary/10 flex flex-col items-center justify-center p-10 gap-6">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-primary mb-2">930</div>
                    <div className="text-lg font-medium">Leads Generated</div>
                    <div className="text-sm text-muted-foreground">in 3 months</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">$1.08</div>
                    <div className="text-sm text-muted-foreground">Cost Per Click</div>
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
          <h2 className="text-4xl font-bold mb-6">Ready for Year-Round Revenue?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            See how Alli can help you capture emergency calls and build maintenance contracts.
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

export default HVAC;
