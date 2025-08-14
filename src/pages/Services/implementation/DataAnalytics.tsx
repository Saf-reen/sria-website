import React from "react";
import FeatureCard from "@/components/FeatureCard";
import HighlightCard from "@/components/HighlightCard";
import ImageOverlay from "@/components/ImageOverlay";
import Navigation from "@/components/Navigation";
import Requesademobtn from "@/components/Requesademobtn";
import FAQSection from "@/components/FAQSection";
import FeatureTabs from "@/components/FeatureTabs";
import InfoTab from "@/components/InfoTab";
import ProductRange from "@/components/ProductRange";
import Resource from "@/components/Resource";
import SidebarMenu from "@/components/SidebarMenu";
import StatCard from "@/components/StatCard";
import {
  Star,
  Globe,
  Shield,
  Rocket,
  BarChart2,
  Database,
  Users,
  Settings,
  Cloud,
  Monitor,
  Server,
  Activity,
} from "lucide-react";
import Footer from "@/components/Footer";
import ConsultationTabsSection from "@/components/services/ConsultationTabsSection";
import StatCardStable from "@/components/StatCardStable";
import TabSection from "@/components/services/TabSection";
import Section from "@/components/services/PartnersCarousel";

import ParallaxScrollingComponent from "@/components/services/ParallaxScrollingComponent";
import TopSectionWithTabs from "@/components/services/TopSectionWithTabs";

import PartnersCarousel from "@/components/services/PartnersCarousel";
import { CustomerStories } from "@/components/CustomerStoriesTestimonials";

function DataAnalytics() {
  const tabsData2 = [
    {
      icon: <Cloud className="w-10 h-10 text-white" />,
      heading: "Reduced Data Management Costs",
      description:
        "Data analytics platforms can reduce storage, processing, and maintenance costs while maximizing efficiency.",
    },
    {
      icon: <Monitor className="w-10 h-10 text-white" />,
      heading: "Dedicated Analytical Expertise",
      description:
        "Gain access to skilled analysts and engineers to drive accurate insights and smarter decision-making.",
    },
    {
      icon: <Server className="w-10 h-10 text-white" />,
      heading: "Scalable Data Infrastructure",
      description:
        "Easily scale your analytics capabilities as your data grows, with flexible architectures and processing power.",
    },
    {
      icon: <Shield className="w-10 h-10 text-white" />,
      heading: "Data Security & Compliance",
      description:
        "Ensure secure storage, processing, and access control while meeting all regulatory compliance requirements.",
    },
    {
      icon: <Settings className="w-10 h-10 text-white" />,
      heading: "Automated Data Pipelines",
      description:
        "Streamline data ingestion, transformation, and reporting through automated workflows.",
    },
    {
      icon: <Activity className="w-10 h-10 text-white" />,
      heading: "Continuous Data Quality Monitoring",
      description:
        "Regular audits and validation checks to ensure accuracy, reliability, and consistency of insights.",
    },
  ];

  const tabsData = [
    {
      icon: <Cloud className="w-10 h-10 text-black" />,
      heading: "Cloud-Based Analytics",
      description:
        "Leverage cloud platforms for fast, cost-efficient, and scalable analytics solutions.",
    },
    {
      icon: <Monitor className="w-10 h-10 text-black" />,
      heading: "Performance Optimization",
      description:
        "Optimize data pipelines and queries for faster, more reliable analytics processing.",
    },
    {
      icon: <Server className="w-10 h-10 text-black" />,
      heading: "Managed Analytics Services",
      description:
        "We handle setup, maintenance, and optimization of your analytics stack for end-to-end support.",
    },
  ];

  const sampleSolutions = [
    {
      title: "End-to-End Analytics Implementation",
      heading: "From Data to Decisions",
      description:
        "We design and deploy complete analytics solutions, from data ingestion to visualization, enabling better business decision-making.",
      points: [
        "Requirement gathering & KPI definition",
        "Data pipeline setup & ETL development",
        "Dashboard and report creation",
        "Go-live support & user training",
      ],
    },
    {
      title: "Custom Data Models",
      heading: "Tailored Analytical Insights",
      description:
        "Build custom machine learning models and analytics workflows suited to your industry and business challenges.",
      points: [
        "Predictive modeling",
        "Anomaly detection",
        "Recommendation systems",
        "Custom metrics & calculations",
      ],
    },
    {
      title: "Data Migration Services",
      heading: "Secure & Seamless Transfer",
      description:
        "Migrate datasets from legacy systems to modern analytics platforms with zero data loss.",
      points: [
        "Data mapping & cleansing",
        "Automated migration scripts",
        "Integrity validation",
        "Post-migration support",
      ],
    },
    {
      title: "Data Integration Services",
      heading: "Unified Data Sources",
      description:
        "Integrate data from CRMs, ERPs, APIs, and other sources into a single analytics ecosystem.",
      points: [
        "API-based data integration",
        "Database synchronization",
        "Third-party data connectors",
        "Real-time streaming data",
      ],
    },
    {
      title: "Analytics Support & Maintenance",
      heading: "Always-On Insights",
      description:
        "Keep your analytics platform optimized, secure, and up-to-date with our ongoing support services.",
      points: [
        "24/7 monitoring",
        "Performance tuning",
        "Version upgrades",
        "Bug fixes & enhancements",
      ],
    },
    {
      title: "Cloud Analytics Hosting",
      heading: "Fast & Secure Infrastructure",
      description:
        "Host your analytics workloads on high-performance cloud environments.",
      points: [
        "AWS, Azure, and Google Cloud hosting",
        "Data backups & disaster recovery",
        "Security compliance",
        "Scalable compute resources",
      ],
    },
  ];

  const productData = [
    {
      title: "Odoo Implementation Services",
      description:
        "Comprehensive Odoo ERP solutions including module configuration, customization, integration, and cloud-based hosting to streamline operations and empower smarter business decisions.",
      link: "/odooservices/implementation",
    },
  ];

  const faqs = [
    {
      question:
        "What is Data Analytics and why is it important for my business?",
      answer:
        "Data analytics involves examining raw data to uncover trends, patterns, and insights that can improve decision-making, optimize operations, and drive growth.",
    },
    {
      question: "How customizable are your analytics solutions?",
      answer:
        "Our analytics solutions are highly customizable—from data pipelines and dashboards to predictive models—tailored to your business objectives and industry requirements.",
    },
    {
      question:
        "Is Data Analytics suitable for both small and large enterprises?",
      answer:
        "Absolutely! Whether you're a startup or a multinational, data analytics can be scaled to suit your data volume, budget, and strategic goals.",
    },
    {
      question: "What deployment options do you offer for analytics platforms?",
      answer:
        "We support fully cloud-based, on-premise, and hybrid analytics deployments, depending on your data security and performance needs.",
    },
    {
      question:
        "How easy is it to migrate data and train teams on analytics tools?",
      answer:
        "We ensure smooth migration with zero downtime and provide hands-on training so your team can confidently use the analytics platform from day one.",
    },
  ];

  const highlightData = [
    {
      title: "Faster Insights",
      description:
        "Reduce time-to-insight by up to 50% with optimized data pipelines and real-time dashboards.",
    },
    {
      title: "Cost-Effective Data Solutions",
      description:
        "Maximize ROI with tailored analytics setups that fit your budget without sacrificing quality.",
    },
    {
      title: "Seamless Integration",
      description:
        "Connect analytics with your existing tools and platforms for a unified data ecosystem.",
    },
    {
      title: "Scalable & Future-Ready",
      description:
        "Analytics infrastructure that grows with your business and adapts to new data sources effortlessly.",
    },
  ];

  <FAQSection faqs={faqs} />;

  const tabs = [
    {
      icon: <Star className="w-10 h-10 text-yellow-500" />,
      title: "Premium Features",
      description: "Access exclusive tools designed for optimal performance.",
    },
    {
      icon: <Globe className="w-10 h-10 text-blue-500" />,
      title: "Global Reach",
      description: "Connect with clients and teams across the world.",
    },
    {
      icon: <Shield className="w-10 h-10 text-green-500" />,
      title: "Secure",
      description: "Top-notch security ensures your data is always safe.",
    },
    {
      icon: <Rocket className="w-10 h-10 text-purple-500" />,
      title: "Fast Deployment",
      description: "Launch your projects quickly and efficiently.",
    },
    {
      icon: <BarChart2 className="w-10 h-10 text-pink-500" />,
      title: "Analytics",
      description: "Gain insights into user behavior and engagement.",
    },
    {
      icon: <Database className="w-10 h-10 text-orange-500" />,
      title: "Data Management",
      description: "Organize and maintain your data seamlessly.",
    },
    {
      icon: <Users className="w-10 h-10 text-red-500" />,
      title: "Team Collaboration",
      description: "Coordinate with your team in real time.",
    },
    {
      icon: <Settings className="w-10 h-10 text-gray-500" />,
      title: "Custom Settings",
      description: "Tailor the experience to your business needs.",
    },
  ];

  const menuItems = [
    "Offerings",
    "Insights",
    "Services",
    "Benefits",
    "Customer stories",
    "Partners",
    "Related services",
    // "Resources",
  ];
  const customerStories = [
    {
      id: 1,
      image: "/customerStories/patil.jpg",
      title:
        "Patil Drives Operational Excellence with End-to-End SAP, AMS & OCR Automation",
      readMoreLink: "/patil",
    },
    {
      id: 2,
      image: "/customerStories/7hills.jpg",
      title:
        "7Hills Restaurant Transforms Guest Experience with Custom Digital Platform",
      readMoreLink: "/hills",
    },
    {
      id: 3,
      image: "/customerStories/pharma.jpg",
      title:
        "LVK Pharma Goes Digital with Odoo CRM, Eliminates Manual Processes",
      readMoreLink: "/Lvk",
    },
  ];

  return (
    <div className="w-full relative overflow-x-hidden lg:overflow-x-visible">
      <div className="scroll-smooth w-full relative ">
        <Navigation enableScrollEffect={true} />

        {/* Hero Pinned */}

        <ImageOverlay
          imageUrl="/DATA ANALYTICS.png"
          title="Data Analytics"
          description="Achieve stability, reliability, and adaptability with Sria Infotech’s automation-driven Data Analytics Services."
        />
        <section className="relative min-h-[500px]  sticky top-0 z-20  bg-black bg-cover bg-center overflow-hidden">
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black z-10" />

          {/* Content Layer */}
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 py-24 text-white">
            {/* Heading + Paragraph - 50/50 */}
            <div className="flex flex-col md:flex-row justify-between gap-8 mb-10">
              <div className="w-full md:w-1/2">
                <h1 className="text-[47px]  leading-tight">
                  Maximize your data investment with Sria Infotech.
                </h1>
              </div>
              <div className="w-full md:w-1/2">
                <p className="text-base md:text-lg leading-relaxed">
                  The management and optimization of your data environment are
                  more important than ever in today’s fast-paced digital world.
                  As one of the top data analytics solution providers, Sria
                  Infotech offers end-to-end services that transform raw data
                  into actionable insights, ensuring your analytics systems are
                  efficient, secure, and fully aligned with your business
                  objectives.
                </p>
              </div>
            </div>

            {/* Highlight Cards */}
            <div className="flex flex-wrap gap-6">
              {highlightData.map((item, idx) => (
                <HighlightCard key={idx} {...item} />
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className=" relative  sticky top-0 z-20   bg-white ">
          <div className="  flex flex-col lg:flex-row w-full max-w-[1400px] mx-auto ">
            <div className="hidden lg:block lg:w-1/6">
              <div className="sticky top-24">
                <SidebarMenu menuItems={menuItems} />
              </div>
            </div>

            <div className="w-full lg:w-5/6 min-h-screen p-2">
              {/* Overview */}
              {/* Offerings Section */}
              <section id="offerings" className="scroll-mt-24 py-16 bg-white">
                <div className="max-w-[1400px] w-full px-4 mx-auto">
                  <ConsultationTabsSection
                    solutions={sampleSolutions}
                    mainHeading="Explore our wide range of offerings"
                    mainDescription="SAP Managed Services provide the full range of functional, technical, and cloud possibilities."
                    // ctaText="Get a Consultation"
                  />
                </div>
              </section>
              {/* Insights Section */}
              <section id="insights" className="scroll-mt-24 py-16 bg-white">
                <div className="max-w-[1400px] w-full px-4 mx-auto">
                  <h2 className="text-3xl sm:text-[47px] font-semibold mb-8">
                    Resourceful insights of Data Analytics Services
                  </h2>

                  <div className="py-8 sm:py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 bg-white">
                    <StatCardStable
                      percentage="50%"
                      description="Reduction in decision-making time through real-time analytics dashboards."
                    />
                    <StatCardStable
                      percentage="65%"
                      description="Increase in operational efficiency by leveraging predictive analytics models."
                    />
                    <StatCardStable
                      percentage="80%"
                      description="Automation of data processing pipelines, reducing manual reporting efforts."
                    />
                  </div>
                </div>
              </section>
              <section id="services" className="mt-20 w-full scroll-mt-24">
                <div className="max-w-[1400px] w-full px-4 mx-auto">
                  <TabSection
                    headingText="SAP services to support your cloud operations"
                    tabs={tabsData}
                  />
                </div>
              </section>
              <section
                id="benefits"
                className="mt-20 max-w-[1400px] scroll-mt-24"
              >
                <TopSectionWithTabs
                  tabSectionHeading="Key benefits of Data Analytics Services"
                  tabs={tabsData2}
                />
              </section>{" "}
              <section
                id="customer stories"
                className=" max-w-[1400px] px-2  w-full pb-10 bg-black "
              >
                <CustomerStories stories={customerStories} />
              </section>{" "}
              <section id="partners" className="max-w-[1400px]">
                <div className="max-w-[1400px] w-full mx-auto ">
                  <PartnersCarousel />
                </div>
              </section>{" "}
              <section
                id="partners"
                className="mt-20 hidden lg:block scroll-mt-24"
              >
                <ParallaxScrollingComponent />
              </section>
              <section id="related services" className="mt-20 scroll-mt-24">
                <ProductRange
                  heading="Explore other range of products"
                  paragraph="Discover products that complement your needs and drive business success."
                  products={productData}
                />
              </section>
              <section id="resources" className="mt-10 scroll-mt-24">
                {/* <Resource
                  heading="Explore Our Resources"
                  paragraph="Helpful tools and insights for your export-import operations"
                  products={[
                    {
                      title: "Trade Guide",
                      description:
                        "Comprehensive guide to international trade practices.",
                      image:
                        "https://www.accely.com/wp-content/uploads/2022/07/What-Is-Included-In-SAP-Managed-Services.webp",
                   link:"" },
                  ]}
                /> */}
              </section>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 rounded-lg mt-8">
        {/* <div className="flex flex-wrap justify-center items-center gap-8">
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
              className="flex flex-col items-center justify-center w-40 h-40 p-2"
            >
              <img
                src={item.src}
                alt={item.label}
                className="h-24 mb-2 object-contain"
              />
            </div>
          ))}
        </div> */}
      </div>
      <div>
        <div className="w-full bg-black">
          {" "}
          {/* Full width container */}
          <div className="max-w-[1400px] w-full mx-auto">
            {" "}
            {/* Centered max width container */}
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataAnalytics;
