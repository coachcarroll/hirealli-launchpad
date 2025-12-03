import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const DataNotice = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Data & Recording Notice</h1>
        <p className="text-muted-foreground mb-8">Last updated: December 2024</p>
        
        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">How We Collect Data</h2>
            <p className="text-muted-foreground">
              HireAlli uses advanced AI technology to identify anonymous website visitors. 
              When visitors browse websites using our service, we collect publicly available 
              information and match it with verified data sources to provide enriched contact 
              information to our customers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Types of Data Collected</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Visitor Information:</strong> IP addresses, device information, browser type, and browsing behavior</li>
              <li><strong>Enriched Data:</strong> Verified email addresses, business information, and professional details</li>
              <li><strong>Phone Numbers:</strong> Provided for match-back verification only, not for cold calling</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Data Sources</h2>
            <p className="text-muted-foreground">
              Our data enrichment uses multiple verified data sources including public business 
              registries, professional networks, and opt-in databases. All data is collected 
              and processed in compliance with applicable data protection regulations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Recording & Analytics</h2>
            <p className="text-muted-foreground">
              We may record and analyze interactions with our platform for quality assurance, 
              training, and service improvement purposes. This includes chat conversations, 
              demo calls, and support interactions. Users are notified when recording is active.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Compliance Standards</h2>
            <p className="text-muted-foreground mb-4">Our data practices comply with:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>General Data Protection Regulation (GDPR)</li>
              <li>California Consumer Privacy Act (CCPA)</li>
              <li>CAN-SPAM Act requirements</li>
              <li>TCPA guidelines for telecommunications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Opt-Out Rights</h2>
            <p className="text-muted-foreground">
              Individuals have the right to opt out of data collection and request removal 
              from our databases. To exercise these rights, please contact us at{" "}
              <a href="mailto:privacy@hirealli.com" className="text-primary hover:underline">
                privacy@hirealli.com
              </a>
              {" "}with your request.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Data Retention</h2>
            <p className="text-muted-foreground">
              We retain collected data for as long as necessary to provide our services and 
              comply with legal obligations. Customer data is retained for the duration of 
              the subscription plus 90 days, after which it is securely deleted unless 
              otherwise required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Questions?</h2>
            <p className="text-muted-foreground">
              For questions about our data practices, contact our Data Protection team at{" "}
              <a href="mailto:data@hirealli.com" className="text-primary hover:underline">
                data@hirealli.com
              </a>
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DataNotice;
