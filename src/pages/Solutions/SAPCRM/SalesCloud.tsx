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
  Star,
  Globe,
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
    question: "What is SAP Sales Cloud and how is it different from traditional CRM?",
    answer:
      "SAP Sales Cloud integrates CRM, CPQ, forecasting, and AI in one modern cloud suite—far beyond just contact management.",
  },
  {
    question: "Can Sales Cloud integrate with our ERP or Commerce platform?",
    answer:
      "Absolutely—prebuilt connectors support integration with SAP ERP, Commerce, even third-party systems like Salesforce or Microsoft.",
  },
  {
    question: "Is Sales Cloud suitable for small and medium businesses?",
    answer:
      "Yes! It scales well—SMBs love the quick setup and smart automation, enterprises benefit from full feature breadth.",
  },
  {
    question: "How quickly can we implement Sales Cloud?",
    answer:
      "Many orgs get up and running in weeks. Full CPQ and forecasting setups might take 3-6 months depending on complexity.",
  },
  {
    question: "Does Sales Cloud support mobile-first sales teams?",
    answer:
      "Totally—you get full CRM, quoting, and pipeline tools on mobile, with offline capabilities for field reps.",
  },
];

const tabs = [
  {
    icon: <Star className="w-10 h-10 text-yellow-500" />,
    title: "AI Forecasting",
    description:
      "Close deals smarter with predictive revenue projections and risk detection.",
  },
  {
    icon: <Globe className="w-10 h-10 text-blue-500" />,
    title: "Global Sales Coverage",
    description:
      "Manage territories and quotas with localized compliance and global scale.",
  },
  {
    icon: <Shield className="w-10 h-10 text-green-500" />,
    title: "Secure CRM Data",
    description:
      "Enterprise-grade security with access controls and GDPR compliance.",
  },
  {
    icon: <Rocket className="w-10 h-10 text-purple-500" />,
    title: "Faster Deal Velocity",
    description:
      "Automate quotes, approvals, and selling workflows to accelerate deal closure.",
  },
  {
    icon: <BarChart2 className="w-10 h-10 text-pink-500" />,
    title: "Pipeline Insights",
    description:
      "Real-time dashboards surface pipeline health and spotlight high-impact deals.",
  },
  {
    icon: <Database className="w-10 h-10 text-orange-500" />,
    title: "Unified Sales Data",
    description:
      "Single source of truth—accounts, opportunities, quotations, and performance metrics.",
  },
  {
    icon: <Users className="w-10 h-10 text-red-500" />,
    title: "Seller Experience",
    description:
      "Mobile-first, intuitive CRM UI keeps sellers productive on the fly.",
  },
  {
    icon: <Settings className="w-10 h-10 text-gray-500" />,
    title: "Flexible Deployment",
    description:
      "Choose public cloud, private cloud, or hybrid depending on IT strategy.",
  },
];

const sampleSolutions = [
  {
    title: "360° Lead & Opportunity Management",
    heading: "SAP Sales Cloud – Leads & Opportunities",
    description:
      "Track and convert leads faster with pipeline visibility, guided selling, and real-time forecasting.",
    points: [
      "AI-driven lead scoring",
      "Opportunity stages & alerts",
      "Interactive pipeline dashboards",
      "Sales team collaboration",
    ],
  },
  {
    title: "Configure, Price & Quote (CPQ)",
    heading: "SAP Sales Cloud – CPQ",
    description:
      "Accelerate deal cycles with accurate, guided quotes—automate pricing, approvals, and proposal generation.",
    points: [
      "Product/configuration rules",
      "Discount workflows & approvals",
      "Rich proposal templates",
      "Mobile quote generation",
    ],
  },
  {
    title: "Territory & Quota Management",
    heading: "SAP Sales Cloud – Territories & Quotas",
    description:
      "Optimize sales coverage and quotas across teams, regions, and accounts to hit targets consistently.",
    points: [
      "Dynamic territory assignments",
      "Quota modeling & forecasting",
      "Performance dashboards",
      "Incentive planning",
    ],
  },
  {
    title: "Sales Analytics & AI Insights",
    heading: "SAP Sales Cloud – Analytics",
    description:
      "Unlock predictive forecasts, win/loss analysis, and recommended next-best actions to drive conversion.",
    points: [
      "Predictive pipeline analytics",
      "Deal health scoring",
      "Cross-sell/up-sell suggestions",
      "KPI dashboards per rep/team",
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
  heading: "What is SAP Sales Cloud?",
  description:
    "SAP Sales Cloud modernizes your entire sales cycle—lead to cash—by blending CRM, CPQ, forecasting, and AI-powered insights into a seamless, real-time experience.",
  imageUrl: "/Solutions/sales-cloud.png",
  imageAlt: "Sales Cloud visualization",
  items: [
    {
      title: "Public Cloud",
      highlight: "SAP Sales Cloud – Public",
      description:
        "Fast deployment, subscription-based, always up-to-date, minimal IT overhead.",
    },
    {
      title: "Private Cloud",
      highlight: "SAP Sales Cloud – Private",
      description:
        "More customization control, yet cloud-native benefits—security, flexibility, managed infra.",
    },
    {
      title: "On-Premise (Optional)",
      description:
        "Ideal for organizations with strict data residency requirements or deep legacy integrations.",
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
  heading: "Discover Real-World Sales Cloud Value",
  description:
    "See how businesses accelerate revenue, elevate seller performance, and hit quota using SAP Sales Cloud.",
  ctaText: "Talk to a sales cloud expert",
  ctaLink: "/contact-sales-cloud",
  solutions: [
    { title: "SAP Commerce Cloud", href: "/solutions/commerce-cloud" },
    { title: "SAP Service Cloud", href: "/solutions/service-cloud" },
    { title: "SAP Emarsys", href: "/solutions/emarsys" },
  ],
};

const insightsData = [
  {
    title: "Boosting Sales with AI Automation",
    imageUrl: "/images/salescloud-ai.jpg",
    imageAlt: "AI Automation in Sales",
    gradientFrom: "from-blue-600",
    gradientTo: "to-blue-800",
  },
  {
    title: "Sales Pipeline Optimization Strategies",
    imageUrl: "/images/salescloud-pipeline.jpg",
    imageAlt: "Sales Pipeline",
    gradientFrom: "from-teal-600",
    gradientTo: "to-cyan-700",
  },
  {
    title: "Mobile CRM Adoption Success Stories",
    imageUrl: "/images/salescloud-mobile.jpg",
    imageAlt: "Mobile CRM",
    gradientFrom: "from-purple-600",
    gradientTo: "to-indigo-700",
  },
];
const features = [
  {
    title: "AI-Powered Forecasting",
    description:
      "Leverage machine learning to predict revenue, identify risks early, and optimize closing strategies for higher accuracy.",
    image: "/SalesCloud/forecasting.png",
  },
  {
    title: "Guided Selling & Recommendations",
    description:
      "Provide sales reps with actionable recommendations and step-by-step guidance to prioritize opportunities and increase win rates.",
    image: "/SalesCloud/guided-selling.png",
  },
  {
    title: "CPQ Automation",
    description:
      "Streamline complex quoting, pricing, and configuration processes to accelerate deal closure.",
    image: "/SalesCloud/cpq.png",
  },
  {
    title: "Mobile-First CRM",
    description:
      "Access customer data, track opportunities, and manage tasks on the go from any device.",
    image: "/SalesCloud/mobile-crm.png",
  },
  {
    title: "Commission & Incentive Management",
    description:
      "Automate calculations and payouts to ensure accurate, timely, and motivating incentive programs for sales teams.",
    image: "/SalesCloud/commissions.png",
  },
];

function SalesCloud() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section - Responsive */}
      <div className="w-full flex justify-center lg:px-8">
        <div className="max-w-[1400px] w-full">
          <TwoColumnLayout
            left={
              <LeftSection
                title="SAP Sales Cloud"
                description="Drive revenue growth and improve sales efficiency with SAP Sales Cloud — a comprehensive CRM solution that empowers sales teams with actionable insights, AI-driven forecasting, and seamless customer engagement across all channels."
              >
                <Link to="/contactus">
                <Requesademobtn text="Book a Consultation" />
                </Link>
              </LeftSection>
            }
            right={
              <RightSection>
                <img
                  src="/Solutions/sales.jpg"
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
                mainDescription="SAP Sales Cloud provides end-to-end capabilities for managing leads, opportunities, and customer relationships."
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
                description="Sales Cloud can increase forecast accuracy"
              />
              <StatCardStable
                percentage="50%"
                description="Mobile access and guided selling improve productivity"
              />
              <StatCardStable
                percentage="60%"
                description="Automated commission , incentive management  and administrative effort"
              />
            </div>

            {/* CTA Section - Responsive */}
            <div className="bg-black mt-8 sm:mt-10 w-full flex flex-col lg:flex-row items-center lg:items-start rounded-lg overflow-hidden">
              <h1 className="text-white text-xl sm:text-2xl md:text-[27px] p-4 lg:p-10 w-full lg:w-3/4 leading-relaxed">
                Transform your sales operations with SAP Sales Cloud, gaining real-time visibility, actionable insights, and seamless collaboration to drive revenue growth and exceed targets.
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
                SAP Sales Cloud offers AI-powered forecasting, guided selling, and CPQ automation to boost revenue and streamline sales processes. Mobile-first CRM and automated commission management ensure teams stay productive, motivated, and connected across all channels.
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
              Sales Cloud combines AI-driven insights, guided selling, and mobile-first CRM to enhance sales productivity, accelerate deal cycles, and improve revenue forecasting.
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
                  <Requesademobtn text="Request a Demo" />
                  </Link>
                </div>
              </div>

              {/* Paragraph */}
              <p className="mt-6 text-base sm:text-lg lg:text-xl w-full lg:w-3/4 text-white leading-relaxed">
                Transform your sales operations with SAP Sales Cloud, gaining real-time visibility, actionable insights, and seamless collaboration to drive revenue growth and exceed targets.
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
    title: "Private Cloud Implementation Guide",
    description:
      "Step-by-step best practices for deploying a secure Private Cloud.",
    image: "/images/private-cloud-guide.jpg",
    link:""
  },
  {
    title: "Case Study: Banking Industry",
    description:
      "How a leading bank ensured compliance and security with Private Cloud.",
    image: "/images/private-cloud-case.jpg",
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

export default SalesCloud ;
