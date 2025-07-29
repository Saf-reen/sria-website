import GlobalOffices from "@/components/aboutus/GlobalOffices";
import Footer from "@/components/Footer";
import HeroSectionWithLinks from "@/components/HeroSectionWIthLInks";
import Navigation from "@/components/Navigation";
import React from "react";

function Location() {
  return (
    <div className="w-full min-h-screen">
      <Navigation enableScrollEffect={true} />
      <HeroSectionWithLinks
        imageUrl="https://www.accely.com/wp-content/uploads/2024/12/Location.webp"
        title="Global presence"
        links={[
          { label: "About us", href: "/aboutus" },
          { label: "Meet the team", href: "/about/leadership" },
        ]}
      />
      <div className="w-full relative bg-black z-10">
        <div className="w-full max-w-[1400px] mx-auto px-2 sm:px-4">
          <GlobalOffices />
        </div>
      </div>

      <div className="p-4 lg:p-8 w-full bg-white relative z-10 ">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {[
            { src: "/fixedIcons/1.png", label: "ISO 9001" },
            { src: "/fixedIcons/2.png", label: "ISO 27001" },
            { src: "/fixedIcons/3.png", label: "CMMI Level 5" },
            { src: "/fixedIcons/4.png", label: "AWS Partner" },
            { src: "/fixedIcons/5.png", label: "Microsoft Gold" },
            { src: "/fixedIcons/6.png", label: "ISO 9001" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-2 lg:p-4"
            >
              <img
                src={item.src}
                alt={item.label}
                className="h-16 sm:h-20 lg:h-24 mb-2 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="w-full  relative z-10 bg-black">
        {" "}
        {/* Full width container */}
        <div className="max-w-[1400px] w-full mx-auto">
          {" "}
          {/* Centered max width container */}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Location;
