import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, DollarSign, TrendingUp, Target, ArrowRight, Phone } from "lucide-react";
import alliTeam from "@/assets/alli-team.png";
import djCarroll from "@/assets/dj-carroll.jpg";

const FinancialPlanning = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-glow/5 pointer-events-none" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                <DollarSign className="w-4 h-4" />
                Financial Planning
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Attract <span className="text-primary">High-Value Clients</span> Automatically
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                Financial advisors using Alli attract 4x more qualified prospects and convert 35% more consultations. Build your book with clients who value expertise.
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
                alt="Financial advisor marketing" 
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
              <div className="text-4xl font-bold text-primary mb-2">$2M+</div>
              <div className="text-muted-foreground">Average Client AUM</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">5x</div>
              <div className="text-muted-foreground">More Qualified Prospects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">80%</div>
              <div className="text-muted-foreground">Client Conversion Rate</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Why Financial Advisors Trust Alli</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <DollarSign className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Target Affluent Clients</h3>
                <p className="text-muted-foreground">
                  Reach individuals and families with significant assets who need professional wealth management.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <TrendingUp className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Build Your Brand as a Trusted Advisor</h3>
                <p className="text-muted-foreground">
                  Educational content marketing positions you as the go-to expert for financial planning.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Target className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Nurture Long-Term Relationships</h3>
                <p className="text-muted-foreground">
                  Automated follow-up keeps you top-of-mind when prospects are ready to commit.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Check className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Compliant Marketing</h3>
                <p className="text-muted-foreground">
                  All marketing materials can be reviewed and approved to meet industry regulations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-muted/30 to-muted/10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Advisor Success Story</h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary-glow/10 rounded-2xl blur-xl" />
              <img 
                src={djCarroll} 
                alt="Financial advisor success" 
                className="relative rounded-2xl shadow-xl"
              />
            </div>
            
            <Card className="border-primary/20">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="text-4xl font-bold text-primary mb-2">$15M</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">AUM Growth in 12 Months</div>
                </div>
                
                <blockquote className="text-lg mb-6 leading-relaxed">
                  "Alli helped me grow my AUM by $15M in just 12 months. The AI attracts exactly the type of clients I want to work with—people who value professional advice and are ready to take action on their financial future."
                </blockquote>
                
                <div className="pt-6 border-t border-border">
                  <div className="font-semibold text-lg">Patricia Hughes</div>
                  <div className="text-muted-foreground">CFP®, Hughes Wealth Management</div>
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
          <h2 className="text-3xl font-bold mb-6">Ready to Grow Your Practice?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            See how Alli can help you attract high-value clients consistently.
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

export default FinancialPlanning;
