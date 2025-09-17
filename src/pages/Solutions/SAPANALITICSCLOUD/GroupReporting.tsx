import React from "react";
import Navigation from "@/components/Navigation";
import TwoColumnLayout from "@/components/TwoColumnLayout";
import LeftSection from "@/components/LeftSection";
import RightSection from "@/components/RightSection";
import Requesademobtn from "@/components/Requesademobtn";
import {Link} from "react-router-dom";
import SidebarMenu from "@/components/SidebarMenu";
import FeatureCard from "@/components/FeatureCard";
import FeatureTabs from "@/components/FeatureTabs";
import StatCard from "@/components/StatCard";
import InfoTab from "@/components/InfoTab";
import {
  Shield,
  Lock,
  Settings,
  Database,
  Users,
  CheckCircle,
  Server,
  Cloud,
  BarChart2,
  Rocket,
  Globe,
  Star,
} from "lucide-react";

import FAQSection from "@/components/FAQSection";

import ProductRange from "@/components/ProductRange";
import Resource from "@/components/Resource";
import WorldMap from "@/components/aboutus/WorldMap";
import BeautifulParallaxTailwind from "@/components/BeautifulParallaxTailwind";
import Footer from "@/components/Footer";
import StatCardStable from "@/components/StatCardStable";
import InfoSection from "@/components/InfoSection";
import ConsultationTabsSection from "@/components/services/ConsultationTabsSection";
import { CustomerStories } from "@/components/CustomerStoriesTestimonials";
import InsightsSection from "@/components/InsightsSection";
import RelatedSolutions from "@/components/RelatedSolutions";


const faqs = [
  {
    question: "What is SAP Group Reporting?",
    answer:
      "It’s SAP’s solution for financial consolidation and group close, integrated directly with SAP S/4HANA for real-time reporting and compliance.",
  },
  {
    question: "How does it differ from SAP BPC?",
    answer:
      "SAP Group Reporting provides real-time consolidation with S/4HANA data, while BPC involves more batch processing and manual data transfer.",
  },
  {
    question: "Is SAP Group Reporting cloud-based?",
    answer:
      "Yes. It supports both cloud and on-premise deployments, depending on your organization's preferences.",
  },
  {
    question: "What accounting standards are supported?",
    answer:
      "It supports multiple standards including IFRS, US GAAP, and local statutory requirements.",
  },
  {
    question: "Can it handle multi-currency consolidations?",
    answer:
      "Yes. It performs real-time currency conversion and reporting for global entities.",
  },
];

const tabs = [
  {
    icon: <BarChart2 className="w-10 h-10 text-yellow-500" />,
    title: "Live Financial Insights",
    description:
      "Access consolidated financial data instantly to support decision-making.",
  },
  {
    icon: <Database className="w-10 h-10 text-blue-500" />,
    title: "Integrated Data Source",
    description:
      "Eliminate data duplication by directly accessing GL and master data.",
  },
  {
    icon: <Shield className="w-10 h-10 text-green-500" />,
    title: "Strong Compliance",
    description:
      "Ensure accurate financials aligned with IFRS, GAAP, and local regulations.",
  },
  {
    icon: <Rocket className="w-10 h-10 text-purple-500" />,
    title: "Accelerated Close",
    description:
      "Shorten closing cycles with automation, validations, and collaboration tools.",
  },
  {
    icon: <Settings className="w-10 h-10 text-red-500" />,
    title: "Flexible Reporting",
    description:
      "Generate internal, statutory, and managerial reports with a unified platform.",
  },
  {
    icon: <Globe className="w-10 h-10 text-orange-500" />,
    title: "Global Scalability",
    description:
      "Support multi-entity and multi-currency setups for global operations.",
  },
  {
    icon: <Users className="w-10 h-10 text-teal-500" />,
    title: "User Collaboration",
    description:
      "Enable teams to collaborate securely during the close and consolidation processes.",
  },
  {
    icon: <Star className="w-10 h-10 text-gray-500" />,
    title: "Continuous Innovation",
    description:
      "Benefit from frequent updates and innovations as part of the SAP roadmap.",
  },
];

const sampleSolutions = [
  {
    title: "Unified Financial Statements",
    heading: "Group Consolidation & Reporting",
    description:
      "Generate consolidated financial statements across entities and geographies with built-in compliance.",
    points: [
      "Real-time intercompany eliminations",
      "Multi-currency conversion",
      "Audit-ready reports",
      "IFRS/GAAP compliant disclosures",
    ],
  },
  {
    title: "Close Acceleration",
    heading: "Streamlined Financial Close",
    description:
      "Speed up period-end close with automated validations, workflows, and audit trails.",
    points: [
      "Automated journal entries",
      "Workflow-based approvals",
      "Error detection mechanisms",
      "Transparent close lifecycle",
    ],
  },
  {
    title: "Data Consistency",
    heading: "Single Source of Financial Truth",
    description:
      "Ensure accurate data with native integration to SAP GL and master data governance.",
    points: [
      "No need for ETL tools",
      "Direct GL data usage",
      "Master data harmonization",
      "Integrated business logic",
    ],
  },
  {
    title: "Reporting Flexibility",
    heading: "Flexible Reporting Framework",
    description:
      "Customize and distribute financial reports and disclosures to stakeholders with ease.",
    points: [
      "Pre-built and custom reports",
      "Multiple report formats",
      "Self-service reporting",
      "Cloud and on-premise options",
    ],
  },
];

const menuItems = [
  "Overview",
  "Features",
  "Insights",
  "Benefits",
  "Find Your Answers",
  "Other Products",
  // "Resources",
];

const sapData = {
  heading: "What is SAP Group Reporting?",
  description:
    "Group Reporting delivers a complete suite of capabilities, including real-time financial consolidation across multiple entities, automated intercompany elimination.",
  imageUrl: "/Solutions/group-reporting.png",
  imageAlt: "SAP Group Reporting visualization",
  items: [
    {
      title: "Embedded in S/4HANA",
      highlight: "Native Integration",
      description:
        "Directly connects with transactional data in SAP S/4HANA, eliminating the need for data replication.",
    },
    {
      title: "Real-Time Consolidation",
      highlight: "Live Financial Data",
      description:
        "Perform consolidations using real-time actuals without delays or batch processes.",
    },
    {
      title: "Regulatory Compliance",
      description:
        "Supports IFRS, GAAP, and other standards to meet global financial reporting requirements.",
    },
  ],
};

const customerStories = [
    {
      id: 1,
      image:
        "/customerStories/patil.jpg",
      title: "Patil Drives Operational Excellence with End-to-End SAP, AMS & OCR Automation",
      readMoreLink: "/patil",
    },
    {
      id: 2,
      image:
        "/customerStories/7hills.jpg",
      title: "7Hills Restaurant Transforms Guest Experience with Custom Digital Platform",
      readMoreLink: "/hills",
    },
    {
      id: 3,
      image:
        "/customerStories/pharma.jpg",
      title: "LVK Pharma Goes Digital with Odoo CRM, Eliminates Manual Processes",
      readMoreLink: "/Lvk",
    },
  ];

const insights = {
   heading: "Explore related financial solutions",
  description:
    "From consolidation to analytics, find the perfect solution to streamline your financial reporting processes.",
  ctaText: "Talk to an expert",
  ctaLink: "/contact",
  solutions: [
    { title: "SAP Managed Services", href: "/sapmanagedservices" },
    { title: "SAP Cloud Planning", href: "/solutions/cloud-planning" },
    { title: "SAP PaPM", href: "/solutions/papm" },
  ],
};

const insightsData = [
  {
    title: "Financial Consolidation Best Practices",
    imageUrl: "/images/financial-consolidation.jpg",
    imageAlt: "Financial Consolidation",
    gradientFrom: "from-blue-600",
    gradientTo: "to-blue-800",
  },
  {
    title: "Regulatory Compliance in Group Reporting",
    imageUrl: "/images/compliance-reporting.jpg",
    imageAlt: "Compliance Reporting",
    gradientFrom: "from-teal-600",
    gradientTo: "to-cyan-700",
  },
  {
    title: "Digital Finance Transformation",
    imageUrl: "/images/digital-finance.jpg",
    imageAlt: "Digital Finance",
    gradientFrom: "from-purple-600",
    gradientTo: "to-indigo-700",
  },
];

const features = [
  {
    title: "Real-Time Consolidation",
    description:
      "Combine data from multiple entities instantly for a single, accurate financial view.",
    image: "/GroupReporting/realtime.png",
  },
  {
    title: "Automated Intercompany Elimination",
    description:
      "Eliminate duplicate transactions effortlessly to maintain data integrity.",
    image: "/GroupReporting/audit.png",
  },
  {
    title: "Global Compailance",
    description:
      "Ensure adherence to IFRS, GAAP, and other international accounting standards.",
    image: "/GroupReporting/intercompany.png",
  },
  {
    title: "Currency Translation",
    description:
      "Handle multi-currency operations with automated and accurate conversions.",
    image: "/GroupReporting/disclosure.png",
  },
  {
    title: "Integrated Analytics & Reporting",
    description:
      "Access real-time dashboards and KPIs for informed decision-making.",
    image: "/GroupReporting/cloud.png",
  },
];
function GroupReporting() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section - Responsive */}
      <div className="w-full flex justify-center lg:px-8">
        <div className="max-w-[1400px] w-full">
          <TwoColumnLayout
            left={
              <LeftSection
                title="Group Reporting"
                description="Streamline your financial consolidation and reporting with Group Reporting — an advanced solution that delivers real-time data, ensures compliance with global accounting standards, and integrates seamlessly with your financial systems."
              >
                <Link to="/contactus" >
                <Requesademobtn text="Book a Consultation" />
                </Link>
              </LeftSection>
            }
            right={
              <RightSection>
                <img
                  src="/Solutions/group.webp"
                  alt="Visual"
                  className="w-full h-full object-cover"
                />
              </RightSection>
            }
          />
        </div>
      </div>

      {/* Main Content - Responsive Layout */}
      <div className="flex flex-col lg:flex-row w-full max-w-[1400px] mx-auto mt-4 lg:px-8">
        {/* Sidebar - Hidden on mobile, sticky on desktop */}
        <div className="hidden lg:block lg:w-1/6">
          <div className="sticky top-24">
            <SidebarMenu menuItems={menuItems} />
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full lg:w-5/6 bg-white min-h-screen p-4 lg:p-6">
          {/* Overview Section */}
          <section id="overview" className="scroll-mt-24">
            <div className="bg-white">
              <InfoSection {...sapData} />
            </div>
          </section>

          {/* Features Section */}
          <section id="features" className="mt-12 sm:mt-16 scroll-mt-24">
            <div className="flex justify-center">
              <ConsultationTabsSection
                solutions={sampleSolutions}
                mainHeading="Explore our wide range of offerings"
                mainDescription="Group Reporting offers powerful currency translation, group-level adjustments, and automated data validation to ensure accuracy. Integrated analytics provide deep insights into performance, while seamless connectivity with ERP systems streamlines data flow."
                // ctaText="Get a Consultation"
              />
            </div>
          </section>

          <section id="insights" className="mt-16 sm:mt-20 w-full scroll-mt-24">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
              Insights that define value
            </h2>

            {/* Stats Cards - Responsive Grid */}
            <div className="py-8 sm:py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 bg-white">
              <StatCardStable
                percentage="50%"
                description="Empowering organizations with timely, reliable insights."
              />
              <StatCardStable
                percentage="50%"
                description="Close cycles accelerated."
              />
              <StatCardStable
                percentage="60%"
                description="reduce financial consolidation time."
              />
            </div>

            {/* CTA Section - Responsive */}
            <div className="bg-black mt-8 sm:mt-10 w-full flex flex-col lg:flex-row items-center lg:items-start rounded-lg overflow-hidden">
              <h1 className="text-white text-xl sm:text-2xl md:text-[27px] p-4 lg:p-10 w-full lg:w-3/4 leading-relaxed">
                Streamline your financial consolidation and reporting with Group Reporting, gaining complete control, real-time visibility, and compliance with global accounting standards. Experience ease in data integration, accuracy in reporting, and faster close cycles across all entities.
              </h1>
              <div className="p-4 lg:p-10 w-full lg:w-auto flex justify-center lg:justify-end">
                <Link to="/contactus" >
                <Requesademobtn text="Request a Demo" />
                </Link>
              </div>
            </div>
          </section>

          {/* Key Features Section */}
          <section id="key-features" className="mt-16 sm:mt-20 scroll-mt-24">
            <div className="w-full lg:w-3/4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                Key features
              </h2>
              <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-500">
                Group Reporting offers real-time financial consolidation, automated intercompany eliminations, and global compliance with IFRS and GAAP..
              </p>
            </div>
            <section className="my-8 sm:my-10 w-full">
             <FeatureTabs features={features} />
            </section>
          </section>

          {/* Insights Section */}

          {/* Benefits Section */}
          <section id="benefits" className="mt-16 sm:mt-20 w-full scroll-mt-24">
            <h2 className="text-2xl sm:text-3xl md:text-4xl w-full lg:w-3/4 font-semibold">
              Unlock powerful benefits
            </h2>
            <p className="mt-4 text-lg sm:text-xl md:text-2xl w-full lg:w-3/4 text-gray-500">
              Group Reporting includes currency translation, integrated analytics, and secure audit trails to ensure accuracy, transparency, and faster close cycles.
            </p>

            {/* Benefits Grid - Responsive */}
            <div className="max-w-7xl mx-auto py-8 sm:py-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6">
                {tabs.map((tab, idx) => (
                  <InfoTab key={idx} {...tab} />
                ))}
              </div>
            </div>
          </section>
          <div className="mt-16 sm:mt-20 w-full scroll-mt-24 text-black">
            <CustomerStories stories={customerStories} theme="light" />
          </div>

          {/* Consultation Section */}
          {/* FAQ Section */}
          <section
            id="find your answers"
            className="mt-16 sm:mt-20 w-full scroll-mt-24"
          >
            <FAQSection faqs={faqs} />
          </section>

          {/* Empowering Trade Section */}
          <section
            id="empowering-trade"
            className="mt-16 sm:mt-20 scroll-mt-24"
          >
            <div className="bg-black w-full p-4 lg:p-10 text-white rounded-lg">
              {/* Heading and button - Responsive Layout */}
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">
                  Empowering global trade for businesses
                </h1>
                <div className="flex-shrink-0">
                  <Link to="/contactus" >
                  <Requesademobtn text="Request a Demo" />
                  </Link>
                </div>
              </div>

              {/* Paragraph */}
              <p className="mt-6 text-base sm:text-lg lg:text-xl w-full lg:w-3/4 text-white leading-relaxed">
                Streamline your financial consolidation and reporting with Group Reporting, gaining complete control, real-time visibility, and compliance with global accounting standards. Experience ease in data integration, accuracy in reporting, and faster close cycles across all entities.
              </p>
            </div>
          </section>

          {/* Resources Section */}

          {/* <InsightsSection insights={insightsData} /> */}
          

          <section id="other products" className="mt-12 sm:mt-16 scroll-mt-24">
            <RelatedSolutions {...insights} />
            {/* <Resource
              heading="Explore Our Resources"
              paragraph="Helpful tools and insights for your export-import operations"
              products={[
                {
                  title: "Group Reporting Guide",
                  description:
                    "Comprehensive guide to financial consolidation best practices.",
                  image: "/images/reporting-guide.jpg",
                  link:"/"
                },
              ]}
            /> */}
          </section>
        </div>
      </div>

      {/* Certifications Section - Responsive */}
      <div className="p-4 lg:p-8 rounded-lg mt-8">
        {/* <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
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
        </div> */}
      </div>

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
  );
}

export default GroupReporting ;
