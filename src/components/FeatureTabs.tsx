import React, { useState } from "react";

type Feature = {
  title: string;
  description: string;
  image: string;
};

type FeatureTabsProps = {
  features: Feature[];
};

const FeatureTabs: React.FC<FeatureTabsProps> = ({ features }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!features || features.length === 0) {
    return <div>No features to display.</div>; // fallback
  }

  return (
    <div className="flex flex-col md:flex-row p-8 rounded-lg">
      {/* Left - Tabs */}
      <div className="w-full md:w-1/3 relative">
        <div className="relative border-l-2 border-gray-300">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`relative py-5 pl-6 pr-4 cursor-pointer transition-all`}
              onClick={() => setActiveIndex(index)}
            >
              {activeIndex === index && (
                <div className="absolute left-0 top-0 h-full w-1 bg-yellow-400 z-10" />
              )}

              <h3 className="text-xl font-semibold">{feature.title}</h3>
              {activeIndex === index && (
                <p className="text-gray-500 mt-2 text-sm">
                  {feature.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Right - Image */}
      <div className="w-full md:w-2/3 mt-6 md:mt-0 md:pl-10 flex justify-center items-stretch">
        <img
          src={features[activeIndex].image}
          alt={features[activeIndex].title}
          className="rounded-lg shadow-lg w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default FeatureTabs;
