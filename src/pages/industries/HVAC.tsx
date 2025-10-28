import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Wind, Thermometer, TrendingUp } from "lucide-react";

const HVAC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />
      
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Marketing for <span className="text-primary">HVAC Companies</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Keep your calendar full year-round with AI that captures emergency calls and maintenance contracts.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">6x</div>
              <div className="text-muted-foreground">More Installation Leads</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">200+</div>
              <div className="text-muted-foreground">Maintenance Contracts</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50%</div>
              <div className="text-muted-foreground">Lower Marketing Cost</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Why HVAC Companies Trust Alli</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <Wind className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Emergency Call Capture</h3>
                <p className="text-muted-foreground">
                  Never miss a breakdown call. Alli answers 24/7 and dispatches you to emergency service opportunities.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Thermometer className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Seasonal Campaign Automation</h3>
                <p className="text-muted-foreground">
                  Automatically ramp up marketing before peak heating and cooling seasons to maximize installations.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <TrendingUp className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Build Recurring Revenue</h3>
                <p className="text-muted-foreground">
                  Convert one-time service calls into ongoing maintenance contracts for predictable monthly income.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Check className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Commercial Opportunities</h3>
                <p className="text-muted-foreground">
                  Reach property managers and business owners with large HVAC systems needing regular service.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Success Story</h2>
          <Card>
            <CardContent className="p-8">
              <blockquote className="text-lg italic mb-6">
                "We went from scrambling for work in the off-season to having steady income all year. Alli helped us build 200+ maintenance contracts that keep our technicians busy even in mild weather."
              </blockquote>
              <div className="flex items-center gap-4">
                <div>
                  <div className="font-semibold">Mike Johnson</div>
                  <div className="text-sm text-muted-foreground">Owner, Johnson Heating & Air</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready for Year-Round Revenue?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            See how Alli can help you capture emergency calls and build maintenance contracts.
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

export default HVAC;
