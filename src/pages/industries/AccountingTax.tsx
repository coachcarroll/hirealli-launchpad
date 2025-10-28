import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Calculator, TrendingUp, Clock } from "lucide-react";

const AccountingTax = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />
      
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Marketing for <span className="text-primary">Accounting & Tax Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Attract more clients during tax season and beyond with AI that works around the clock.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">4x</div>
              <div className="text-muted-foreground">More Tax Season Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <div className="text-muted-foreground">Hours Saved Annually</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">60%</div>
              <div className="text-muted-foreground">Lower Client Acquisition Cost</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Why Accounting Firms Love Alli</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <Calculator className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Peak Season Ready</h3>
                <p className="text-muted-foreground">
                  Handle the influx of tax season inquiries without hiring additional staff. Alli captures every lead automatically.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Clock className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Year-Round Lead Generation</h3>
                <p className="text-muted-foreground">
                  Keep your pipeline full even in the off-season with automated marketing that attracts business clients.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <TrendingUp className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Smart Retargeting</h3>
                <p className="text-muted-foreground">
                  Bring back website visitors who didn't book a consultation the first time they visited.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Check className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Appointment Scheduling</h3>
                <p className="text-muted-foreground">
                  Alli handles appointment booking so you can focus on serving clients, not managing calendars.
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
                "Last tax season was our best ever. Alli helped us capture 40% more leads than the previous year, and we didn't have to hire extra help to manage inquiries."
              </blockquote>
              <div className="flex items-center gap-4">
                <div>
                  <div className="font-semibold">Jennifer Martinez</div>
                  <div className="text-sm text-muted-foreground">CPA, Martinez Tax Services</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Practice?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join hundreds of accounting firms using Alli to grow their client base.
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

export default AccountingTax;
