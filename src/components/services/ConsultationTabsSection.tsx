import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

interface Solution {
  title: string;
  heading: string;
  description: string;
  points: string[];
}

interface ConsultationTabsSectionProps {
  solutions: Solution[];
  mainHeading?: string;
  mainDescription?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

const ConsultationTabsSection = ({
  solutions,
  mainHeading = "Explore our wide range of offerings",
  mainDescription = "SAP Managed Services provide the full range of functional, technical, and cloud possibilities.",
  ctaText = "Get a Consultation",
  onCtaClick,
}: ConsultationTabsSectionProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleCtaClick = () => {
    onCtaClick?.();
  };

  return (
    <div className="w-full px-4 py-10 mx-auto max-w-[1400px] text-black font-[Questrial,Arial,Verdana,Tahoma,sans-serif]">
      {/* Heading */}
      <div className="mb-5">
        <h1 className="text-[47px]">{mainHeading}</h1>
      </div>

      {/* Description + CTA */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-12">
        <div className="md:w-4/5 text-[21px] text-[#484850] font-normal">
          {mainDescription}
        </div>
        <div className="md:w-1/5 flex items-center justify-end gap-2 whitespace-nowrap">
          <button
            onClick={handleCtaClick}
            className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300 transition-all"
          >
            {ctaText}
          </button>
          <ArrowRight className="text-yellow-400" />
        </div>
      </div>

      {/* Content & Tab List */}
    <div className="flex flex-col-reverse md:flex-row w-full">
  {/* --- Tab List (now on the left) --- */}
  <div className="md:w-1/3 w-full md:bg-[#F7F7F7] p-2 flex flex-col md:order-none order-last">
    {/* Mobile Tabs */}
    <div className="md:hidden overflow-x-auto mb-4">
      <div className="flex gap-4 w-max border-b border-gray-300">
        {solutions.map((solution, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`pb-2 text-[18px] whitespace-nowrap ${
              index === activeIndex
                ? "text-yellow-400 border-b-2 border-yellow-400"
                : "text-black"
            }`}
          >
            {solution.title}
          </button>
        ))}
      </div>
    </div>

    {/* Desktop Tabs */}
    <div className="hidden md:flex flex-col">
      {solutions.map((solution, index) => (
        <button
          key={index}
          onClick={() => setActiveIndex(index)}
          className={`flex items-center justify-between px-4 py-3 w-full transition-all duration-200 text-[21px] group rounded-md ${
            index === activeIndex
              ? "text-yellow-400"
              : "text-black hover:text-gray-400 hover:scale-[1.02]"
          }`}
        >
          <span className="text-left break-words whitespace-normal w-full">
            {solution.title}
          </span>
          <div className="hidden md:flex items-center h-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <ArrowRight
              size={24}
              strokeWidth={2}
              className="shrink-0 text-current"
            />
          </div>
        </button>
      ))}
    </div>
  </div>

  {/* --- Content (now on the right) --- */}
  <div className="md:w-2/3 w-full bg-[#F7F7F7] p-6 md:p-8 flex flex-col">
    <div className="space-y-6 flex-1">
      <h2 className="text-2xl md:text-3xl">
        {solutions[activeIndex]?.heading}
      </h2>
      <p className="text-[16px] text-[#484850] font-normal text-base md:text-lg">
        {solutions[activeIndex]?.description}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        {solutions[activeIndex]?.points.map((point, idx) => (
          <div key={idx} className="flex items-start pb-5 pt-5 gap-2">
            <div className="w-5 h-5 flex-shrink-0 rounded-full bg-black flex items-center justify-center text-white font-bold text-sm">
              ✓
            </div>
            <span className="text-black">{point}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default ConsultationTabsSection;
