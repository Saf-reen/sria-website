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
      percentage: "40%",
      description:
        "Reduction in manual order entry and billing errors through the integrated POS system.",
    },
    {
      percentage: "60%",
      description:
        "Improved inventory tracking accuracy, reducing food waste and enabling better stock forecasting.",
    },
    {
      percentage: "3x",
      description:
        "Faster table turnover and order processing with real-time POS syncing across devices.",
    },
  ];

  return (
    <div className="w-full min-h-screen">
      <Navigation />
      <div className="w-full flex sticky top-0">
        <StoriesHero
          imageSrc="/customerStories/7hills.jpg"
          imageAlt="7Hills Restaurant Belgium"
          category="Hospitality & Food Service"
          title="7Hills Restaurant Transforms Guest Experience with Website, POS & Inventory Integration"
          tag="POS • Website • Inventory"
          datePublished="August 1, 2025"
        />
      </div>
      <StorySection
        overviewTitle="Overview"
        overviewText="7Hills is a popular fine dining restaurant located in Belgium, known for its fusion cuisine and exceptional customer service. With growing demand and a vision to scale, they needed a streamlined way to manage reservations, customer orders, and inventory across multiple locations."
        industry="Hospitality"
        region="Belgium"
        companySize="50+ employees"
        challengesTitle="Business challenges"
        challenges={[
          "Manual reservation system leading to double bookings and miscommunication.",
          "No centralized system for order processing or transaction tracking.",
          "Inconsistent inventory tracking caused overstocking and last-minute shortages.",
          "Website lacked mobile optimization and online ordering capabilities.",
          "No visibility into daily operations, KPIs, or customer order trends.",
        ]}
      />
      <InnovativeSolutions
        title="Innovative solutions"
        introText="Our team partnered with 7Hills to design and deploy a tailored digital solution combining web presence, POS integration, and smart inventory management."
        ctaText="Explore digital transformation for your restaurant"
        solutions={[
          {
            label: "We Built",
            description:
              "A responsive, modern website with online reservation and menu browsing features to boost digital visibility and improve guest convenience.",
          },
          {
            label: "We Integrated",
            description:
              "A cloud-based POS system to streamline table-side ordering, billing, and kitchen coordination for faster service and improved accuracy.",
          },
          {
            label: "We Developed",
            description:
              "An inventory module that syncs with the POS and kitchen usage, giving real-time stock updates and waste tracking analytics.",
          },
          {
            label: "We Automated",
            description:
              "Daily reporting dashboards to monitor bookings, revenue, order trends, and ingredient usage – accessible via mobile or desktop.",
          },
        ]}
      />
      <BusinessImpact
        sectionTitle="Business impact"
        bgImage="https://www.accely.com/wp-content/uploads/2024/05/Customer-Benefits.webp"
        items={[
          {
            title: "Faster Order Processing",
            description:
              "POS integration reduced the average table service time by 20%, boosting customer satisfaction and table turnover.",
          },
          {
            title: "Efficient Inventory Control",
            description:
              "Digitized stock management helped cut wastage by 20%, while auto-reorder thresholds ensured seamless kitchen operations.",
          },
          {
            title: "Enhanced Online Presence",
            description:
              "A professional website led to a 4x increase in online reservations and a notable boost in social media mentions.",
          },
          {
            title: "Real-Time Insights",
            description:
              "Automated reports empowered the management to track daily performance, customer behavior, and sales patterns effortlessly.",
          },
          {
            title: "Cost Savings",
            description:
              "Reduction in staffing hours for manual order entries and billing tasks, saving 15+ hours per week.",
          },
          {
            title: "Improved Accuracy",
            description:
              "Order mistakes and billing discrepancies dropped by 35% due to seamless POS integration.",
          },
        ]}
      />
      <ImpactStats title="Impact that matters" items={impactItems} />
      <div className="p-4 lg:p-2 bg-white relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {[
            { src: "/fixedIcons/1.png", label: "POS Integration" },
            { src: "/fixedIcons/2.png", label: "Responsive Design" },
            { src: "/fixedIcons/3.png", label: "Inventory Tracking" },
            { src: "/fixedIcons/4.png", label: "SEO Optimized" },
            { src: "/fixedIcons/5.png", label: "Multi-Device Support" },
            { src: "/fixedIcons/6.png", label: "Cloud Hosted" },
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

export default CustomerStory1;
