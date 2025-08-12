import React, { useRef } from "react";
import { ArrowRight, ArrowLeft, Cloud, Server, Monitor } from "lucide-react";

const tabs = [
  {
    icon: <Cloud className="w-10 h-10 text-black" />,
    heading: "SAP on Cloud Hosting",
    description:
      "Improved performance and lower operating expenses, adapting to shift company requirements.",
  },
  {
    icon: <Monitor className="w-10 h-10 text-black" />,
    heading: "SAP Performance Optimization",
    description:
      "Improve the cloud performance of your SAP systems with our customized services.",
  },
  {
    icon: <Server className="w-10 h-10 text-black" />,
    heading: "SAP Cloud Managed Services",
    description:
      "We handle the configuration of your SAP cloud for thorough and ongoing assistance.",
  },
];

const TabSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.9;
      scrollRef.current.scrollTo({
        left:
          direction === "left"
            ? scrollLeft - scrollAmount
            : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full bg-white text-black font-[Questrial,Arial,Verdana,Tahoma,sans-serif]">
      <div className="max-w-[1400px] mx-auto  ">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <h1 className="text-[36px] sm:text-[47px] leading-tight font-normal tracking-tight mb-6 md:mb-0 md:w-2/3">
            SAP services to support your cloud operations
          </h1>

          <div className="flex gap-4 w-full md:w-auto justify-end">
            <button
              onClick={() => scroll("left")}
              className="p-2 border border-gray-300 hover:bg-gray-100"
            >
              <ArrowLeft className="w-6 h-6 text-black" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 border border-gray-300 hover:bg-gray-100"
            >
              <ArrowRight className="w-6 h-6 text-black" />
            </button>
          </div>
        </div>

        {/* Tabs: Scrollable on small, grid on large */}
        <div
          ref={scrollRef}
          className="flex lg:grid lg:grid-cols-3 gap-6 mb-10 overflow-x-auto scrollbar-hide scroll-smooth"
        >
          {tabs.map((tab, index) => (
            <div
              key={index}
              className="bg-white flex-shrink-0 w-[80%] sm:w-[60%] lg:w-auto lg:flex-shrink max-w-sm p-4"
            >
              <div className="mb-4">{tab.icon}</div>
              <h3 className="text-[24px] sm:text-[27px] font-semibold leading-tight mb-2">
                {tab.heading}
              </h3>
              <p className="text-[18px] sm:text-[21px] text-[#484850]">
                {tab.description}
              </p>
            </div>
          ))}
        </div>

        {/* Expert Box */}
        <div className="w-full sm:max-w-sm">
          <div className="bg-[#f5f5f5] p-6 rounded-md flex flex-col gap-4">
            <p className="text-[16px] text-[#484850]">
              Bring a revolutionary change to your enterprise with Sria Infotech’s
              efficient business solutions.
            </p>
            <button className="flex items-center gap-2 text-black hover:underline text-[16px]">
              Talk to an Expert <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabSection;
