import BusinessImpact from "@/components/BusinessImpact";
import Footer from "@/components/Footer";
import ImpactStats from "@/components/ImpactStats";
import InnovativeSolutions from "@/components/InnovativeSolutions";
import Navigation from "@/components/Navigation";
import StoriesHero from "@/components/StoriesHero";
import StorySection from "@/components/StorySection";
import React from "react";

function CustomerStory1() {
  const impactItems = [
    {
      percentage: "25%",
      description:
        "Reduction in Total Cost of Ownership (TCO), delivering long-term cost efficiency while supporting innovation and business growth.",
    },
    {
      percentage: "35%",
      description:
        "Reduced implementation time, allowing teams to focus on innovation and business growth sooner.",
    },
    {
      percentage: "70%",
      description:
        "Increased operational speed contributing to faster decision-making, quicker service delivery, and improved overall agility across departments.",
    },
  ];
  return (
    <div className="w-full  min-h-screen">
      <Navigation />
      <div className=" w-full flex sticky top-0 ">
        <StoriesHero
          imageSrc="https://www.accely.com/wp-content/uploads/2025/04/Leader-Healthcare-Streamlines-Business-Operations-with-SAP-S4HANA-Public-Cloud.webp"
          imageAlt="Doctor at laptop"
          category="Life Sciences & Healthcare"
          title="Leader Healthcare Streamlines Business Operations with SAP S/4HANA Public Cloud"
          tag="SAP ERP"
          datePublished="April 22, 2025"
        />
      </div>
      <StorySection
        overviewTitle="Overview"
        overviewText="One of the largest suppliers of surgical and diagnostic equipment in the UAE..."
        industry="Life Sciences & Healthcare"
        region="United Arab Emirates"
        companySize="500+ employees"
        challengesTitle="Business challenges"
        challenges={[
          "Difficulty to manage a global network of distributors and suppliers with strict delivery and quality requirements.",
          "Tracking the services performed on individual sub-components of a main asset during maintenance or repair.",
          "The existing infrastructure could not support the rapid business growth and evolving demands of the healthcare market.",
          "Manual financial operations and outdated reporting methods led to delays and a lack of real-time insights.",
          "Integrating assets into the SAP C4C module with the service feature presents several complexities.",
          "Because of the limited reporting and dashboarding capabilities, the fundamental asset maintenance and servicing process is entirely manual and has less visibility.",
        ]}
      />
      <InnovativeSolutions
        title="Innovative solutions"
        introText="Accely, a trusted SAP partner offered a customized strategy for deploying SAP S/4HANA Public Cloud..."
        ctaText="Schedule a consultation"
        solutions={[
          {
            label: "We Implemented",
            description:
              "Grow with SAP S/4HANA Cloud, Public Edition to drive scalability, standardization, and accelerated digital transformation.",
          },
          {
            label: "We Ensured",
            description:
              "Smooth data exchange across departments, improving coordination between procurement, sales, and finance teams.",
          },
          {
            label: "We Deployed",
            description:
              "SAP Field Service Management to enhance on-site service efficiency, optimize workforce scheduling, and deliver superior customer experiences.",
          },
          {
            label: "We Integrated",
            description:
              "SAP C4C with SAP S/4HANA and executed a phased rollout across multiple countries to ensure global alignment and operational consistency.",
          },
        ]}
      />
      <BusinessImpact
        sectionTitle="Business impact"
        bgImage="	https://www.accely.com/wp-content/uploads/2024/05/Customer-Benefits.webp"
        items={[
          {
            title: "Real-Time Supply Chain Visibility",
            description:
              "End-to-end inventory tracking and procurement optimization ensured timely stock replenishment, minimizing shortages and excess inventory.",
          },
          {
            title: "Enhanced Financial Accuracy",
            description:
              "AI-driven automation streamlined invoicing, financial reporting, and tax compliance reducing errors and ensuring adherence to healthcare regulations.",
          },
          {
            title: "Improved Operational Efficiency",
            description:
              "Automated workflows and seamless system integration reduced manual tasks, improving overall productivity and process efficiency.",
          },
          {
            title: "Cost Optimization",
            description:
              "The cloud-based infrastructure eliminated the need for expensive on-premise IT maintenance while optimizing resource allocation and operational costs.",
          },
          {
            title: "Improvement",
            description:
              "Increase efficiency, speed, and decision-making within your company.",
          },
          {
            title: "Faster Decision-Making",
            description:
              "Advanced analytics and real-time dashboards empowered leadership with actionable insights, enabling proactive decision-making and strategic planning.",
          },
        ]}
      />
      <ImpactStats title="Impact that matters" items={impactItems} />;
      <div className="p-4 lg:p-2   bg-white relative z-10">
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
                className="h-46 sm:h-40 lg:h-40 mb-2 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="w-full relative z-10  bg-black">
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

export default CustomerStory1;
