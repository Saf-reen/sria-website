import React from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import {
  Cloud,
  Server,
  Settings,
  Shield,
  Monitor,
  Activity,
} from "lucide-react";

const tabs = [
  {
    icon: <Cloud className="w-10 h-10 text-black" />,
    heading: "SAP on Cloud Hosting",
    description:
      "Improved performance and lower operating expenses, adapting to shift company requirements.",
  },
  {
    icon: <Monitor className="w-10 h-10 text-black" />,
    heading: "SAP Performance Optimization",
    description:
      "Improve the cloud performance of your SAP systems with our customized services.",
  },
  {
    icon: <Server className="w-10 h-10 text-black" />,
    heading: "SAP Cloud Managed Services",
    description:
      "We handle the configuration of your SAP cloud for thorough and ongoing assistance.",
  },
];

const TabSection: React.FC = () => {
  return (
    <div className="w-full  font-[Questrial,Arial,Verdana,Tahoma,sans-serif] text-black">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row pb-5 justify-between items-start md:items-center mb-10">
        {/* Left: Title + Description */}
        <div className="w-full  md:w-6/7  ">
          <h1 className="text-[47px] tracking-tightest font-[Questrial,Arial,Verdana,Tahoma,sans-serif] ">
            SAP services to support your cloud operations
          </h1>
        </div>

        {/* Right: Navigation Arrows */}
        <div className="flex gap-4 w-full md:w-auto justify-end">
          <button className="p-2  border border-gray-300 hover:bg-gray-100">
            <ArrowLeft className="w-6 h-6 text-black" />
          </button>
          <button className="p-2  border border-gray-300 hover:bg-gray-100">
            <ArrowRight className="w-6 h-6 text-black" />
          </button>
        </div>
      </div>

      {/* Tabs Section */}
      {/* Wrapper for Tabs + Expert Box */}
      {/* Tabs Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-2 mb-10 w-full mx-auto">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className="bg-white flex flex-col items-start text-left w-full max-w-sm"
          >
            <div className="text-[40px] mb-4 pb-2">{tab.icon}</div>
            <h3 className="text-[27px] mb-2  pb-2 break-words whitespace-normal leading-tight">
              {tab.heading}
            </h3>

            <p className="text-[21px] text-[#484850] pb-2">{tab.description}</p>
          </div>
        ))}
      </div>

      {/* Single Tab-Width Expert Box */}
      <div className="w-full max-w-sm ">
        <div className="bg-[#f5f5f5] p-6 rounded-md flex flex-col gap-2">
          <p className="text-[16px] pb-4 text-[#484850]">
            Bring a revolutionary change to your enterprise with Accely’s
            efficient business solutions.
          </p>
          <button className="flex items-center gap-2 text-black hover:underline text-[16px]">
            Talk to an Expert <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TabSection;
