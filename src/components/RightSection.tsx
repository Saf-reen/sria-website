// components/RightSection.tsx
import React from "react";

interface RightSectionProps {
  children?: React.ReactNode;
}

const RightSection: React.FC<RightSectionProps> = ({ children }) => {
  return (
    <div className="w-full md:w-1/2 h-[300px] md:h-auto bg-green-500 flex items-center justify-center">
      {children}
    </div>
  );
};

export default RightSection;
