import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, Phone, FileText, Download } from "lucide-react";
import { Link } from "react-router-dom";

const templates = [
  {
    title: "Welcome Email Sequence",
    description: "A 5-email nurture sequence for newly detected leads. Warm them up before the pitch.",
    icon: Mail,
    category: "Email",
  },
  {
    title: "Re-engagement Campaign",
    description: "Win back visitors who browsed but didn't convert. Perfect for cart abandoners.",
    icon: Mail,
    category: "Email",
  },
  {
    title: "First Touch SMS Script",
    description: "Compliant text message templates for initial contact with detected leads.",
    icon: MessageSquare,
    category: "SMS",
  },
  {
    title: "Follow-Up Call Script",
    description: "Phone scripts for sales teams reaching out to warm leads from Alli.",
    icon: Phone,
    category: "Phone",
  },
  {
    title: "LinkedIn Outreach Sequence",
    description: "Professional connection request and follow-up message templates.",
    icon: FileText,
    category: "Social",
  },
  {
    title: "Value-First Content Email",
    description: "Share valuable content before asking for anything. Build trust first.",
    icon: Mail,
    category: "Email",
  },
];

const Templates = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Templates & Scripts</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready-to-use templates to help you convert detected leads into customers. 
            Customize these for your business and start outreach immediately.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {templates.map((template, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <template.icon className="w-8 h-8 text-primary" />
                  <span className="text-xs font-medium px-2 py-1 bg-secondary rounded-full">
                    {template.category}
                  </span>
                </div>
                <CardTitle className="text-lg">{template.title}</CardTitle>
                <CardDescription>{template.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" disabled>
                  <Download className="w-4 h-4 mr-2" />
                  Coming Soon
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-secondary/50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Custom Templates?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Our team can help create custom outreach sequences tailored to your industry 
            and ideal customer profile. Available for Growth and Pro customers.
          </p>
          <Button asChild>
            <Link to="/pricing">View Plans</Link>
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Templates;
