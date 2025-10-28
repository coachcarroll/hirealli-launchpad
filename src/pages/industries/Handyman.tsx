import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Hammer, Phone, Star } from "lucide-react";

const Handyman = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />
      
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Marketing for <span className="text-primary">Handyman Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Keep your calendar full with homeowners and property managers who need reliable help.
            </p>
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

      <section className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Real Results</h2>
          <Card>
            <CardContent className="p-8">
              <blockquote className="text-lg italic mb-6">
                "I went from scrambling for work to turning down jobs. Alli keeps my schedule fully booked with a mix of homeowners and property managers. The AI handles all the scheduling so I can focus on fixing things."
              </blockquote>
              <div className="flex items-center gap-4">
                <div>
                  <div className="font-semibold">Rick Martinez</div>
                  <div className="text-sm text-muted-foreground">Owner, Rick's Handyman Services</div>
                </div>
              </div>
            </CardContent>
          </Card>
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
