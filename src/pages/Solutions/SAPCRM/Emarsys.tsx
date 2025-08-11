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
  Globe,
  Star,
  Rocket,
  BarChart2,
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
    question: "What is SAP Emarsys?",
    answer:
      "An AI-powered omnichannel customer engagement platform that helps marketers build, launch, and scale personalized campaigns to grow customer lifetime value across channels.",
  },
  {
    question: "Which channels does Emarsys support?",
    answer:
      "Email, web, SMS, mobile apps/push, digital ads, in-store, direct mail, conversational messaging, and more.",
  },
  {
    question: "Does Emarsys offer analytics and insights?",
    answer:
      "Yes—purpose-built dashboards provide real-time reporting, ROI metrics, lifecycle analytics, and predictive campaign performance.",
  },
  {
    question: "Can I automate marketing and loyalty programs?",
    answer:
      "Absolutely—use hundreds of AI-infused, pre-built tactics to automate lifecycle journeys, abandoned cart, loyalty, churn prevention, and more.",
  },
  {
    question: "Is Emarsys suitable for B2B as well as B2C?",
    answer:
      "Yes. It supports both B2C omnichannel marketing and B2B account engagement, with dedicated templates and collaborative features.",
  },
];

const tabs = [
  {
    icon: <Star className="w-10 h-10 text-yellow-500" />,
    title: "Smart Segmentation & Personalization",
    description:
      "Use AI to segment audiences and deliver personalized content in real time.",
  },
  {
    icon: <Globe className="w-10 h-10 text-blue-500" />,
    title: "True Omnichannel Reach",
    description:
      "Engage customers across email, mobile, web, SMS, ads, in-store, and more.",
  },
  {
    icon: <Shield className="w-10 h-10 text-green-500" />,
    title: "Prebuilt Campaign Tactics",
    description:
      "Launch proven, industry-aligned automation sequences in just a few clicks.",
  },
  {
    icon: <Rocket className="w-10 h-10 text-purple-500" />,
    title: "Loyalty & Rewards Management",
    description:
      "Deploy loyalty campaigns that dynamically reward customer behavior.",
  },
  {
    icon: <BarChart2 className="w-10 h-10 text-pink-500" />,
    title: "Analytics & AI Forecasting",
    description:
      "Track performance and predict campaign outcomes with AI-powered dashboards.",
  },
  {
    icon: <Database className="w-10 h-10 text-orange-500" />,
    title: "Unified Customer Data",
    description:
      "Unify customer behavior, sales, and product data for a complete view.",
  },
  {
    icon: <Users className="w-10 h-10 text-red-500" />,
    title: "B2B & B2C Support",
    description:
      "Execute tailored tactics for both B2C omni-marketing and B2B account engagement.",
  },
  {
    icon: <Settings className="w-10 h-10 text-gray-500" />,
    title: "Fast Deployment",
    description:
      "Hit the ground running with low-code setup and best-practice templates.",
  },
];

const sampleSolutions = [
  {
    title: "Omnichannel Lifecycle Marketing",
    heading: "Lifecycle Campaign Automation",
    description:
      "Automate customer journeys from acquisition to retention using AI-powered, omnichannel tactics.",
    points: [
      "Abandoned cart recovery",
      "Welcome & re-engagement journeys",
      "Churn prevention",
      "Cross-sell & upsell automations",
    ],
  },
  {
    title: "Personalization & Testing",
    heading: "AI-Powered Personalization",
    description:
      "Tailor content and offers in real time to individual customers across channels.",
    points: [
      "Dynamic product recommendations",
      "Behavior-based segmentation",
      "A/B testing and optimization",
      "Real-time web and email personalization",
    ],
  },
  {
    title: "Reporting & Predictive Analytics",
    heading: "Data-Driven Performance Insights",
    description:
      "Use purpose-built dashboards to measure and predict campaign impact—no analyst required.",
    points: [
      "Revenue and ROI dashboards",
      "Customer lifetime value tracking",
      "Store, lifecycle & return analytics",
      "Predictive performance forecasting",
    ],
  },
  {
    title: "Loyalty & Rewards Programs",
    heading: "Integrated Omnichannel Loyalty",
    description:
      "Create and manage loyalty programs with personalized rewards across digital and physical touchpoints.",
    points: [
      "Custom loyalty tiers and content",
      "Drag-and-drop loyalty campaign builder",
      "Reward redemption tracking",
      "Prebuilt loyalty strategies",
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
  heading: "What is SAP Emarsys?",
  description:
    "SAP Emarsys is SAP’s AI-powered omnichannel customer engagement platform that enables marketers to build, launch, and scale personalized, cross-channel campaigns to boost customer lifetime value.",
  imageUrl: "/Emarsys/emarsys_overview.webp", // update to a fresh Emarsys image
  imageAlt: "Emarsys platform interface",
  items: [
    {
      title: "Personalized Omnichannel Engagement",
      highlight: "One-to-One Marketing at Scale",
      description:
        "Seamlessly deliver tailored campaigns across email, web, SMS, mobile, digital ads, in-store, push, and more using AI-powered segmentation and engagement tactics.",
    },
    {
      title: "Integrated Data & AI Insights",
      highlight: "Unified Customer View with Smart Analytics",
      description:
        "Fuse customer behavior, commerce, and CRM data into one source of truth, enriched by AI-driven insights and reporting to inform smarter campaign decisions.",
    },
    {
      title: "Marketing Automation & Loyalty",
      description:
        "Deploy prebuilt, industry-specific tactics, automate lifecycle campaigns, and launch loyalty programs—all out-of-the-box and ready to go.",
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

const insights = {
  heading: "Explore related SAP Customer Experience solutions",
  description:
    "From customer data management to commerce optimization, find the perfect solution to accelerate your customer engagement journey.",
  ctaText: "Talk to an expert",
  ctaLink: "/contact",
  solutions: [
    { title: "SAP Customer Data Cloud", href: "/solutions/customer-data-cloud" },
    { title: "SAP Commerce Cloud", href: "/solutions/commerce-cloud" },
  ],
};

const insightsData = [
   {
    title: "SAP Emarsys for Retail & E-commerce",
    imageUrl: "/images/sap-retail.jpg",
    imageAlt: "Retail & E-commerce",
    gradientFrom: "from-blue-600",
    gradientTo: "to-blue-800",
  },
  {
    title: "Customer Journey Optimization with AI",
    imageUrl: "/images/customer-journey.jpg",
    imageAlt: "Customer Journey",
    gradientFrom: "from-teal-600",
    gradientTo: "to-cyan-700",
  },
  {
    title: "Omnichannel Marketing Automation",
    imageUrl: "/images/omnichannel.jpg",
    imageAlt: "Omnichannel Marketing",
    gradientFrom: "from-purple-600",
    gradientTo: "to-indigo-700",
  },
];
const features = [
  {
    title: "Unified Data Layer",
    description:
      "Aggregate customer, commerce, and product data into one platform for seamless personalization.",
    image: "/Emarsys/data_integration.png",
  },
  {
    title: "Prebuilt AI-Infused Tactics",
    description:
      "Leverage hundreds of ready-to-deploy, industry-aligned tactics to accelerate time to campaign launch.",
    image: "/Emarsys/ai_tactics.png",
  },
  {
    title: "Channel-Agnostic Campaigns",
    description:
      "Run campaigns across email, SMS, mobile, web, ads, in-store, and direct mail from one dashboard.",
    image: "/Emarsys/omnichannel.png",
  },
  {
    title: "Loyalty & Rewards Automation",
    description:
      "Design and deploy loyalty journeys with integrated tier, reward, and points management.",
    image: "/Emarsys/loyalty.png",
  },
  {
    title: "Real-Time Insights & Forecasting",
    description:
      "View performance and forecast outcomes instantly with built-in dashboards and AI forecasting.",
    image: "/Emarsys/analytics.png",
  },
];
function Emarsys() {
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
                  src="/Solutions/emarsys.webp"
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
              heading="Explore Our SAP Emarsys Resources"
              paragraph="Comprehensive guides and insights for customer engagement transformation"
              products={[
                {
                  title: "Customer Engagement Guide",
                  description:
                    "Complete guide to AI-powered customer engagement strategies and best practices.",
                  image: "/images/engagement-guide.jpg",
                  link:""
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

export default Emarsys ;
