
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
    "United States", "United Kingdom", "Singapore", "South Africa", 
    "Saudi Arabia", "UAE", "Kuwait", "Greece", "Qatar", "India", "Egypt"
  ];

  const MegaMenu: React.FC<MegaMenuProps> = ({ id, label, sections, width = "w-full", layout = "multi" }) => (
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
        <div className="bg-gray-800 rounded-lg shadow-2xl border border-gray-700 py-8 px-8 mt-2">
          {layout === "single" && (
            <div className="space-y-3">
              {sections[0]?.items.map((item, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="block text-white hover:text-orange-300 transition-colors text-sm py-1"
                >
                  {item}
                </a>
              ))}
            </div>
          )}

          {layout === "multi" && (
            <div className="grid grid-cols-3 gap-12">
              {sections.map((section, idx) => (
                <div key={idx}>
                  <h4 className="text-white font-semibold mb-4 text-sm border-b border-gray-600 pb-2">
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
          )}

          {layout === "two-row" && (
            <div className="space-y-8">
              <div className="grid grid-cols-5 gap-8">
                {sections.slice(0, 5).map((section, idx) => (
                  <div key={idx}>
                    <h4 className="text-white font-semibold mb-3 text-sm">
                      {section.title}
                    </h4>
                    <ul className="space-y-1">
                      {section.items.map((item, index) => (
                        <li key={index}>
                          <a
                            href="#"
                            className="text-gray-300 hover:text-orange-300 transition-colors text-xs py-0.5 block"
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
                <div className="grid grid-cols-5 gap-8">
                  {sections.slice(5).map((section, idx) => (
                    <div key={idx}>
                      <h4 className="text-white font-semibold mb-3 text-sm">
                        {section.title}
                      </h4>
                      <ul className="space-y-1">
                        {section.items.map((item, index) => (
                          <li key={index}>
                            <a
                              href="#"
                              className="text-gray-300 hover:text-orange-300 transition-colors text-xs py-0.5 block"
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
        <div className="max-w-full mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-white">
                <span className="text-orange-300">S</span>ria{" "}
                <span className="text-orange-300">I</span>nfotech
              </Link>
            </div>

            {/* Navigation Menu */}
            <div className="hidden xl:flex items-center space-x-8">
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
                width="w-[600px]"
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
                width="w-64"
              />
              <MegaMenu
                id="about"
                label="About"
                sections={aboutSections}
                layout="single"
                width="w-64"
              />
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-4">
              <Search className="w-5 h-5 text-white hover:text-orange-300 cursor-pointer transition-colors" />
              
              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setShowLanguages(true)}
                  onMouseEnter={() => setShowLanguages(true)}
                  onMouseLeave={() => setShowLanguages(false)}
                  className="text-white flex items-center hover:text-orange-300 transition-colors"
                >
                  <Globe className="w-5 h-5 mr-1" />
                  Global
                </button>
                
                {showLanguages && (
                  <div
                    className="absolute top-full right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-xl border border-gray-700 py-2 z-50"
                    onMouseEnter={() => setShowLanguages(true)}
                    onMouseLeave={() => setShowLanguages(false)}
                  >
                    {countries.map((country, idx) => (
                      <React.Fragment key={idx}>
                        <a
                          href="#"
                          className="block px-4 py-2 text-white hover:text-orange-300 hover:bg-gray-700 transition-colors text-sm"
                        >
                          {country}
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
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded font-medium transition-colors"
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
