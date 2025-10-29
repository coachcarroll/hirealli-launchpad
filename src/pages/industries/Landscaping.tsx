import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Leaf, Camera, TrendingUp, ArrowRight, Phone } from "lucide-react";
import alliTeam from "@/assets/alli-team.png";
import djCarroll from "@/assets/dj-carroll.jpg";

const Landscaping = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-glow/5 pointer-events-none" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                <Leaf className="w-4 h-4" />
                Landscaping Services
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Grow Your <span className="text-primary">Landscape Business</span> Fast
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                Landscapers using Alli achieve 1500% brand visibility boost and land 300+ new clients per year. Turn seasonal work into year-round revenue.
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
                alt="Landscaping marketing success" 
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
              <div className="text-4xl font-bold text-primary mb-2">1500%</div>
              <div className="text-muted-foreground">Brand Visibility Boost</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">300+</div>
              <div className="text-muted-foreground">New Clients Per Year</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">85%</div>
              <div className="text-muted-foreground">Client Retention</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Why Landscapers Love Alli</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <Camera className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Visual Portfolio Marketing</h3>
                <p className="text-muted-foreground">
                  Before/after photos and project videos showcase your work beautifully, attracting high-value clients.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Leaf className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Seasonal Campaign Automation</h3>
                <p className="text-muted-foreground">
                  Automatically promote spring cleanups, summer maintenance, fall leaf removal, and winter snow services.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <TrendingUp className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Recurring Maintenance Contracts</h3>
                <p className="text-muted-foreground">
                  Turn one-time projects into year-round maintenance accounts for stable monthly revenue.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Check className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Commercial Property Leads</h3>
                <p className="text-muted-foreground">
                  Target HOAs, property managers, and commercial properties needing professional landscape services.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-muted/30 to-muted/10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Landscape Business Growth</h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary-glow/10 rounded-2xl blur-xl" />
              <img 
                src={djCarroll} 
                alt="Landscaping success story" 
                className="relative rounded-2xl shadow-xl"
              />
            </div>
            
            <Card className="border-primary/20">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="text-4xl font-bold text-primary mb-2">1500%</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">Brand Visibility Increase</div>
                </div>
                
                <blockquote className="text-lg mb-6 leading-relaxed">
                  "Alli helped us achieve a 1500% boost in brand visibility. We went from mowing lawns to winning high-end landscape design projects. The AI marketing positions us as premium professionals, not just another lawn service."
                </blockquote>
                
                <div className="pt-6 border-t border-border">
                  <div className="font-semibold text-lg">Jake Morrison</div>
                  <div className="text-muted-foreground">Owner, Morrison Landscapes</div>
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
          <h2 className="text-3xl font-bold mb-6">Ready to Grow Your Landscaping Business?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            See how Alli can help you win premium projects and build recurring revenue.
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

export default Landscaping;
