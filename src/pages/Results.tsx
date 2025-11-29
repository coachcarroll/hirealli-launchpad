import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Results = () => {
  const proofItems = [
    {
      title: "1,000+ Leads in 10 Days",
      description: "A coaching business used Alli to surface over a thousand contacts from existing traffic before any upsells.",
      metric: "1,000+",
      timeframe: "10 days",
    },
    {
      title: "206 New Leads in 7 Days",
      description: "A health insurance company uncovered over two hundred prospects in the first week after installing Alli.",
      metric: "206 Leads",
      timeframe: "7 days",
    },
    {
      title: "7 Booked Calls Per 250 Identified Leads",
      description: "An insurance agency turned Alli's detection lists into appointments using email-first follow-up.",
      metric: "7 calls",
      timeframe: "Per 250 IDs",
    },
  ];

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
              AI Lead Detection is the front door. Here's what real service businesses unlocked before upsells.
            </p>
          </div>
          {/* Proof Wall */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {proofItems.map((item, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-border hover:border-primary/50">
                <CardContent className="pt-6">
                  <div className="mb-4">
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
