import React, { useEffect, useRef } from "react";
import Requesademobtn from "../Requesademobtn";

const ParallaxScrollingComponent: React.FC = () => {
  const blackBoxRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  const startTop = 0.1; // 10%
  const scrollFactor = 0.3;
  const stopPointPercent = 0.7;
  const navbarHeight = 80;

  useEffect(() => {
    const handleScroll = () => {
      const blackBox = blackBoxRef.current;
      const hero = heroRef.current;
      if (!blackBox || !hero) return;

      const heroRect = hero.getBoundingClientRect();
      const heroTopScreen = heroRect.top;
      const heroHeight = hero.offsetHeight;
      const viewportHeight = window.innerHeight;

      const startTrigger = navbarHeight;
      const endTrigger = -0.4 * viewportHeight;

      const relativePosition = Math.min(
        Math.max(
          (startTrigger - heroTopScreen) / (startTrigger - endTrigger),
          0
        ),
        1
      );

      const maxTop = heroHeight * stopPointPercent;
      const top =
        heroHeight * startTop +
        relativePosition * (maxTop - heroHeight * startTop);

      blackBox.style.top = `${top}px`;
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial run
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative pt-10 bg-white">
      {/* Container with white space on the left */}
      <div
        className="relative h-[750px] ml-[10%] w-[90%] bg-cover bg-center" // background image shifted right
        ref={heroRef}
        style={{
          backgroundImage:
            "url('https://www.accely.com/wp-content/uploads/2024/12/Service-Common-image.webp')",
        }}
      >
        {/* Black box starts in the white area overlapping the image */}
        <div
          ref={blackBoxRef}
          className="absolute left-0 w-[70%] transform translate-x-[-20%] bg-black  text-white p-8  z-10 transition-all duration-500 ease-out w-[300px]"
          style={{ top: "10%" }}
        >
          <h1 className="text-3xl font-bold mb-4">
            Step in the world of Accely’s SAP Services and Support
          </h1>
          <Requesademobtn text="Book a Consultation" />
        </div>
      </div>
    </div>
  );
};

export default ParallaxScrollingComponent;
