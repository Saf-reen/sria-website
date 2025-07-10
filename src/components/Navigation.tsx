import React, { useState } from "react";
import { Search, Globe, ChevronDown } from "lucide-react";

interface DropdownSection {
  title: string;
  items: string[];
}

interface DropdownItemProps {
  id: string;
  label: string;
  sections: DropdownSection[];
  width?: string;
}

const Navigation: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const handleMouseEnter = (dropdown: string) => {
    setHoveredItem(dropdown);
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
    setActiveDropdown(null);
  };

  const DropdownItem: React.FC<DropdownItemProps> = ({
    id,
    label,
    sections,
    width = "w-[36rem]",
  }) => (
    <div
      className="relative"
      onMouseEnter={() => handleMouseEnter(id)}
      onMouseLeave={handleMouseLeave}
    >
      <button className="flex items-center text-white hover:text-orange-300 transition-colors font-medium text-sm whitespace-nowrap group">
        {label}
        <ChevronDown
          className={`w-3 h-3 ml-1 transition-all duration-500 ${
            hoveredItem === id
              ? "opacity-100 transform rotate-0"
              : "opacity-0 transform rotate-180"
          }`}
        />
      </button>

      <div
        className={`absolute top-full left-0 ${width} z-50 transition-all duration-1000 ease-out ${
          activeDropdown === id
            ? "opacity-100 transform translate-y-0 scale-y-100 pointer-events-auto"
            : "opacity-0 transform -translate-y-4 scale-y-0 pointer-events-none"
        } origin-top`}
      >
        <div className="bg-gray-800 rounded-lg shadow-xl border border-gray-700 py-6 px-6 mt-0">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {sections.map((section, idx) => (
              <div key={idx}>
                <h4 className="text-white font-semibold mb-2 text-sm">
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.items.map((item, index) => (
                    <li
                      key={index}
                      className={`transition-all duration-500 ${
                        activeDropdown === id
                          ? `opacity-100 transform translate-y-0 delay-${
                              index * 50
                            }`
                          : "opacity-0 transform translate-y-2"
                      }`}
                    >
                      <a
                        href="#"
                        className="text-white block py-1 px-2 rounded transition-colors text-sm hover:bg-gray-700 hover:text-orange-300"
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
    </div>
  );

  // Multi-section Solutions dropdown
  const solutionsSections: DropdownSection[] = [
    {
      title: "SAP ERP",
      items: [
        "SAP S/4HANA",
        "SAP S/4HANA Public Cloud",
        "SAP S/4HANA Private Cloud",
      ],
    },
    {
      title: "SAP HXM",
      items: ["SAP SuccessFactors HCM"],
    },
    {
      title: "SAP Analytics Cloud",
      items: [
        "SAP Financial Management",
        "SAP Analytics Cloud Planning",
        "SAP Group Reporting",
        "SAP PaPM",
      ],
    },
    {
      title: "Artificial Intelligence",
      items: ["SAP Business AI"],
    },
    {
      title: "SAP Customer Experience and CRM",
      items: [
        "SAP Commerce Cloud",
        "SAP Sales Cloud",
        "SAP Service Cloud",
        "SAP Emarsys",
      ],
    },
    {
      title: "Sustainability Solutions",
      items: ["SAP Sustainability", "ESG Consulting", "SAP E-Mobility"],
    },
    {
      title: "SAP BTP",
      items: ["SAP CPI", "SAP Build Apps"],
    },
    {
      title: "Other Technologies",
      items: [
        "Digital Transformation",
        "Enterprise Content Management",
        "Robotic Process Automation",
        "Blockchain Technology",
        "Internet of Things",
      ],
    },
  ];

  // Keep other data unchanged
  const productsData = [
    "Accelerated Products",
    "EXIM",
    "E-Invoice",
    "E-Way Bill",
    "GST",
    "Raapyd Products",
    "Vendor Management",
    "Field Service Management",
    "Real Estate Management",
    "ICR AI Software",
    "Distribution Management",
    "Digital Retail Solution",
    "Subscription Billing",
    "Sales Force Automation",
    "Dealer Management System",
    "Asset Management",
    "Eerly AI Products",
    "Eerly AI Brain",
    "SAP AI Consultant",
    "Recruitment AI",
    "Insights AI",
    "Process AI",
  ];

  const servicesData = [
    "Strategy and Consulting",
    "Business Consulting",
    "Process Consulting",
    "Technology Consulting",
    "SAP Support",
    "SAP Managed Services",
    "SAP AMS",
    "SAP Migration",
    "SAP Discovery & Evaluation",
    "SAP Implementation & Rollout",
    "SAP Upgrade Services",
  ];

  const industriesData = [
    "Retail",
    "Fashion & Apparel",
    "Grocery",
    "Specialty Retail",
    "Healthcare & Wellness",
    "Department Stores",
    "Wholesale Distribution",
    "Gems & Jewelry",
    "Consumer Products",
    "Food & Beverage",
    "Consumer Durables",
    "Home & Personal Care",
    "Manufacturing",
    "Automotive Manufacturing",
    "Process Manufacturing",
    "Discrete Manufacturing",
    "Engineering & Construction",
    "EC&O",
    "Real Estate",
    "Oil, Gas, & Energy",
    "Power Generation",
    "Renewable Energy",
    "Energy Retail",
    "Smart Grid",
    "Transmission & Distribution",
    "Professional Services",
    "Information Technology",
    "Travel & Tourism",
    "Life Sciences & Healthcare",
    "Pharmaceutical & Biotech",
    "Medical Devices",
    "Hospital & Clinics",
    "Banking & Financial Services",
    "Banking",
    "Insurance",
    "Financial Institutions",
    "Education",
    "Business Information Services",
    "Enterprise Services",
    "High-Tech",
    "Computer Peripherals",
    "Contract Manufacturers",
    "Distribution Companies",
  ];

  const insightsData = [
    "Customer Stories",
    "Blogs",
    "Newsroom",
    "White Papers",
    "Videos",
    "Brochures",
  ];

  const aboutData = [
    "Leadership",
    "SAP Partner",
    "Careers",
    "Alliances",
    "Partner with Us",
    "Events",
    "Locations",
  ];

  return (
    <div className="relative">
      <nav className="sticky top-0 w-full bg-gray-900 backdrop-blur-sm z-50 shadow-lg">
        <div className="max-w-full mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-white">
                <span className="text-orange-300">S</span>ria{" "}
                <span className="text-orange-300">I</span>nfotech
              </h1>
            </div>

            {/* Navigation Menu */}
            <div className="hidden xl:flex items-center space-x-6">
              <DropdownItem
                id="products"
                label="Products"
                sections={[{ title: "", items: productsData }]}
                width="w-96"
              />
              <DropdownItem
                id="solutions"
                label="Solutions"
                sections={solutionsSections}
                width="w-[64rem]"
              />
              <DropdownItem
                id="services"
                label="Services"
                sections={[{ title: "", items: servicesData }]}
                width="w-[28rem]"
              />
              <DropdownItem
                id="industries"
                label="Industries"
                sections={[{ title: "", items: industriesData }]}
                width="w-[36rem]"
              />
              <DropdownItem
                id="insights"
                label="Insights"
                sections={[{ title: "", items: insightsData }]}
                width="w-64"
              />
              <DropdownItem
                id="about"
                label="About"
                sections={[{ title: "", items: aboutData }]}
                width="w-64"
              />
              <Search className="w-5 h-5 text-white hover:text-orange-300 cursor-pointer transition-colors" />
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-4">
              <button className="text-white flex items-center hover:text-orange-300 transition-colors">
                <Globe className="w-5 h-5 mr-1" />
                Global
              </button>
              <button className="bg-orange-500 hover:bg-orange-600 text-black px-6 py-1 font-medium transition-colors">
                Contact us →
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
