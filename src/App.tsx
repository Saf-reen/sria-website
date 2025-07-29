import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";

import NotFound from "./pages/NotFound";
import AcceleraatedEximSolution from "./pages/AcceleraatedEximSolution";
import SAPManagedServices from "./pages/SAPManagedServices";
import ContactUs from "@/pages/ContactUs";
import SapS4hana from "./pages/SapS4hana";
import LeaderShip from "./pages/LeaderShip";
import AboutUs from "./pages/AboutUs";
import Location from "./pages/Location";
import CustomerStory1 from "./pages/CustomerStory1";
import News1 from "./pages/News1";
import Resources1 from "./pages/Resources1";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
          <Route path="/sapmanagedservices" element={<SAPManagedServices />} />
          <Route path="/products/exim" element={<AcceleraatedEximSolution />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/solutions/sap-s4hana" element={<SapS4hana />} />
          <Route path="/about/leadership" element={<LeaderShip />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/about/locations" element={<Location />} />
          <Route path="/customerStories1" element={<CustomerStory1 />} />
          <Route path="/news1" element={<News1 />} />
          <Route path="/resource1" element={<Resources1 />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
