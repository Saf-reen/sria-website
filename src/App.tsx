import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import AcceleraatedEximSolution from "./pages/AcceleraatedEximSolution";
import SAPManagedServices from "./pages/SAPManagedServices";
import ContactUs from "@/components/aboutus/ContactUs";
import SapS4hana from "./pages/SapS4hana";
import LeaderShip from "./pages/LeaderShip";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
          <Route path="/sapmanagedservices" element={<SAPManagedServices />} />
          <Route path="/products/exim" element={<AcceleraatedEximSolution />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/solutions/sap-s4hana" element={<SapS4hana />} />
          <Route path="/about/leadership" element={<LeaderShip />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
