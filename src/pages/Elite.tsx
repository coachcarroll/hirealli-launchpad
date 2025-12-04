import { Check, TrendingUp, Users, Zap, Award, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Elite = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = async () => {
    setIsLoading(true);
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        toast({
          title: "Authentication Required",
          description: "Please sign in to continue with checkout.",
          variant: "destructive",
        });
        return;
      }

      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: { priceId: 'price_1SXSvcD8hbSdYbHswiziKUKJ' }
      });

      if (error) throw error;

      if (data?.url) {
        window.open(data.url, '_blank');
      }
    } catch (error) {
      console.error('Checkout error:', error);
      toast({
        title: "Checkout Error",
        description: "Failed to create checkout session. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const valueStack = [
    { item: "12-Month Alli License", value: "$7,500" },
    { item: "AI Bootcamp + Playbook", value: "$800" },
    { item: "Done-For-You CRM Sync", value: "$1,000" },
    { item: "Bonuses (Training, Access, Advisory)", value: "$2,500" },
  ];

  const bonuses = [
    {
      icon: Users,
      title: "Conversion Playbook Training",
      description: "Behind-the-scenes training with the Martell Media team on 'How to Convert Visitor Intelligence into Revenue — Legally & Effectively.'",
      value: "$1,500 Value"
    },
    {
      icon: Rocket,
      title: "Early Access Tools",
      description: "Get early access to our upcoming engagement tools before the market sees them.",
      value: "$500 Value"
    },
    {
      icon: Award,
      title: "Advisory Board Access",
      description: "Quarterly client advisory calls where you help shape Alli's roadmap.",
      value: "$500 Value"
    }
  ];

  const benefits = [
    "Name & Email",
    "Location & Intent",
    "Visit History",
    "Automatic CRM Sync"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold mb-6">
            Dan Martell's Elite Coaching Group Exclusive
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            The Invisible Pipeline:<br />Stop Paying for Ghosts
          </h1>
        </div>
      </section>

      {/* Pricing CTA - Moved to Top */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-3xl mx-auto">
          <Card className="bg-gradient-to-br from-primary/10 via-background to-primary-glow/10 border-2 border-primary">
            <CardContent className="pt-8 text-center">
              <p className="text-sm text-muted-foreground mb-2">TOTAL VALUE</p>
              <p className="text-3xl text-muted-foreground line-through mb-4">$11,800+</p>
              
              <div className="mb-6">
                <p className="text-lg font-semibold mb-2">Early Adopter Elite Member Special!</p>
                <p className="text-6xl font-bold text-primary mb-2">$4,997</p>
                <p className="text-sm text-destructive font-semibold">Limited to First 10 People Only</p>
              </div>

              <Button 
                size="lg" 
                className="text-xl px-12 py-6 mb-6"
                onClick={handleCheckout}
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : "Claim Your Spot Now"}
              </Button>

              <div className="pt-6 border-t border-border">
                <p className="text-lg font-semibold mb-4">30-Day Unconditional Money-Back Guarantee</p>
                <p className="text-muted-foreground">
                  Install Alli. Let it run. If you don't feel massive value, you get 100% back. No conditions.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Elite;