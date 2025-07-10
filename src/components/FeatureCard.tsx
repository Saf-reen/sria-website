import React from "react";
import { CheckCircle } from "lucide-react";

type FeatureCardProps = {
  title: string;
  description: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => {
  return (
    <div className="bg-gray-200 p-6 rounded-md shadow-sm w-full  h-full">
      <div className="flex items-start gap-3">
        {/* Fixed size icon */}
        <CheckCircle className="text-black w-5 h-5 flex-shrink-0 mt-[2px]" />
        <div className="leading-snug">
          <h3 className="text-lg font-semibold text-black">{title}</h3>
          <p className="text-gray-700 text-sm mt-1">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
