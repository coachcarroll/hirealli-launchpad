import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Briefcase, Target, Users } from "lucide-react";

const BusinessConsulting = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />
      
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Marketing for <span className="text-primary">Business Consultants</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stop chasing leads. Let AI bring qualified prospects to you automatically.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">5x</div>
              <div className="text-muted-foreground">More Qualified Leads</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">70%</div>
              <div className="text-muted-foreground">Time Saved on Marketing</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">90%</div>
              <div className="text-muted-foreground">Client Retention Rate</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Built for Consultants</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <Briefcase className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Position Yourself as the Expert</h3>
                <p className="text-muted-foreground">
                  Automated content marketing establishes your authority and attracts businesses seeking your expertise.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Target className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Target Decision Makers</h3>
                <p className="text-muted-foreground">
                  Reach business owners and executives who have the authority to hire you.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Scale Your Outreach</h3>
                <p className="text-muted-foreground">
                  Alli does the work of an entire marketing team for a fraction of the cost.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Check className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
                <p className="text-muted-foreground">
                  Track ROI on every marketing dollar and optimize what works best for your consulting business.
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
                "I went from spending 20 hours a week on marketing to just 2 hours. Alli handles everything else, and my lead quality has never been better. This is a game-changer for solo consultants."
              </blockquote>
              <div className="flex items-center gap-4">
                <div>
                  <div className="font-semibold">Robert Chen</div>
                  <div className="text-sm text-muted-foreground">Business Strategy Consultant</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Scale Your Consulting Business?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            See how Alli can fill your pipeline with qualified leads in just 15 minutes.
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

export default BusinessConsulting;
