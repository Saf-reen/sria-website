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
        imageUrl="/location.jpg"
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
