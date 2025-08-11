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
  BarChart,
  BarChart2,
  Globe,
  Rocket,
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
    question: "What is SAP Cloud Planning?",
    answer:
      "SAP Cloud Planning is a unified platform for enterprise-wide planning, combining real-time data, collaboration tools, and predictive analytics in the cloud.",
  },
  {
    question: "How does it support financial forecasting?",
    answer:
      "It enables accurate, agile, and collaborative financial forecasts using real-time data, driver-based models, and scenario planning.",
  },
  {
    question: "Is it suitable for small businesses?",
    answer:
      "Yes. SAP Cloud Planning scales from small businesses to large enterprises, providing flexible planning modules tailored to business size.",
  },
  {
    question: "What kind of data integrations are possible?",
    answer:
      "It supports seamless integration with SAP S/4HANA, SAP Analytics Cloud, and third-party data sources for real-time planning.",
  },
  {
    question: "Does SAP Cloud Planning use AI or machine learning?",
    answer:
      "Yes. It incorporates machine learning for predictive forecasting and anomaly detection, enhancing planning accuracy.",
  },
];

const tabs = [
  {
    icon: <Star className="w-10 h-10 text-yellow-500" />,
    title: "Real-Time Collaboration",
    description:
      "Collaborate with multiple departments on a unified planning platform.",
  },
  {
    icon: <Globe className="w-10 h-10 text-blue-500" />,
    title: "Global Scalability",
    description:
      "Deploy globally with secure access and real-time synchronization across regions.",
  },
  {
    icon: <Rocket className="w-10 h-10 text-purple-500" />,
    title: "Predictive Insights",
    description:
      "Use embedded machine learning to generate more accurate forecasts.",
  },
  {
    icon: <BarChart2 className="w-10 h-10 text-pink-500" />,
    title: "Scenario Planning",
    description:
      "Build and compare what-if scenarios to evaluate strategic options.",
  },
  {
    icon: <Database className="w-10 h-10 text-orange-500" />,
    title: "Unified Data Platform",
    description:
      "Centralize planning data from all departments for a single version of truth.",
  },
  {
    icon: <Users className="w-10 h-10 text-red-500" />,
    title: "User-Friendly Interface",
    description:
      "Empower users with a simple, intuitive cloud-based UI that enhances productivity.",
  },
];

const sampleSolutions = [
  {
    title: "Financial Planning",
    heading: "SAP Cloud Planning for Finance",
    description:
      "Improve accuracy in budgeting, forecasting, and financial modeling with real-time collaboration.",
    points: [
      "Real-time data synchronization",
      "Driver-based planning",
      "Version control and audit trails",
      "Collaborative scenario analysis",
    ],
  },
  {
    title: "Workforce Planning",
    heading: "SAP Cloud Planning for HR",
    description:
      "Align HR strategies with business goals through headcount and cost planning.",
    points: [
      "Talent gap analysis",
      "Headcount forecasting",
      "Workforce cost simulation",
      "Diversity & inclusion metrics",
    ],
  },
  {
    title: "Operational Planning",
    heading: "SAP Cloud Planning for Operations",
    description:
      "Link operations and supply chain data with strategic business planning in real-time.",
    points: [
      "Supply-demand alignment",
      "Capacity planning",
      "Inventory optimization",
      "Production scenario modeling",
    ],
  },
  {
    title: "Sales & Revenue Planning",
    heading: "SAP Cloud Planning for Sales",
    description:
      "Accelerate sales planning and revenue forecasts with embedded analytics and collaboration.",
    points: [
      "Territory & quota planning",
      "Revenue forecasting",
      "Performance dashboards",
      "Data-driven sales alignment",
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
  "Resources",
];

const sapData = {
  heading: "What is SAP Cloud Planning?",
  description:
    "SAP Cloud Planning is an integrated cloud-based solution that unifies planning processes across finance, operations, HR, and more. It enhances agility, accuracy, and collaboration through real-time analytics and intelligent forecasting.",
  imageUrl: "/Solutions/cloud-planning.webp",
  imageAlt: "Cloud Planning Illustration",
  items: [
    {
      title: "Integrated Business Planning",
      highlight: "SAP IBP",
      description:
        "Synchronizes demand, supply, and financial plans with real-time insights and AI-powered predictions.",
    },
    {
      title: "Workforce Planning",
      description:
        "Align workforce supply and demand to optimize talent deployment and productivity.",
    },
    {
      title: "Financial Planning in the Cloud",
      description:
        "Enable faster, more accurate financial forecasts and budgeting with cloud-based collaboration tools.",
    },
  ],
};

const customerStories = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
    title: "Transforming Business Operations With Innovative Solutions",
    readMoreLink: "#",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
    title: "Digital Innovation Success Through Strategic Partnership",
    readMoreLink: "#",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop",
    title: "Scaling New Heights in Technology Excellence",
    readMoreLink: "#",
  },
];
const features = [
  {
    title: "Real-Time Collaborative Planning",
    description:
      "Enable teams to plan together simultaneously in a unified cloud workspace.",
    image: "/cloud-planning/real-time-collab.png",
  },
  {
    title: "Predictive Forecasting",
    description:
      "Leverage machine learning to generate accurate and actionable forecasts.",
    image: "/cloud-planning/predictive.png",
  },
  {
    title: "Integrated Business Planning",
    description:
      "Unify sales, finance, operations, and HR planning on one platform.",
    image: "/cloud-planning/integrated.png",
  },
  {
    title: "Scenario Modeling",
    description:
      "Quickly create and compare what-if scenarios to support data-driven decisions.",
    image: "/cloud-planning/scenario.png",
  },
  {
    title: "Version Control & Audit Trails",
    description:
      "Track planning iterations and ensure data integrity with automated logging.",
    image: "/cloud-planning/audit.png",
  },
];

const insights = {
  heading: "Cloud Planning Opportunities",
  description:
    "Cloud Planning ensures you adopt the cloud effectively with minimized risk and optimized costs.",
  ctaText: "Talk to an Expert",
  ctaLink: "/contact",
  solutions: [
    { title: "Cloud Assessment Services", href: "/solutions/cloud-assessment" },
    { title: "Migration Strategy Services", href: "/solutions/migration" },
  ],
};

const insightsData = [
  {
    title: "Cost Optimization Strategies",
    imageUrl: "/images/cloud-cost.jpg",
    imageAlt: "Cost Optimization",
    gradientFrom: "from-blue-600",
    gradientTo: "to-blue-800",
  },
  {
    title: "Cloud Security Frameworks",
    imageUrl: "/images/cloud-security.jpg",
    imageAlt: "Cloud Security",
    gradientFrom: "from-teal-600",
    gradientTo: "to-green-700",
  },
  {
    title: "Migration Planning",
    imageUrl: "/images/cloud-migration.jpg",
    imageAlt: "Cloud Migration",
    gradientFrom: "from-purple-600",
    gradientTo: "to-indigo-700",
  },
];

function CloudPlanning () {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section - Responsive */}
      <div className="w-full flex justify-center lg:px-8">
        <div className="max-w-[1400px] w-full">
          <TwoColumnLayout
            left={
              <LeftSection
                title="SAP S/4HANA"
                description="Transform your business with SAP S/4HANA, a next-gen ERP system that uses intelligent automation, real-time analytics, and seamless integration to support fast, data-driven decisions."
              >
                <Requesademobtn text="Book a Consultation" />
              </LeftSection>
            }
            right={
              <RightSection>
                <img
                  src="/Solutions/cloud.png"
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
                mainDescription="SAP Managed Services provide the full range of functional, technical, and cloud possibilities."
                ctaText="Get a Consultation"
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
                description="Reduction in direct and indirect expenses related to import-export activities within a year."
              />
              <StatCardStable
                percentage="50%"
                description="Improvement within the initial 6 months of implementation."
              />
              <StatCardStable
                percentage="100%"
                description="Productivity with seamless mobile integration in EXIM solution."
              />
            </div>

            {/* CTA Section - Responsive */}
            <div className="bg-black mt-8 sm:mt-10 w-full flex flex-col lg:flex-row items-center lg:items-start rounded-lg overflow-hidden">
              <h1 className="text-white text-xl sm:text-2xl md:text-[27px] p-4 lg:p-10 w-full lg:w-3/4 leading-relaxed">
                Streamline your Export-Import operations with the SAP Certified
                Accelerated EXIM solution. Get a hold of complete control,
                visibility, and ease in compliance and documentation procedures.
              </h1>
              <div className="p-4 lg:p-10 w-full lg:w-auto flex justify-center lg:justify-end">
                <Requesademobtn text="Book a demo" />
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
                Accelerated EXIM solution offers license management, export
                incentives, expense tracking, and automation.
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
              Accelerated EXIM solution enhances import-export management with
              tracking, SAP integration, and efficiency.
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
                  <Requesademobtn text="Book a demo" />
                </div>
              </div>

              {/* Paragraph */}
              <p className="mt-6 text-base sm:text-lg lg:text-xl w-full lg:w-3/4 text-white leading-relaxed">
                Streamline your Export-Import operations with the SAP Certified
                Accelerated EXIM solution. Get a hold of complete control,
                visibility, and ease in compliance and documentation procedures.
              </p>
            </div>
          </section>

          {/* Resources Section */}

          <InsightsSection insights={insightsData} />
          <RelatedSolutions {...insights} />

          <section id="resources" className="mt-12 sm:mt-16 scroll-mt-24">
            <Resource
              heading="Explore Our Resources"
              paragraph="Helpful tools and insights for your export-import operations"
              products={[
  {
    title: "Cloud Planning Guide",
    description:
      "Learn best practices for creating a cost-effective cloud strategy.",
    image: "/images/cloud-guide.jpg",
    link:"/"
  },
  {
    title: "Case Study: Cloud Transformation",
    description:
      "How a leading enterprise saved 30% cost with structured planning.",
    image: "/images/cloud-case.jpg",
    link:"/"
  },
]}
            />
          </section>
        </div>
      </div>

      {/* Certifications Section - Responsive */}
      <div className="p-4 lg:p-8 rounded-lg mt-8">
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
                className="h-16 sm:h-20 lg:h-24 mb-2 object-contain"
              />
            </div>
          ))}
        </div>
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

export default CloudPlanning ;
