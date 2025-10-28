import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Laptop, Shield, Clock } from "lucide-react";

const ITTechSupport = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />
      
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Marketing for <span className="text-primary">IT & Tech Support</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Fill your pipeline with businesses that need reliable IT support—automatically.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">6x</div>
              <div className="text-muted-foreground">More Business Leads</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Lead Capture Active</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">45%</div>
              <div className="text-muted-foreground">Lower Acquisition Cost</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Why IT Companies Choose Alli</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <Laptop className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Target Business Clients</h3>
                <p className="text-muted-foreground">
                  Stop wasting time on consumer calls. Alli targets and captures B2B leads that match your ideal client profile.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Shield className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Build Trust Before the Call</h3>
                <p className="text-muted-foreground">
                  Automated nurture campaigns establish credibility so prospects are ready to buy when you reach out.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Clock className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Qualify Leads Automatically</h3>
                <p className="text-muted-foreground">
                  Alli asks the right questions so you only spend time on prospects who actually need your services.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Check className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Predictable Monthly Revenue</h3>
                <p className="text-muted-foreground">
                  Consistent lead flow means consistent revenue. No more feast or famine months.
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
                "Before Alli, we were getting maybe 2-3 qualified leads per month. Now we're closing 8-10 new managed services contracts monthly. The AI does all the marketing heavy lifting while we focus on delivering great service."
              </blockquote>
              <div className="flex items-center gap-4">
                <div>
                  <div className="font-semibold">Mark Davidson</div>
                  <div className="text-sm text-muted-foreground">Owner, TechGuard Solutions</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Grow Your IT Business?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            See how Alli can fill your pipeline with qualified business clients.
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

export default ITTechSupport;
