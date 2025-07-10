import React from "react";

interface TwoColumnLayoutProps {
  left: React.ReactNode;
  right: React.ReactNode;
}

const TwoColumnLayout: React.FC<TwoColumnLayoutProps> = ({ left, right }) => {
  return (
    <div className="mt-16 w-full min-h-[400px] flex justify-center items-center bg-gray-100 px-4">
      <div className="flex flex-col md:flex-row w-full md:max-w-[80vw] h-full">
        {left}
        {right}
      </div>
    </div>
  );
};

export default TwoColumnLayout;
