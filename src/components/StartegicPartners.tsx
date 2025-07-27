import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const logos = [1, 2, 3, 4];

const StrategicPartners = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div ref={ref} className="w-full bg-[#0F0F0F] py-10 overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="w-full overflow-hidden"
        >
          <h1 className="text-2xl text-white mb-6 font-[Questrial,Arial,Verdana,Tahoma,sans-serif] font-normal text-[27px]">
            Strategic partners
          </h1>
          <div className="flex gap-10 whitespace-nowrap animate-marquee min-w-max">
            {[...logos, ...logos].map((num, idx) => (
              <img
                key={idx}
                src={`/fixedIcons/${num}.png`}
                alt={`FixedIcons ${num}`}
                className="h-24 pl-20 w-auto object-contain inline-block"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default StrategicPartners;
