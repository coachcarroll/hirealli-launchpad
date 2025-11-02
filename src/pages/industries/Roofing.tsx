import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Shield, Phone, Star, ArrowRight, TrendingUp } from "lucide-react";
import { SEO } from "@/components/SEO";
import alliTeam from "@/assets/alli-team.png";
import djPhoto from "@/assets/dj-photo.jpg";

const Roofing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <SEO
        title="AI for Roofing Contractors - Never Miss a Storm Lead"
        description="Roofing contractors: Capture emergency repair calls 24/7, schedule inspections automatically, and manage storm season demand. AI receptionist for roofing companies."
        keywords="roofing AI, roofing contractor automation, roofing lead generation, storm damage leads, roofing software, roofer receptionist"
        canonical="/industries/roofing"
      />
      <Navigation />
      
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-glow/5 pointer-events-none" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                Roofing Services
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Stop Chasing Leads. Let Them <span className="text-primary">Come to You</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                Roofers using Alli capture every emergency call, showcase completed projects, and turn storm season into their best revenue month—all on autopilot.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow" asChild>
                  <a href="tel:+1234567890">
                    <Phone className="w-5 h-5 mr-2" />
                    Try Alli Live
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/pricing">
                    View Pricing
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-glow/20 rounded-2xl blur-2xl" />
              <img 
                src={alliTeam} 
                alt="Roofing business success" 
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Emergency Call Capture</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">2x</div>
              <div className="text-muted-foreground">Storm Season Revenue</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">No Missed Opportunities</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Why Roofers Trust Alli</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <Phone className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Never Miss Storm Damage Calls</h3>
                <p className="text-muted-foreground">
                  When a storm hits, Alli answers every emergency call instantly—even at 2 AM. No more missed opportunities when demand spikes.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Shield className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Showcase Your Best Work</h3>
                <p className="text-muted-foreground">
                  Automated before/after galleries and customer testimonials prove your quality and build trust with homeowners.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Star className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Build Your Reputation</h3>
                <p className="text-muted-foreground">
                  Automated review requests and social proof turn satisfied customers into your best marketing asset.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <TrendingUp className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Turn Browsers into Buyers</h3>
                <p className="text-muted-foreground">
                  AI lead detection identifies website visitors and captures their info, so you can follow up and close more deals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-muted/30 to-muted/10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Roofing Success Story</h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary-glow/10 rounded-2xl blur-xl" />
              <img 
                src={djPhoto} 
                alt="DJ Carroll - Founder" 
                className="relative rounded-2xl shadow-xl"
              />
            </div>
            
            <Card className="border-primary/20">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="text-4xl font-bold text-primary mb-2">2x</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">Storm Season Revenue</div>
                </div>
                
                <blockquote className="text-lg mb-6 leading-relaxed">
                  "After discovering AI marketing strategies, we built a system that captures every emergency call and turns website visitors into paying customers. Roofing contractors now book twice as many jobs during storm season."
                </blockquote>
                
                <div className="pt-6 border-t border-border">
                  <div className="font-semibold text-lg">DJ Carroll</div>
                  <div className="text-muted-foreground">Founder, Carroll.Media</div>
                </div>
                
                <Button className="w-full mt-6" variant="outline" asChild>
                  <Link to="/results">View More Results</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Capture Every Emergency Call?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            See how Alli can help you maximize storm season revenue and never miss another roofing opportunity.
          </p>
          <Button size="lg" asChild>
            <Link to="/pricing">Get Started Today</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Roofing;
