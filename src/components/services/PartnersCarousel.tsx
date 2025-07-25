"use client";
import React, { useRef } from "react";
import {
  ArrowRight,
  ArrowLeft,
  Cloud,
  Monitor,
  Server,
  Shield,
  Activity,
  Settings,
} from "lucide-react";

const Partnerstabs = [
  {
    icon: <Cloud className="w-10 h-10 text-white" />,
    description:
      "Through its partnership with Hyland, Accely implements intelligent content management solutions that streamline workflows and enhance productivity.",
  },
  {
    icon: <Monitor className="w-10 h-10 text-white" />,
    description:
      "Accely leverages Microsoft Azure’s robust infrastructure to design scalable cloud solutions, enabling businesses to operate with agility and drive sustainable growth.",
  },
  {
    icon: <Server className="w-10 h-10 text-white" />,
    description:
      "Accely teams up with Automation Anywhere to implement powerful RPA solutions, automating complex processes to save time and boost operational efficiency.",
  },
  {
    icon: <Shield className="w-10 h-10 text-white" />,
    description:
      "With Accely’s CRM expertise and Salesforce’s advanced tools, we drive customer engagement and deliver impactful sales strategies.",
  },
  {
    icon: <Settings className="w-10 h-10 text-white" />,
    description:
      "Accely utilizes Precisely’s data precision solutions to empower businesses with trusted insights, fostering smarter, data-driven decisions.",
  },
  {
    icon: <Activity className="w-10 h-10 text-white" />,
    description:
      "Accely partners with Emarsys to deliver AI-powered omnichannel marketing solutions, empowering businesses to personalize customer journeys at scale.",
  },
];

const PartnersCarousel: React.FC = () => {
  const bottomScrollRef = useRef<HTMLDivElement>(null);

  const scrollBottom = (direction: "left" | "right") => {
    if (bottomScrollRef.current) {
      bottomScrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-[#222222] px-4 md:px-12 py-16 h-auto">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-white text-[47px] font-normal">
          Partners in innovation
        </h2>
        <div className="flex gap-2">
          <button
            onClick={() => scrollBottom("left")}
            className="p-2 border border-gray-400 hover:bg-gray-200 "
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={() => scrollBottom("right")}
            className="p-2 border border-gray-400 hover:bg-gray-200 "
          >
            <ArrowRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      <div
        ref={bottomScrollRef}
        className="flex gap-6"
        style={{
          overflowX: "hidden",
          scrollBehavior: "smooth",
        }}
      >
        {Partnerstabs.map((tab, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[calc(100%/3-16px)]  text-black p-4 flex flex-col items-start text-start "
          >
            <div className="mb-3">{tab.icon}</div>
            <p className="text-[21px] text-white">{tab.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnersCarousel;
