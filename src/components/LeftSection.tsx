// components/LeftSection.tsx
import React from "react";

interface LeftSectionProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

const LeftSection: React.FC<LeftSectionProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <div className="w-full md:w-1/2 bg-blue-500 flex flex-col justify-between px-6 py-10 md:py-16 gap-6">
      <div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
          {title}
        </h1>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-base md:text-lg lg:text-xl text-white">
          {description}
        </h2>
        {children}
      </div>
    </div>
  );
};

export default LeftSection;
