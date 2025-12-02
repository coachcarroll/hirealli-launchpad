import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import alliThumbsUp from "@/assets/alli-thumbsup.png";
import Navigation from "@/components/Navigation";
import { z } from "zod";
import { CheckCircle, Users, Mail, Zap } from "lucide-react";

const freemiumSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number format"),
  company: z.string().trim().min(1, "Company name is required").max(100, "Company name must be less than 100 characters"),
  website: z.string().max(255, "Website must be less than 255 characters").refine(
    (val) => !val || val === '' || /^https?:\/\/.+\..+/.test(val),
    { message: "Invalid website URL" }
  ),
  smsConsent: z.boolean()
});

const Fifty = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    smsConsent: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validation = freemiumSchema.safeParse(formData);
    if (!validation.success) {
      const firstError = validation.error.errors[0];
      toast({
        title: "Validation Error",
        description: firstError.message,
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const webhookUrl = "https://hooks.zapier.com/hooks/catch/1738439/uyva94r/";
      
      await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify({
          ...validation.data,
          plan: "freemium",
          leads_per_month: 50,
          timestamp: new Date().toISOString(),
          triggered_from: window.location.href,
          source: "dan-martell-50",
        }),
      });

      setShowThankYou(true);
    } catch (error) {
      console.error("Error submitting freemium signup:", error);
      toast({
        title: "Error",
        description: "Failed to submit. Please try again or contact support.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const benefits = [
    { icon: Users, text: "50 free leads to start" },
    { icon: Mail, text: "Verified personal emails delivered" },
    { icon: Zap, text: "Setup in minutes, not months" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background">
      <Navigation />

      {/* Main Content */}
      <main className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Value Prop */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent font-semibold text-sm mb-6">
                  Exclusive Offer
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Your first{" "}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    50 leads
                  </span>{" "}
                  are free
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  See who's visiting your website but not filling out forms. Get their verified personal emails and start closing more deals.
                </p>
              </div>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-lg font-medium">{benefit.text}</span>
                  </div>
                ))}
              </div>

              <div className="p-6 rounded-2xl bg-card border border-border">
                <p className="text-muted-foreground mb-2">What customers are saying:</p>
                <p className="text-lg font-medium italic">
                  "We identified 1,000+ leads in just 10 days. Game changer for our coaching business."
                </p>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:pl-8">
              {!showThankYou ? (
                <div className="bg-card border border-border rounded-3xl p-8 shadow-xl">
                  <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold mb-2">Get Started Free</h2>
                    <p className="text-muted-foreground">
                      No credit card required. Start detecting leads today.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Cell Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(555) 123-4567"
                        className="mt-1"
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="smsConsent"
                        checked={formData.smsConsent}
                        onCheckedChange={(checked) => 
                          setFormData({ ...formData, smsConsent: checked as boolean })
                        }
                      />
                      <Label 
                        htmlFor="smsConsent"
                        className="text-sm font-normal cursor-pointer"
                      >
                        Check this so Alli can text you
                      </Label>
                    </div>
                    <div>
                      <Label htmlFor="company">Company Name *</Label>
                      <Input
                        id="company"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Acme Inc."
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="website">Website *</Label>
                      <Input
                        id="website"
                        type="text"
                        required
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        placeholder="https://example.com"
                        className="mt-1"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-primary to-primary-glow text-lg py-6" 
                      disabled={isLoading}
                    >
                      {isLoading ? "Setting Up..." : "Claim My 50 Free Leads"}
                    </Button>
                    <p className="text-xs text-center text-muted-foreground">
                      By signing up, you agree to our terms of service and privacy policy.
                    </p>
                  </form>
                </div>
              ) : (
                <div className="bg-card border border-border rounded-3xl p-8 shadow-xl">
                  <div className="flex flex-col items-center justify-center py-8 text-center">
                    <img 
                      src={alliThumbsUp} 
                      alt="Alli" 
                      className="w-48 h-48 object-cover rounded-full mb-6"
                    />
                    <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                      <CheckCircle className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Thanks for giving me a try!</h3>
                    <p className="text-lg text-muted-foreground">
                      I can't wait to work for you. Check your email for an invite to my platform.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Fifty;
