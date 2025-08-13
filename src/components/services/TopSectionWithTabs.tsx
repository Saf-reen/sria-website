"use client";
import React from "react";
import {Link} from "react-router-dom";

interface TabItem {
  icon: JSX.Element;
  heading: string;
  description: string;
}

interface TopSectionWithTabsProps {
  tabSectionHeading: string;
  tabs: TabItem[];
}

const TopSectionWithTabs: React.FC<TopSectionWithTabsProps> = ({
  tabSectionHeading,
  tabs,
}) => {
  return (
    <>
      {/* Top Banner Section */}
      <div className="bg-[#222222] py-6 px-4 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-center h-auto md:h-[150px]">
        <h2 className="text-white text-[32px] sm:text-[40px] md:text-[47px] leading-tight">
          Unlock multiple possibilities together
        </h2>
        <Link to="/contactus">
        <button className="text-white bg-black px-6 py-2 mt-4 md:mt-0 text-[16px] rounded">
          Schedule Consultation
        </button>
        </Link>
      </div>

      {/* Tab Section */}
      <div className="bg-black text-white px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-[1400px] mx-auto w-full">
          <h2 className="text-white text-[32px] sm:text-[40px] md:text-[47px] pt-4 mb-10 font-[Questrial,Arial,Verdana,Tahoma,sans-serif] leading-tight w-full md:w-3/4">
            {tabSectionHeading}
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
