import React from "react";
import Navigation from "@/components/Navigation";
import TwoColumnLayout from "@/components/TwoColumnLayout";
import LeftSection from "@/components/LeftSection";
import RightSection from "@/components/RightSection";
import Requesademobtn from "@/components/Requesademobtn";
import SidebarMenu from "@/components/SidebarMenu";
import {Link} from "react-router-dom";
import FeatureCard from "@/components/FeatureCard";
import FeatureTabs from "@/components/FeatureTabs";
import StatCard from "@/components/StatCard";
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
    question: "What is SAP PaPM used for?",
    answer:
      "SAP PaPM helps businesses model, simulate, and optimize profitability and performance in real time using operational and financial data.",
  },
  {
    question: "Who typically uses SAP PaPM?",
    answer:
      "Finance teams, controllers, risk managers, and performance analysts use PaPM for profitability analysis, planning, and decision-making.",
  },
  {
    question: "Is coding required to use SAP PaPM?",
    answer:
      "No. PaPM is designed for business users with drag-and-drop capabilities and low-code/no-code modeling environments.",
  },
  {
    question: "Can PaPM integrate with non-SAP systems?",
    answer:
      "Yes. It integrates with both SAP and non-SAP data sources to create unified performance models.",
  },
  {
    question: "Is SAP PaPM available in the cloud?",
    answer:
      "Yes. SAP PaPM is available in both cloud and on-premise versions, with hybrid options available.",
  },
];

const tabs = [
  {
    icon: <BarChart2 className="w-10 h-10 text-blue-500" />,
    title: "Advanced Profitability Analysis",
    description:
      "Analyze margins at every level—product, region, or customer segment.",
  },
  {
    icon: <Rocket className="w-10 h-10 text-purple-500" />,
    title: "Real-Time Scenario Planning",
    description:
      "Quickly simulate 'what-if' scenarios to guide executive decision-making.",
  },
  {
    icon: <Database className="w-10 h-10 text-green-500" />,
    title: "Unified Data Models",
    description:
      "Integrate financial and operational data into one model for better insights.",
  },
  {
    icon: <Settings className="w-10 h-10 text-orange-500" />,
    title: "Low-Code Configuration",
    description:
      "Empower business users with drag-and-drop logic without writing code.",
  },
  {
    icon: <Shield className="w-10 h-10 text-red-500" />,
    title: "Regulatory Compliance",
    description:
      "Model regulatory scenarios and ensure compliance through built-in validations.",
  },
];

const sampleSolutions = [
  {
    title: "Profitability Optimization",
    heading: "Profit & Cost Allocation",
    description:
      "Analyze profitability by segment, customer, or product to make data-driven decisions.",
    points: [
      "Multi-dimensional profitability analysis",
      "Cost driver modeling",
      "Real-time reporting",
      "What-if simulations",
    ],
  },
  {
    title: "Performance Management",
    heading: "Operational Efficiency Modeling",
    description:
      "Model operational processes to uncover inefficiencies and simulate improvements.",
    points: [
      "Process simulation",
      "Bottleneck identification",
      "Operational KPIs",
      "Scenario planning",
    ],
  },
  {
    title: "Financial Planning",
    heading: "Integrated Financial Planning",
    description:
      "Enable real-time, integrated planning with cross-functional data.",
    points: [
      "Driver-based planning",
      "Cross-departmental integration",
      "Real-time updates",
      "Predictive forecasting",
    ],
  },
  {
    title: "Compliance & Risk",
    heading: "Risk & Compliance Modeling",
    description:
      "Evaluate and model risk exposure using regulatory and internal metrics.",
    points: [
      "Stress testing",
      "Regulatory compliance",
      "Risk mitigation planning",
      "Dynamic rule modeling",
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
  heading: "What is SAP PaPM?",
  description:
    "SAP Profitability and Performance Management (PaPM) is a powerful solution that enables businesses to model, simulate, and optimize financial and operational performance in real time.",
  imageUrl: "/Solutions/papm-sap.png",
  imageAlt: "SAP PaPM dashboard visualization",
  items: [
    {
      title: "Cloud",
      highlight: "SAP PaPM Cloud",
      description:
        "Offers scalability, low infrastructure maintenance, and faster time-to-value with cloud-native architecture.",
    },
    {
      title: "On-Premise",
      description:
        "SAP PaPM on-premise is ideal for enterprises requiring full control over data governance and customization.",
    },
    {
      title: "Hybrid",
      description:
        "Hybrid deployment provides the flexibility of combining cloud benefits with on-premise security.",
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
  heading: "Explore SAP PaPM Use Cases",
  description:
    "Dive into profitability modeling, scenario planning, and cost simulation use cases across industries.",
  ctaText: "Talk to a PaPM expert",
  ctaLink: "/contact",
  solutions: [
    { title: "Profitability Optimization", href: "/solutions/profitability" },
    { title: "Operational Performance Modeling", href: "/solutions/performance" },
  ],
};

const features = [
  {
    title: "Dynamic Modeling & Simulation",
    description:
      "Create and test financial and operational models in real time.",
    image: "/PaPM/simulation.png",
  },
  {
    title: "Advanced Cost & Revenue Allocation",
    description:
      "Accurately assign costs and revenues across products, customers, and segments.",
    image: "/PaPM/modeling.png",
  },
  {
    title: "Driver-Based Planning",
    description:
      "Align resources and budgets with key performance drivers.",
    image: "/PaPM/integration.png",
  },
  {
    title: "Real-Time Profitability Analysis",
    description:
      "Access instant insights into margins and performance metrics.",
    image: "/PaPM/rules.png",
  },
  {
    title: "Scenario Planning & Forecasting",
    description:
      "Evaluate multiple strategies before execution.",
    image: "/PaPM/architecture.png",
  },
];
const insightsData = [
  {
    title: "Profitability Analysis Best Practices",
    imageUrl: "/images/profitability-analysis.jpg",
    imageAlt: "Profitability Analysis",
    gradientFrom: "from-blue-600",
    gradientTo: "to-blue-800",
  },
  {
    title: "Performance Management Excellence",
    imageUrl: "/images/performance-management.jpg",
    imageAlt: "Performance Management",
    gradientFrom: "from-teal-600",
    gradientTo: "to-cyan-700",
  },
  {
    title: "Advanced Planning and Forecasting",
    imageUrl: "/images/planning-forecasting.jpg",
    imageAlt: "Planning and Forecasting",
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
                title="SAP PaPM"
                description="Optimize profitability and enhance performance with SAP PaPM — a powerful solution that enables real-time modeling, cost allocation, and profitability analysis across products, customers, and business segments."
              >
                <Link to="/contactus">
                <Requesademobtn text="Book a Consultation" />
                </Link>
              </LeftSection>
            }
            right={
              <RightSection>
                <img
                  src="/Solutions/papm.png"
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
                mainDescription="SAP PaPM delivers dynamic modeling capabilities, advanced cost and revenue allocation, and profitability simulations to evaluate the impact of strategic decisions."
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
                percentage="60%"
                description="Improve profitability analysis accuracy"
              />
              <StatCardStable
                percentage="65%"
                description="Accelerate scenario simulations"
              />
              <StatCardStable
                percentage="70%"
                description="Reduce cost allocation time"
              />
            </div>

            {/* CTA Section - Responsive */}
            <div className="bg-black mt-8 sm:mt-10 w-full flex flex-col lg:flex-row items-center lg:items-start rounded-lg overflow-hidden">
              <h1 className="text-white text-xl sm:text-2xl md:text-[27px] p-4 lg:p-10 w-full lg:w-3/4 leading-relaxed">
                Streamline your profitability and performance management with SAP PaPM, gaining complete control, real-time visibility, and actionable insights. Experience faster modeling, smarter analysis, and more confident strategic execution.
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
                SAP PaPM offers dynamic modeling, advanced cost and revenue allocation, and real-time profitability analysis to optimize performance. It supports driver-based planning, scenario simulations, and secure audit trails for accurate, agile, and compliant decision-making.
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
              SAP PaPM includes real-time profitability analysis, advanced cost allocation, and driver-based planning to ensure precision, agility, and faster decision-making.
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
                Streamline your profitability and performance management with SAP PaPM, gaining complete control, real-time visibility, and actionable insights. Experience faster modeling, smarter analysis, and more confident strategic execution.
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
                  link: "/resources/group-reporting-guide",
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
