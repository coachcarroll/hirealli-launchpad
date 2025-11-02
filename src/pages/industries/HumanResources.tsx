import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Users, Target, TrendingUp, Play, BarChart3 } from "lucide-react";
import { SEO } from "@/components/SEO";
import alliTeam from "@/assets/alli-team.png";

const HumanResources = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <SEO
        title="AI for HR Consultants - Automate Client Acquisition & Screening"
        description="HR consultants and staffing agencies: Automate candidate screening, capture leads 24/7, and qualify prospects instantly. Scale your practice without adding headcount."
        keywords="HR automation, recruiting AI, staffing agency automation, HR consultant lead generation, candidate screening automation"
        canonical="/industries/human-resources"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
                Professional Services
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI Marketing for <span className="text-primary">HR Consultants</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Connect with businesses that need HR expertise, compliance support, and talent solutions.
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
                alt="Alli AI Assistant for HR Consulting" 
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
              <div className="text-5xl font-bold text-primary mb-2">7x</div>
              <div className="text-lg font-medium mb-2">More B2B Leads</div>
              <div className="text-sm text-muted-foreground">qualified prospects</div>
            </div>
            <div className="text-center p-8 rounded-xl bg-card border border-border hover:shadow-xl transition-all">
              <div className="text-5xl font-bold text-primary mb-2">65%</div>
              <div className="text-lg font-medium mb-2">Client Conversion Rate</div>
              <div className="text-sm text-muted-foreground">from initial contact</div>
            </div>
            <div className="text-center p-8 rounded-xl bg-card border border-border hover:shadow-xl transition-all">
              <div className="text-5xl font-bold text-primary mb-2">40%</div>
              <div className="text-lg font-medium mb-2">Lower Marketing Cost</div>
              <div className="text-sm text-muted-foreground">per client acquired</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why HR Firms Choose Alli</h2>
            <p className="text-xl text-muted-foreground">Target growing companies that need your expertise</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Reach Growing Companies</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Target businesses at the stage where they need professional HR support but can't afford full-time staff.
                </p>
                <div className="flex items-center gap-2 text-sm text-primary">
                  <Check className="w-4 h-4" />
                  <span>Smart company targeting</span>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-secondary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Position Your Expertise</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Educational content establishes you as the HR expert businesses turn to when they have questions.
                </p>
                <div className="flex items-center gap-2 text-sm text-primary">
                  <Check className="w-4 h-4" />
                  <span>Automated thought leadership</span>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Generate Recurring Revenue</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Attract clients who need ongoing HR support, not just one-time projects.
                </p>
                <div className="flex items-center gap-2 text-sm text-primary">
                  <Check className="w-4 h-4" />
                  <span>Retainer client focus</span>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-glow to-secondary flex items-center justify-center mb-6">
                  <BarChart3 className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Automated Lead Qualification</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Alli identifies companies with the employee count and pain points that match your services.
                </p>
                <div className="flex items-center gap-2 text-sm text-primary">
                  <Check className="w-4 h-4" />
                  <span>Pre-qualified prospects</span>
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
            <h2 className="text-3xl font-bold mb-4">Foster HR Solutions</h2>
            <p className="text-xl text-muted-foreground">
              Doubled their client roster in 6 months
            </p>
          </div>
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2">
                <div className="p-10 flex flex-col justify-center bg-gradient-to-br from-primary/5 to-transparent">
                  <blockquote className="text-xl italic mb-6 leading-relaxed">
                    "We doubled our client roster in 6 months. Alli brings us qualified leads from companies that actually need HR help, not tire-kickers. It's been transformational for our growth."
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-2xl font-bold text-primary">
                      LF
                    </div>
                    <div>
                      <div className="font-semibold text-lg">Linda Foster</div>
                      <div className="text-sm text-muted-foreground">Principal, Foster HR Solutions</div>
                    </div>
                  </div>
                </div>
                <div className="bg-primary/10 flex items-center justify-center p-10">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-primary mb-2">2x</div>
                    <div className="text-xl font-medium mb-4">Client Growth</div>
                    <div className="text-sm text-muted-foreground">in 6 months</div>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Grow Your HR Practice?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            See how Alli can fill your pipeline with businesses that need HR expertise.
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

export default HumanResources;
