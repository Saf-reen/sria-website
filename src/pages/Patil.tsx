import BusinessImpact from "@/components/BusinessImpact";
import Footer from "@/components/Footer";
import ImpactStats from "@/components/ImpactStats";
import InnovativeSolutions from "@/components/InnovativeSolutions";
import Navigation from "@/components/Navigation";
import StoriesHero from "@/components/StoriesHero";
import StorySection from "@/components/StorySection";
import React from "react";

function Patil() {
  const impactItems = [
    {
      percentage: "75%",
      description:
        "Reduction in manual data handling through automated PDF-to-system workflows using OCR.",
    },
    {
      percentage: "60%",
      description:
        "Improved visibility and transparency across fund management lifecycle with real-time dashboards.",
    },
    {
      percentage: "90%",
      description:
        "Stability and uptime achieved across business apps via AMS and SAP support rollout.",
    },
  ];

  return (
    <div className="w-full min-h-screen">
      <Navigation />
      <div className="w-full flex sticky top-0">
        <StoriesHero
          imageSrc="/customerStories/patil.jpg"
          imageAlt="Enterprise Software Transformation"
          category="Enterprise IT"
          title="Patil Drives Operational Excellence with End-to-End SAP, AMS & OCR Automation"
          tag="SAP • AMS • OCR • Fund Management"
          datePublished="August 8, 2025"
        />
      </div>
      <StorySection
        overviewTitle="Overview"
        overviewText="Patil, a leading enterprise group, needed a robust digital foundation to scale operations across business units. Their existing systems were siloed, with manual processes for handling documents, fund allocation, and service support. We partnered with Patil to implement a tailored tech stack, ensuring visibility, automation, and long-term sustainability."
        industry="Enterprise IT & Financial Services"
        region="India"
        companySize="500+ employees"
        challengesTitle="Business challenges"
        challenges={[
          "Fragmented software landscape with no centralized monitoring of applications.",
          "Manual entry of financial and operational data from PDF documents.",
          "Inefficient fund tracking and delayed reporting across departments.",
          "SAP systems under-configured and lacked standardized rollout practices.",
          "Lack of proactive maintenance and downtime tracking for core systems.",
        ]}
      />
      <InnovativeSolutions
        title="Innovative solutions"
        introText="We designed and executed a complete digital transformation journey for Patil, combining enterprise-grade tools with modern automation techniques."
        ctaText="Explore enterprise transformation services"
        solutions={[
          {
            label: "We Delivered",
            description:
              "Comprehensive AMS (Application Management Services) to stabilize and support their business-critical applications.",
          },
          {
            label: "We Built",
            description:
              "A custom Fund Management solution tailored to Patil’s multi-department structure, enabling real-time allocation and tracking.",
          },
          {
            label: "We Configured",
            description:
              "SAP modules in collaboration with Apna Tech to ensure scalability, standardization, and audit-readiness ahead of rollout.",
          },
          {
            label: "We Automated",
            description:
              "PDF OCR workflows to extract key data from scanned documents — instantly syncing with internal systems and reducing manual load.",
          },
        ]}
      />
      <BusinessImpact
        sectionTitle="Business impact"
        bgImage="https://www.accely.com/wp-content/uploads/2024/05/Customer-Benefits.webp"
        items={[
          {
            title: "Operational Agility",
            description:
              "With AMS in place, Patil’s systems now run with minimal downtime, proactive monitoring, and dedicated escalation handling.",
          },
          {
            title: "Automated Document Handling",
            description:
              "OCR integration now processes hundreds of financial and compliance documents daily — no more manual retyping.",
          },
          {
            title: "Optimized Fund Management",
            description:
              "Finance teams now manage fund distribution and tracking through visual dashboards with real-time updates.",
          },
          {
            title: "SAP Modernization",
            description:
              "Patil’s SAP environment was fully configured and aligned to business processes for a seamless rollout phase.",
          },
          {
            title: "Faster Decision-Making",
            description:
              "Cross-team visibility and unified data access allow faster approvals and data-driven planning.",
          },
          {
            title: "Scalable Digital Foundation",
            description:
              "With all systems cloud-ready and connected, Patil is set for future expansion and process automation.",
          },
        ]}
      />
      <ImpactStats title="Impact that matters" items={impactItems} />
      <div className="p-4 lg:p-2 bg-white relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {[
            { src: "/fixedIcons/1.png", label: "SAP Config" },
            { src: "/fixedIcons/2.png", label: "AMS" },
            { src: "/fixedIcons/3.png", label: "Fund Management" },
            { src: "/fixedIcons/4.png", label: "PDF OCR" },
            { src: "/fixedIcons/5.png", label: "Workflow Automation" },
            { src: "/fixedIcons/6.png", label: "Cloud Ready" },
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
      <div className="w-full relative z-10 bg-black">
        <div className="max-w-[1400px] w-full mx-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Patil;
