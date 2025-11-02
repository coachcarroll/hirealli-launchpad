import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Sparkles, Calendar, Users, ArrowRight, Phone } from "lucide-react";
import { SEO } from "@/components/SEO";
import alliTeam from "@/assets/alli-team.png";
import djCarroll from "@/assets/dj-carroll.jpg";

const Cleaning = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <SEO
        title="AI for Cleaning Services - Automate Booking & Client Calls"
        description="Cleaning and housekeeping businesses: Book appointments automatically, answer inquiries 24/7, and manage scheduling without missing calls. AI receptionist for cleaning services."
        keywords="cleaning service AI, housekeeping automation, cleaning lead generation, maid service software, cleaning business automation"
        canonical="/industries/cleaning"
      />
      <Navigation />
      
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-glow/5 pointer-events-none" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Cleaning Services
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Build a <span className="text-primary">Fully Booked</span> Cleaning Business
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                Cleaning companies using Alli book 8x more recurring clients with 90% retention. Fill your schedule with loyal customers on autopilot.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow" asChild>
                  <a href="tel:+1234567890">
                    <Phone className="w-5 h-5 mr-2" />
                    Try Alli Live
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/pricing">
                    View Pricing
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-glow/20 rounded-2xl blur-2xl" />
              <img 
                src={alliTeam} 
                alt="Cleaning business growth" 
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">8x</div>
              <div className="text-muted-foreground">More Recurring Bookings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">90%</div>
              <div className="text-muted-foreground">Client Retention Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Schedule Utilization</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Why Cleaning Businesses Choose Alli</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <Sparkles className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Showcase Your Work</h3>
                <p className="text-muted-foreground">
                  Before/after photos and video testimonials build trust with homeowners seeking reliable cleaners.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Calendar className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Automated Booking</h3>
                <p className="text-muted-foreground">
                  Clients can book and reschedule appointments online 24/7 without phone tag.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Build Recurring Revenue</h3>
                <p className="text-muted-foreground">
                  Convert one-time cleanings into weekly or monthly recurring clients for predictable income.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Check className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Target Commercial Accounts</h3>
                <p className="text-muted-foreground">
                  Reach office buildings and businesses that need regular professional cleaning services.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-muted/30 to-muted/10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Real Cleaning Business Growth</h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary-glow/10 rounded-2xl blur-xl" />
              <img 
                src={djCarroll} 
                alt="Cleaning business success" 
                className="relative rounded-2xl shadow-xl"
              />
            </div>
            
            <Card className="border-primary/20">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="text-4xl font-bold text-primary mb-2">150</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">Recurring Customers</div>
                </div>
                
                <blockquote className="text-lg mb-6 leading-relaxed">
                  "We grew from 20 one-time clients to 150 recurring customers in less than a year. The automated marketing brings in leads constantly, and the online booking makes it easy for clients to say yes."
                </blockquote>
                
                <div className="pt-6 border-t border-border">
                  <div className="font-semibold text-lg">Maria Gonzalez</div>
                  <div className="text-muted-foreground">Owner, Sparkle Clean Services</div>
                </div>
                
                <Button className="w-full mt-6" variant="outline" asChild>
                  <Link to="/results">View More Results</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Fill Your Schedule?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            See how Alli can help you build a steady stream of recurring cleaning clients.
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

export default Cleaning;
