// components/TeamSection.tsx
import React from "react";
import LeadershipCard from "./LeadershipCard";

const leaders = [
  {
    name: "Ashwini Ganji",
    designation: "Chairman - Sria Group of Companies",
    description:
      "Chairman - SRIA Group of Companies, leading organizational growth through visionary leadership and sustainable business practices.",
    image: "/chairman.jpg",
    linkedinUrl: "http://linkedin.com/in/saikumarb/",
    email: "saikumarb@sriainfotech.com",
  },
  {
    name: "Sai Kumar Bonakurthi",
    designation: "Founder,Director - Sria Group of Companies",
    description:
      "Founder, Managing Director, CEO - SRIA Group of Companies, guiding strategic direction and fostering innovation to drive business excellence.",
    image: "/sai.png",
    linkedinUrl: "http://linkedin.com/in/saikumarb/",
    email: "saikumarb@sriainfotech.com",
  },
  {
    name: "Ravikumar Rangari",
    designation: "Co-Founder, Executive Chairman  - Sria Group of Companies",
    description:
      "Co-Founder, Executive Chairman - SRIA Group of Companies, overseeing operations and driving efficiency to ensure seamless project execution and growth.",
    image: "/ravi.jpg",
    linkedinUrl: "https://www.linkedin.com/in/ravikumar-r-53265a22a/",
    email: "ravirangari@sriainfotech.com",
  },
  {
    name: "Siri Chandra Valasa",
    designation: "CEO - Sria Infotech",
    description:
      "CEO of Sria Infotech, leading innovation and growth through technology-driven solutions.",
    image: "/siri.jpg",
    linkedinUrl: "https://www.linkedin.com/in/sirichandravalasa/",
    email: "siri@sriainfotech.com",
  },
];

const TeamSection = () => {
  return (
    <div className="bg-white py-12 relative z-10 px-4 md:px-12">
      <h2 className="text-3xl font-light text-center text-gray-900 mb-12">
        Meet Leadership Team
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {leaders.map((person, index) => (
          <LeadershipCard key={index} {...person} />
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
