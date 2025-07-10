import React, { useState } from "react";
import { Search, Globe, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

interface DropdownSection {
  title: string;
  items: string[];
}

interface MegaMenuProps {
  id: string;
  label: string;
  sections: DropdownSection[];
  width?: string;
  layout?: "single" | "multi" | "two-row";
}

const Navigation: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [showLanguages, setShowLanguages] = useState(false);

  const handleMouseEnter = (dropdown: string) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

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
    { name: "Egypt", flag: "🇪🇬" }
  ];

  const MegaMenu: React.FC<MegaMenuProps> = ({ id, label, sections, width = "w-full max-w-8xl", layout = "multi" }) => (
    <div
      className="relative"
      onMouseEnter={() => handleMouseEnter(id)}
      onMouseLeave={handleMouseLeave}
    >
      <button className="flex items-center text-white hover:text-orange-300 transition-colors font-medium text-sm whitespace-nowrap group">
        {label}
        <ChevronDown className={`w-3 h-3 ml-1 transition-transform duration-200 ${
          activeDropdown === id ? "rotate-180" : ""
        }`} />
      </button>

      <div className={`absolute top-full left-1/2 transform -translate-x-1/2 ${width} z-50 transition-all duration-300 ${
        activeDropdown === id
          ? "opacity-100 visible translate-y-0"
          : "opacity-0 invisible -translate-y-4"
      }`}>
        <div className="bg-gray-800 rounded-lg shadow-2xl border border-gray-700 py-8 px-16 mt-2">
          {layout === "single" && (
            <div className="space-y-3">
              {sections[0]?.items.map((item, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="block text-white hover:text-orange-300 transition-colors text-base py-2"
                >
                  {item}
                </a>
              ))}
            </div>
          )}

          {layout === "multi" && (
            <div className="grid grid-cols-3 gap-20">
              {sections.map((section, idx) => (
                <div key={idx}>
                  <h4 className="text-white font-semibold mb-5 text-base border-b border-gray-600 pb-3">
                    {section.title}
                  </h4>
                  <ul className="space-y-3">
                    {section.items.map((item, index) => (
                      <li key={index}>
                        <a
                          href="#"
                          className="text-gray-300 hover:text-orange-300 transition-colors text-base py-1 block"
                        >
                          {item}
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
                    <h4 className="text-white font-semibold mb-4 text-base">
                      {section.title}
                    </h4>
                    <ul className="space-y-2">
                      {section.items.map((item, index) => (
                        <li key={index}>
                          <a
                            href="#"
                            className="text-gray-300 hover:text-orange-300 transition-colors text-sm py-1 block"
                          >
                            {item}
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
                      <h4 className="text-white font-semibold mb-4 text-base">
                        {section.title}
                      </h4>
                      <ul className="space-y-2">
                        {section.items.map((item, index) => (
                          <li key={index}>
                            <a
                              href="#"
                              className="text-gray-300 hover:text-orange-300 transition-colors text-sm py-1 block"
                            >
                              {item}
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
  );

  const productsSections: DropdownSection[] = [
    {
      title: "Accelerated Products",
      items: ["EXIM", "E-Invoice", "E-Way Bill", "GST"]
    },
    {
      title: "Raapyd Products",
      items: [
        "Vendor Management", "Field Service Management", "Real Estate Management", 
        "ICR AI Software", "Distribution Management", "Digital Retail Solution", 
        "Subscription Billing", "Sales Force Automation", "Dealer Management System", "Asset Management"
      ]
    },
    {
      title: "Eerly AI Products",
      items: ["Eerly AI Brain", "SAP AI Consultant", "Recruitment AI", "Insights AI", "Process AI"]
    }
  ];

  const solutionsSections: DropdownSection[] = [
    {
      title: "SAP ERP",
      items: ["SAP S/4HANA", "Public Cloud", "Private Cloud"]
    },
    {
      title: "SAP Analytics Cloud",
      items: ["SAP Financial Mgmt", "Cloud Planning", "Group Reporting", "PaPM"]
    },
    {
      title: "SAP CRM",
      items: ["Commerce Cloud", "Sales Cloud", "Service Cloud", "Emarsys"]
    },
    {
      title: "SAP BTP",
      items: ["CPI", "Build Apps"]
    },
    {
      title: "SAP HXM",
      items: ["SuccessFactors"]
    },
    {
      title: "AI",
      items: ["SAP Business AI"]
    },
    {
      title: "Sustainability",
      items: ["SAP Sustainability", "ESG Consulting", "E-Mobility"]
    },
    {
      title: "Other Technologies",
      items: ["Digital Transformation", "ECM", "RPA", "Blockchain", "IoT"]
    }
  ];

  const servicesSections: DropdownSection[] = [
    {
      title: "Strategy and Consulting",
      items: ["Business Consulting", "Process Consulting", "Tech Consulting"]
    },
    {
      title: "SAP Support",
      items: ["Managed Services", "AMS", "Migration", "Discovery", "Implementation", "Upgrade"]
    }
  ];

  const industriesSections: DropdownSection[] = [
    {
      title: "Retail",
      items: ["Fashion & Apparel", "Grocery", "Specialty Retail", "Healthcare & Wellness", "Department Stores"]
    },
    {
      title: "Consumer Products",
      items: ["Food & Beverage", "Consumer Durables", "Home & Personal Care"]
    },
    {
      title: "Manufacturing",
      items: ["Automotive Manufacturing", "Process Manufacturing", "Discrete Manufacturing"]
    },
    {
      title: "E&C",
      items: ["EC&O", "Real Estate"]
    },
    {
      title: "Oil, Gas, Energy",
      items: ["Power Generation", "Renewable Energy", "Energy Retail", "Smart Grid", "Transmission & Distribution"]
    },
    {
      title: "Prof. Services",
      items: ["Information Technology", "Travel & Tourism"]
    },
    {
      title: "Life Sciences",
      items: ["Pharmaceutical & Biotech", "Medical Devices", "Hospital & Clinics"]
    },
    {
      title: "BFSI",
      items: ["Banking", "Insurance", "Financial Institutions"]
    },
    {
      title: "Education",
      items: ["Business Information Services", "Enterprise Services"]
    },
    {
      title: "High-Tech",
      items: ["Computer Peripherals", "Contract Manufacturers", "Distribution Companies"]
    }
  ];

  const insightsSections: DropdownSection[] = [
    {
      title: "",
      items: ["Customer Stories", "Blogs", "Newsroom", "White Papers", "Videos", "Brochures"]
    }
  ];

  const aboutSections: DropdownSection[] = [
    {
      title: "",
      items: ["Leadership", "SAP Partner", "Careers", "Alliances", "Partner With Us", "Events", "Locations"]
    }
  ];

  return (
    <div className="relative">
      <nav className="sticky top-0 w-full bg-gray-900 backdrop-blur-sm z-50 shadow-lg">
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
                width="w-full max-w-7xl"
              />
              <MegaMenu
                id="solutions"
                label="Solutions"
                sections={solutionsSections}
                layout="two-row"
                width="w-full max-w-8xl"
              />
              <MegaMenu
                id="services"
                label="Services"
                sections={servicesSections}
                layout="multi"
                width="w-full max-w-5xl"
              />
              <MegaMenu
                id="industries"
                label="Industries"
                sections={industriesSections}
                layout="two-row"
                width="w-full max-w-8xl"
              />
              <MegaMenu
                id="insights"
                label="Insights"
                sections={insightsSections}
                layout="single"
                width="w-80"
              />
              <MegaMenu
                id="about"
                label="About"
                sections={aboutSections}
                layout="single"
                width="w-80"
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
                          className="flex items-center px-4 py-3 text-white hover:text-orange-300 hover:bg-gray-700 transition-colors text-sm"
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
                to="/contact"
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
