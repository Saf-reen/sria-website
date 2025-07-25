interface StatCardProps {
  percentage?: string;
  icon?: React.ReactNode;
  description: string;
}

const StatCardStable: React.FC<StatCardProps> = ({
  percentage,
  icon,
  description,
}) => {
  return (
    <div className="flex flex-col  justify-start  items-start text-left  max-w-[350px]">
      <div className="text-[61px] flex flex-row  text-orange-500 font-[Questrial,Arial,Verdana,Tahoma,sans-serif] font-normal">
        {icon ?? percentage}
      </div>
      <p className="mt-4 text-black text-[21px] font-[Questrial,Arial,Verdana,Tahoma,sans-serif] font-normal">
        {description}
      </p>
    </div>
  );
};

export default StatCardStable;
