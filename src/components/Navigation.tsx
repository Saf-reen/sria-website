import React, { useState } from 'react';
import { Search, Globe, ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (dropdown) => {
    setHoveredItem(dropdown);
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
    setActiveDropdown(null);
  };

  const sapServicesData = [
    "SAP S/4HANA Implementation Services",
    "SAP S/4HANA AMS",
    "SAP S/4HANA Migration Services",
    "SAP S/4HANA Consulting Services",
    "SAP Fiori Development Services",
    "SAP Business Technology Platform",
    "SAP Custom Development and Enhancement",
    "ABAP RESTful Application Programming Model service",
    "SAP BASIS Support Services"
  ];

  const microsoftServicesData = [
    "Microsoft Azure",
    "Microsoft Databricks",
    "Power Apps/Power Automate",
    "Azure DevOps",
    "Microsoft Copilot"
  ];

  const dataAnalyticsData = [
    "Microsoft Power BI",
    "SAP Analytics Cloud (SAC)",
    "Tableau"
  ];

  const industriesData = [
    "Automotive",
    "Banking",
    "Consumer Products",
    "Oil, Gas and Energy",
    "Retail"
  ];

  const insightsData = [
    "Blog",
    "Case Studies",
    "White Paper",
    "Testimonials"
  ];

  const jobPostingsData = [
    "Search and Apply",
    "Career Catalyst"
  ];

  const aboutUsData = [
    "Vision",
    "Mission",
    "Clients",
    "Contact Us"
  ];

  const DropdownItem = ({ id, label, data, width = 'w-64' }) => (
    <div 
      className="relative"
      onMouseEnter={() => handleMouseEnter(id)}
      onMouseLeave={handleMouseLeave}
    >
      <button className="flex items-center text-white hover:text-orange-300 transition-colors font-medium text-sm whitespace-nowrap group">
        {label}
        <ChevronDown className={`w-3 h-3 ml-1 transition-all duration-500 ${
          hoveredItem === id ? 'opacity-100 transform rotate-0' : 'opacity-0 transform rotate-180'
        }`} />
      </button>
      
      <div className={`absolute top-full left-0 ${width} z-50 transition-all duration-1000 ease-out ${
        activeDropdown === id 
          ? 'opacity-100 transform translate-y-0 scale-y-100 pointer-events-auto' 
          : 'opacity-0 transform -translate-y-4 scale-y-0 pointer-events-none'
      } origin-top`}>
        <div className="bg-gray-800 rounded-lg shadow-xl border border-gray-700 py-6 px-6 mt-0">
          <ul className="space-y-2">
            {data.map((item, index) => (
              <li key={index} className={`transition-all duration-500 ${
                activeDropdown === id 
                  ? `opacity-100 transform translate-y-0 delay-${index * 50}` 
                  : 'opacity-0 transform translate-y-2'
              }`}>
                <a 
                  href="#" 
                  className="text-white block py-2 px-3 rounded transition-colors text-sm hover:bg-gray-700 hover:text-orange-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative">
      {/* Removed <style jsx> block as it is not supported in plain React */}
      
      <nav className="fixed top-0 w-full bg-gray-900 backdrop-blur-sm z-50 shadow-lg">
        <div className="max-w-full mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-white">
                <span className="text-orange-300">S</span>ria <span className="text-orange-300">I</span>nfotech
              </h1>
            </div>

            {/* Navigation Menu */}
            <div className="hidden xl:flex items-center space-x-6">
              <DropdownItem 
                id="sapservices" 
                label="SAP Services" 
                data={sapServicesData} 
                width="w-80" 
              />
              
              <DropdownItem 
                id="microsoftservices" 
                label="Microsoft Managed Services" 
                data={microsoftServicesData} 
                width="w-72" 
              />
              
              <DropdownItem 
                id="dataanalytics" 
                label="Data Analytics" 
                data={dataAnalyticsData} 
                width="w-64" 
              />
              
              <DropdownItem 
                id="industries" 
                label="Industries" 
                data={industriesData} 
                width="w-64" 
              />
              
              <DropdownItem 
                id="insights" 
                label="Insights" 
                data={insightsData} 
                width="w-48" 
              />
              
              <DropdownItem 
                id="jobpostings" 
                label="Job Postings" 
                data={jobPostingsData} 
                width="w-48" 
              />
              
              <DropdownItem 
                id="aboutus" 
                label="About Us" 
                data={aboutUsData} 
                width="w-48" 
              />
              
              <Search className="w-5 h-5 text-white hover:text-orange-300 cursor-pointer transition-colors" />
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-4">
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