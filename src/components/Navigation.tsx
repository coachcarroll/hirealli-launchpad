import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Roles & Responsibilities", path: "/roles" },
    { name: "Pricing", path: "/pricing" },
    { name: "Results", path: "/results" },
    { name: "Why Alli", path: "/why-alli" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-primary-foreground font-bold text-xl">
                A
              </div>
              <span className="text-xl font-bold text-foreground">HireAlli</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="hidden md:flex items-center space-x-3">
              <Button variant="outline" size="sm" asChild>
                <Link to="/login">Login</Link>
              </Button>
              <Button size="sm" className="bg-gradient-to-r from-primary to-primary-glow" asChild>
                <a href="tel:+1234567890">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Alli Live
                </a>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-foreground hover:bg-muted"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2 space-y-2">
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link to="/login">Login</Link>
                </Button>
                <Button size="sm" className="w-full bg-gradient-to-r from-primary to-primary-glow" asChild>
                  <a href="tel:+1234567890">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Alli Live
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Sticky CTA Strip */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-card border-t border-border shadow-lg md:hidden">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-2">
          <Button size="sm" variant="outline" asChild className="flex-1 text-xs">
            <a href="tel:+1234567890">Call Live</a>
          </Button>
          <Button size="sm" asChild className="flex-1 text-xs bg-gradient-to-r from-primary to-primary-glow">
            <Link to="/pricing">Build Plan</Link>
          </Button>
          <Button size="sm" variant="outline" asChild className="flex-1 text-xs">
            <Link to="/demo">Book Demo</Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navigation;
