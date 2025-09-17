
import React from "react";
import Navigation from "@/components/Navigation";
import TwoColumnLayout from "@/components/TwoColumnLayout";
import LeftSection from "@/components/LeftSection";
import RightSection from "@/components/RightSection";
import Requesademobtn from "@/components/Requesademobtn";
import SidebarMenu from "@/components/SidebarMenu";
import FeatureCard from "@/components/FeatureCard";
import FeatureTabs from "@/components/FeatureTabs";
import {Link} from "react-router-dom";
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

const productData = [
  {
    title: "Omnichannel Support",
    description:
      "Deliver seamless customer experiences across phone, email, chat, social media, and messaging platforms.",
  },
  {
    title: "Field Service Lightning",
    description:
      "Complete mobile workforce management with scheduling, dispatching, and real-time collaboration.",
  },
  {
    title: "Einstein AI Case Classification",
    description:
      "Automatically categorize and route cases with AI-powered intelligent recommendations.",
  },
  {
    title: "Knowledge Management",
    description:
      "Centralized knowledge base with AI-powered search and automated content suggestions.",
  },
];

const faqs = [
  {
    question: "What is Salesforce Service Cloud and why is it better than email?",
    answer:
      "It’s a full support hub—omni-channel, AI-powered, and smarter than siloed inboxes.",
  },
  {
    question: "What deployment options are available for Service Cloud?",
    answer:
      "It's cloud-native—no on-prem nonsense. Fully SaaS, with optional add-on modules like Field Service.",
  },
  {
    question: "Can small teams use it effectively?",
    answer:
      "Absolutely. ‘Essentials’ edition gives small teams powerful tools at a friendly price point.",
  },
  {
    question: "How long does it take to onboard Service Cloud?",
    answer:
      "Basic setups can be live in weeks; full custom enterprise solutions typically roll out in 3–6 months.",
  },
  {
    question: "Does Service Cloud support mobile and on-site service?",
    answer:
      "Yes! The Field Service module gives mobile agents everything they need—scheduling, updates, offline access—right in their hands.",
  },
];

const tabs = [
  {
    icon: <Star className="w-10 h-10 text-yellow-500" />,
    title: "AI-Powered Insights",
    description:
      "Leverage Einstein to suggest smarter replies, case fields, and routing—all in real time.",
  },
  {
    icon: <Globe className="w-10 h-10 text-blue-500" />,
    title: "Omni-channel Reach",
    description:
      "Serve customers wherever they are–chat, email, phone, social—without missing a beat.",
  },
  {
    icon: <Shield className="w-10 h-10 text-green-500" />,
    title: "Secure Data & Compliance",
    description:
      "Built on Salesforce’s trusted infrastructure; role-based access and robust compliance controls included.",
  },
  {
    icon: <Rocket className="w-10 h-10 text-purple-500" />,
    title: "Faster Resolution Times",
    description:
      "Use macros, suggested answers, and automation to reduce time-to-resolution and agent stress.",
  },
  {
    icon: <BarChart2 className="w-10 h-10 text-pink-500" />,
    title: "Actionable Analytics",
    description:
      "Track SLAs, agent performance, and case trends through real-time dashboards and reports.",
  },
  {
    icon: <Database className="w-10 h-10 text-orange-500" />,
    title: "Knowledge at Scale",
    description:
      "Centralized articles power self-service and agent support, intelligently surfaced when needed.",
  },
  {
    icon: <Users className="w-10 h-10 text-red-500" />,
    title: "Scalable Agent Support",
    description:
      "Easily onboard and support agents across small teams to enterprise service departments.",
  },
  {
    icon: <Settings className="w-10 h-10 text-gray-500" />,
    title: "Customizable Workflows",
    description:
      "Build workflows, process automations, and routing rules tailored to your support model.",
  },
];
const sampleSolutions = [
  {
    title: "Omni-Channel Support",
    heading: "Unified Customer Conversations",
    description:
      "Touch all channels—email, chat, voice, social—and let agents handle them all in a single console.",
    points: [
      "Automatic channel routing",
      "Macros & quick actions",
      "Context-aware agent workspace",
      "Chatbots for deflection",
    ],
  },
  {
    title: "AI Assistant & Recommendations",
    heading: "Einstein-powered Productivity",
    description:
      "Reduce agent load with AI-driven suggestions for responses, routing, and next best action.",
    points: [
      "Einstein reply and send suggestions",
      "Einstein case classification",
      "Next-best action recommendations",
      "Self-service deflection metrics",
    ],
  },
  {
    title: "Knowledge Management",
    heading: "Smart Knowledge Base",
    description:
      "Build a central, searchable knowledge hub to empower agents and customers alike.",
    points: [
      "AI-suggested articles",
      "Article versioning & feedback",
      "Public knowledge portals",
      "Category-based routing",
    ],
  },
  {
    title: "Field Service Capabilities",
    heading: "On-Site Support Excellence",
    description:
      "Coordinate mobile workforces, optimize schedules, and equip technicians with everything they need on the go.",
    points: [
      "Dynamic appointment booking",
      "Route optimization",
      "Mobile access to work orders",
      "Asset and inventory tracking",
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
  heading: "What is Salesforce Service Cloud?",
  description:
    "Salesforce Service Cloud is a leading customer service platform that delivers faster, smarter support with AI-powered automation, unified agent workspace, and seamless omni-channel experiences.",
  imageUrl: "/Solutions/service-cloud.png",
  imageAlt: "Customer support visualization",
  items: [
    {
      title: "Essentials",
      highlight: "Service Cloud Essentials",
      description:
        "Ideal for small teams—basic ticketing, email-to-case, and self-service portals at an affordable price.",
    },
    {
      title: "Professional",
      highlight: "Service Cloud Professional",
      description:
        "Adds case automation, field service dispatch, and configurable workflows for growing support operations.",
    },
    {
      title: "Enterprise & Unlimited",
      description:
        "Fully customizable with AI-driven insights, omni-channel routing, and enterprise-grade scalability.",
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

const insightsData = [
  {
    title: "Service Cloud for Healthcare Industry",
    imageUrl: "/images/service-healthcare.jpg",
    imageAlt: "Healthcare Service",
    gradientFrom: "from-blue-600",
    gradientTo: "to-blue-800",
  },
  {
    title: "Service Cloud for Financial Services",
    imageUrl: "/images/service-financial.jpg",
    imageAlt: "Financial Services",
    gradientFrom: "from-teal-600",
    gradientTo: "to-cyan-700",
  },
  {
    title: "Customer Experience Transformation",
    imageUrl: "/images/cx-transformation.jpg",
    imageAlt: "CX Transformation",
    gradientFrom: "from-purple-600",
    gradientTo: "to-indigo-700",
  },
];

const insights = {
  heading: "Explore related service solutions",
  description:
    "From implementation to optimization, find the perfect solution to accelerate your customer service transformation.",
  ctaText: "Talk to an expert",
  ctaLink: "/contact",
  solutions: [
    { title: "SAP Commerce Cloud", href: "/solutions/commerce-cloud" },
    { title: "SAP Sales Cloud", href: "/solutions/sales-cloud" },
    { title: "SAP Emarsys", href: "/solutions/emarsys" },
  ],
};

const features = [
  {
    title: "Unified Agent Workspace",
    description:
      "Offers a single interface for agents to access customer information, manage cases, and interact across multiple channels efficiently.",
    image: "/ServiceCloud/workspace.png",
  },
  {
    title: "AI-Driven Automation",
    description:
      "Automates routine tasks, prioritizes tickets, and provides intelligent recommendations to enhance agent productivity and service quality.",
    image: "/ServiceCloud/ai.png",
  },
  {
    title: "Omni-Channel Routing",
    description:
      "Directs customer inquiries to the right agent or team based on skills, availability, and priority, ensuring faster and accurate responses.",
    image: "/ServiceCloud/omni.png",
  },
  {
    title: "Self-Service Portals & Communities",
    description:
      "Enable customers to find answers, submit requests, and interact with peers or experts, reducing dependency on live agents.",
    image: "/ServiceCloud/portal.png",
  },
  {
    title: "Field Service Module",
    description:
      "Schedules, dispatches, and tracks mobile service teams, ensuring timely onsite support and operational efficiency.",
    image: "/ServiceCloud/fieldservice.png",
  },
];

function ServiceCloud() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section - Responsive */}
      <div className="w-full flex justify-center lg:px-8">
        <div className="max-w-[1400px] w-full">
          <TwoColumnLayout
            left={
              <LeftSection
                title="SAP Service Cloud "
                description="Deliver exceptional customer support with SAP Service Cloud — a unified platform that empowers service teams to resolve issues faster, provide personalized experiences, and improve overall customer satisfaction."
              >
                <Link to="/contactus">
                <Requesademobtn text="Book a Consultation" />
                </Link>
              </LeftSection>
            }
            right={
              <RightSection>
                <img
                  src="/Solutions/service.jpeg"
                  alt="Visual"
                  className="w-full h-full object-cover"
                />
              </RightSection>
            }
          />
        </div>
      </div>

      {/* Main Content - Responsive Layout */}
      <div className="flex flex-col lg:flex-row w-full max-w-[1450px] mx-auto mt-4 lg:px-8">
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
                mainHeading="Features of SAP Service Cloud"
                mainDescription="SAP Service Cloud enables unified agent workspaces, AI-driven automation, and omnichannel routing to streamline customer service operations."
                // ctaText="Get a Consultation"
              />
            </div>
          </section>

          <section id="insights" className="mt-16 sm:mt-20 w-full scroll-mt-24">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
              Financial insights that drive value
            </h2>

            {/* Stats Cards - Responsive Grid */}
            <div className="py-8 sm:py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 bg-white">
              <StatCardStable
                percentage="35%"
                description="Self-service portals and communities can decrease support requests"
              />
              <StatCardStable
                percentage="55%"
                description="AI-driven automation and omnichannel routing can boost agent productivity"
              />
              <StatCardStable
                percentage="60%"
                description="Field service management improves on-time service delivery"
              />
            </div>

            {/* CTA Section - Responsive */}
            <div className="bg-black mt-8 sm:mt-10 w-full flex flex-col lg:flex-row items-center lg:items-start rounded-lg overflow-hidden">
              <h1 className="text-white text-xl sm:text-2xl md:text-[27px] p-4 lg:p-10 w-full lg:w-3/4 leading-relaxed">
                Transform your customer service with SAP Service Cloud, gaining real-time visibility, intelligent automation, and seamless workflows to deliver faster, smarter, and more personalized support.
              </h1>
              <div className="p-4 lg:p-10 w-full lg:w-auto flex justify-center lg:justify-end">
                <Link to="/contactus">
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
                SAP Service Cloud offers unified agent workspaces, AI-driven automation, and omnichannel routing to streamline support operations.
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
              Unlock powerful financial benefits
            </h2>
            <p className="mt-4 text-lg sm:text-xl md:text-2xl w-full lg:w-3/4 text-gray-500">
              Service Cloud improves agent efficiency with AI-driven automation and unified workspaces, while omnichannel routing ensures timely responses. Self-service portals and field service capabilities boost customer satisfaction, reduce resolution times, and optimize service operations.
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
            <CustomerStories stories={customerStories} />
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
                  Empowering financial excellence for businesses
                </h1>
                <div className="flex-shrink-0">
                  <Link to="/contactus">
                  <Requesademobtn text="Request a Demo" />
                  </Link>
                </div>
              </div>

              {/* Paragraph */}
              <p className="mt-6 text-base sm:text-lg lg:text-xl w-full lg:w-3/4 text-white leading-relaxed">
                Transform your customer service with SAP Service Cloud, gaining real-time visibility, intelligent automation, and seamless workflows to deliver faster, smarter, and more personalized support.
              </p>
            </div>
          </section>

          {/* Resources Section */}

          {/* <InsightsSection insights={insightsData} /> */}
          

          <section id="other products" className="mt-12 sm:mt-16 scroll-mt-24">
            <RelatedSolutions {...insights} />
            {/* <Resource
              heading="Explore Our Financial Resources"
              paragraph="Comprehensive guides and insights for optimizing your financial operations"
              products={[
                {
                  title: "Financial Management Guide",
                  description:
                    "Complete guide to SAP Service Cloud Management best practices.",
                  image: "/images/financial-guide.jpg",
                  link:""
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

export default ServiceCloud;
