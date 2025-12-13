import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock, Eye, EyeOff, CheckCircle2, AlertTriangle, Phone, MessageSquare, Users, Shield, TrendingUp, Palette } from "lucide-react";

const PLAYBOOK_PASSWORD = "alli2025";

const Playbook = () => {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [activeSection, setActiveSection] = useState("section-1");

  useEffect(() => {
    const authStatus = sessionStorage.getItem("playbook-auth");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (!isAuthenticated) return;
    
    const handleScroll = () => {
      const sections = document.querySelectorAll(".playbook-section");
      let current = "section-1";
      
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        if (window.scrollY >= sectionTop - 200) {
          current = section.id;
        }
      });
      
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isAuthenticated]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === PLAYBOOK_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem("playbook-auth", "true");
      setError("");
    } else {
      setError("Incorrect password. Please try again.");
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "section-1", label: "Core Role", icon: Users },
    { id: "section-2", label: "Standards & Tone", icon: MessageSquare },
    { id: "section-3", label: "Workflow & SLA", icon: CheckCircle2 },
    { id: "section-4", label: "Escalation", icon: Phone },
    { id: "section-5", label: "Quality & Growth", icon: TrendingUp },
    { id: "section-6", label: "Brand Blueprint", icon: Palette },
  ];

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
              {error && <p className="text-destructive text-sm">{error}</p>}
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
      {/* Header */}
      <header className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold">
            Alli Operator <span className="text-accent">Playbook</span>
          </h1>
          <p className="text-primary-foreground/80 text-sm mt-1">
            Version: 1.0 | Owner: Carroll Media / Alli Platform
          </p>
        </div>
      </header>

      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
        <div className="container mx-auto px-4">
          <ul className="flex overflow-x-auto gap-1 py-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                    activeSection === item.id
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8 max-w-5xl">
        
        {/* Section 1: Core Role */}
        <section id="section-1" className="playbook-section mb-12">
          <h2 className="text-2xl font-bold text-primary border-b-2 border-accent pb-3 mb-6">
            1. Core Role & Mission
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Purpose of This Playbook</h3>
              <p className="text-muted-foreground mb-4">
                This document defines <strong className="text-foreground">how Alli shows up in the world</strong> through the people operating her. 
                Alli is a <strong className="text-foreground">first AI team member</strong> — and every interaction must feel: Human, Consistent, Reliable, Intelligent, and Calm under pressure.
              </p>
              <p className="text-muted-foreground">
                Your role is to <strong className="text-foreground">protect the illusion of presence without deception</strong> and to ensure customers feel supported, guided, and confident at every touchpoint.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-primary/20 bg-card/50">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Your Core Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <blockquote className="border-l-4 border-accent bg-accent/10 p-4 italic text-foreground">
                    "Someone smart, calm, and capable is paying attention to my business."
                  </blockquote>
                </CardContent>
              </Card>

              <Card className="border-primary/20 bg-card/50">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">What You Do Daily</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" /> Respond to inbound messages inside the Alli platform</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" /> Guide customers through setup, usage, and troubleshooting</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" /> Proactively check in on customers</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" /> Follow up on failed billing or paused campaigns</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" /> Re‑engage demo and trial users</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Alli's Core Values</h3>
              <p className="text-lg font-bold text-primary">
                Impact • Trust • Dependability • Speed • Clarity • Intelligence • Wisdom • Connection
              </p>
              <p className="text-muted-foreground mt-2 italic">
                If unsure what to do, choose the option that best protects <strong className="text-foreground">trust and clarity</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Standards & Tone */}
        <section id="section-2" className="playbook-section mb-12">
          <h2 className="text-2xl font-bold text-primary border-b-2 border-accent pb-3 mb-6">
            2. Standards & Tone of Voice
          </h2>

          <div className="space-y-6">
            {/* Non-Negotiables */}
            <Card className="border-accent/50 bg-accent/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-accent">
                  <AlertTriangle className="w-5 h-5" />
                  Non-Negotiable Standards
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3 text-foreground font-medium">
                  <li><strong>1. Reliability beats talent</strong> – show up, every shift</li>
                  <li><strong>2. Accuracy over speed</strong> – fast is good, wrong is unacceptable</li>
                  <li><strong>3. Warmth without fluff</strong> – friendly, not casual</li>
                  <li><strong>4. Ownership always</strong> – problems don't get passed, they get solved</li>
                  <li><strong>5. Clarity over cleverness</strong> – simple &gt; impressive</li>
                  <li><strong>6. Confidentiality is sacred</strong> – data protection is mandatory</li>
                  <li><strong>7. Stay in character</strong> – you represent Alli, not yourself</li>
                </ol>
              </CardContent>
            </Card>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Alli's Voice & Tone</h3>
              <p className="text-muted-foreground mb-4">Alli sounds like: A calm teammate, A smart guide, A dependable operator.</p>
              
              <div className="grid md:grid-cols-3 gap-4">
                <Card className="border-border bg-card/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm text-foreground">Alli is:</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-1">
                    <p>• Warm, not cute</p>
                    <p>• Confident, not arrogant</p>
                    <p>• Clear, not technical</p>
                    <p>• Helpful, not pushy</p>
                    <p>• Timeless, not trendy</p>
                  </CardContent>
                </Card>

                <Card className="border-accent/30 bg-accent/5">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm text-accent">DO:</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-1">
                    <p>• Use contractions (you're, I'll, let's)</p>
                    <p>• Speak directly to the customer</p>
                    <p>• Keep messages short and scannable</p>
                  </CardContent>
                </Card>

                <Card className="border-destructive/30 bg-destructive/5">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm text-destructive">DO NOT:</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-1">
                    <p>• Use system or technical language</p>
                    <p>• Over‑explain</p>
                    <p>• Use slang or emojis excessively</p>
                    <p>• Reference internal terms</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">If asked "Are you a real person?"</h3>
              <div className="bg-primary/10 border-l-4 border-primary p-4 rounded-r-lg font-mono text-sm text-foreground">
                "I'm Alli, supported by a real customer success team. We're here to help you get results."
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Workflow & SLA */}
        <section id="section-3" className="playbook-section mb-12">
          <h2 className="text-2xl font-bold text-primary border-b-2 border-accent pb-3 mb-6">
            3. Response Structure & Workflow
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Response Structure (Use Every Time)</h3>
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  { num: "1", title: "Acknowledge", desc: "Show you understand" },
                  { num: "2", title: "Clarify", desc: "Ask 1–2 questions max" },
                  { num: "3", title: "Act", desc: "Provide clear next step" },
                  { num: "4", title: "Confirm", desc: "Explain what happens next" },
                ].map((step) => (
                  <Card key={step.num} className="border-primary/20 text-center">
                    <CardContent className="pt-4">
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center mx-auto mb-2">
                        {step.num}
                      </div>
                      <p className="font-semibold text-foreground">{step.title}</p>
                      <p className="text-xs text-muted-foreground">{step.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Response Time Standards (SLAs)</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-primary text-primary-foreground">
                      <th className="border border-border p-3 text-left">Metric</th>
                      <th className="border border-border p-3 text-left">Target (Non-Negotiable)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-card">
                      <td className="border border-border p-3 text-foreground">First response</td>
                      <td className="border border-border p-3 text-foreground font-semibold">Under 5 minutes</td>
                    </tr>
                    <tr className="bg-muted/50">
                      <td className="border border-border p-3 text-foreground">Resolution</td>
                      <td className="border border-border p-3 text-foreground font-semibold">Within 1–2 hours</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-border">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Shift Start (8:00 AM EST)</CardTitle>
                </CardHeader>
                <CardContent className="text-sm space-y-2">
                  <p className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Log into Alli</p>
                  <p className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Clear overnight messages</p>
                  <p className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Check for internal updates</p>
                  <p className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Review any assigned tasks</p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Shift End (4:00 PM EST)</CardTitle>
                </CardHeader>
                <CardContent className="text-sm space-y-2">
                  <p className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Inbox check (all responded)</p>
                  <p className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Log open items with notes</p>
                  <p className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Assign handoffs (if urgent)</p>
                  <p className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Update FAQ doc</p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4">
              <p className="text-destructive font-semibold">Rule: Never log off with unacknowledged messages.</p>
            </div>

            {/* Workflow Examples */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Cancellation Request - Critical Revenue Moment</h3>
              <p className="text-muted-foreground mb-3">80% of customers who want to cancel stay after a quick call with DJ.</p>
              <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
                <li>Acknowledge without resistance</li>
                <li>Pivot to understanding: Offer a quick call with DJ Carroll</li>
                <li>If they agree → Send booking link: <code className="bg-muted px-1 rounded text-primary">https://go.oncehub.com/CMCSupport</code></li>
                <li>If they resist → Send the cancellation form</li>
                <li>Assign cancellation processing to <strong className="text-foreground">Nick</strong></li>
              </ol>
            </div>
          </div>
        </section>

        {/* Section 4: Escalation */}
        <section id="section-4" className="playbook-section mb-12">
          <h2 className="text-2xl font-bold text-primary border-b-2 border-accent pb-3 mb-6">
            4. Authority & Escalation
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Decision Authority Matrix</h3>
              <p className="text-muted-foreground mb-4">
                <strong className="text-foreground">Associates ($5–$6/hr) do NOT execute live account actions.</strong> They confirm intent, provide instructions, and assign internal to-dos.
              </p>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-primary text-primary-foreground">
                      <th className="border border-border p-3 text-left">Situation</th>
                      <th className="border border-border p-3 text-center">Associate</th>
                      <th className="border border-border p-3 text-center">Senior</th>
                      <th className="border border-border p-3 text-center">Lead</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { action: "Confirm reactivation intent", assoc: "✅", senior: "✅", lead: "✅" },
                      { action: "Restart campaign / account", assoc: "❌", senior: "❌", lead: "✅" },
                      { action: "Apply credit <$25", assoc: "❌", senior: "✅", lead: "✅" },
                      { action: "Refund request / Billing dispute", assoc: "❌", senior: "❌", lead: "✅" },
                      { action: "Schedule escalation call", assoc: "✅", senior: "✅", lead: "✅" },
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-card" : "bg-muted/50"}>
                        <td className="border border-border p-3 text-foreground">{row.action}</td>
                        <td className="border border-border p-3 text-center">{row.assoc}</td>
                        <td className="border border-border p-3 text-center">{row.senior}</td>
                        <td className="border border-border p-3 text-center">{row.lead}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">De-escalation: The HEAT Method</h3>
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  { letter: "H", title: "Hear Them Out", desc: "Let them vent. Don't interrupt." },
                  { letter: "E", title: "Empathize", desc: "Show you understand their frustration." },
                  { letter: "A", title: "Apologize", desc: "For the experience, not blame." },
                  { letter: "T", title: "Take Action", desc: "Give a clear next step." },
                ].map((item) => (
                  <Card key={item.letter} className="border-primary/20">
                    <CardContent className="pt-4 text-center">
                      <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground font-bold text-lg flex items-center justify-center mx-auto mb-2">
                        {item.letter}
                      </div>
                      <p className="font-semibold text-foreground text-sm">{item.title}</p>
                      <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Escalation Script (Required)</h3>
              <div className="bg-primary/10 border-l-4 border-primary p-4 rounded-r-lg font-mono text-sm text-foreground whitespace-pre-line">
{`"That's a little more than I can confidently handle on my own here — and I don't want to guess or slow you down.

The fastest way to get this resolved is to loop in one of my human specialists.

You can grab a time here, and they'll take it from there:
https://go.oncehub.com/CMCSupport

I'll make sure they have the context before you meet."`}
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Quality & Growth */}
        <section id="section-5" className="playbook-section mb-12">
          <h2 className="text-2xl font-bold text-primary border-b-2 border-accent pb-3 mb-6">
            5. Success, Quality & Growth
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">What Success Looks Like</h3>
              <Card className="border-accent/30 bg-accent/5">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base text-accent">A Great Day as an Alli Operator</CardTitle>
                </CardHeader>
                <CardContent className="text-sm space-y-2">
                  <p className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Inbox clear or fully triaged by end of shift</p>
                  <p className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> No unresolved billing failures</p>
                  <p className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> All follow-ups logged</p>
                  <p className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> At least one proactive check-in sent</p>
                  <p className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> No escalations caused by preventable mistakes</p>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">How We Handle Mistakes</h3>
              <p className="text-muted-foreground mb-3">Mistakes happen. <strong className="text-foreground">Hiding them is not acceptable.</strong></p>
              <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
                <li>Report it immediately</li>
                <li>Take ownership clearly</li>
                <li>Propose a fix</li>
                <li>Learn once — not twice</li>
              </ol>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Promotion Path</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-primary text-primary-foreground">
                      <th className="border border-border p-3 text-left">Role</th>
                      <th className="border border-border p-3 text-left">Hourly Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-card">
                      <td className="border border-border p-3 text-foreground">Alli Operator (Associate)</td>
                      <td className="border border-border p-3 text-foreground">$5–$6/hr</td>
                    </tr>
                    <tr className="bg-muted/50">
                      <td className="border border-border p-3 text-foreground">Senior Alli Operator</td>
                      <td className="border border-border p-3 text-foreground">$7–$8/hr</td>
                    </tr>
                    <tr className="bg-card">
                      <td className="border border-border p-3 text-foreground">Lead Alli Operator</td>
                      <td className="border border-border p-3 text-foreground">$9–$10/hr</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">QA Cadence</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><strong className="text-foreground">Weekly Spot Check (Every Friday):</strong> Nick reviews 5 random conversations per operator</li>
                <li><strong className="text-foreground">Monthly Calibration:</strong> Review escalations, update FAQ bank, identify training gaps</li>
                <li><strong className="text-foreground">Quarterly Deep Dive:</strong> Full performance review tied to promotion criteria</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 6: Brand Blueprint */}
        <section id="section-6" className="playbook-section mb-12">
          <h2 className="text-2xl font-bold text-primary border-b-2 border-accent pb-3 mb-6">
            6. Brand Blueprint
          </h2>

          <div className="space-y-6">
            {/* Purpose & Promise */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-primary/20 bg-card/50">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Why Alli Exists</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <p>Alli exists to rescue and revive small businesses before they become another failed statistic. To empower small business owners with superhuman clarity, insight, and action.</p>
                </CardContent>
              </Card>

              <Card className="border-primary/20 bg-card/50">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">What Alli Delivers</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-1">
                  <p>• Show up</p>
                  <p>• Deliver clear, actionable insights</p>
                  <p>• Uncover hidden value in your business</p>
                  <p>• Work fast, accurately, and quietly in the background</p>
                </CardContent>
              </Card>
            </div>

            {/* Positioning */}
            <blockquote className="border-l-4 border-accent bg-accent/10 p-4 italic text-foreground">
              Alli is your first AI team member. She's a 24/7 digital lead detective that identifies, tracks, and warms up your website visitors so your business never misses an opportunity. She's not just software — she's your smartest hire.
            </blockquote>

            {/* Brand Pillars */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">The Five Brand Pillars</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { title: "Results Without the Noise", desc: "She delivers outcomes, not complexity. Every action is in service of driving results you can actually see.", values: "Winning • Impact • Clarity" },
                  { title: "Built to Be Trusted", desc: "She never sleeps, never slips, and never breaks your trust. The one part of your business you never second-guess.", values: "Dependability • Trust • Safety" },
                  { title: "Always On. Always Accessible.", desc: "Speed, simplicity, and zero friction. The fastest path from chaos to clarity.", values: "Efficiency • Speed • Velocity" },
                  { title: "Infinite Wisdom. Instant Insight.", desc: "A paradoxical mix of monk and MBA: both a guide and a go-getter.", values: "Vision • Intelligence • Wisdom" },
                  { title: "Human at Heart", desc: "She might be code, but she connects like a colleague. Warm, direct, and supportive.", values: "Connection • Empathy • Presence" },
                ].map((pillar) => (
                  <Card key={pillar.title} className="border-border bg-card/50">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm text-primary">{pillar.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-xs text-muted-foreground">
                      <p className="mb-2">{pillar.desc}</p>
                      <p className="text-accent font-medium">{pillar.values}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Voice */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Alli's Voice</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="border-accent/30 bg-accent/5">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm text-accent">Alli IS:</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-1">
                    <p>• Warm, not cute — like a teammate who wants you to win</p>
                    <p>• Focused, not cold — no fluff, no noise, no jargon</p>
                    <p>• Lightly playful, not distracting</p>
                    <p>• Empowering, not patronizing</p>
                    <p>• Timeless, not trendy</p>
                  </CardContent>
                </Card>

                <Card className="border-border bg-card/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Voice Vibe</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-1">
                    <p>• Oprah's grace</p>
                    <p>• Ada Lovelace's brilliance</p>
                    <p>• Morgan Freeman's wisdom</p>
                    <p>• Kentucky hospitality layer</p>
                    <p>• Feels like a friend, performs like a genius</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Phrases */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-semibold text-accent mb-2">Phrases Alli Might Say</h4>
                <div className="bg-primary/10 border-l-4 border-primary p-4 rounded-r-lg font-mono text-xs text-foreground space-y-1">
                  <p>"Let's take a look."</p>
                  <p>"I've got your back."</p>
                  <p>"Here's what I found."</p>
                  <p>"Want help with that?"</p>
                  <p>"Ready when you are."</p>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-destructive mb-2">Phrases Alli Would Never Say</h4>
                <div className="bg-destructive/10 border-l-4 border-destructive p-4 rounded-r-lg font-mono text-xs text-foreground space-y-1">
                  <p>"Invalid user input detected."</p>
                  <p>"Your CRM configuration does not support this integration."</p>
                  <p>"We are experiencing higher-than-normal call volumes."</p>
                </div>
              </div>
            </div>

          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground text-center py-6 border-t-4 border-accent">
        <p className="text-sm">© 2025 Carroll Media / Alli Platform. All Rights Reserved. | Confidential Document</p>
      </footer>
    </div>
  );
};

export default Playbook;