import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Briefcase, Target, Users, Play, Award } from "lucide-react";
import { SEO } from "@/components/SEO";
import alliTeam from "@/assets/alli-team.png";
import djCarroll from "@/assets/dj-carroll.jpg";

const BusinessConsulting = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <SEO
        title="AI for Business Consultants - Scale Your Practice"
        description="Business consultants: Capture more leads, automate client intake, and stay visible with AI. Focus on billable work while Alli handles the rest. 24/7 availability, no extra headcount."
        keywords="business consulting AI, consultant automation, consulting lead generation, client intake automation, consultant marketing"
        canonical="/industries/business-consulting"
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
                AI Marketing for <span className="text-primary">Business Consultants</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Stop chasing leads. Let AI bring qualified prospects to you automatically.
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
                alt="Alli AI Assistant for Business Consulting" 
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
              <div className="text-lg font-medium mb-2">More Qualified Leads</div>
              <div className="text-sm text-muted-foreground">vs traditional outreach</div>
            </div>
            <div className="text-center p-8 rounded-xl bg-card border border-border hover:shadow-xl transition-all">
              <div className="text-5xl font-bold text-primary mb-2">70%</div>
              <div className="text-lg font-medium mb-2">Time Saved on Marketing</div>
              <div className="text-sm text-muted-foreground">focus on client delivery</div>
            </div>
            <div className="text-center p-8 rounded-xl bg-card border border-border hover:shadow-xl transition-all">
              <div className="text-5xl font-bold text-primary mb-2">90%</div>
              <div className="text-lg font-medium mb-2">Client Retention Rate</div>
              <div className="text-sm text-muted-foreground">with AI-powered follow-up</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for Consultants</h2>
            <p className="text-xl text-muted-foreground">Everything you need to attract and convert high-value clients</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mb-6">
                  <Briefcase className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Position Yourself as the Expert</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Automated content marketing establishes your authority and attracts businesses seeking your expertise.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-secondary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Target Decision Makers</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Reach business owners and executives who have the authority to hire you.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Scale Your Outreach</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Alli does the work of an entire marketing team for a fraction of the cost.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-glow to-secondary flex items-center justify-center mb-6">
                  <Check className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Proven Results</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Track ROI on every marketing dollar and optimize what works best for your consulting business.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Founder Story Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl blur-xl" />
              <img 
                src={djCarroll} 
                alt="DJ Carroll - Founder" 
                className="relative rounded-2xl shadow-xl w-full"
              />
            </div>
            <div>
              <div className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-4">
                <Award className="w-4 h-4 inline mr-2" />
                Our Story
              </div>
              <h2 className="text-3xl font-bold mb-6">From Blue Collar to Industry Disruptor</h2>
              <blockquote className="text-lg italic text-muted-foreground mb-6 border-l-4 border-primary pl-6">
                "I started as a blue collar business owner desperate to get customers without breaking the bank. After accidentally discovering strategies that consistently beat expensive agency campaigns, we built an AI platform that does the work of entire marketing teams—for a fraction of the cost."
              </blockquote>
              <div className="flex items-center gap-4 mb-6">
                <div>
                  <div className="font-semibold text-lg">DJ Carroll</div>
                  <div className="text-sm text-muted-foreground">Founder, Carroll Media</div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 rounded-lg bg-card border border-border">
                  <div className="text-2xl font-bold text-primary">2013</div>
                  <div className="text-xs text-muted-foreground">Started</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-card border border-border">
                  <div className="text-2xl font-bold text-primary">10K+</div>
                  <div className="text-xs text-muted-foreground">Clients</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-card border border-border">
                  <div className="text-2xl font-bold text-primary">5★</div>
                  <div className="text-xs text-muted-foreground">Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
              Success Story
            </div>
            <h2 className="text-3xl font-bold">Real Results from Real Consultants</h2>
          </div>
          <Card className="overflow-hidden">
            <CardContent className="p-10 bg-gradient-to-br from-primary/5 to-transparent">
              <blockquote className="text-xl italic mb-8 leading-relaxed">
                "I went from spending 20 hours a week on marketing to just 2 hours. Alli handles everything else, and my lead quality has never been better. This is a game-changer for solo consultants."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-2xl font-bold text-primary">
                  RC
                </div>
                <div>
                  <div className="font-semibold text-lg">Robert Chen</div>
                  <div className="text-sm text-muted-foreground">Business Strategy Consultant</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-transparent">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Scale Your Consulting Business?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            See how Alli can fill your pipeline with qualified leads in just 15 minutes.
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

export default BusinessConsulting;
