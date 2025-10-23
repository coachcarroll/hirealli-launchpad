import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Pricing from "./pages/Pricing";
import Roles from "./pages/Roles";
import Results from "./pages/Results";
import WhyAlli from "./pages/WhyAlli";
import SocialMedia from "./pages/roles/SocialMedia";
import LeadDetection from "./pages/roles/LeadDetection";
import Receptionist from "./pages/roles/Receptionist";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/roles" element={<Roles />} />
          <Route path="/roles/social-media" element={<SocialMedia />} />
          <Route path="/roles/lead-detection" element={<LeadDetection />} />
          <Route path="/roles/receptionist" element={<Receptionist />} />
          <Route path="/results" element={<Results />} />
          <Route path="/why-alli" element={<WhyAlli />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
