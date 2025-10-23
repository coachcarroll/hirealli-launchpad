import { Headphones, Search, Share2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import RoleCard from "@/components/RoleCard";

const Roles = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Don't Buy Features—<span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Hire a Role</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Each role works 24/7 to grow your business without adding headcount. Choose the teammates you need.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <RoleCard
              icon={Share2}
              title="Social Media Manager"
              description="Posting shouldn't be a full-time job. Alli keeps your content moving."
              features={[
                "Plan → Capture → Approve → Publish",
                "1-5 posts per week, on-brand",
                "Optional Brand Scout for on-site content",
                "2D graphics, video, and retargeting ads",
                "Performance dashboard & reporting",
              ]}
              link="/roles/social-media"
            />

            <RoleCard
              icon={Search}
              title="Lead Detective"
              description="Turn anonymous clicks into named opportunities."
              features={[
                "Pixel → Identify → Notify → Sync",
                "Identify anonymous website visitors",
                "Instant alerts for hot leads",
                "CRM integration & sync",
                "250 to 2,500+ leads per month",
              ]}
              link="/roles/lead-detection"
            />

            <RoleCard
              icon={Headphones}
              title="Receptionist"
              description="Never miss a call—even when your team's slammed."
              features={[
                "Answer → Qualify → Route → Book",
                "24/7 inbound call handling",
                "Smart qualification & routing",
                "After-call summaries",
                "Appointment setting & CRM sync",
              ]}
              link="/roles/receptionist"
            />
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-primary-glow/5 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Mix and Match Roles to Fit Your Business
            </h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Start with one role or combine all three. Pay monthly or save 17% annually. Scale up or down anytime.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Roles;
