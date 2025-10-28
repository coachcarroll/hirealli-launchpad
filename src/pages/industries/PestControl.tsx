import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Bug, Shield, CalendarCheck } from "lucide-react";

const PestControl = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />
      
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Marketing for <span className="text-primary">Pest Control</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Capture emergency calls and build recurring contracts with AI that never sleeps.
            </p>
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

      <section className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Real Results</h2>
          <Card>
            <CardContent className="p-8">
              <blockquote className="text-lg italic mb-6">
                "Emergency calls used to go to voicemail and we'd lose the job to competitors. Now Alli captures every call immediately. We've built 400+ recurring service contracts, completely transforming our revenue model."
              </blockquote>
              <div className="flex items-center gap-4">
                <div>
                  <div className="font-semibold">Steve Anderson</div>
                  <div className="text-sm text-muted-foreground">Owner, Anderson Pest Solutions</div>
                </div>
              </div>
            </CardContent>
          </Card>
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
