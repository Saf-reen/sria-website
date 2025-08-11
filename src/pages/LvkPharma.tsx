import BusinessImpact from "@/components/BusinessImpact";
import Footer from "@/components/Footer";
import ImpactStats from "@/components/ImpactStats";
import InnovativeSolutions from "@/components/InnovativeSolutions";
import Navigation from "@/components/Navigation";
import StoriesHero from "@/components/StoriesHero";
import StorySection from "@/components/StorySection";
import React from "react";

function LvkPharma() {
  const impactItems = [
    {
      percentage: "90%",
      description:
        "Reduction in paperwork and manual recordkeeping after CRM implementation.",
    },
    {
      percentage: "60%",
      description:
        "Improved lead conversion rate through automated follow-ups and sales pipeline tracking.",
    },
    {
      percentage: "3x",
      description:
        "Faster customer response times with centralized data and communication history.",
    },
  ];

  return (
    <div className="w-full min-h-screen">
      <Navigation />
      <div className="w-full flex sticky top-0">
        <StoriesHero
          imageSrc="/customerStories/pharma.jpg"
          imageAlt="LVK Pharma CRM Success"
          category="Pharmaceuticals"
          title="LVK Pharma Goes Digital with Odoo CRM, Eliminates Manual Processes"
          tag="CRM Implementation"
          datePublished="August 5, 2025"
        />
      </div>
      <StorySection
        overviewTitle="Overview"
        overviewText="LVK Pharma, a growing pharmaceutical company based in Uppal, Hyderabad, relied entirely on paper-based operations. As customer engagement and data management became more complex, they needed a reliable CRM system to bring structure and speed to their workflows."
        industry="Pharmaceuticals"
        region="Uppal, Hyderabad"
        companySize="100+ employees"
        challengesTitle="Business challenges"
        challenges={[
          "Customer details and follow-ups were tracked on paper, leading to lost or missed opportunities.",
          "No visibility into the sales pipeline or team performance.",
          "Data duplication and inconsistent communication across departments.",
          "Lack of structured reporting made business planning difficult.",
          "Manual processes slowed down lead nurturing and delayed responses.",
        ]}
      />
      <InnovativeSolutions
        title="Innovative solutions"
        introText="We worked closely with LVK Pharma to implement Odoo CRM and modernize their sales and customer engagement processes."
        ctaText="Discover Odoo CRM for your business"
        solutions={[
          {
            label: "We Analyzed",
            description:
              "Current workflows and mapped pain points in their paper-based processes.",
          },
          {
            label: "We Implemented",
            description:
              "Odoo CRM with modules tailored for pharmaceutical sales, including lead tracking, contact management, and activity scheduling.",
          },
          {
            label: "We Trained",
            description:
              "The internal sales and support teams on CRM usage, ensuring quick adoption and smooth transition.",
          },
          {
            label: "We Automated",
            description:
              "Email templates, reminders, and reporting dashboards to eliminate repetitive tasks and bring real-time visibility.",
          },
        ]}
      />
      <BusinessImpact
        sectionTitle="Business impact"
        bgImage="https://www.accely.com/wp-content/uploads/2024/05/Customer-Benefits.webp"
        items={[
          {
            title: "Digitized Sales Process",
            description:
              "From initial inquiry to final deal, every stage is now tracked within Odoo CRM, improving consistency and accountability.",
          },
          {
            title: "Centralized Customer Data",
            description:
              "All customer interactions are now stored in one place, accessible by all departments instantly.",
          },
          {
            title: "Increased Productivity",
            description:
              "Sales reps now focus more on clients instead of administrative tasks, boosting output across the team.",
          },
          {
            title: "Better Forecasting",
            description:
              "Automated reports allow leadership to make quicker and more informed business decisions.",
          },
          {
            title: "Smooth Transition",
            description:
              "The team adapted quickly thanks to intuitive UI, step-by-step training, and ongoing support.",
          },
          {
            title: "Paperless Operations",
            description:
              "LVK Pharma successfully eliminated its dependency on paper-based systems, going fully digital.",
          },
        ]}
      />
      <ImpactStats title="Impact that matters" items={impactItems} />
      <div className="p-4 lg:p-2 bg-white relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {[
            { src: "/fixedIcons/1.png", label: "Odoo CRM" },
            { src: "/fixedIcons/2.png", label: "Sales Automation" },
            { src: "/fixedIcons/3.png", label: "Lead Management" },
            { src: "/fixedIcons/4.png", label: "Real-Time Reports" },
            { src: "/fixedIcons/5.png", label: "Cloud CRM" },
            { src: "/fixedIcons/6.png", label: "Training & Support" },
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

export default LvkPharma;
