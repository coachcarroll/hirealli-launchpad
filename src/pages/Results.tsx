import { useState } from "react";
import { Filter } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Results = () => {
  const [filter, setFilter] = useState<"all" | "social" | "voice" | "leads">("all");

  const proofItems = [
    {
      category: "voice",
      title: "46% Answer Rate Increase",
      description: "Professional services firm went from missing 60% of calls to answering 94% with Alli.",
      metric: "+46%",
      timeframe: "Last 30 days",
    },
    {
      category: "leads",
      title: "7 Booked Calls Per 250 Identified Leads",
      description: "Insurance agency converted anonymous visitors into qualified appointments.",
      metric: "7 calls",
      timeframe: "Per 250 IDs",
    },
    {
      category: "social",
      title: "62% Profile Visit Increase",
      description: "Home services company saw massive engagement boost with consistent posting.",
      metric: "+62%",
      timeframe: "28 days",
    },
    {
      category: "voice",
      title: "Zero Missed Calls for 90 Days",
      description: "Exterior cleaning company achieved 100% call coverage during a big marketing campaign.",
      metric: "100%",
      timeframe: "90 days",
    },
    {
      category: "leads",
      title: "206 New Leads in 7 Days",
      description: "A health insurance company identified over two hundred new prospects to their pipeline in the first week of installing Alli.",
      metric: "206 Leads",
      timeframe: "7 days",
    },
    {
      category: "social",
      title: "5x Content Output",
      description: "Small team went from 1 post per week to 5 without hiring anyone.",
      metric: "5x",
      timeframe: "Output",
    },
  ];

  const filteredItems = filter === "all" ? proofItems : proofItems.filter(item => item.category === filter);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Real Results from <span className="text-primary">Real Businesses</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Raw proof. No actors. No edits. Just measurable outcomes.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
              className={filter === "all" ? "bg-gradient-to-r from-primary to-primary-glow" : ""}
            >
              <Filter className="w-4 h-4 mr-2" />
              All Results
            </Button>
            <Button
              variant={filter === "social" ? "default" : "outline"}
              onClick={() => setFilter("social")}
              className={filter === "social" ? "bg-gradient-to-r from-primary to-primary-glow" : ""}
            >
              Social Media
            </Button>
            <Button
              variant={filter === "voice" ? "default" : "outline"}
              onClick={() => setFilter("voice")}
              className={filter === "voice" ? "bg-gradient-to-r from-primary to-primary-glow" : ""}
            >
              Receptionist
            </Button>
            <Button
              variant={filter === "leads" ? "default" : "outline"}
              onClick={() => setFilter("leads")}
              className={filter === "leads" ? "bg-gradient-to-r from-primary to-primary-glow" : ""}
            >
              Lead Detection
            </Button>
          </div>

          {/* Proof Wall */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-border hover:border-primary/50">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
                      {item.category === "social" ? "Social Media" : item.category === "voice" ? "Receptionist" : "Lead Detection"}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                  </div>
                  <div className="flex items-baseline gap-2 pt-4 border-t border-border">
                    <span className="text-3xl font-bold text-primary">
                      {item.metric}
                    </span>
                    <span className="text-sm text-muted-foreground">{item.timeframe}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              All metrics verified from actual client accounts. Updated monthly.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Results;
