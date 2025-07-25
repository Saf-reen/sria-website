import React from "react";
import { ArrowRight } from "lucide-react";

interface HighlightCardProps {
  title: string;
  description: string;
}

const HighlightCard: React.FC<HighlightCardProps> = ({
  title,
  description,
}) => {
  return (
    <div className="bg-[#2C2C2C] p-6 rounded-md shadow w-full md:w-[22%] flex-shrink-0">
      <div className="flex gap-3 items-start">
        <ArrowRight className="text-white w-5 h-5 mt-1" />
        <div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="text-sm text-white mt-1">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default HighlightCard;
