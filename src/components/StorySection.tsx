import React from "react";

interface StorySectionProps {
  overviewTitle: string;
  overviewText: string;
  industry: string;
  region: string;
  companySize: string;
  challengesTitle: string;
  challenges: string[];
}

const StorySection: React.FC<StorySectionProps> = ({
  overviewTitle,
  overviewText,
  industry,
  region,
  companySize,
  challengesTitle,
  challenges,
}) => {
  return (
    <div className="w-full relative  z-10 flex justify-center bg-black text-white">
      <div className="w-[1400px] px-4 py-12 space-y-16">
        {/* Overview Section */}
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 text-xl font-semibold">{overviewTitle}</div>
          <div className="md:w-1/2 space-y-6 text-sm leading-relaxed text-gray-300">
            <p>{overviewText}</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-gray-400 font-semibold">Industry</p>
                <p>{industry}</p>
              </div>
              <div>
                <p className="text-gray-400 font-semibold">Region</p>
                <p>{region}</p>
              </div>
              <div>
                <p className="text-gray-400 font-semibold">Company Size</p>
                <p>{companySize}</p>
              </div>
            </div>
            <hr className="border-gray-700 mt-4" />
          </div>
        </div>

        {/* Challenges Section */}
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 text-xl font-semibold">
            {challengesTitle}
          </div>
          <div className="md:w-1/2 space-y-4 text-sm text-gray-300">
            {challenges.map((point, index) => (
              <div key={index} className="flex items-start gap-2">
                <span className="text-white text-base mt-1">✔️</span>
                <p>{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorySection;
