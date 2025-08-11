import AboutCompany from "@/components/aboutus/AboutCompany";
import CompanyTimeline from "@/components/aboutus/CompanyTimeline";
import CreatingPositiveChange from "@/components/aboutus/CreatingPositiveChange";
import GlobalOffices from "@/components/aboutus/GlobalOffices";
import MissionStatement from "@/components/aboutus/MissionStatement";
import ContactImageOverlay from "@/components/ContactImageOverlay";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import StoriesHero from "@/components/StoriesHero";
import React from "react";

function AboutUs() {
  return (
    <div>
      {" "}
      <Navigation enableScrollEffect={true} />
      <ContactImageOverlay
        imageUrl="https://www.accely.com/wp-content/uploads/2024/12/about-banner-1.webp"
        title="About Sria Infotech"
      />
      <div className="w-full relative bg-black z-10">
        <div className="w-full max-w-[1400px] mx-auto px-2 sm:px-4">
          <AboutCompany />
        </div>
      </div>
      <div className="w-full relative bg-white z-10">
        <div className="w-full max-w-[1400px] mx-auto px-2 sm:px-4">
          <CreatingPositiveChange />
          <MissionStatement />
          <CompanyTimeline />
        </div>
      </div>
      <div className="w-full relative bg-black z-10">
        <div className="w-full max-w-[1400px] mx-auto px-2 sm:px-4">
          <GlobalOffices />
        </div>
      </div>
     
      <div className="w-full bg-black relative z-10">
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

export default AboutUs;
