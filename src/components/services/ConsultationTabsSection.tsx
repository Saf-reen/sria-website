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
    if (onCtaClick) {
      onCtaClick();
    } else {
      console.log("CTA clicked - no handler provided");
    }
  };

  return (
    <div className="w-full px-4 py-10 mx-auto bg-white text-black font-[Questrial,Arial,Verdana,Tahoma,sans-serif]">
      {/* Heading */}
      <div className="mb-5">
        <h1 className="text-[47px] font-[Questrial,Arial,Verdana,Tahoma,sans-serif]">
          {mainHeading}
        </h1>
      </div>

      {/* Description + CTA */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-12">
        <div className="md:w-4/5 text-[21px] text-[#484850] font-[Questrial,Arial,Verdana,Tahoma,sans-serif] font-normal">
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

      {/* Tabs Section */}
      <div className="flex flex-col h-[450px] md:flex-row gap-8">
        {/* Left: Tab List */}
        <div className="md:w-2/6 w-full h-[450px]">
          <div className="flex flex-col justify-between h-full">
            {solutions.map((solution, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`flex items-center justify-between px-4 py-3 w-full transition-all duration-200 text-[21px] group rounded-md
                  ${
                    index === activeIndex
                      ? "text-yellow-400"
                      : "text-black hover:text-gray-400 hover:scale-[1.02]"
                  }`}
                style={{ minWidth: "200px" }}
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

        {/* Right: Tab Content */}
        <div className="md:w-4/6 bg-[#F7F7F7] h-[450px] p-8 w-full">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl">
              {solutions[activeIndex]?.heading}
            </h2>
            <p className="text-[16px] text-[#484850] font-[Questrial,Arial,Verdana,Tahoma,sans-serif] font-normal text-base md:text-lg">
              {solutions[activeIndex]?.description}
            </p>
            <div className="grid grid-cols-1 text-black sm:grid-cols-2 gap-4 mt-4">
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

// Example usage componen
export default ConsultationTabsSection;
