import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { AlliChat } from "./components/AlliChat";
import Index from "./pages/Index";
import Pricing from "./pages/Pricing";
import Configurator from "./pages/Configurator";
import Roles from "./pages/Roles";
import Results from "./pages/Results";
import WhyAlli from "./pages/WhyAlli";
import SocialMedia from "./pages/roles/SocialMedia";
import LeadDetection from "./pages/roles/LeadDetection";
import Receptionist from "./pages/roles/Receptionist";
import NotFound from "./pages/NotFound";
import LegalServices from "./pages/industries/LegalServices";
import AccountingTax from "./pages/industries/AccountingTax";
import BusinessConsulting from "./pages/industries/BusinessConsulting";
import MarketingAdvertising from "./pages/industries/MarketingAdvertising";
import ITTechSupport from "./pages/industries/ITTechSupport";
import FinancialPlanning from "./pages/industries/FinancialPlanning";
import HumanResources from "./pages/industries/HumanResources";
import ArchitectureEngineering from "./pages/industries/ArchitectureEngineering";
import Plumbing from "./pages/industries/Plumbing";
import Electrical from "./pages/industries/Electrical";
import HVAC from "./pages/industries/HVAC";
import Cleaning from "./pages/industries/Cleaning";
import Landscaping from "./pages/industries/Landscaping";
import PestControl from "./pages/industries/PestControl";
import HomeRemodeling from "./pages/industries/HomeRemodeling";
import Roofing from "./pages/industries/Roofing";
import GenerateAlliImages from "./pages/GenerateAlliImages";
import Elite from "./pages/Elite";
import Fifty from "./pages/Fifty";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import DataNotice from "./pages/DataNotice";
import Templates from "./pages/Templates";
import CaseStudies from "./pages/CaseStudies";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AlliChat />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/configurator" element={<Configurator />} />
          <Route path="/roles" element={<Roles />} />
          <Route path="/roles/social-media" element={<SocialMedia />} />
          <Route path="/roles/lead-detection" element={<LeadDetection />} />
          <Route path="/roles/receptionist" element={<Receptionist />} />
          <Route path="/results" element={<Results />} />
          <Route path="/why-alli" element={<WhyAlli />} />
          <Route path="/industries/legal-services" element={<LegalServices />} />
          <Route path="/industries/accounting-tax" element={<AccountingTax />} />
          <Route path="/industries/business-consulting" element={<BusinessConsulting />} />
          <Route path="/industries/marketing-advertising" element={<MarketingAdvertising />} />
          <Route path="/industries/it-tech-support" element={<ITTechSupport />} />
          <Route path="/industries/financial-planning" element={<FinancialPlanning />} />
          <Route path="/industries/human-resources" element={<HumanResources />} />
          <Route path="/industries/architecture-engineering" element={<ArchitectureEngineering />} />
          <Route path="/industries/plumbing" element={<Plumbing />} />
          <Route path="/industries/electrical" element={<Electrical />} />
          <Route path="/industries/hvac" element={<HVAC />} />
          <Route path="/industries/cleaning" element={<Cleaning />} />
          <Route path="/industries/landscaping" element={<Landscaping />} />
          <Route path="/industries/pest-control" element={<PestControl />} />
          <Route path="/industries/home-remodeling" element={<HomeRemodeling />} />
          <Route path="/industries/roofing" element={<Roofing />} />
          <Route path="/generate-alli-images" element={<GenerateAlliImages />} />
          <Route path="/elite" element={<Elite />} />
          <Route path="/50" element={<Fifty />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/data-notice" element={<DataNotice />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
