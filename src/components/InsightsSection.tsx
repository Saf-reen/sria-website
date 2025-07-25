// InsightsSection.tsx
import React from "react";
import { ArrowRight, Download } from "lucide-react";

interface InsightCardProps {
  imageUrl?: string;
  imageAlt?: string;
  title: string;
  gradientFrom: string;
  gradientTo: string;
}

interface InsightsSectionProps {
  insights: InsightCardProps[];
}

const InsightCard: React.FC<InsightCardProps> = ({
  imageUrl,
  imageAlt,
  title,
  gradientFrom,
  gradientTo,
}) => {
  return (
    <div className="group">
      <div className="grid lg:grid-cols-5 gap-8 items-center">
        <div className="lg:col-span-2">
          <div
            className={`aspect-[4/3] bg-gradient-to-br ${gradientFrom} ${gradientTo} rounded-lg overflow-hidden shadow-lg`}
          >
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={imageAlt || title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white">
                No Image
              </div>
            )}
          </div>
        </div>

        <div className="lg:col-span-3">
          <h2 className="text-2xl lg:text-3xl font-light text-gray-900 mb-6 leading-tight">
            {title}
          </h2>
          <button className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium transition-all duration-200 group-hover:translate-x-1">
            <Download className="mr-2 w-4 h-4" />
            Download white paper
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

const InsightsSection: React.FC<InsightsSectionProps> = ({ insights }) => {
  return (
    <div className="bg-gray-50  py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <h1 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 leading-tight">
                Unlock expert insights
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
                Transform ideas into action with our exclusive collection of
                insights, curated to drive growth, innovation, and success in
                your business endeavors.
              </p>
            </div>
            <div className="lg:text-right">
              <button className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium transition-colors duration-200">
                Get notified
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mb-16"></div>

        <div className="space-y-16">
          {insights.map((insight, index) => (
            <InsightCard key={index} {...insight} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InsightsSection;
