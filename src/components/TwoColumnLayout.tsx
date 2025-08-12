import React from "react";

interface TwoColumnLayoutProps {
  left: React.ReactNode;
  right: React.ReactNode;
}

const TwoColumnLayout: React.FC<TwoColumnLayoutProps> = ({ left, right }) => {
  return (
    <div className="mt-16 w-full min-h-[400px] flex justify-between items-center bg-gray-100 ">
      <div className="flex flex-col md:flex-row w-full  h-full">
        {left}
        {right}
      </div>
    </div>
  );
};

export default TwoColumnLayout;
