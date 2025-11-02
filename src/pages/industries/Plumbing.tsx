import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Wrench, Phone, TrendingUp, Play } from "lucide-react";
import alliTeam from "@/assets/alli-team.png";
import { supabase } from "@/integrations/supabase/client";
import { useEffect, useState } from "react";

const Plumbing = () => {
  const [alliImage, setAlliImage] = useState<string>('');

  useEffect(() => {
    const loadImage = async () => {
      const { data } = supabase.storage
        .from('alli-images')
        .getPublicUrl('plumbing.png');
      setAlliImage(data.publicUrl);
    };
    loadImage();
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />
      
      {/* Hero Section with Video */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
                Home Services
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI Marketing for <span className="text-primary">Plumbing Services</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Turn emergency calls into loyal customers with AI that works while you work.
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
                src={alliImage || alliTeam} 
                alt="Alli AI Assistant for Plumbing" 
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow">
              <div className="text-5xl font-bold text-primary mb-2">122</div>
              <div className="text-muted-foreground font-medium">Leads in 6 Months</div>
              <div className="text-sm text-muted-foreground mt-2">Davis Plumbing Case Study</div>
            </div>
            <div className="text-center p-8 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow">
              <div className="text-5xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground font-medium">Calls Answered</div>
              <div className="text-sm text-muted-foreground mt-2">24/7 AI Reception</div>
            </div>
            <div className="text-center p-8 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow">
              <div className="text-5xl font-bold text-primary mb-2">$0</div>
              <div className="text-muted-foreground font-medium">Missed Opportunities</div>
              <div className="text-sm text-muted-foreground mt-2">Every lead captured</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Never Miss Another Call</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mb-6">
                  <Phone className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">24/7 Call Answering</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Alli answers every call, even when you're on a job or it's 2 AM. No more missed emergency service opportunities.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center mb-6">
                  <Wrench className="w-8 h-8 text-secondary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Retarget Website Visitors</h3>
                <p className="text-muted-foreground leading-relaxed">
                  When homeowners research plumbers online, Alli brings them back to book your services.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Social Proof That Converts</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Automated social media showcasing before/after photos and customer testimonials builds trust.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-glow to-secondary flex items-center justify-center mb-6">
                  <Check className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Track Every Dollar</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Know exactly which marketing channels bring in the most profitable customers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Study Section - Albert Services */}
      <section className="py-16 px-4 bg-gradient-to-br from-muted/50 to-background">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-4">
              Real Results
            </div>
            <h2 className="text-3xl font-bold mb-4">Case Study: Albert Services</h2>
            <p className="text-xl text-muted-foreground">
              Plumbing company in Dayton, OH
            </p>
          </div>
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2">
                <div className="p-10 flex flex-col justify-center bg-gradient-to-br from-primary/5 to-transparent">
                  <blockquote className="text-xl italic mb-6 leading-relaxed">
                    "We've been burned by agencies before. This is the first time we've seen real ROI. The cost per click is incredible and we're getting quality leads consistently."
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-2xl font-bold text-primary">
                      TA
                    </div>
                    <div>
                      <div className="font-semibold text-lg">Tim Albert</div>
                      <div className="text-sm text-muted-foreground">Owner, Albert Services - Dayton, OH</div>
                    </div>
                  </div>
                </div>
                <div className="bg-primary/10 flex flex-col items-center justify-center p-10">
                  <div className="text-center mb-6">
                    <div className="text-5xl font-bold text-primary mb-2">$0.30</div>
                    <div className="text-lg font-medium">Cost Per Click</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">3,570</div>
                    <div className="text-sm text-muted-foreground">Link Clicks in 3 Months</div>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Stop Missing Calls?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            See how Alli can help you capture every opportunity and grow your plumbing business. No contracts required. Setup in 48 hours.
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

export default Plumbing;
