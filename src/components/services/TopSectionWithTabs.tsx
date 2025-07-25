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
      {/* --- Top 10% --- */}
      <div className="bg-[#222222] py-6 px-4 md:px-12 flex justify-between items-center h-[150px]">
        <h2 className="text-white text-[47px]">
          Unlock multiple possibilities together
        </h2>
        <button className="text-white bg-black px-6 py-2 text-[16px] rounded">
          Schedule Consultation
        </button>
      </div>

      {/* --- Tab Section --- */}
      <div className="bg-black text-white px-4 md:px-12 py-16 h-auto">
        <h2 className="text-white text-[47px] w-3/5 pt-4 mb-10 font-[Questrial,Arial,Verdana,Tahoma,sans-serif] leading-none">
          Key benefits of SAP Managed Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className=" text-white p-2 flex flex-col mb-5 items-start text-left rounded-md shadow-md"
            >
              <div className="mb-4">{tab.icon}</div>
              <h3 className="text-[21px] mb-2 leading-tight">{tab.heading}</h3>
              <p className="text-[16px] text-[white]">{tab.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TopSectionWithTabs;
