import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Megaphone, BarChart, Zap } from "lucide-react";

const MarketingAdvertising = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />
      
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Marketing for <span className="text-primary">Marketing Agencies</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Give your clients enterprise-level AI marketing at a price that makes you the hero.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">10x</div>
              <div className="text-muted-foreground">Client ROI Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">85%</div>
              <div className="text-muted-foreground">Time Saved on Reporting</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">2x</div>
              <div className="text-muted-foreground">More Clients Per Team Member</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">White Label AI for Agencies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <Megaphone className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Add AI to Your Service Stack</h3>
                <p className="text-muted-foreground">
                  Offer cutting-edge AI marketing without building the technology yourself. White label Alli for your clients.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <BarChart className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Prove ROI Instantly</h3>
                <p className="text-muted-foreground">
                  Show clients exactly what's working with real-time analytics and attribution tracking.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Zap className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Scale Without Hiring</h3>
                <p className="text-muted-foreground">
                  Manage more clients with the same team size. Alli handles the heavy lifting.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Check className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Increase Client Retention</h3>
                <p className="text-muted-foreground">
                  When clients see results, they stay. Alli delivers measurable outcomes every month.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Agency Success Story</h2>
          <Card>
            <CardContent className="p-8">
              <blockquote className="text-lg italic mb-6">
                "We added Alli to our service offering and within 3 months signed 12 new clients. The AI does work that would normally require 3 full-time employees. Our margins have never been better."
              </blockquote>
              <div className="flex items-center gap-4">
                <div>
                  <div className="font-semibold">Sarah Williams</div>
                  <div className="text-sm text-muted-foreground">Founder, Williams Digital Marketing</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Add AI to Your Agency?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            See how Alli can help you win more clients and increase margins.
          </p>
          <Button size="lg" asChild>
            <Link to="/pricing">Partner With Us</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MarketingAdvertising;
