// components/RightSection.tsx
import React from "react";

interface RightSectionProps {
  children?: React.ReactNode;
}

const RightSection: React.FC<RightSectionProps> = ({ children }) => {
  return (
    <div className="w-full md:w-1/2 h-[400px]  flex items-center justify-center">
      {children}
    </div>
  );
};

export default RightSection;
