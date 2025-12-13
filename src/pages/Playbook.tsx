import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock, Eye, EyeOff } from "lucide-react";
import ReactMarkdown from "react-markdown";

const PLAYBOOK_PASSWORD = "alli2025";

const Playbook = () => {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [playbookContent, setPlaybookContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Check if already authenticated in session
    const authStatus = sessionStorage.getItem("playbook-auth");
    if (authStatus === "true") {
      setIsAuthenticated(true);
      loadPlaybook();
    }
  }, []);

  const loadPlaybook = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/alli-operator-playbook.md");
      const text = await response.text();
      setPlaybookContent(text);
    } catch (err) {
      console.error("Failed to load playbook:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === PLAYBOOK_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem("playbook-auth", "true");
      setError("");
      loadPlaybook();
    } else {
      setError("Incorrect password. Please try again.");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md border-primary/20">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mb-4">
              <Lock className="w-8 h-8 text-primary-foreground" />
            </div>
            <CardTitle className="text-2xl">Operator Playbook</CardTitle>
            <p className="text-muted-foreground text-sm mt-2">
              Enter the password to access the Alli Operator Playbook
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {error && (
                <p className="text-destructive text-sm">{error}</p>
              )}
              <Button type="submit" className="w-full bg-gradient-to-r from-primary to-primary-glow">
                Access Playbook
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <div className="mb-8 pb-6 border-b border-border">
          <h1 className="text-3xl font-bold text-primary mb-2">Alli Operator Playbook</h1>
          <p className="text-muted-foreground">Internal document for Alli Operators & Customer Success Associates</p>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        ) : (
          <article className="prose prose-slate dark:prose-invert max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground prose-a:text-primary prose-blockquote:border-primary prose-blockquote:text-muted-foreground prose-code:text-primary prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-table:text-sm prose-th:text-foreground prose-td:text-muted-foreground">
            <ReactMarkdown>{playbookContent}</ReactMarkdown>
          </article>
        )}
      </div>
    </div>
  );
};

export default Playbook;