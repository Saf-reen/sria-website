import React, { useState, useEffect } from "react";
import { Search, Globe, ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

interface DropdownSection {
  title: string;
  items: { label: string; link: string }[];
}

interface MegaMenuProps {
  id: string;
  label: string;
  sections: DropdownSection[];
  width?: string;
  layout?: "single" | "multi" | "two-row";
}

interface NavigationProps {
  enableScrollEffect?: boolean; // New prop to control scroll effect
}
// const logo = `${process.env.PUBLIC_URL}/favicon.ico`;

const Navigation: React.FC<NavigationProps> = ({
  enableScrollEffect = false,
}) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [showLanguages, setShowLanguages] = useState(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<
    string | null
  >(null);

  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (dropdown: string) => {
    if (hoverTimeout) clearTimeout(hoverTimeout); // cancel hide if hovering back
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 200); // delay hiding by 200ms
    setHoverTimeout(timeout);
  };

  useEffect(() => {
    // Only add scroll listener if scroll effect is enabled
    if (!enableScrollEffect) return;

    const handleScroll = (): void => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [enableScrollEffect]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        !(event.target as Element).closest(".mobile-menu-container")
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const countries = [
    { name: "United States", flag: "🇺🇸" },
    { name: "United Kingdom", flag: "🇬🇧" },
    { name: "Singapore", flag: "🇸🇬" },
    { name: "South Africa", flag: "🇿🇦" },
    { name: "Saudi Arabia", flag: "🇸🇦" },
    { name: "UAE", flag: "🇦🇪" },
    { name: "Kuwait", flag: "🇰🇼" },
    { name: "Greece", flag: "🇬🇷" },
    { name: "Qatar", flag: "🇶🇦" },
    { name: "India", flag: "🇮🇳" },
    { name: "Egypt", flag: "🇪🇬" },
  ];

  const MegaMenu: React.FC<MegaMenuProps> = ({
    id,
    label,
    sections,
    width = "w-full",
    layout = "multi",
  }) => (
    <div
      className="relative"
      onMouseEnter={() => handleMouseEnter(id)}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        to={id === "about" ? "/aboutus" : "#"} // Only About navigates by default
        className="flex items-center text-white hover:text-orange-300 transition-colors font-normal text-sm whitespace-nowrap group font-[Questrial,Arial,Verdana,Tahoma,sans-serif]"
        onClick={(e) => {
          if (id !== "about") {
            e.preventDefault(); // prevent navigating away for other menus if wanted
            setActiveDropdown(activeDropdown === id ? null : id);
          }
          // For About, clicking will navigate, dropdown opens on hover
        }}
        tabIndex={0}
        aria-haspopup="true"
        aria-expanded={activeDropdown === id}
      >
        {label}
        <ChevronDown
          className={`w-3 h-3 ml-1 transition-transform duration-200 ${
            activeDropdown === id ? "rotate-180" : ""
          }`}
        />
      </Link>

      {layout === "single" ? (
        <div
          className={`absolute left-0 right-0  z-50 top-10 transition-all duration-300 ${
            activeDropdown === id
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-4"
          }`}
        >
          <div className="bg-[#0F0F0F] shadow-2xl border border-gray-700  py-4 px-4 min-w-[200px]">
            <div className="space-y-3 ">
              {sections[0]?.items.map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  className="text-gray-300 hover:text-orange-300 transition-colors text-base py-1 block font-normal font-[Questrial,Arial,Verdana,Tahoma,sans-serif]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`fixed top-16 left-0 right-0 z-50 transition-all duration-300 ${
            activeDropdown === id
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-4"
          }`}
        >
          <div className="w-full px-4 sm:px-8 flex justify-center">
            <div className="w-full max-w-screen-xl xl:max-w-[1400px]">
              <div
                className="bg-[#0F0F0F] shadow-2xl border border-gray-700 py-8 px-4 sm:px-16"
                style={{
                  fontFamily: "Questrial, Arial, Verdana, Tahoma, sans-serif",
                  fontWeight: 400,
                }}
              >
                {layout === "multi" && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-20">
                    {sections.map((section, idx) => (
                      <div key={idx}>
                        <h4 className="text-white font-normal mb-5 text-base border-b border-gray-600 pb-3 font-[Questrial,Arial,Verdana,Tahoma,sans-serif]">
                          {section.title}
                        </h4>
                        <ul className="space-y-3">
                          {section.items.map((item, index) => (
                            <li key={index}>
                              <a
                                href={item.link}
                                className="text-gray-300 hover:text-orange-300 transition-colors text-base py-1 block font-normal font-[Questrial,Arial,Verdana,Tahoma,sans-serif]"
                              >
                                {item.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {layout === "two-row" && (
                  <div className="space-y-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-16">
                      {sections.slice(0, 5).map((section, idx) => (
                        <div key={idx}>
                          <h4 className="text-white font-normal mb-5 text-base border-b border-gray-600 pb-3 font-[Questrial,Arial,Verdana,Tahoma,sans-serif]">
                            {section.title}
                          </h4>
                          <ul className="space-y-2">
                            {section.items.map((item, index) => (
                              <li key={index}>
                                <a
                                  href={item.link}
                                  className="text-gray-300 hover:text-orange-300 transition-colors text-base py-1 block font-normal font-[Questrial,Arial,Verdana,Tahoma,sans-serif]"
                                >
                                  {item.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="border-t border-gray-600 pt-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-16">
                        {sections.slice(5).map((section, idx) => (
                          <div key={idx}>
                            <h4 className="text-white font-normal mb-5 text-base border-b border-gray-600 pb-3 font-[Questrial,Arial,Verdana,Tahoma,sans-serif]">
                              {section.title}
                            </h4>
                            <ul className="space-y-2">
                              {section.items.map((item, index) => (
                                <li key={index}>
                                  <a
                                    href={item.link}
                                    className="text-gray-300 hover:text-orange-300 transition-colors text-base py-1 block font-normal font-[Questrial,Arial,Verdana,Tahoma,sans-serif]"
                                  >
                                    {item.label}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  // Mobile Menu Item Component
  const MobileMenuItem: React.FC<{
    label: string;
    sections: DropdownSection[];
    id: string;
  }> = ({ label, sections, id }) => {
    // Check if this is the About section
    const isAboutSection = id === "mobile-about";

    if (isAboutSection) {
      return (
        <div className="border-b border-gray-700">
          <div className="flex">
            {/* About link that navigates to /aboutus */}
            <Link
              to="/aboutus"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex-1 py-4 text-white hover:text-orange-300 transition-colors font-normal text-base font-[Questrial,Arial,Verdana,Tahoma,sans-serif]"
            >
              {label}
            </Link>
            {/* Dropdown toggle button */}
            <button
              onClick={() =>
                setActiveMobileDropdown(activeMobileDropdown === id ? null : id)
              }
              className="px-4 py-4 text-white hover:text-orange-300 transition-colors"
            >
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  activeMobileDropdown === id ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>

          {/* Dropdown content */}
          <div
            className={`overflow-hidden transition-all duration-300 ${
              activeMobileDropdown === id ? "max-h-96 pb-4" : "max-h-0"
            }`}
          >
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx} className="mb-4">
                <h5 className="text-orange-300 font-normal mb-2 text-sm font-[Questrial,Arial,Verdana,Tahoma,sans-serif]">
                  {section.title}
                </h5>
                <ul className="space-y-2 ml-4">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx}>
                      <a
                        href={item.link}
                        className="text-gray-300 hover:text-orange-300 transition-colors text-sm block font-normal font-[Questrial,Arial,Verdana,Tahoma,sans-serif]"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      );
    }

    // Regular dropdown behavior for other sections
    return (
      <div className="border-b border-gray-700">
        <button
          onClick={() =>
            setActiveMobileDropdown(activeMobileDropdown === id ? null : id)
          }
          className="w-full flex items-center justify-between py-4 text-white hover:text-orange-300 transition-colors font-normal text-base font-[Questrial,Arial,Verdana,Tahoma,sans-serif]"
        >
          {label}
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${
              activeMobileDropdown === id ? "rotate-180" : ""
            }`}
          />
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ${
            activeMobileDropdown === id ? "max-h-[1000px] pb-4" : "max-h-0"
          }`}
        >
          {sections.map((section, sectionIdx) => (
            <div key={sectionIdx} className="mb-4">
              <h5 className="text-orange-300 font-normal mb-2 text-sm font-[Questrial,Arial,Verdana,Tahoma,sans-serif]">
                {section.title}
              </h5>
              <ul className="space-y-2 ml-4">
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    <a
                      href={item.link}
                      className="text-gray-300 hover:text-orange-300 transition-colors text-sm block font-normal font-[Questrial,Arial,Verdana,Tahoma,sans-serif]"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Updated background logic - if enableScrollEffect is false, always use black background
  const getNavBackground = () => {
    if (!enableScrollEffect) {
      return "bg-black shadow-lg"; // Always black background when scroll effect is disabled
    }
    return scrolled ? "bg-black shadow-lg backdrop-blur-sm" : "bg-transparent";
  };

  const productsSections: DropdownSection[] = [
    {
      title: "Accelerated Products",
      items: [
        { label: "NxDesk", link: "/products/nxdesk" },
        { label: "Nxify", link: "/products/nxify" },
        { label: "Big", link: "/products/big" },
        { label: "Gate Check", link: "/products/gatecheck" },
      ],
    },
    // {
    //   title: "Raapyd Products",
    //   items: [
    //     { label: "Vendor Management", link: "/products/vendor-management" },
    //     { label: "Field Service Management", link: "/products/field-service" },
    //     { label: "Real Estate Management", link: "/products/real-estate" },
    //     { label: "ICR AI Software", link: "/products/icr-ai" },
    //     { label: "Distribution Management", link: "/products/distribution" },
    //     { label: "Digital Retail Solution", link: "/products/retail" },
    //     { label: "Subscription Billing", link: "/products/subscription" },
    //     { label: "Sales Force Automation", link: "/products/sales-force" },
    //     {
    //       label: "Dealer Management System",
    //       link: "/products/dealer-management",
    //     },
    //     { label: "Asset Management", link: "/products/asset-management" },
    //   ],
    // },
    // {
    //   title: "Eerly AI Products",
    //   items: [
    //     { label: "Eerly AI Brain", link: "/products/eerly-ai-brain" },
    //     { label: "SAP AI Consultant", link: "/products/sap-ai-consultant" },
    //     { label: "Recruitment AI", link: "/products/recruitment-ai" },
    //     { label: "Insights AI", link: "/products/insights-ai" },
    //     { label: "Process AI", link: "/products/process-ai" },
    //   ],
    // },
  ];

  const solutionsSections: DropdownSection[] = [
    {
      title: "SAP ERP",
      items: [
        { label: "SAP S/4HANA", link: "/solutions/sap-s4hana" },
        { label: "Public Cloud", link: "/solutions/public-cloud" },
        { label: "Private Cloud", link: "/solutions/private-cloud" },
      ],
    },
    {
      title: "SAP Analytics Cloud",
      items: [
        { label: "SAP Financial Mgmt", link: "/solutions/financial" },
        { label: "Cloud Planning", link: "/solutions/cloud-planning" },
        { label: "Group Reporting", link: "/solutions/group-reporting" },
        { label: "PaPM", link: "/solutions/papm" },
      ],
    },
    {
      title: "SAP CRM",
      items: [
        { label: "Commerce Cloud", link: "/solutions/commerce-cloud" },
        { label: "Sales Cloud", link: "/solutions/sales-cloud" },
        { label: "Service Cloud", link: "/solutions/service-cloud" },
        { label: "Emarsys", link: "/solutions/emarsys" },
      ],
    },
    {
      title: "SAP BTP",
      items: [
        { label: "CPI", link: "/solutions/cpi" },
        { label: "Build Apps", link: "/solutions/build-apps" },
      ],
    },
    {
      title: "SAP HXM",
      items: [{ label: "SuccessFactors", link: "/solutions/successfactors" }],
    },
    // {
    //   title: "AI",
    //   items: [{ label: "SAP Business AI", link: "/solutions/sap-business-ai" }],
    // },
    // {
    //   title: "Sustainability",
    //   items: [
    //     { label: "SAP Sustainability", link: "/solutions/sustainability" },
    //     { label: "ESG Consulting", link: "/solutions/esg-consulting" },
    //     { label: "E-Mobility", link: "/solutions/e-mobility" },
    //   ],
    // },
    // {
    //   title: "Other Technologies",
    //   items: [
    //     {
    //       label: "Digital Transformation",
    //       link: "/solutions/digital-transformation",
    //     },
    //     { label: "ECM", link: "/solutions/ecm" },
    //     { label: "RPA", link: "/solutions/rpa" },
    //     { label: "Blockchain", link: "/solutions/blockchain" },
    //     { label: "IoT", link: "/solutions/iot" },
    //   ],
    // },
  ];

  const servicesSections: DropdownSection[] = [
    // {
    //   title: "Strategy and Consulting",
    //   items: [
    //     { label: "Business Consulting", link: "/services/business-consulting" },
    //     { label: "Process Consulting", link: "/services/process-consulting" },
    //     { label: "Tech Consulting", link: "/services/tech-consulting" },
    //   ],
    // },
    {
      title: "SAP Support",
      items: [
        { label: "Managed Services", link: "/sapmanagedservices" },
        { label: "AMS", link: "/ams" },
        { label: "SAP S/4HANA Implementation Services", link: "/sapimplement" },
        // { label: "Migration", link: "/migration" },
        { label: "SAP S/4HANA Consulting Services", link: "/consulting" },
        { label: "SAP Fiori Development Services", link: "/fioridevelop" },
        { label: "SAP Business Technology Platform", link: "/businesstech" },
        { label: "SAP Custom Development and Enhancement", link: "/custom" },
        {
          label: "ABAP RESTful Application Programming Model Service",
          link: "/abap",
        },
        { label: "SAP BASIS Support Services", link: "/basicservices" },
      ],
    },
    {
      title: "Odoo Services", //Odoo & Analytic Services
      items: [
        { label: "Odoo Implementation", link: "/odooservices/implementation" },
        // { label: "Data Analytics", link: "/odooservices/dataanalytics"},
      ],
    },
    {
      title: "Additional Services",
      items: [
        {
          label: "Data Analytics",
          link: "/additionalServices/dataanalytics",
        },
      ],
    },
  ];

  const industriesSections: DropdownSection[] = [
    {
      title: "Retail",
      items: [
        { label: "Fashion & Apparel", link: "/services/strategy-consulting" },
        { label: "Grocery", link: "/services/strategy-consulting" },
        { label: "Specialty Retail", link: "/services/strategy-consulting" },
        {
          label: "Healthcare & Wellness",
          link: "/services/strategy-consulting",
        },
        { label: "Department Stores", link: "/services/strategy-consulting" },
      ],
    },
    {
      title: "Consumer Products",
      items: [
        {
          label: "Food & Beverage",
          link: "/industries/consumer-products/food-beverage",
        },
        {
          label: "Consumer Durables",
          link: "/industries/consumer-products/consumer-durables",
        },
        {
          label: "Home & Personal Care",
          link: "/industries/consumer-products/home-personal-care",
        },
      ],
    },
    {
      title: "Manufacturing",
      items: [
        {
          label: "Automotive Manufacturing",
          link: "/industries/manufacturing/automotive",
        },
        {
          label: "Process Manufacturing",
          link: "/industries/manufacturing/process",
        },
        {
          label: "Discrete Manufacturing",
          link: "/industries/manufacturing/discrete",
        },
      ],
    },
    {
      title: "E&C",
      items: [
        { label: "EC&O", link: "/industries/ec/ec-o" },
        { label: "Real Estate", link: "/industries/ec/real-estate" },
      ],
    },
    {
      title: "Oil, Gas, Energy",
      items: [
        {
          label: "Power Generation",
          link: "/industries/energy/power-generation",
        },
        { label: "Renewable Energy", link: "/industries/energy/renewable" },
        { label: "Energy Retail", link: "/industries/energy/retail" },
        { label: "Smart Grid", link: "/industries/energy/smart-grid" },
        {
          label: "Transmission & Distribution",
          link: "/industries/energy/transmission",
        },
      ],
    },
    {
      title: "Prof. Services",
      items: [
        {
          label: "Information Technology",
          link: "/industries/professional-services/it",
        },
        {
          label: "Travel & Tourism",
          link: "/industries/professional-services/travel",
        },
      ],
    },
    {
      title: "Life Sciences",
      items: [
        {
          label: "Pharmaceutical & Biotech",
          link: "/industries/life-sciences/pharmaceutical",
        },
        { label: "Medical Devices", link: "/industries/life-sciences/devices" },
        {
          label: "Hospital & Clinics",
          link: "/industries/life-sciences/hospitals",
        },
      ],
    },
    {
      title: "BFSI",
      items: [
        { label: "Banking", link: "/industries/bfsi/banking" },
        { label: "Insurance", link: "/industries/bfsi/insurance" },
        {
          label: "Financial Institutions",
          link: "/industries/bfsi/financial-institutions",
        },
      ],
    },
    {
      title: "Education",
      items: [
        {
          label: "Business Information Services",
          link: "/industries/education/business-services",
        },
        {
          label: "Enterprise Services",
          link: "/industries/education/enterprise-services",
        },
      ],
    },
    {
      title: "High-Tech",
      items: [
        {
          label: "Computer Peripherals",
          link: "/industries/high-tech/peripherals",
        },
        {
          label: "Contract Manufacturers",
          link: "/industries/high-tech/contract-manufacturers",
        },
        {
          label: "Distribution Companies",
          link: "/industries/high-tech/distribution",
        },
      ],
    },
  ];

  const insightsSections: DropdownSection[] = [
    {
      title: "Insights",
      items: [
        { label: "Customer Stories", link: "/insights/customer-stories" },
        { label: "Blogs", link: "/insights/blogs" },
        { label: "Newsroom", link: "/insights/newsroom" },
        { label: "White Papers", link: "/insights/white-papers" },
        { label: "Videos", link: "/insights/videos" },
        { label: "Brochures", link: "/insights/brochures" },
      ],
    },
  ];

  const aboutSections: DropdownSection[] = [
    {
      title: "About Us",
      items: [
        { label: "Leadership", link: "/about/leadership" },
        { label: "SAP Partner", link: "/about/sap-partner" },
        { label: "Careers", link: "/about/careers" },
        { label: "Alliances", link: "/about/alliances" },
        { label: "Partner With Us", link: "/about/partner-with-us" },
        { label: "Events", link: "/about/events" },
        { label: "Locations", link: "/about/locations" },
      ],
    },
  ];

  // In your Navigation.tsx or a CSS file
const marqueeStyle = {
  whiteSpace: "nowrap" as const,
  overflow: "hidden",
  display: "inline-block",
  animation: "scroll 20s linear infinite",
};

const keyframesStyle = `
  @keyframes scroll {
    0% { transform: translateX(100%); }
    100% { transform: translateX(-100%); }
  }
`;

  return (
    <div className="relative font-[Questrial,Arial,Verdana,Tahoma,sans-serif] font-normal">
      <style>
      {`
        @keyframes scroll {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}
    </style>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${getNavBackground()}`}
      >
        
        {/* Under Upgrading Notice */}
        <div className="bg-orange-500 text-white text-left font-medium text-sm overflow-hidden h-5 flex justify-end items-center">
          <div
            style={{
              whiteSpace: "nowrap",
              display: "inline-block",
              paddingLeft: "30%",
              animation: "scroll 20s linear infinite",
            }}
          >
            This website is currently under upgrading. Some features may be temporarily unavailable.
          </div>
        </div>

        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-screen-xl xl:max-w-[1400px] flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex flex-row items-center">
              <Link to="/" className="font-bold flex flex-row items-center">
                <img src={logo} alt="Logo" className="h-20 w-auto" />
              </Link>
            </div>

            {/* Desktop Navigation Menu */}
            <div className="hidden xl:flex items-center space-x-6">
              <MegaMenu
                id="products"
                label="Products"
                sections={productsSections}
                layout="single"
              />
              <MegaMenu
                id="solutions"
                label="Solutions"
                sections={solutionsSections}
                layout="multi"
              />
              <MegaMenu
                id="services"
                label="Services"
                sections={servicesSections}
                layout="multi"
              />
              {/* <MegaMenu
                id="industries"
                label="Industries"
                sections={industriesSections}
                layout="two-row"
              />
              <MegaMenu
                id="insights"
                label="Insights"
                sections={insightsSections}
                layout="single"
              /> */}
              <MegaMenu
                id="about"
                label="About"
                sections={aboutSections}
                layout="single"
              />
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-3">
              {/* Desktop Search and Language - Hidden on mobile */}
              <div className="hidden md:flex items-center space-x-3">
                {/* Language Selector */}
                {/* <div className="relative">
                  <button
                    onClick={() => setShowLanguages(true)}
                    onMouseEnter={() => setShowLanguages(true)}
                    onMouseLeave={() => setShowLanguages(false)}
                    className="text-white flex items-center hover:text-orange-300 transition-colors text-sm"
                  >
                    <Globe className="w-4 h-4 mr-1" />
                    Global
                  </button>

                  {showLanguages && (
                    <div
                      className="absolute top-full right-0 mt-2 w-56 bg-gray-800 rounded-lg shadow-xl border border-gray-700 py-3 z-50"
                      onMouseEnter={() => setShowLanguages(true)}
                      onMouseLeave={() => setShowLanguages(false)}
                    >
                      {countries.map((country, idx) => (
                        <React.Fragment key={idx}>
                          <a
                            href="#"
                            className="flex items-center px-4 py-2 text-gray-300 hover:text-orange-300 hover:bg-gray-700 transition-colors text-sm font-normal font-[Questrial,Arial,Verdana,Tahoma,sans-serif]"
                          >
                            <div className="w-6 h-6 rounded-full bg-gray-600 flex items-center justify-center text-xs mr-3">
                              {country.flag}
                            </div>
                            {country.name}
                          </a>
                          {idx < countries.length - 1 && (
                            <div className="border-t border-gray-600 mx-2"></div>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  )}
                </div> */}
              </div>
              <Link
                to="/contactus"
                className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-2 sm:px-4 rounded font-medium transition-colors text-sm"
              >
                Contact Us →
              </Link> 
            {/* <Link
              to="/contactus"
              className="bg-gradient-to-r from-orange-500 via-white to-green-500 hover:from-orange-600 hover:via-gray-100 hover:to-green-600 text-black px-3 py-2 sm:px-4 rounded font-medium transition-colors text-sm"
            >
              Contact Us →
            </Link> */}
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="xl:hidden text-white hover:text-orange-300 transition-colors"
                aria-label="Open mobile menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
        
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] xl:hidden">
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          <div className="mobile-menu-container fixed top-0 right-0 h-full w-80 bg-gray-900 shadow-xl transform transition-transform duration-300 ease-in-out overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              <h2 className="text-white text-lg font-semibold font-[Questrial,Arial,Verdana,Tahoma,sans-serif]">
                Menu
              </h2>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white hover:text-orange-300 transition-colors"
                aria-label="Close mobile menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-4 space-y-2">
              <MobileMenuItem
                label="Products"
                sections={productsSections}
                id="mobile-products"
              />
              <MobileMenuItem
                label="Solutions"
                sections={solutionsSections}
                id="mobile-solutions"
              />
              <MobileMenuItem
                label="Services"
                sections={servicesSections}
                id="mobile-services"
              />
              {/* <MobileMenuItem
                label="Industries"
                sections={industriesSections}
                id="mobile-industries"
              />
              <MobileMenuItem
                label="Insights"
                sections={insightsSections}
                id="mobile-insights"
              /> */}
              <MobileMenuItem
                label="About"
                sections={aboutSections}
                id="mobile-about"
              />

              {/* Mobile Search and Language */}
              {/* <div className="border-t border-gray-700 pt-4 mt-4">
                <div className="flex items-center space-x-4 mb-4">
                 
                  <button className="flex items-center text-white hover:text-orange-300 transition-colors">
                    <Globe className="w-4 h-4 mr-2" />
                    Global
                  </button>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navigation;
