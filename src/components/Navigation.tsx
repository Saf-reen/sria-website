import React, { useState, useEffect } from "react";
import { Search, Globe, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

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

const Navigation: React.FC<NavigationProps> = ({
  enableScrollEffect = false,
}) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [showLanguages, setShowLanguages] = useState(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

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
      <button className="flex items-center text-white hover:text-orange-300 transition-colors font-normal text-sm whitespace-nowrap group font-[Questrial,Arial,Verdana,Tahoma,sans-serif]">
        {label}
        <ChevronDown
          className={`w-3 h-3 ml-1 transition-transform duration-200 ${
            activeDropdown === id ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`fixed top-16 left-0 right-0 z-50 transition-all duration-300 ${
          activeDropdown === id
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-4"
        }`}
      >
        <div className="max-w-screen-2xl mx-auto px-8">
          <div
            className="bg-[#0F0F0F]  shadow-2xl border border-gray-700 py-8 px-16 "
            style={{
              fontFamily: "Questrial, Arial, Verdana, Tahoma, sans-serif",
              fontWeight: 400,
            }}
          >
            {layout === "single" && (
              <div className="space-y-3">
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
            )}

            {layout === "multi" && (
              <div className="grid grid-cols-3 gap-20">
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
                <div className="grid grid-cols-5 gap-16">
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
                  <div className="grid grid-cols-5 gap-16">
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
  );

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
        { label: "EXIM", link: "/products/exim" },
        { label: "E-Invoice", link: "/products/e-invoice" },
        { label: "E-Way Bill", link: "/products/e-way-bill" },
        { label: "GST", link: "/products/gst" },
      ],
    },
    {
      title: "Raapyd Products",
      items: [
        { label: "Vendor Management", link: "/products/vendor-management" },
        { label: "Field Service Management", link: "/products/field-service" },
        { label: "Real Estate Management", link: "/products/real-estate" },
        { label: "ICR AI Software", link: "/products/icr-ai" },
        { label: "Distribution Management", link: "/products/distribution" },
        { label: "Digital Retail Solution", link: "/products/retail" },
        { label: "Subscription Billing", link: "/products/subscription" },
        { label: "Sales Force Automation", link: "/products/sales-force" },
        {
          label: "Dealer Management System",
          link: "/products/dealer-management",
        },
        { label: "Asset Management", link: "/products/asset-management" },
      ],
    },
    {
      title: "Eerly AI Products",
      items: [
        { label: "Eerly AI Brain", link: "/products/eerly-ai-brain" },
        { label: "SAP AI Consultant", link: "/products/sap-ai-consultant" },
        { label: "Recruitment AI", link: "/products/recruitment-ai" },
        { label: "Insights AI", link: "/products/insights-ai" },
        { label: "Process AI", link: "/products/process-ai" },
      ],
    },
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
    {
      title: "AI",
      items: [{ label: "SAP Business AI", link: "/solutions/sap-business-ai" }],
    },
    {
      title: "Sustainability",
      items: [
        { label: "SAP Sustainability", link: "/solutions/sustainability" },
        { label: "ESG Consulting", link: "/solutions/esg-consulting" },
        { label: "E-Mobility", link: "/solutions/e-mobility" },
      ],
    },
    {
      title: "Other Technologies",
      items: [
        {
          label: "Digital Transformation",
          link: "/solutions/digital-transformation",
        },
        { label: "ECM", link: "/solutions/ecm" },
        { label: "RPA", link: "/solutions/rpa" },
        { label: "Blockchain", link: "/solutions/blockchain" },
        { label: "IoT", link: "/solutions/iot" },
      ],
    },
  ];

  const servicesSections: DropdownSection[] = [
    {
      title: "Strategy and Consulting",
      items: [
        { label: "Business Consulting", link: "/services/strategy-consulting" },
        { label: "Process Consulting", link: "/services/strategy-consulting" },
        { label: "Tech Consulting", link: "/services/strategy-consulting" },
      ],
    },
    {
      title: "SAP Support",
      items: [
        { label: "Managed Services", link: "/sapmanagedservices" },
        { label: "AMS", link: "/ams" },
        { label: "Migration", link: "/migration" },
        { label: "Discovery", link: "/discovery" },
        { label: "Implementation", link: "/implementation" },
        { label: "Upgrade", link: "/upgrade" },
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

  return (
    <div className="relative font-[Questrial,Arial,Verdana,Tahoma,sans-serif] font-normal">
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${getNavBackground()}`}
      >
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo - Moved more towards center */}
            <div className="flex items-center ml-8">
              <Link to="/" className="text-xl font-bold text-white">
                <span className="text-orange-300">S</span>ria{" "}
                <span className="text-orange-300">I</span>nfotech
              </Link>
            </div>

            {/* Navigation Menu - Centered */}
            <div className="hidden xl:flex items-center space-x-6">
              <MegaMenu
                id="products"
                label="Products"
                sections={productsSections}
                layout="multi"
              />
              <MegaMenu
                id="solutions"
                label="Solutions"
                sections={solutionsSections}
                layout="two-row"
              />
              <MegaMenu
                id="services"
                label="Services"
                sections={servicesSections}
                layout="multi"
              />
              <MegaMenu
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
              />
              <MegaMenu
                id="about"
                label="About"
                sections={aboutSections}
                layout="single"
              />
            </div>

            {/* Right Section - Moved more towards center */}
            <div className="flex items-center space-x-3 mr-8">
              <Search className="w-4 h-4 text-white hover:text-orange-300 cursor-pointer transition-colors" />

              {/* Language Selector */}
              <div className="relative">
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
              </div>

              <Link
                to="/contactus"
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded font-medium transition-colors text-sm"
              >
                Contact Us →
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
