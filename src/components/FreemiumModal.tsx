import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import alliThumbsUp from "@/assets/alli-thumbsup.png";

interface FreemiumModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const FreemiumModal = ({ open, onOpenChange }: FreemiumModalProps) => {
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
    setIsLoading(true);

    try {
      const webhookUrl = "https://hooks.zapier.com/hooks/catch/1738439/uyva94r/";
      
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify({
          ...formData,
          plan: "freemium",
          leads_per_month: 10,
          timestamp: new Date().toISOString(),
          triggered_from: window.location.origin,
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

  const handleClose = () => {
    onOpenChange(false);
    setTimeout(() => {
      setShowThankYou(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        website: "",
        smsConsent: false,
      });
    }, 300);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px]">
        {!showThankYou ? (
          <>
            <DialogHeader>
              <DialogTitle>Start Your Freemium Trial</DialogTitle>
              <DialogDescription>
                Get 10 free leads per month to start. No credit card required.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
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
                />
              </div>
              <div>
                <Label htmlFor="website">Website *</Label>
                <Input
                  id="website"
                  type="url"
                  required
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  placeholder="https://example.com"
                />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Setting Up..." : "Start Free Trial"}
              </Button>
            </form>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <img 
              src={alliThumbsUp} 
              alt="Alli" 
              className="w-48 h-48 object-cover rounded-full mb-6"
            />
            <h3 className="text-2xl font-bold mb-4">Thanks for giving me a try!</h3>
            <p className="text-lg text-muted-foreground">
              I can't wait to work for you. Check your email for an invite to my platform.
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
