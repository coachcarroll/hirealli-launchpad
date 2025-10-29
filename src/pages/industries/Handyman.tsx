import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Hammer, Phone, Star, ArrowRight } from "lucide-react";
import alliTeam from "@/assets/alli-team.png";
import djCarroll from "@/assets/dj-carroll.jpg";

const Handyman = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-glow/5 pointer-events-none" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                <Hammer className="w-4 h-4" />
                Handyman Services
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Keep Your Calendar <span className="text-primary">Fully Booked</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                Handymen using Alli get 10x more service calls with 100% schedule utilization. Never scramble for work again.
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
                alt="Handyman business success" 
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
              <div className="text-4xl font-bold text-primary mb-2">10x</div>
              <div className="text-muted-foreground">More Service Calls</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Schedule Utilization</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Property Manager Clients</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Why Handymen Trust Alli</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <Phone className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Never Miss a Call</h3>
                <p className="text-muted-foreground">
                  Alli answers every call while you're on the job, capturing service requests and booking appointments.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Hammer className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Showcase Your Skills</h3>
                <p className="text-muted-foreground">
                  Photo galleries of completed projects demonstrate your versatility and quality workmanship.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Star className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Build Your Reputation</h3>
                <p className="text-muted-foreground">
                  Automated review requests and testimonial showcasing establish you as the reliable handyman in your area.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Check className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Win Property Management Contracts</h3>
                <p className="text-muted-foreground">
                  Target property managers and landlords who need a go-to handyman for ongoing maintenance work.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-muted/30 to-muted/10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Handyman Success Story</h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary-glow/10 rounded-2xl blur-xl" />
              <img 
                src={djCarroll} 
                alt="Handyman business transformation" 
                className="relative rounded-2xl shadow-xl"
              />
            </div>
            
            <Card className="border-primary/20">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">Schedule Utilization</div>
                </div>
                
                <blockquote className="text-lg mb-6 leading-relaxed">
                  "I went from scrambling for work to turning down jobs. Alli keeps my schedule fully booked with a mix of homeowners and property managers. The AI handles all the scheduling so I can focus on fixing things."
                </blockquote>
                
                <div className="pt-6 border-t border-border">
                  <div className="font-semibold text-lg">Rick Martinez</div>
                  <div className="text-muted-foreground">Owner, Rick's Handyman Services</div>
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
          <h2 className="text-3xl font-bold mb-6">Ready to Fill Your Calendar?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            See how Alli can help you build a steady stream of service calls and property management contracts.
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

export default Handyman;
