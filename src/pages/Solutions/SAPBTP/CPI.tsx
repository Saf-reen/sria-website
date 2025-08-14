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
  Shield,
  Lock,
  Settings,
  Database,
  Users,
  CheckCircle,
  Server,
  Cloud,
  Star,
  BarChart2,
  Globe,
  Rocket,
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
    question: "What is SAP CPI used for?",
    answer:
      "SAP CPI connects cloud and on-premise applications, enabling secure, scalable, and real-time data exchange.",
  },
  {
    question: "Does SAP CPI support non-SAP applications?",
    answer:
      "Yes. SAP CPI supports integration with SAP and third-party applications using APIs, connectors, and adapters.",
  },
  {
    question: "Can SAP CPI handle real-time integrations?",
    answer:
      "Yes. It supports event-driven architectures and low-latency processing for real-time scenarios.",
  },
  {
    question: "Is coding required to use SAP CPI?",
    answer:
      "Not always. SAP CPI offers low-code tools and pre-built flows, but custom coding is possible for complex scenarios.",
  },
  {
    question: "How is SAP CPI licensed?",
    answer:
      "Licensing is based on usage metrics such as the number of connections, messages, or data volume.",
  },
];
const tabs = [
  {
    icon: <Star className="w-10 h-10 text-yellow-500" />,
    title: "Faster Integration Deployment",
    description:
      "Use pre-packaged flows to reduce integration setup time from months to days.",
  },
  {
    icon: <Globe className="w-10 h-10 text-blue-500" />,
    title: "Global Connectivity",
    description:
      "Connect systems across geographies with high performance and low latency.",
  },
  {
    icon: <Shield className="w-10 h-10 text-green-500" />,
    title: "Enterprise-Grade Security",
    description:
      "Ensure secure data transfer with encryption, authentication, and compliance.",
  },
  {
    icon: <Rocket className="w-10 h-10 text-purple-500" />,
    title: "Agile Business Processes",
    description:
      "Quickly adapt integrations to changing business needs with low-code tools.",
  },
  {
    icon: <BarChart2 className="w-10 h-10 text-pink-500" />,
    title: "Operational Insights",
    description:
      "Gain visibility into integration performance with real-time analytics.",
  },
  {
    icon: <Database className="w-10 h-10 text-orange-500" />,
    title: "Unified Data Flow",
    description:
      "Eliminate silos with a single integration platform for all systems.",
  },
  {
    icon: <Users className="w-10 h-10 text-red-500" />,
    title: "Better Collaboration",
    description:
      "Enable smooth information exchange between internal teams and external partners.",
  },
  {
    icon: <Settings className="w-10 h-10 text-gray-500" />,
    title: "Flexible Deployment Options",
    description:
      "Deploy integrations fully in the cloud or with hybrid connectivity agents.",
  },
];

const sampleSolutions = [
  {
    title: "Application-to-Application Integration",
    heading: "Connect Enterprise Applications",
    description:
      "Ensure smooth data flow between ERP, CRM, HR, and other business applications.",
    points: [
      "Pre-built ERP connectors",
      "Real-time data sync",
      "Error handling & monitoring",
      "Secure API management",
    ],
  },
  {
    title: "B2B Integration",
    heading: "Seamless Partner Connectivity",
    description:
      "Automate transactions with suppliers, customers, and logistics partners.",
    points: [
      "EDI & API support",
      "Partner onboarding templates",
      "Data transformation",
      "Transaction monitoring",
    ],
  },
  {
    title: "API Management",
    heading: "Manage & Secure APIs",
    description:
      "Create, publish, and monitor APIs for internal and external use.",
    points: [
      "Rate limiting",
      "OAuth 2.0 security",
      "API analytics",
      "Developer portal",
    ],
  },
  {
    title: "Event-Driven Integration",
    heading: "Real-Time Event Processing",
    description:
      "Respond to business events instantly with event-driven workflows.",
    points: [
      "Event mesh architecture",
      "Message queuing",
      "Low-latency processing",
      "Integration with SAP Event Mesh",
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
  heading: "What is SAP Cloud Platform Integration (CPI)?",
  description:
    "SAP Cloud Platform Integration (CPI) is a cloud-based integration service that connects applications, processes, and data across cloud and on-premise landscapes. It enables secure, scalable, and real-time data exchange for seamless business operations.",
  imageUrl: "/Solutions/cpi-intigration.png",
  imageAlt: "Cloud integration visualization",
  items: [
    {
      title: "Pre-Built Integrations",
      highlight: "SAP Pre-Packaged Content",
      description:
        "Access a library of ready-to-use integration flows to accelerate connectivity.",
    },
    {
      title: "Hybrid Integration",
      highlight: "Cloud & On-Premise",
      description:
        "Connect cloud-based applications with your on-premise systems for unified operations.",
    },
    {
      title: "Custom Integration",
      description:
        "Build, deploy, and manage your own integration scenarios tailored to your business needs.",
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
  heading: "Explore SAP CPI Use Cases",
  description:
    "Discover how SAP CPI enables integration across industries and business functions.",
  ctaText: "Talk to an integration expert",
  ctaLink: "/contact",
  solutions: [
    { title: "SAP BTP Build Apps", href: "/solutions/build-apps" },
    { title: "SAP Success Factors", href: "/solutions/successfactors" },
  ],
};

const insightsData = [
  {
    title: "CPI Integration for E-Commerce",
    imageUrl: "/images/cpi-ecommerce.jpg",
    imageAlt: "E-commerce Integration",
    gradientFrom: "from-indigo-600",
    gradientTo: "to-indigo-800",
  },
  {
    title: "Hybrid Integration for Manufacturing",
    imageUrl: "/images/cpi-manufacturing.jpg",
    imageAlt: "Manufacturing Integration",
    gradientFrom: "from-green-600",
    gradientTo: "to-green-800",
  },
  {
    title: "API Gateway for Partner Networks",
    imageUrl: "/images/cpi-api.jpg",
    imageAlt: "API Integration",
    gradientFrom: "from-orange-600",
    gradientTo: "to-red-700",
  },
];
const features = [
  {
    title: "Pre-Built Integration Content",
    description:
      "Leverage SAP's integration content hub to quickly connect with SAP and third-party systems.",
    image: "/CPI/prebuilt.png",
  },
  {
    title: "Cloud & Hybrid Connectivity",
    description:
      "Integrate both cloud applications and on-premise systems using secure channels.",
    image: "/CPI/hybrid.png",
  },
  {
    title: "API-Based Integration",
    description:
      "Expose and consume APIs for flexible and secure data exchange.",
    image: "/CPI/api.png",
  },
  {
    title: "Event-Driven Architecture",
    description:
      "Enable real-time business process triggers with event streaming.",
    image: "/CPI/event.png",
  },
  {
    title: "End-to-End Monitoring",
    description:
      "Track, troubleshoot, and optimize integration flows with built-in monitoring tools.",
    image: "/CPI/monitoring.png",
  },
];

function CPI() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section - Responsive */}
      <div className="w-full flex justify-center lg:px-8">
        <div className="max-w-[1400px] w-full">
          <TwoColumnLayout
            left={
              <LeftSection
                title="SAP CPI"
                description="Connect applications, data, and processes seamlessly with SAP Cloud Platform Integration (CPI) — a flexible integration platform that enables businesses to streamline workflows, unify systems, and ensure real-time data flow across cloud and on-premise environments."
              >
                <Link to="/contactus">
                <Requesademobtn text="Book a Consultation" />
                </Link>
              </LeftSection>
            }
            right={
              <RightSection>
                <img
                  src="/Solutions/cpi.png"
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
                mainDescription="SAP CPI provides pre-built integration content, API-based connectivity, and event-driven architecture to simplify complex integrations."
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
                description="Accelerate time-to-value for new applications"
              />
              <StatCardStable
                percentage="55%"
                description="Event-driven architecture and real-time monitoring can enhance operational efficiency"
              />
              <StatCardStable
                percentage="70%"
                description="Improve data synchronization accuracy"
              />
            </div>

            {/* CTA Section - Responsive */}
            <div className="bg-black mt-8 sm:mt-10 w-full flex flex-col lg:flex-row items-center lg:items-start rounded-lg overflow-hidden">
              <h1 className="text-white text-xl sm:text-2xl md:text-[27px] p-4 lg:p-10 w-full lg:w-3/4 leading-relaxed">
                Streamline your integrations with SAP Cloud Platform Integration, gaining real-time connectivity, automated workflows, and secure data exchange across cloud and on-premise systems.
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
              SAP CPI provides pre-built integration content, API-based connectivity, and event-driven architecture to accelerate deployment and ensure reliable operations
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
                Streamline your integrations with SAP Cloud Platform Integration, gaining real-time connectivity, automated workflows, and secure data exchange across cloud and on-premise systems.
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

export default CPI ;
