// components/TeamSection.tsx
import React from "react";
import LeadershipCard from "./LeadershipCard";

const leaders = [
  {
    name: "Nilesh Shah",
    designation: "CEO – Accely Group",
    description:
      "Accelerator & Builder of Accely’s Global Operations. Seasoned & Habituated SAP Entrepreneur for High & Mid Tier SAP Engagements.",
    image: "/team/nilesh.jpg",
    linkedinUrl: "#",
    email: "nilesh@example.com",
  },
  {
    name: "Sameer Satpute",
    designation: "CEO, Singapore & South East Asia",
    description:
      "25+ years of expertise in business development, IT strategies, sales, and global delivery.",
    image: "/team/sameer.jpg",
    linkedinUrl: "#",
    email: "sameer@example.com",
  },
  {
    name: "Akshat Joshi",
    designation: "CEO, Roaypd & BTP Practice Director",
    description:
      "Expert in PAAS, Cloudification, Open API, Microservices, AI/ML, and more.",
    image: "/team/akshat.jpg",
    linkedinUrl: "#",
    email: "akshat@example.com",
  },
  {
    name: "Nilesh Shah",
    designation: "CEO – Accely Group",
    description:
      "Accelerator & Builder of Accely’s Global Operations. Seasoned & Habituated SAP Entrepreneur for High & Mid Tier SAP Engagements.",
    image: "/team/nilesh.jpg",
    linkedinUrl: "#",
    email: "nilesh@example.com",
  },
  {
    name: "Sameer Satpute",
    designation: "CEO, Singapore & South East Asia",
    description:
      "25+ years of expertise in business development, IT strategies, sales, and global delivery.",
    image: "/team/sameer.jpg",
    linkedinUrl: "#",
    email: "sameer@example.com",
  },
  {
    name: "Akshat Joshi",
    designation: "CEO, Roaypd & BTP Practice Director",
    description:
      "Expert in PAAS, Cloudification, Open API, Microservices, AI/ML, and more.",
    image: "/team/akshat.jpg",
    linkedinUrl: "#",
    email: "akshat@example.com",
  },
  {
    name: "Nilesh Shah",
    designation: "CEO – Accely Group",
    description:
      "Accelerator & Builder of Accely’s Global Operations. Seasoned & Habituated SAP Entrepreneur for High & Mid Tier SAP Engagements.",
    image: "/team/nilesh.jpg",
    linkedinUrl: "#",
    email: "nilesh@example.com",
  },
  {
    name: "Sameer Satpute",
    designation: "CEO, Singapore & South East Asia",
    description:
      "25+ years of expertise in business development, IT strategies, sales, and global delivery.",
    image: "/team/sameer.jpg",
    linkedinUrl: "#",
    email: "sameer@example.com",
  },
  {
    name: "Akshat Joshi",
    designation: "CEO, Roaypd & BTP Practice Director",
    description:
      "Expert in PAAS, Cloudification, Open API, Microservices, AI/ML, and more.",
    image: "/team/akshat.jpg",
    linkedinUrl: "#",
    email: "akshat@example.com",
  },
  // Add more...
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
