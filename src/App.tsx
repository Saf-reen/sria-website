import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";

import NotFound from "./pages/NotFound";
import Big from "./pages/Products/Big";
import GateCheck from "./pages/Products/GateCheck";
import NxDesk from "./pages/Products/NxDesk";
import Nxify from "./pages/Products/Nxify";
// import SAPAIConsultant from "./pages/Products/EerlyAIProducts/SAPAIConsultant";
// import RecruitmentAI from "./pages/Products/EerlyAIProducts/RecritmentAI";
// import ProcessAI from "./pages/Products/EerlyAIProducts/ProcessAI";
// import InsightsAI from "./pages/Products/EerlyAIProducts/InsightsAI";
// import EerlyAIBrain from "./pages/Products/EerlyAIProducts/EerlyAIBrain";
import BusinessConsulting from "./pages/Services/StratagyConsulting/BusinessConsulting";
import ProcessConsulting from "./pages/Services/StratagyConsulting/ProcessConsulting";
import TechConsulting from "./pages/Services/StratagyConsulting/TechConsulting";
import AMS from "./pages/Services/SAPSupport/AMS";
import Abap from "./pages/Services/SAPSupport/Abap";
import SAPImplementationServices from "./pages/Services/SAPSupport/SAPImplementationServices";
import BasicServices from "./pages/Services/SAPSupport/BasicServices";
import SAPManagedServices from "./pages/Services/SAPSupport/SAPManagedServices";
import SAPBusiness from "./pages/Services/SAPSupport/SAPBusiness";
import SAPConsulting from "./pages/Services/SAPSupport/SAPConsulting";
import SAPCustom from "./pages/Services/SAPSupport/SAPCustom";
import SAPFiori from "./pages/Services/SAPSupport/SAPFiori";
import OdooImplementation from "./pages/OdooImplementation";
import ContactUs from "@/components/aboutus/ConstctUs";
import SapS4hana from "./pages/Solutions/SAPERP/SapS4hana";
import PublicCloud from "./pages/Solutions/SAPERP/PublicCloud";
import PrivateCloud from "./pages/Solutions/SAPERP/PrivateCloud";
import CloudPlanning from "./pages/Solutions/SAPANALITICSCLOUD/CloudPlanning";
import GroupReporting from "./pages/Solutions/SAPANALITICSCLOUD/GroupReporting";
import PaPM from "./pages/Solutions/SAPANALITICSCLOUD/PaPM";
import SAPFinancialMgmt from "./pages/Solutions/SAPANALITICSCLOUD/SAPFinancialMgmt";
import CommerceCloud from "./pages/Solutions/SAPCRM/CommerceCloud";
import Emarsys from "./pages/Solutions/SAPCRM/Emarsys";
import SalesCloud from "./pages/Solutions/SAPCRM/SalesCloud";
import ServiceCloud from "./pages/Solutions/SAPCRM/ServiceCloud";
import CPI from "./pages/Solutions/SAPBTP/CPI";
import BuildApps from "./pages/Solutions/SAPBTP/BuildApps";
import SuccessFactors from "./pages/Solutions/SAPHXM/SuccessFactors";
import LeaderShip from "./pages/About/LeaderShip";
import Alliances from "./pages/About/Alliances";
import Careers from "./pages/About/Careers";
import ComingSoon from "./pages/About/ComingSoon";
import Partner from "./pages/About/Partners"
import Locations from "./pages/About/Location";
import AboutUs from "./pages/AboutUs";
import ScrollToTop from "./components/ScrollToTop";
import BTP from "./pages/Solutions/SAPBTP/BTP";
// import CustomerStory1 from "./pages/CustomerStory1";s
import News1 from "./pages/News1";
import HillsStory from "./pages/HillsStory";
import LvkPharma from "./pages/LvkPharma";
import Patil from "./pages/Patil";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
      <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<ContactUs />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
          <Route path="/services/business-consulting" element={<BusinessConsulting />} />
          <Route path="/services/process-consulting" element={<ProcessConsulting />} />
          <Route path="/services/tech-consulting" element={<TechConsulting />} />
          <Route path="/sapmanagedservices" element={<SAPManagedServices />} />
          <Route path="/ams" element={<AMS />} />
          <Route path="/abap" element={<Abap />} />
          <Route path="/sapimplement" element={<SAPImplementationServices />} />
          <Route path="/businesstech" element={<SAPBusiness />} />
          <Route path="/consulting" element={<SAPConsulting />} />
          <Route path="/fioridevelop" element={<SAPFiori/>}/>
          <Route path="/basicservices" element={<BasicServices />} />
          <Route path="/custom" element={<SAPCustom />} />  
          <Route path="/odooservices/implementation" element={<OdooImplementation />} />
          <Route path="/products/big" element={<Big />} />
          <Route path="/products/gatecheck" element={<GateCheck />} />
          <Route path="/products/nxdesk" element={<NxDesk />} />
          <Route path="/products/nxify" element={<Nxify />} />
          {/* <Route path="/products/sap-ai-consultant" element={<SAPAIConsultant />} />
          <Route path="/products/recruitment-ai" element={<RecruitmentAI />} />
          <Route path="/products/process-ai" element={<ProcessAI />} />
          <Route path="/products/insights-ai" element={<InsightsAI />} />
          <Route path="/products/eerly-ai-brain" element={<EerlyAIBrain />} /> */}
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/solutions/sap-s4hana" element={<SapS4hana />} />
          <Route path="/news1" element={<News1/>}/>
          <Route path="/solutions/public-cloud" element={<PublicCloud />}/>
          <Route path="/solutions/btp" element ={<BTP/>}/>
          <Route path="/solutions/private-cloud" element={<PrivateCloud />}/>
          <Route path="/solutions/financial" element={<SAPFinancialMgmt />}/>
          <Route path="/solutions/group-reporting" element={<GroupReporting />}/>
          <Route path="/solutions/cloud-planning" element={<CloudPlanning />}/>
          <Route path="/solutions/papm" element={<PaPM />}/>
          <Route path="/solutions/commerce-cloud" element={<CommerceCloud />} />
          <Route path="/solutions/emarsys" element={<Emarsys />} />
          <Route path="/solutions/sales-cloud" element={<SalesCloud />} />
          <Route path="/solutions/service-cloud" element={<ServiceCloud />} />
          <Route path="/solutions/cpi" element={<CPI />} />
          <Route path="/solutions/build-apps" element={<BuildApps />} />
          <Route path="/solutions/successfactors" element={<SuccessFactors />} />
          
        
          <Route path="/about/leadership" element={<LeaderShip />} />
          <Route path="/about/sap-partner" element={<ComingSoon />}/>
          <Route path="/about/careers" element={<ComingSoon />} />
          <Route path="/about/alliances" element={<ComingSoon />}/>          
          <Route path="/about/partner-with-us" element={<ComingSoon />} />
          <Route path="/about/events" element={<Partner />}/>
          <Route path="/about/locations" element={<Locations />} />
          <Route path="/aboutus" element={<AboutUs />} />
          
           <Route path="/hills" element={<HillsStory/>}/>
               <Route path="/Lvk" element={<LvkPharma/>}/>
                             <Route path="/patil" element={<Patil/>}/>


        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
