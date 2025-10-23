import { Link } from "react-router-dom";

const Footer = () => {
  const footerLinks = {
    Product: [
      { name: "Roles & Responsibilities", path: "/roles" },
      { name: "Pricing", path: "/pricing" },
      { name: "Results", path: "/results" },
      { name: "Why Alli", path: "/why-alli" },
    ],
    Legal: [
      { name: "Privacy Policy", path: "/privacy" },
      { name: "Terms of Service", path: "/terms" },
      { name: "Data & Recording Notice", path: "/data-notice" },
    ],
    Resources: [
      { name: "Templates & Scripts", path: "/templates" },
      { name: "Case Studies", path: "/case-studies" },
      { name: "Contact", path: "/contact" },
    ],
  };

  return (
    <footer className="bg-muted/50 border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-primary-foreground font-bold text-xl">
                A
              </div>
              <span className="text-xl font-bold">HireAlli</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Scale without adding payroll. Your AI team member for reception, lead detection, and social media.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} HireAlli. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
