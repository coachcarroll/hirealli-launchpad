import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, DollarSign, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const caseStudies = [
  {
    title: "Coaching Business",
    metric: "1,000+ leads",
    timeframe: "10 days",
    description: "A coaching business uncovered over 1,000 anonymous website visitors and converted them into actionable leads using Alli's detection technology.",
    icon: Users,
    highlight: "100+ leads/day",
  },
  {
    title: "Local Event",
    metric: "500 leads",
    timeframe: "20 days",
    description: "A local event organizer identified 500 interested attendees from their website traffic, dramatically increasing ticket sales.",
    icon: Calendar,
    highlight: "25 leads/day",
  },
  {
    title: "Auto Dealership",
    metric: "3X leads",
    savings: "$4,000/month saved",
    description: "A car dealership tripled their lead volume while cutting $4,000 in wasted monthly ad spend by focusing on visitors already showing intent.",
    icon: DollarSign,
    highlight: "3X ROI",
  },
  {
    title: "Online Course Creator",
    metric: "5,000+ leads",
    timeframe: "6 months",
    description: "An online course creator built a massive email list of warm prospects, all from existing website traffic with no additional ad spend.",
    icon: TrendingUp,
    highlight: "800+ leads/month",
  },
  {
    title: "Moving Company",
    metric: "7,000+ leads",
    description: "A regional moving company identified thousands of potential customers browsing their service areas, creating a robust sales pipeline.",
    icon: Users,
    highlight: "7,000+ contacts",
  },
  {
    title: "Holiday Lighting",
    metric: "4 extra jobs",
    revenue: "$10,000+ revenue",
    description: "A holiday lighting company sold 4 additional jobs at $2,500 average ticket from leads they would have never known about.",
    icon: DollarSign,
    highlight: "$2,500 avg ticket",
  },
];

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Case Studies</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real results from real businesses using Alli to transform anonymous traffic 
            into revenue. See how companies like yours are winning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {caseStudies.map((study, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <study.icon className="w-8 h-8 text-primary" />
                  <span className="text-sm font-bold text-accent bg-accent/10 px-3 py-1 rounded-full">
                    {study.highlight}
                  </span>
                </div>
                <CardTitle className="text-lg">{study.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="text-2xl font-bold text-primary">{study.metric}</span>
                  {study.timeframe && (
                    <span className="text-sm text-muted-foreground self-end mb-1">
                      in {study.timeframe}
                    </span>
                  )}
                </div>
                {study.savings && (
                  <span className="text-sm font-medium text-accent">{study.savings}</span>
                )}
                {study.revenue && (
                  <span className="text-sm font-medium text-accent">{study.revenue}</span>
                )}
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  {study.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Write Your Success Story?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Join hundreds of businesses already using Alli to find hidden buyers in their 
            existing traffic. Start with 50 free leads today.
          </p>
          <Button size="lg" asChild>
            <Link to="/pricing">Get Started Free</Link>
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudies;
