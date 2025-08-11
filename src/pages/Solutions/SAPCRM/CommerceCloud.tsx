
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
    title: "Omnichannel Enablement",
    description:
      "Seamlessly sell across online, mobile, store, call center, and social platforms.",
  },
  {
    title: "Product Content Management (PCM)",
    description:
      "Manage and publish product data across catalogs, languages, and regions from one central place.",
  },
  {
    title: "Personalization Engine",
    description:
      "Deliver AI-driven, context-aware experiences based on user behavior and segmentation.",
  },
  {
    title: "Flexible Cart & Checkout",
    description:
      "Customizable checkout flows, promotions, and cart rules to suit various business needs.",
  },
];

const faqs = [
  {
    question: "What is SAP Commerce Cloud?",
    answer:
      "SAP Commerce Cloud is a cloud-based e-commerce platform that helps businesses deliver personalized, scalable, and omnichannel shopping experiences.",
  },
  {
    question: "Who can use SAP Commerce Cloud?",
    answer:
      "It’s designed for both B2C and B2B businesses, from small enterprises to large global brands.",
  },
  {
    question: "Does SAP Commerce Cloud support headless commerce?",
    answer:
      "Yes. It offers a headless architecture that lets you decouple the front-end from the back-end for maximum flexibility.",
  },
  {
    question: "Can it integrate with other SAP solutions?",
    answer:
      "Absolutely. It natively integrates with SAP ERP, SAP Marketing Cloud, and SAP Customer Data Cloud.",
  },
  {
    question: "Is it easy to scale globally?",
    answer:
      "Yes. With cloud hosting, multi-language, multi-currency, and localization features, you can scale operations worldwide.",
  },
];
const tabs = [
  {
    icon: <Star className="w-10 h-10 text-yellow-500" />,
    title: "Personalized Shopping",
    description:
      "Boost engagement with AI-powered recommendations and personalized offers.",
  },
  {
    icon: <Globe className="w-10 h-10 text-blue-500" />,
    title: "Global Reach",
    description:
      "Launch and manage online stores across regions with local compliance.",
  },
  {
    icon: <Shield className="w-10 h-10 text-green-500" />,
    title: "Enterprise-Grade Security",
    description:
      "Protect transactions and customer data with advanced security protocols.",
  },
  {
    icon: <Rocket className="w-10 h-10 text-purple-500" />,
    title: "Fast Deployment",
    description:
      "Go live quickly with ready-to-use templates and cloud hosting.",
  },
  {
    icon: <BarChart2 className="w-10 h-10 text-pink-500" />,
    title: "Data-Driven Insights",
    description:
      "Leverage analytics to understand customer behavior and improve conversions.",
  },
  {
    icon: <Database className="w-10 h-10 text-orange-500" />,
    title: "Unified Product Data",
    description:
      "Manage product information consistently across all channels.",
  },
  {
    icon: <Users className="w-10 h-10 text-red-500" />,
    title: "Enhanced Customer Experience",
    description:
      "Provide seamless, responsive, and accessible shopping experiences.",
  },
  {
    icon: <Settings className="w-10 h-10 text-gray-500" />,
    title: "Flexible Integrations",
    description:
      "Easily integrate with ERP, CRM, and third-party systems.",
  },
];
const sampleSolutions = [
  {
    title: "Personalized Customer Experiences",
    heading: "AI-Powered Personalization",
    description:
      "Deliver targeted content, offers, and product recommendations in real-time based on customer behavior and preferences.",
    points: [
      "Dynamic content targeting",
      "AI-driven product suggestions",
      "Personalized promotions",
      "Behavior-based marketing",
    ],
  },
  {
    title: "Unified Commerce Management",
    heading: "Centralized Product & Order Management",
    description:
      "Manage product catalogs, pricing, and inventory across multiple channels from a single platform.",
    points: [
      "Multi-channel catalog sync",
      "Real-time stock visibility",
      "Unified pricing rules",
      "Integrated order processing",
    ],
  },
  {
    title: "Scalable E-Commerce Infrastructure",
    heading: "Cloud-Native Flexibility",
    description:
      "Leverage SAP’s cloud infrastructure to scale your commerce operations globally with high performance.",
    points: [
      "Global hosting capabilities",
      "Automatic scaling",
      "High availability",
      "Disaster recovery support",
    ],
  },
  {
    title: "Seamless Integrations",
    heading: "Connected Business Systems",
    description:
      "Integrate with SAP ERP, CRM, marketing, and analytics tools for a truly connected commerce ecosystem.",
    points: [
      "Native SAP integration",
      "API-driven architecture",
      "Third-party app marketplace",
      "Real-time data exchange",
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
  heading: "What is SAP Commerce Cloud?",
  description:
    "SAP Commerce Cloud is an enterprise-grade e-commerce platform that enables businesses to deliver seamless, personalized, and scalable digital shopping experiences across all channels.",
  imageUrl: "/Solutions/commercecloud.webp",
  imageAlt: "E-commerce digital platform",
  items: [
    {
      title: "B2C Commerce",
      highlight: "SAP Commerce Cloud for B2C",
      description:
        "Deliver engaging online experiences for consumers with personalized product recommendations, promotions, and seamless checkout.",
    },
    {
      title: "B2B Commerce",
      highlight: "SAP Commerce Cloud for B2B",
      description:
        "Support complex B2B transactions with custom pricing, bulk ordering, and contract-based sales.",
    },
    {
      title: "Omnichannel Experience",
      description:
        "Integrate online, mobile, and in-store experiences for a consistent brand presence across all customer touchpoints.",
    },
  ],
};


const customerStories = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
    title: "Transforming Financial Operations With SAP Financial Management",
    readMoreLink: "#",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
    title: "Achieving Financial Excellence Through Digital Transformation",
    readMoreLink: "#",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop",
    title: "Streamlining Global Financial Processes with SAP Solutions",
    readMoreLink: "#",
  },
];

const insights = {
  heading: "Explore related business solutions",
  description:
    "From strategy to execution, find the perfect solution to accelerate your journey toward success.",
  ctaText: "Talk to an expert",
  ctaLink: "/contact",
  solutions: [
    { title: "SAP S/4HANA Public Cloud", href: "/solutions/public-cloud" },
    { title: "SAP S/4HANA Private Cloud", href: "/solutions/private-cloud" },
  ],
};
const features = [
  {
    title: "Headless Commerce Architecture",
    description:
      "Deliver flexible front-end experiences while keeping powerful back-end commerce capabilities.",
    image: "/CommerceCloud/headless.png",
  },
  {
    title: "Advanced Search & Merchandising",
    description:
      "Optimize product discovery with AI-powered search, filters, and merchandising tools.",
    image: "/CommerceCloud/search.png",
  },
  {
    title: "Omnichannel Order Management",
    description:
      "Manage orders from any channel with real-time updates and fulfillment tracking.",
    image: "/CommerceCloud/omnichannel.png",
  },
  {
    title: "AI-Driven Personalization",
    description:
      "Use customer data to create individualized shopping journeys that drive conversions.",
    image: "/CommerceCloud/personalization.png",
  },
  {
    title: "Global Scalability",
    description:
      "Operate in multiple regions with localized content, currency, and tax configurations.",
    image: "/CommerceCloud/global.png",
  },
];

const insightsData = [
  {
    title: "SAP Commerce Cloud - Scalable infrastructure",
    imageUrl: "/images/sap-commerce-scalable.jpg",
    imageAlt: "Scalable infrastructure",
    gradientFrom: "from-blue-600",
    gradientTo: "to-blue-800",
  },
  {
    title: "Personalized Commerce Experiences",
    imageUrl: "/images/sap-commerce-personalized.jpg",
    imageAlt: "Personalization",
    gradientFrom: "from-teal-600",
    gradientTo: "to-cyan-700",
  },
  {
    title: "Cloud-Native Seamless Integration",
    imageUrl: "/images/sap-commerce-cloud.jpg",
    imageAlt: "Cloud Native Architecture",
    gradientFrom: "from-purple-600",
    gradientTo: "to-indigo-700",
  },
];
function CommerceCloud() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section - Responsive */}
      <div className="w-full flex justify-center lg:px-8">
        <div className="max-w-[1400px] w-full">
          <TwoColumnLayout
            left={
              <LeftSection
                title="SAP Financial "
                description="SAP Financial Management is a core component of SAP ERP that helps organizations manage their financial operations efficiently. It covers everything from accounting and reporting to risk management and compliance."
              >
                <Requesademobtn text="Book a Consultation" />
              </LeftSection>
            }
            right={
              <RightSection>
                <img
                  src="/Solutions/commerce.webp"
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
                mainHeading="Features of SAP Financial"
                mainDescription="SAP Financial Management provides comprehensive financial capabilities including accounting, controlling, asset management, and advanced analytics for complete financial operations."
                ctaText="Get a Consultation"
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
                percentage="40%"
                description="Reduction in financial close time through automated processes and real-time reporting capabilities."
              />
              <StatCardStable
                percentage="60%"
                description="Improvement in financial accuracy and compliance within the first year of implementation."
              />
              <StatCardStable
                percentage="99%"
                description="Financial data accuracy with integrated validation controls and automated reconciliation processes."
              />
            </div>

            {/* CTA Section - Responsive */}
            <div className="bg-black mt-8 sm:mt-10 w-full flex flex-col lg:flex-row items-center lg:items-start rounded-lg overflow-hidden">
              <h1 className="text-white text-xl sm:text-2xl md:text-[27px] p-4 lg:p-10 w-full lg:w-3/4 leading-relaxed">
                Transform your financial operations with SAP Financial Management. 
                Achieve complete visibility, control, and compliance across all financial processes 
                with real-time insights and automated workflows.
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
                SAP Financial offers comprehensive accounting, real-time reporting, 
                compliance management, and advanced analytics for complete financial control.
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
              SAP Financial Management enhances financial operations with automated processes, 
              real-time insights, compliance controls, and strategic planning capabilities.
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
                  <Requesademobtn text="Book a demo" />
                </div>
              </div>

              {/* Paragraph */}
              <p className="mt-6 text-base sm:text-lg lg:text-xl w-full lg:w-3/4 text-white leading-relaxed">
                Transform your financial operations with SAP Financial Management. 
                Achieve complete visibility, control, and compliance across all financial processes 
                with real-time insights and automated workflows.
              </p>
            </div>
          </section>

          {/* Resources Section */}

          <InsightsSection insights={insightsData} />
          <RelatedSolutions {...insights} />

          <section id="resources" className="mt-12 sm:mt-16 scroll-mt-24">
            <Resource
              heading="Explore Our Financial Resources"
              paragraph="Comprehensive guides and insights for optimizing your financial operations"
              products={[
                {
                  title: "Financial Management Guide",
                  description:
                    "Complete guide to SAP Financial Management best practices.",
                  image: "/images/financial-guide.jpg",
                  link:""
                },
              ]}
            />
          </section>
        </div>
      </div>

      {/* Certifications Section - Responsive */}
      {/* <div className="p-4 lg:p-8 rounded-lg mt-8">
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
      </div> */}

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

export default CommerceCloud;
