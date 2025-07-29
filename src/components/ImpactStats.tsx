import React from "react";

interface ImpactStatItem {
  percentage: string;
  description: string;
}

interface ImpactStatsProps {
  title: string;
  items: ImpactStatItem[];
}

const ImpactStats: React.FC<ImpactStatsProps> = ({ title, items }) => {
  return (
    <div className="w-full flex relative z-10 bg-white flex-col md:flex-row items-start justify-center max-w-[1400px] mx-auto px-4 py-12">
      {/* Left Title */}
      <div className="w-full md:w-1/3 mb-8 md:mb-0">
        <h2 className="text-2xl font-semibold">{title}</h2>
      </div>

      {/* Right Items */}
      <div className="w-full md:w-2/3 flex flex-col md:flex-row md:flex-wrap gap-6">
        {items.map((item, index) => (
          <div key={index} className="w-full md:w-[45%]">
            <h3 className="text-3xl text-orange-500 font-bold mb-2">
              {item.percentage}
            </h3>
            <p className="text-sm text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImpactStats;
