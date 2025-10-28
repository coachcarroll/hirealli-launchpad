import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Users, Target, TrendingUp } from "lucide-react";

const HumanResources = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />
      
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Marketing for <span className="text-primary">HR Consultants</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Connect with businesses that need HR expertise, compliance support, and talent solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">7x</div>
              <div className="text-muted-foreground">More B2B Leads</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">65%</div>
              <div className="text-muted-foreground">Client Conversion Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">40%</div>
              <div className="text-muted-foreground">Lower Marketing Cost</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Why HR Firms Choose Alli</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Reach Growing Companies</h3>
                <p className="text-muted-foreground">
                  Target businesses at the stage where they need professional HR support but can't afford full-time staff.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Target className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Position Your Expertise</h3>
                <p className="text-muted-foreground">
                  Educational content establishes you as the HR expert businesses turn to when they have questions.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <TrendingUp className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Generate Recurring Revenue</h3>
                <p className="text-muted-foreground">
                  Attract clients who need ongoing HR support, not just one-time projects.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Check className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Automated Lead Qualification</h3>
                <p className="text-muted-foreground">
                  Alli identifies companies with the employee count and pain points that match your services.
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
                "We doubled our client roster in 6 months. Alli brings us qualified leads from companies that actually need HR help, not tire-kickers. It's been transformational for our growth."
              </blockquote>
              <div className="flex items-center gap-4">
                <div>
                  <div className="font-semibold">Linda Foster</div>
                  <div className="text-sm text-muted-foreground">Principal, Foster HR Solutions</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Grow Your HR Practice?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            See how Alli can fill your pipeline with businesses that need HR expertise.
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

export default HumanResources;
