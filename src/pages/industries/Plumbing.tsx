import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Wrench, Phone, TrendingUp } from "lucide-react";

const Plumbing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />
      
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Marketing for <span className="text-primary">Plumbing Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Turn emergency calls into loyal customers with AI that works while you work.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">122</div>
              <div className="text-muted-foreground">Leads in 6 Months</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Calls Answered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">$0</div>
              <div className="text-muted-foreground">Missed Opportunities</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Never Miss Another Call</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <Phone className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">24/7 Call Answering</h3>
                <p className="text-muted-foreground">
                  Alli answers every call, even when you're on a job or it's 2 AM. No more missed emergency service opportunities.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Wrench className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Retarget Website Visitors</h3>
                <p className="text-muted-foreground">
                  When homeowners research plumbers online, Alli brings them back to book your services.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <TrendingUp className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Social Proof That Converts</h3>
                <p className="text-muted-foreground">
                  Automated social media showcasing before/after photos and customer testimonials builds trust.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Check className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Track Every Dollar</h3>
                <p className="text-muted-foreground">
                  Know exactly which marketing channels bring in the most profitable customers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Case Study: Davis Plumbing</h2>
          <Card>
            <CardContent className="p-8">
              <blockquote className="text-lg italic mb-6">
                "We built our entire brand from scratch with Alli and generated 122 leads in just 6 months. Every call is answered, every lead is captured. It's like having a full office staff for a fraction of the cost."
              </blockquote>
              <div className="flex items-center gap-4">
                <div>
                  <div className="font-semibold">Tom Davis</div>
                  <div className="text-sm text-muted-foreground">Owner, Davis Plumbing Services</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Stop Missing Calls?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            See how Alli can help you capture every opportunity and grow your plumbing business.
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

export default Plumbing;
