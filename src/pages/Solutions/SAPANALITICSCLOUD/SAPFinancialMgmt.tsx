import React from "react";
import Navigation from "@/components/Navigation";
import TwoColumnLayout from "@/components/TwoColumnLayout";
import LeftSection from "@/components/LeftSection";
import RightSection from "@/components/RightSection";
import Requesademobtn from "@/components/Requesademobtn";
import SidebarMenu from "@/components/SidebarMenu";
import FeatureCard from "@/components/FeatureCard";
import FeatureTabs from "@/components/FeatureTabs";
import StatCard from "@/components/StatCard";
import {Link} from "react-router-dom";
import InfoTab from "@/components/InfoTab";
import {
  Star,
  Globe,
  Shield,
  Rocket,
  BarChart2,
  Database,
  Users,
  Settings,
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
    question: "How does SAP Financial Management improve accounting processes?",
    answer:
      "It provides a centralized ledger, real-time journal entries, and automates financial close, ensuring accuracy and speed.",
  },
  {
    question: "Can it handle multi-currency and multi-entity operations?",
    answer:
      "Yes, SAP supports global financial operations with real-time currency conversion and cross-entity consolidation.",
  },
  {
    question: "How does SAP help with compliance and auditing?",
    answer:
      "SAP ensures audit trails, automated compliance checks, and role-based access control for secure and transparent processes.",
  },
  {
    question: "Is SAP suitable for small to medium businesses?",
    answer:
      "Absolutely. SAP’s modular and cloud-based solutions scale easily to fit the needs of SMEs as well as large enterprises.",
  },
  {
    question: "What financial planning features are included?",
    answer:
      "Forecasting, budgeting, variance analysis, and real-time scenario planning are integrated directly into the system.",
  },
];

const tabs = [
  {
    icon: <BarChart2 className="w-10 h-10 text-blue-600" />,
    title: "Real-Time Reporting",
    description:
      "Access up-to-the-minute financial data for faster and informed decision-making.",
  },
  {
    icon: <Globe className="w-10 h-10 text-green-600" />,
    title: "Global Compliance",
    description:
      "Meet local and international regulatory requirements across multi-national operations.",
  },
  {
    icon: <Database className="w-10 h-10 text-purple-600" />,
    title: "Unified Financial Data",
    description:
      "Integrate data across departments to maintain consistency and integrity.",
  },
  {
    icon: <Shield className="w-10 h-10 text-red-600" />,
    title: "Risk Management",
    description:
      "Identify, assess, and mitigate financial risks using embedded risk analysis tools.",
  },
  {
    icon: <Users className="w-10 h-10 text-orange-600" />,
    title: "User-Centric Interface",
    description:
      "Enable finance teams with role-based dashboards powered by SAP Fiori.",
  },
  {
    icon: <Rocket className="w-10 h-10 text-teal-600" />,
    title: "Agile Planning",
    description:
      "Adapt forecasts rapidly with real-time data and predictive modeling tools.",
  },
  {
    icon: <Settings className="w-10 h-10 text-gray-600" />,
    title: "Automated Workflows",
    description:
      "Eliminate manual tasks across invoicing, reconciliation, and reporting.",
  },
  {
    icon: <Star className="w-10 h-10 text-yellow-500" />,
    title: "Strategic Insights",
    description:
      "Gain strategic visibility into profitability, cash flow, and cost centers.",
  },
];

const sampleSolutions = [
  {
    title: "End-to-End Financial Operations",
    heading: "SAP S/4HANA for Core Finance",
    description:
      "Deliver centralized accounting, faster closings, and complete transparency across financial processes.",
    points: [
      "Real-time journal entries",
      "Universal ledger",
      "Accelerated financial close",
      "Improved audit readiness",
    ],
  },
  {
    title: "Strategic Financial Planning",
    heading: "SAP S/4HANA for FP&A",
    description:
      "Enable predictive forecasting, driver-based planning, and faster decision-making.",
    points: [
      "Embedded analytics",
      "Scenario modeling",
      "Collaborative planning",
      "Real-time variance analysis",
    ],
  },
  {
    title: "Compliance & Risk Management",
    heading: "SAP GRC Solutions",
    description:
      "Ensure regulatory compliance and manage enterprise risk proactively.",
    points: [
      "Automated compliance checks",
      "Risk monitoring dashboards",
      "Internal audit workflows",
      "Fraud detection",
    ],
  },
  {
    title: "Accounts Payable & Receivable",
    heading: "SAP Financial Operations",
    description:
      "Streamline collections, payments, invoicing, and vendor management.",
    points: [
      "Automated invoice processing",
      "Vendor self-service portals",
      "Credit & collections management",
      "Cash application automation",
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
  heading: "What is SAP Financial Management?",
  description:
    "SAP Financial Management provides comprehensive tools for financial planning, analysis, accounting, and compliance—enabling accurate reporting and improved business decisions in real-time.",
  imageUrl: "/Solutions/financial-management.png",
  imageAlt: "Financial management visualization",
  items: [
    {
      title: "Core Finance",
      highlight: "SAP S/4HANA Finance Core",
      description:
        "Centralized financial control, real-time accounting, and integrated planning for improved transparency.",
    },
    {
      title: "Financial Planning & Analysis",
      highlight: "FP&A",
      description:
        "Enhanced forecasting, budgeting, and financial modeling with embedded analytics.",
    },
    {
      title: "Risk & Compliance",
      description:
        "Monitor and manage financial risks, ensure regulatory compliance, and automate audit processes.",
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
    "From financial planning to compliance management, find the perfect solution to optimize your financial operations and drive business growth.",
  ctaText: "Talk to a financial expert",
  ctaLink: "/contact",
  solutions: [
    { title: "SAP Financial Planning & Analysis", href: "/solutions/financial-planning" },
    { title: "SAP Treasury Management", href: "/solutions/treasury-management" },
  ],
};
const features = [
  {
    title: "Unified Ledger",
    description:
      "A single source of financial truth that integrates accounts, enabling real-time insights and accurate reporting.",
    image: "/finance/unified-ledger.png",
  },
  {
    title: "Accelerated Financial Close",
    description:
      "Streamline and automate closing processes to reduce cycle times and improve accuracy.",
    image: "/finance/financial-close.png",
  },
  {
    title: "Predictive Planning",
    description:
      "Leverage AI-driven forecasting and scenario planning to make proactive financial decisions.",
    image: "/finance/predictive-planning.png",
  },
  {
    title: "Compliance and Control",
    description:
      "Ensure adherence to regulatory standards with built-in compliance and risk management tools.",
    image: "/finance/compliance.png",
  },
  {
    title: "Real-Time Treasury",
    description:
      "Manage cash flow, liquidity, and financial risk with up-to-date treasury insights.",
    image: "/finance/treasury.png",
  },
];

const insightsData = [
  {
    title: "SAP Financial Transformation for Manufacturing",
    imageUrl: "/images/sap-financial-manufacturing.jpg",
    imageAlt: "Financial Manufacturing",
    gradientFrom: "from-blue-600",
    gradientTo: "to-blue-800",
  },
  {
    title: "Financial Compliance in Global Organizations",
    imageUrl: "/images/sap-compliance.jpg",
    imageAlt: "Financial Compliance",
    gradientFrom: "from-teal-600",
    gradientTo: "to-cyan-700",
  },
  {
    title: "Digital Finance Transformation Strategies",
    imageUrl: "/images/digital-finance.jpg",
    imageAlt: "Digital Finance",
    gradientFrom: "from-purple-600",
    gradientTo: "to-indigo-700",
  },
];

function SAPFinancialMgmt() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section - Responsive */}
      <div className="w-full flex justify-center lg:px-8">
        <div className="max-w-[1400px] w-full">
          <TwoColumnLayout
            left={
              <LeftSection
                title="SAP Financial Mgmt"
                description="Transform Your Business with SAP Financial Management Powered by SAP S/4HANA, SAP Financial Management leverages intelligent automation, real-time analytics, and seamless integration to help organizations make faster, data-driven financial decisions that drive growth and efficiency."
              >
                <Link to='/contactus'>
                <Requesademobtn text="Book a Consultation" />
                </Link>
              </LeftSection>
            }
            right={
              <RightSection>
                <img
                  src="/Solutions/financial.png"
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
                mainDescription="SAP Financial Management delivers comprehensive functional, technical, and cloud capabilities to streamline your finance operations and drive business value."
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
                percentage="25%"
                description="Reduction in operational finance costs through automation and process optimization within the first year."
              />
              <StatCardStable
                percentage="50%"
                description="Improvement in financial reporting accuracy and speed within the initial 6 months of SAP Financial Management implementation."
              />
              <StatCardStable
                percentage="100%"
                description="Productivity increase with real-time mobile access to financial dashboards and approval workflows."
              />
            </div>

            {/* CTA Section - Responsive */}
            <div className="bg-black mt-8 sm:mt-10 w-full flex flex-col lg:flex-row items-center lg:items-start rounded-lg overflow-hidden">
              <h1 className="text-white text-xl sm:text-2xl md:text-[27px] p-4 lg:p-10 w-full lg:w-3/4 leading-relaxed">
                Streamline your financial operations with SAP Financial Management. Gain complete control, real-time visibility, and simplified compliance across accounting, reporting, and risk management processes.
              </h1>
              <div className="p-4 lg:p-10 w-full lg:w-auto flex justify-center lg:justify-end">
                <Link to="/contactus">
                <Requesademobtn text="Book a demo" />
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
                SAP Financial Management offers automated financial close, real-time cash flow tracking, regulatory compliance, predictive analytics, and seamless integration with core business processes
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
              SAP Financial Management enhances financial operations with real-time tracking, seamless SAP integration, improved accuracy, and greater operational efficiency.
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
                  <Link to="/contactus">
                <Requesademobtn text="Book a demo" />
                </Link>
                </div>
              </div>

              {/* Paragraph */}
              <p className="mt-6 text-base sm:text-lg lg:text-xl w-full lg:w-3/4 text-white leading-relaxed">
                Streamline your finance operations with SAP Financial Management. Achieve complete control, real-time visibility, and simplified compliance across accounting, reporting, and risk management processes.
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
                  title: "Financial Management Guide",
                  description:
                    "Complete guide to SAP Financial Management best practices.",
                  image: "/images/financial-guide.jpg",
                  link: "/resources/financial-management-guide",
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

export default SAPFinancialMgmt ;
