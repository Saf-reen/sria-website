// components/RightSection.tsx
import React from "react";

interface RightSectionProps {
  children?: React.ReactNode;
}

const RightSection: React.FC<RightSectionProps> = ({ children }) => {
  return (
    <div className="w-full md:w-1/2 min-h-[300px] md:h-auto  flex items-center justify-center">
      {children}
    </div>
  );
};

export default RightSection;
