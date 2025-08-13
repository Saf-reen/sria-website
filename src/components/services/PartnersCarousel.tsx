"use client";
import React, { useRef } from "react";
import {
  ArrowRight,
  ArrowLeft,
  Cloud,
  Monitor,
  Link,
  Server,
  Shield,
  Activity,
  Settings,
} from "lucide-react";

const Partnerstabs = [
  // {
  //   icon: <Cloud className="w-10 h-10 text-white" />,
  //   description:
  //     "Through its partnership with Hyland, Sria Infotech implements intelligent content management solutions that streamline workflows and enhance productivity.",
  // },
  {
    icon: <Monitor className="w-10 h-10 text-white" />,
    description:
      "Sria Infotech partners with Microsoft to deliver intelligent business solutions powered by Azure, Power Platform, and Microsoft 365—enabling seamless integration, secure collaboration, and enterprise-grade scalability.",
  },
  // {
  //   icon: <Server className="w-10 h-10 text-white" />,
  //   description:
  //     "Sria Infotech teams up with Automation Anywhere to implement powerful RPA solutions, automating complex processes to save time and boost operational efficiency.",
  // },
  {
    icon: <Link className="w-10 h-10 text-white" />,
    description:
      "Through its collaboration with Redington, Sria Infotech accelerates technology adoption by offering trusted IT distribution, cloud enablement, and digital infrastructure solutions tailored to diverse business needs.",
  },
  // {
  //   icon: <Settings className="w-10 h-10 text-white" />,
  //   description:
  //     "Sria Infotech utilizes Precisely’s data precision solutions to empower businesses with trusted insights, fostering smarter, data-driven decisions.",
  // },
  // {
  //   icon: <Activity className="w-10 h-10 text-white" />,
  //   description:
  //     "Sria Infotech partners with Emarsys to deliver AI-powered omnichannel marketing solutions, empowering businesses to personalize customer journeys at scale.",
  // },
];

const PartnersCarousel: React.FC = () => {
  const bottomScrollRef = useRef<HTMLDivElement>(null);

  const scrollBottom = (direction: "left" | "right") => {
    if (bottomScrollRef.current) {
      bottomScrollRef.current.scrollBy({
        left: direction === "left" ? -360 : 360,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-[#222222] px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-[1400px] mx-auto w-full">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-white text-[32px] sm:text-[40px] md:text-[47px] font-normal">
            Partners in innovation
          </h2>
          <div className="flex gap-2">
            <button
              onClick={() => scrollBottom("left")}
              className="p-2 border border-gray-400 hover:bg-gray-200"
            >
              <ArrowLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={() => scrollBottom("right")}
              className="p-2 border border-gray-400 hover:bg-gray-200"
            >
              <ArrowRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        {/* Carousel with arrows only (no manual scroll) */}
        <div ref={bottomScrollRef} className="flex overflow-x-hidden">
          {Partnerstabs.map((tab, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] lg:w-[calc(100%/3-16px)]   p-4"
            >
              <div className="mb-3">{tab.icon}</div>
              <p className="text-[18px] text-white">{tab.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersCarousel;
