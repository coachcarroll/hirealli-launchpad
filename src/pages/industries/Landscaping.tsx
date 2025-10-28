import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Leaf, Camera, TrendingUp } from "lucide-react";

const Landscaping = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />
      
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Marketing for <span className="text-primary">Landscaping Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Grow your business with AI that showcases your transformations and fills your schedule year-round.
            </p>
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

      <section className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Success Story</h2>
          <Card>
            <CardContent className="p-8">
              <blockquote className="text-lg italic mb-6">
                "Alli helped us achieve a 1500% boost in brand visibility. We went from mowing lawns to winning high-end landscape design projects. The AI marketing positions us as premium professionals, not just another lawn service."
              </blockquote>
              <div className="flex items-center gap-4">
                <div>
                  <div className="font-semibold">Jake Morrison</div>
                  <div className="text-sm text-muted-foreground">Owner, Morrison Landscapes</div>
                </div>
              </div>
            </CardContent>
          </Card>
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
