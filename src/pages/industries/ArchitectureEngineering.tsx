import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Compass, Building, TrendingUp } from "lucide-react";

const ArchitectureEngineering = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />
      
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Marketing for <span className="text-primary">Architecture & Engineering</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Win more projects with AI that showcases your portfolio and attracts ideal clients.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">4x</div>
              <div className="text-muted-foreground">More Project Inquiries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">$500K+</div>
              <div className="text-muted-foreground">Average Project Value</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">75%</div>
              <div className="text-muted-foreground">Lead Quality Improvement</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Built for Design Professionals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <Compass className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Showcase Your Portfolio</h3>
                <p className="text-muted-foreground">
                  AI-powered marketing highlights your best work to attract clients seeking your specific design style and expertise.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Building className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Target High-Value Projects</h3>
                <p className="text-muted-foreground">
                  Connect with developers, businesses, and homeowners planning significant construction projects.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <TrendingUp className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Build Your Reputation</h3>
                <p className="text-muted-foreground">
                  Consistent online presence establishes your firm as a leader in your specialty.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Check className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Nurture Long Sales Cycles</h3>
                <p className="text-muted-foreground">
                  Stay in touch with prospects through their planning process until they're ready to hire.
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
                "We went from relying on word-of-mouth to having a predictable pipeline of commercial projects. Alli showcases our work beautifully and brings in exactly the type of clients we want to work with."
              </blockquote>
              <div className="flex items-center gap-4">
                <div>
                  <div className="font-semibold">James Anderson</div>
                  <div className="text-sm text-muted-foreground">Principal Architect, Anderson Design Group</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Win More Projects?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            See how Alli can help you attract high-value clients and showcase your expertise.
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

export default ArchitectureEngineering;
