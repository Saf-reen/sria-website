"use client";
import React from "react";
import {
  Cloud,
  Monitor,
  Server,
  Shield,
  Activity,
  Settings,
} from "lucide-react";

const tabs = [
  {
    icon: <Cloud className="w-10 h-10 text-white" />,
    heading: "Reduced total cost of ownership",
    description:
      "SAP managed services can help reduce maintenance costs and total cost of ownership (TCO).",
  },
  {
    icon: <Monitor className="w-10 h-10 text-white" />,
    heading: "Dedicated technical & functional assistance",
    description:
      "Better resource allocation within the company is made possible by technical and functional assistance boosting creativity and production.",
  },
  {
    icon: <Server className="w-10 h-10 text-white" />,
    heading: "Flexibility to scale",
    description:
      "Flexible contracting and data processing systems enable businesses to scale their SAP resources up or down as needed.",
  },
  {
    icon: <Shield className="w-10 h-10 text-white" />,
    heading: "High availability & guaranteed uptime",
    description:
      "Guaranteed uptime and high availability are possible with SAP managed services.",
  },
  {
    icon: <Settings className="w-10 h-10 text-white" />,
    heading: "Smart patch & upgrade management",
    description: "Database management, smart patch, upgrades and enhancements.",
  },
  {
    icon: <Activity className="w-10 h-10 text-white" />,
    heading: "Application & database security audits",
    description:
      "Routine database and application audits to make sure there are no vulnerabilities or non-compliances.",
  },
];

const TopSectionWithTabs: React.FC = () => {
  return (
    <>
      {/* Top Banner Section */}
      <div className="bg-[#222222] py-6 px-4 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-center h-auto md:h-[150px]">
        <h2 className="text-white text-[32px] sm:text-[40px] md:text-[47px] leading-tight">
          Unlock multiple possibilities together
        </h2>
        <button className="text-white bg-black px-6 py-2 mt-4 md:mt-0 text-[16px] rounded">
          Schedule Consultation
        </button>
      </div>

      {/* Tab Section */}
      <div className="bg-black text-white px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-[1400px] mx-auto w-full">
          <h2 className="text-white text-[32px] sm:text-[40px] md:text-[47px] pt-4 mb-10 font-[Questrial,Arial,Verdana,Tahoma,sans-serif] leading-tight w-full md:w-3/4">
            Key benefits of SAP Managed Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tabs.map((tab, index) => (
              <div
                key={index}
                className="bg-[#111] text-white p-4 sm:p-6 rounded-md shadow-md"
              >
                <div className="mb-4">{tab.icon}</div>
                <h3 className="text-[20px] sm:text-[21px] font-semibold mb-2 leading-tight">
                  {tab.heading}
                </h3>
                <p className="text-[16px] text-white">{tab.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TopSectionWithTabs;
