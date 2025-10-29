import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Bug, Shield, CalendarCheck, ArrowRight, Phone } from "lucide-react";
import alliTeam from "@/assets/alli-team.png";
import djCarroll from "@/assets/dj-carroll.jpg";

const PestControl = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-glow/5 pointer-events-none" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                <Bug className="w-4 h-4" />
                Pest Control
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Never Miss an <span className="text-primary">Emergency Call</span> Again
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                Pest control companies using Alli capture 9x more emergency calls and build 400+ recurring contracts. Answer every call, book every job.
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
                alt="Pest control success" 
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
              <div className="text-4xl font-bold text-primary mb-2">9x</div>
              <div className="text-muted-foreground">More Emergency Calls</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">400+</div>
              <div className="text-muted-foreground">Recurring Service Contracts</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Why Pest Control Companies Trust Alli</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <Bug className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">24/7 Emergency Response</h3>
                <p className="text-muted-foreground">
                  When homeowners discover pests at 11 PM, Alli captures the call and books the emergency service.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Shield className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Build Trust with Education</h3>
                <p className="text-muted-foreground">
                  Automated content marketing educates homeowners about prevention, positioning you as the expert.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <CalendarCheck className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Quarterly Service Contracts</h3>
                <p className="text-muted-foreground">
                  Convert one-time treatments into recurring quarterly service for predictable monthly revenue.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Check className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Commercial Opportunities</h3>
                <p className="text-muted-foreground">
                  Target restaurants, hotels, and property managers who need regular commercial pest control.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-muted/30 to-muted/10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Pest Control Success</h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary-glow/10 rounded-2xl blur-xl" />
              <img 
                src={djCarroll} 
                alt="Pest control business transformation" 
                className="relative rounded-2xl shadow-xl"
              />
            </div>
            
            <Card className="border-primary/20">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="text-4xl font-bold text-primary mb-2">400+</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">Recurring Service Contracts</div>
                </div>
                
                <blockquote className="text-lg mb-6 leading-relaxed">
                  "Emergency calls used to go to voicemail and we'd lose the job to competitors. Now Alli captures every call immediately. We've built 400+ recurring service contracts, completely transforming our revenue model."
                </blockquote>
                
                <div className="pt-6 border-t border-border">
                  <div className="font-semibold text-lg">Steve Anderson</div>
                  <div className="text-muted-foreground">Owner, Anderson Pest Solutions</div>
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
          <h2 className="text-3xl font-bold mb-6">Ready to Capture Every Call?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            See how Alli can help you respond to emergencies and build recurring revenue.
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

export default PestControl;
