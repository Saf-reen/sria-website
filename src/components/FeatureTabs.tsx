import React, { useState } from "react";

type Feature = {
  title: string;
  description: string;
  image: string;
};

const features: Feature[] = [
  {
    title: "Plans and Licensing Administration",
    description:
      "We offer full 360-degree end-to-end management of license & scheme development, in addition to simple and seamless scheme management services.",
    image: "/images/tab1.jpg",
  },
  {
    title: "Managing Export Incentive Faster",
    description:
      "Optimize your incentive processing with automated EXIM tools.",
    image: "/images/tab2.jpg",
  },
  {
    title: "Expense Management for Logistics",
    description:
      "Control and monitor logistics expenses across borders efficiently.",
    image: "/images/tab3.jpg",
  },
  {
    title: "Extraordinary Record-keeping",
    description:
      "Maintain accurate, auditable records for all your EXIM transactions.",
    image: "/images/tab4.jpg",
  },
  {
    title: "Controlling Exchange Currency",
    description:
      "Manage currency fluctuations and streamline forex operations.",
    image: "/images/tab5.jpg",
  },
];

const FeatureTabs: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col md:flex-row bg-gray-50 p-8 rounded-lg">
      {/* Left - Tabs */}
      <div className="w-full md:w-1/2 relative">
        <div className="relative border-l-2 border-gray-300">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`relative py-5 pl-6 pr-4 cursor-pointer transition-all`}
              onClick={() => setActiveIndex(index)}
            >
              {/* Yellow Line - Absolutely positioned over the left border */}
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
      <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-10 flex justify-center items-center">
        <img
          src={features[activeIndex].image}
          alt={features[activeIndex].title}
          className="rounded-lg shadow-lg w-full h-auto max-h-[400px] object-cover"
        />
      </div>
    </div>
  );
};

export default FeatureTabs;
