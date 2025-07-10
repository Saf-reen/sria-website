import React from "react";

interface StatCardProps {
  percentage?: string;
  icon?: React.ReactNode;
  description: string;
}

const StatCard: React.FC<StatCardProps> = ({
  percentage,
  icon,
  description,
}) => {
  return (
    <div className="flex flex-col items-start md:items-center text-left md:text-center max-w-xs">
      <div className="text-5xl font-bold text-orange-500">
        {icon ? icon : percentage}
      </div>
      <p className="mt-4 text-white text-base">{description}</p>
    </div>
  );
};

export default StatCard;
