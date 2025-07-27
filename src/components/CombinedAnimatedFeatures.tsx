import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const partners = [
  {
    id: 1,
    title: "Retail",
    description:
      "Comprehensive retail solutions for modern commerce and customer experience.",
    image: "/partners/retail.jpg",
  },
  {
    id: 2,
    title: "Consumer products",
    description:
      "Innovative consumer product development and market strategies.",
    image: "/partners/consumer.jpg",
  },
  {
    id: 3,
    title: "Engineering and construction",
    description:
      "Advanced engineering solutions and construction project management.",
    image: "/partners/engineering.jpg",
  },
  {
    id: 4,
    title: "Professional services",
    description:
      "Expert professional services tailored to your business needs.",
    image: "/partners/professional.jpg",
  },
  {
    id: 5,
    title: "Life sciences & Healthcare",
    description:
      "Cutting-edge life sciences and healthcare technology solutions.",
    image: "/partners/healthcare.jpg",
  },
  {
    id: 6,
    title: "Manufacturing",
    description: "Smart manufacturing solutions and industrial automation.",
    image: "/partners/manufacturing.jpg",
  },
  {
    id: 7,
    title: "Education",
    description: "Educational technology and learning management solutions.",
    image: "/partners/education.jpg",
  },
  {
    id: 8,
    title: "High-Tech",
    description:
      "Advanced high-tech solutions and digital transformation services.",
    image: "/partners/hightech.jpg",
  },
];

const CombinedAnimatedFeatures = () => {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [isSettled, setIsSettled] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const activePartner = partners.find((p) => p.id === activeId);
  const hoveredPartner = partners.find((p) => p.id === hoveredId);

  const handleClick = (id: number) => {
    setActiveId(id);
    if (!isMobile) {
      setTimeout(() => {
        setIsSettled(true);
        setTimeout(() => {
          setShowDescription(true);
        }, 500);
      }, 1000);
    } else {
      setShowDescription(true);
    }
  };

  const handleReset = () => {
    setShowDescription(false);
    if (!isMobile) {
      setTimeout(() => {
        setIsExiting(true);
        setIsSettled(false);
      }, 1000);
    } else {
      setActiveId(null);
    }
  };

  const handleExitComplete = () => {
    setIsExiting(false);
    setActiveId(null);
  };

  return (
    <motion.div
      animate={{ height: showDescription ? 800 : 600 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="w-full text-black overflow-hidden relative font-[Questrial,Arial,Verdana,Tahoma,sans-serif] font-normal"
    >
      <div className="flex w-full flex-wrap transition-all duration-500">
        {/* Left Side Image - Hide on mobile */}
        {!activeId && (
          <div className="hidden md:flex w-1/2 justify-center items-center pr-10">
            <div className="h-[400px] w-[400px] overflow-hidden">
              <img
                src={hoveredPartner?.image || "/partners/retail.jpg"}
                alt={hoveredPartner?.title || "Default Partner"}
                className="w-full h-full object-cover transition-all duration-300"
              />
            </div>
          </div>
        )}

        {/* Right Side */}
        <div className={`${activeId ? "w-full" : "w-full md:w-1/2"} relative`}>
          {/* List */}
          {!activeId &&
            partners.map((partner) => (
              <div
                key={partner.id}
                onClick={() => handleClick(partner.id)}
                onMouseEnter={() => setHoveredId(partner.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="cursor-pointer group relative mb-4"
              >
                <span className="text-[27px] text-[#101010] group-hover:text-orange-500 font-normal transition-colors duration-200">
                  {partner.title}
                </span>
                <div className="h-[2px] bg-gray-200 w-full transition-all duration-200" />
              </div>
            ))}

          {/* Floating Title (desktop only) */}
          <AnimatePresence onExitComplete={handleExitComplete}>
            {activeId && activePartner && !isMobile && !isExiting && (
              <motion.div
                key={activeId}
                initial={{ x: 0, y: 0, opacity: 1 }}
                animate={
                  isSettled
                    ? { x: "-600px", y: 750, opacity: 1 }
                    : { x: "-600px", y: 0, opacity: 1 }
                }
                exit={{
                  x: ["-600px", "-600px", "50%"],
                  y: [750, 0, 0],
                  opacity: [1, 1, 0],
                  transition: {
                    times: [0, 0.6, 1],
                    duration: 1.5,
                    ease: "easeInOut",
                  },
                }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="absolute top-0 left-1/2 transform -translate-x-1/2 cursor-pointer z-10"
              >
                <div
                  onClick={handleReset}
                  className="text-3xl font-normal text-left inline-block"
                >
                  {activePartner.title}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100vw" }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="h-[3px] bg-gray-200 mt-2"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Partner Content */}
          <AnimatePresence>
            {showDescription && activePartner && !isExiting && (
              <motion.div
                key="description"
                initial={isMobile ? { x: "100%" } : { x: "100%", opacity: 0 }}
                animate={isMobile ? { x: 0 } : { x: 0, opacity: 1 }}
                exit={isMobile ? { x: "100%" } : { x: "100%", opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className={`bg-white text-black px-4 ${
                  isMobile ? "min-h-screen overflow-y-auto" : ""
                }`}
              >
                <div className="w-full max-w-7xl mx-auto pt-6 pb-10">
                  {/* ✅ Back Button (Mobile Only) */}
                  {isMobile && (
                    <button
                      onClick={handleReset}
                      className="block md:hidden text-sm text-orange-600 mb-6 hover:underline"
                    >
                      ← Back
                    </button>
                  )}

                  <div className="flex flex-col md:flex-row gap-10 items-start justify-around">
                    {/* Image */}
                    <div className="md:w-1/2 w-full  flex justify-center">
                      <img
                        src={activePartner.image}
                        alt={activePartner.title}
                        className="w-full max-w-md h-[200px] shadow-md object-cover"
                      />
                    </div>

                    {/* Text */}
                    <div className="md:w-1/2 w-full">
                      <h2 className="text-3xl font-semibold mb-4">
                        {activePartner.title}
                      </h2>
                      <p className="text-gray-700 mb-6 text-lg">
                        {activePartner.description}
                      </p>
                      <button
                        onClick={handleReset}
                        className="bg-orange-500 text-white px-6 py-3 hover:bg-orange-600 transition"
                      >
                        Explore {activePartner.title} solutions →
                      </button>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 text-lg font-medium">
                        <a
                          href="#"
                          className="hover:text-orange-500 transition"
                        >
                          Food & Beverage →
                        </a>
                        <a
                          href="#"
                          className="hover:text-orange-500 transition"
                        >
                          Consumer Durables →
                        </a>
                        <a
                          href="#"
                          className="hover:text-orange-500 transition"
                        >
                          Home & Personal Care →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default CombinedAnimatedFeatures;
