import React from "react";
import { Link } from "react-router-dom";

interface SolutionItem {
  label: string;
  description: string;
}

interface InnovativeSolutionsProps {
  title: string;
  introText: string;
  ctaText: string;
  solutions: SolutionItem[];
}

const InnovativeSolutions: React.FC<InnovativeSolutionsProps> = ({
  title,
  introText,
  ctaText,
  solutions,
}) => {
  return (
    <div className="w-full relative z-10 flex justify-center bg-white text-black">
      <div className="w-[1400px] px-4 py-12 space-y-8">
        <h2 className="text-2xl font-semibold">{title}</h2>

        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
          <p className="md:w-2/3 text-sm text-gray-700 leading-relaxed">
            {introText}
          </p>
          <Link
            to="/contactus"
            className="text-orange-500 text-sm font-medium hover:underline inline-flex items-center"
          >
            {ctaText} <span className="ml-1">→</span>
          </Link>
        </div>

        <div className="divide-y divide-gray-300 border-t border-b">
          {solutions.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-4 py-6">
              <div className="md:w-1/3 text-xs font-semibold uppercase text-gray-800">
                {item.label}
              </div>
              <div className="md:w-2/3 text-sm text-gray-700 leading-relaxed">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InnovativeSolutions;
