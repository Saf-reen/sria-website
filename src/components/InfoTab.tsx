import React from "react";

interface InfoTabProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const InfoTab: React.FC<InfoTabProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-start text-left p-6 bg-white shadow-sm rounded-xl hover:shadow-md transition-all duration-200 h-full">
      <div className="mb-4 text-yellow-500">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default InfoTab;
