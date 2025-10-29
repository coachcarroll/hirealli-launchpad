import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Calculator, TrendingUp, Clock, Play, FileText } from "lucide-react";
import alliTeam from "@/assets/alli-team.png";

const AccountingTax = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
                Professional Services
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI Marketing for <span className="text-primary">Accounting & Tax Services</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Attract more clients during tax season and beyond with AI that works around the clock.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link to="/pricing">Get Started Today</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="https://go.oncehub.com/cmcsalesteam" target="_blank" rel="noopener noreferrer">
                    <Play className="w-5 h-5 mr-2" />
                    Watch Demo
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-glow/20 rounded-2xl blur-2xl" />
              <img 
                src={alliTeam} 
                alt="Alli AI Assistant for Accounting & Tax" 
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/5 to-primary-glow/5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-card border border-border hover:shadow-xl transition-all">
              <div className="text-5xl font-bold text-primary mb-2">4x</div>
              <div className="text-lg font-medium mb-2">More Tax Season Clients</div>
              <div className="text-sm text-muted-foreground">peak performance</div>
            </div>
            <div className="text-center p-8 rounded-xl bg-card border border-border hover:shadow-xl transition-all">
              <div className="text-5xl font-bold text-primary mb-2">100+</div>
              <div className="text-lg font-medium mb-2">Hours Saved Annually</div>
              <div className="text-sm text-muted-foreground">automated marketing</div>
            </div>
            <div className="text-center p-8 rounded-xl bg-card border border-border hover:shadow-xl transition-all">
              <div className="text-5xl font-bold text-primary mb-2">60%</div>
              <div className="text-lg font-medium mb-2">Lower Client Acquisition Cost</div>
              <div className="text-sm text-muted-foreground">vs traditional methods</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Accounting Firms Love Alli</h2>
            <p className="text-xl text-muted-foreground">Built for seasonal peaks and year-round growth</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mb-6">
                  <Calculator className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Peak Season Ready</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Handle the influx of tax season inquiries without hiring additional staff. Alli captures every lead automatically.
                </p>
                <div className="flex items-center gap-2 text-sm text-primary">
                  <Check className="w-4 h-4" />
                  <span>Unlimited lead capture</span>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center mb-6">
                  <Clock className="w-8 h-8 text-secondary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Year-Round Lead Generation</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Keep your pipeline full even in the off-season with automated marketing that attracts business clients.
                </p>
                <div className="flex items-center gap-2 text-sm text-primary">
                  <Check className="w-4 h-4" />
                  <span>Always-on marketing</span>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Smart Retargeting</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Bring back website visitors who didn't book a consultation the first time they visited.
                </p>
                <div className="flex items-center gap-2 text-sm text-primary">
                  <Check className="w-4 h-4" />
                  <span>Pixel tracking included</span>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-glow to-secondary flex items-center justify-center mb-6">
                  <FileText className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Appointment Scheduling</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Alli handles appointment booking so you can focus on serving clients, not managing calendars.
                </p>
                <div className="flex items-center gap-2 text-sm text-primary">
                  <Check className="w-4 h-4" />
                  <span>Calendar integration</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-muted/50 to-background">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-4">
              Real Results
            </div>
            <h2 className="text-3xl font-bold mb-4">Martinez Tax Services</h2>
            <p className="text-xl text-muted-foreground">
              Best tax season ever with 40% more leads
            </p>
          </div>
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2">
                <div className="p-10 flex flex-col justify-center bg-gradient-to-br from-primary/5 to-transparent">
                  <blockquote className="text-xl italic mb-6 leading-relaxed">
                    "Last tax season was our best ever. Alli helped us capture 40% more leads than the previous year, and we didn't have to hire extra help to manage inquiries."
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-2xl font-bold text-primary">
                      JM
                    </div>
                    <div>
                      <div className="font-semibold text-lg">Jennifer Martinez</div>
                      <div className="text-sm text-muted-foreground">CPA, Martinez Tax Services</div>
                    </div>
                  </div>
                </div>
                <div className="bg-primary/10 flex items-center justify-center p-10">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-primary mb-2">40%</div>
                    <div className="text-xl font-medium mb-4">More Leads</div>
                    <div className="text-sm text-muted-foreground">YoY growth</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Practice?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of accounting firms using Alli to grow their client base.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg" asChild>
              <Link to="/pricing">Get Started Today</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg" asChild>
              <a href="https://go.oncehub.com/cmcsalesteam" target="_blank" rel="noopener noreferrer">
                Schedule a Demo
              </a>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            ✓ No contracts required  •  ✓ Setup in 48 hours  •  ✓ US-based support
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AccountingTax;
