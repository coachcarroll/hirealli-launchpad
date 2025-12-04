import { Shield, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-8 px-6 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 border border-primary/20 rounded-full text-primary font-semibold mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            <span>Dan Martell's Elite Coaching Group Exclusive</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="bg-gradient-to-r from-primary via-primary to-primary-glow bg-clip-text text-transparent">
              The Invisible Pipeline:
            </span>
            <br />
            <span className="text-foreground">Stop Paying for Ghosts</span>
          </h1>
        </div>
      </section>

      {/* Pricing Card */}
      <section className="py-8 pb-20 px-6 relative">
        <div className="max-w-xl mx-auto">
          <Card className="relative overflow-hidden border-2 border-primary/50 shadow-2xl shadow-primary/20 animate-scale-in">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5" />
            
            {/* Glow effect */}
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-40 h-40 bg-primary/30 rounded-full blur-3xl" />
            
            <CardContent className="pt-10 pb-8 px-8 text-center relative z-10">
              {/* Total Value */}
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Total Value</p>
              <p className="text-2xl text-muted-foreground/70 line-through mb-6">$13,300</p>
              
              {/* Special offer */}
              <div className="mb-8">
                <p className="text-base font-semibold text-foreground mb-3">
                  Early Adopter Elite Member Special!
                </p>
                <p className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent mb-3">
                  $4,997
                </p>
                <p className="text-sm font-semibold text-destructive">
                  Limited to First 10 People Only
                </p>
              </div>

              {/* CTA Button */}
              <Button 
                size="lg" 
                className="w-full max-w-sm text-lg py-7 mb-8 group transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
                onClick={handleCheckout}
                disabled={isLoading}
              >
                {isLoading ? (
                  "Loading..."
                ) : (
                  <>
                    Claim Your Spot Now
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>

              {/* Guarantee */}
              <div className="pt-6 border-t border-border/50">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Shield className="w-5 h-5 text-accent" />
                  <p className="text-base font-semibold text-foreground">
                    30-Day Unconditional Money-Back Guarantee
                  </p>
                </div>
                <p className="text-sm text-muted-foreground max-w-md mx-auto">
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