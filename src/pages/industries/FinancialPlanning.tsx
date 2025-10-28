import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, PiggyBank, TrendingUp, Users } from "lucide-react";

const FinancialPlanning = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />
      
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Marketing for <span className="text-primary">Financial Planners</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Attract high-value clients who need wealth management and retirement planning.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">$2M+</div>
              <div className="text-muted-foreground">Average Client AUM</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">5x</div>
              <div className="text-muted-foreground">More Qualified Prospects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">80%</div>
              <div className="text-muted-foreground">Client Conversion Rate</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Why Financial Advisors Trust Alli</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <PiggyBank className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Target Affluent Clients</h3>
                <p className="text-muted-foreground">
                  Reach individuals and families with significant assets who need professional wealth management.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <TrendingUp className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Build Your Brand as a Trusted Advisor</h3>
                <p className="text-muted-foreground">
                  Educational content marketing positions you as the go-to expert for financial planning.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Nurture Long-Term Relationships</h3>
                <p className="text-muted-foreground">
                  Automated follow-up keeps you top-of-mind when prospects are ready to commit.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Check className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Compliant Marketing</h3>
                <p className="text-muted-foreground">
                  All marketing materials can be reviewed and approved to meet industry regulations.
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
                "Alli helped me grow my AUM by $15M in just 12 months. The AI attracts exactly the type of clients I want to work with—people who value professional advice and are ready to take action on their financial future."
              </blockquote>
              <div className="flex items-center gap-4">
                <div>
                  <div className="font-semibold">Patricia Hughes</div>
                  <div className="text-sm text-muted-foreground">CFP®, Hughes Wealth Management</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Grow Your Practice?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            See how Alli can help you attract high-value clients consistently.
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

export default FinancialPlanning;
