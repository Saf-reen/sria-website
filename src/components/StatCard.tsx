import { motion } from "framer-motion";

interface StatCardProps {
  percentage?: string;
  icon?: React.ReactNode;
  description: string;
  delay?: number;
}

const StatCard: React.FC<StatCardProps> = ({
  percentage,
  icon,
  description,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className="flex flex-col items-start md:items-center text-left md:text-center max-w-xs"
    >
      <div className="text-[99px] text-orange-500 font-[Questrial,Arial,Verdana,Tahoma,sans-serif] font-normal">
        {icon ?? percentage}
      </div>
      <p className="mt-4 text-white text-[21px] font-[Questrial,Arial,Verdana,Tahoma,sans-serif] font-normal">
        {description}
      </p>
    </motion.div>
  );
};

export default StatCard;
