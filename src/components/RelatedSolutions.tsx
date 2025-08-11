// RelatedSolutions.tsx
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface Solution {
  title: string;
  href: string;
}

interface RelatedSolutionsProps {
  heading: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  solutions: Solution[];
}

const RelatedSolutions: React.FC<RelatedSolutionsProps> = ({
  heading,
  description,
  ctaText,
  ctaLink,
  solutions,
}) => {
  return (
    <div className="bg-gray-50 p-6 md:p-10 lg:p-14 rounded-lg shadow-sm mt-5 w-full">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 leading-tight">
            {heading}
          </h2>
          <p className="text-base text-gray-600 mb-6 max-w-md">{description}</p>
          <Link
            to={ctaLink}
            className="inline-flex items-center text-black font-medium hover:underline group"
          >
            {ctaText}
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Right solution links */}
        <div className="space-y-4 w-full">
          {solutions.map((solution, index) => (
            <Link
              key={index}
              to={solution.href}
              className="flex justify-between items-center border-t border-gray-300 pt-4 text-gray-900 font-medium hover:text-black group transition-all duration-200"
            >
              <span>{solution.title}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedSolutions;
