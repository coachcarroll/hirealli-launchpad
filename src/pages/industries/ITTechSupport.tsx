import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Laptop, Shield, Clock, ArrowRight, Phone } from "lucide-react";
import { SEO } from "@/components/SEO";
import alliTeam from "@/assets/alli-team.png";
import djCarroll from "@/assets/dj-carroll.jpg";

const ITTechSupport = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <SEO
        title="AI for IT & Tech Support Companies - 24/7 Client Support"
        description="IT and tech support businesses: Answer every support call 24/7, qualify leads, and capture urgent requests automatically. Scale your support without hiring more technicians."
        keywords="IT support automation, tech support AI, MSP automation, IT lead generation, technical support automation"
        canonical="/industries/it-tech-support"
      />
      <Navigation />
      
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-glow/5 pointer-events-none" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                <Laptop className="w-4 h-4" />
                IT & Tech Support
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Fill Your Pipeline with <span className="text-primary">Quality MSP Leads</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                IT firms using Alli generate 6x more business leads with 45% lower acquisition costs. Stop chasing tire-kickers, start closing contracts.
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
                alt="IT marketing automation" 
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
              <div className="text-4xl font-bold text-primary mb-2">6x</div>
              <div className="text-muted-foreground">More Business Leads</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Lead Capture Active</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">45%</div>
              <div className="text-muted-foreground">Lower Acquisition Cost</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Why IT Companies Choose Alli</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <Laptop className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Target Business Clients</h3>
                <p className="text-muted-foreground">
                  Stop wasting time on consumer calls. Alli targets and captures B2B leads that match your ideal client profile.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Shield className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Build Trust Before the Call</h3>
                <p className="text-muted-foreground">
                  Automated nurture campaigns establish credibility so prospects are ready to buy when you reach out.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Clock className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Qualify Leads Automatically</h3>
                <p className="text-muted-foreground">
                  Alli asks the right questions so you only spend time on prospects who actually need your services.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Check className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Predictable Monthly Revenue</h3>
                <p className="text-muted-foreground">
                  Consistent lead flow means consistent revenue. No more feast or famine months.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-muted/30 to-muted/10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Real MSP Success</h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary-glow/10 rounded-2xl blur-xl" />
              <img 
                src={djCarroll} 
                alt="MSP success story" 
                className="relative rounded-2xl shadow-xl"
              />
            </div>
            
            <Card className="border-primary/20">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="text-4xl font-bold text-primary mb-2">8-10</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">New Contracts Monthly</div>
                </div>
                
                <blockquote className="text-lg mb-6 leading-relaxed">
                  "Before Alli, we were getting maybe 2-3 qualified leads per month. Now we're closing 8-10 new managed services contracts monthly. The AI does all the marketing heavy lifting while we focus on delivering great service."
                </blockquote>
                
                <div className="pt-6 border-t border-border">
                  <div className="font-semibold text-lg">Mark Davidson</div>
                  <div className="text-muted-foreground">Owner, TechGuard Solutions</div>
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
          <h2 className="text-3xl font-bold mb-6">Ready to Grow Your IT Business?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            See how Alli can fill your pipeline with qualified business clients.
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

export default ITTechSupport;
