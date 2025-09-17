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
import { Link } from "react-router-dom";

const productData = [
  {
      title: "NxDesk",
      description:
          "Smart ticketing system designed to streamline issue tracking across teams and projects.",
      link:"/products/nxdesk"
  },
  {
    title: "Nxify",
    description:
      "Unified platform for automating employee financials, payroll, attendance, and HR workflows.",
    link: "/products/nxify",
  },
  {
    title: "BIG",
    description:
      "From billing and accounting to complaints, meetings, and documents — everything in one place.",
    link: "/products/big",
  },
  {
    title: "Gate Check",
    description:
      "It digitizes maintenance, visitor management, compliance, and sustainability across multiple sites with actionable insights.",
    link: "/products/gatecheck",
  },
];

const faqs = [
  {
    question: "What is Auto Extractor and who can use it?",
    answer:
      "Auto Extractor is an intelligent document processing solution designed for businesses of all sizes to automate data extraction from unstructured or semi-structured documents like invoices, receipts, and forms.",
  },
  {
    question: "Does Auto Extractor support multiple document formats?",
    answer:
      "Yes, Auto Extractor supports PDFs, scanned images, spreadsheets, and text files, ensuring seamless data extraction across formats.",
  },
  {
    question: "Can Auto Extractor handle complex layouts?",
    answer:
      "Absolutely. Auto Extractor uses advanced AI algorithms to interpret tables, columns, and nested fields in complex document structures.",
  },
  {
    question: "Can Auto Extractor be integrated into existing systems?",
    answer:
      "Yes, Auto Extractor provides APIs and connectors to integrate with ERP, CRM, and other business platforms effortlessly.",
  },
];


const tabs = [
  {
    icon: <Star className="w-10 h-10 text-yellow-500" />,
    title: "Intelligent Data Extraction",
    description:
      "Automatically identify and extract key data points from diverse document types with high accuracy.",
  },
  {
    icon: <Globe className="w-10 h-10 text-blue-500" />,
    title: "Multi-format Support",
    description:
      "Handle PDFs, images, spreadsheets, and more without manual intervention.",
  },
  {
    icon: <Shield className="w-10 h-10 text-green-500" />,
    title: "Data Security",
    description:
      "Ensure data privacy with encryption and secure access controls across all operations.",
  },
  {
    icon: <Rocket className="w-10 h-10 text-purple-500" />,
    title: "AI & ML Driven",
    description:
      "Leverage machine learning models that continuously improve extraction accuracy over time.",
  },
  {
    icon: <BarChart2 className="w-10 h-10 text-pink-500" />,
    title: "Analytics & Reporting",
    description:
      "Get actionable insights from extracted data with dashboards and trend analysis tools.",
  },
  {
    icon: <Database className="w-10 h-10 text-orange-500" />,
    title: "Integration APIs",
    description:
      "Connect Auto Extractor with your existing ERP or CRM systems through powerful REST APIs.",
  },
  {
    icon: <Users className="w-10 h-10 text-red-500" />,
    title: "Collaborative Workflow",
    description:
      "Allow teams to validate, annotate, and process extracted data efficiently with role-based permissions.",
  },
  {
    icon: <Settings className="w-10 h-10 text-gray-500" />,
    title: "Custom Extraction Rules",
    description:
      "Define and customize extraction templates based on your document types and business needs.",
  },
];

const features = [
  {
    title: "Automated Document Processing",
    description:
      "Extract data from hundreds of documents at scale without manual effort, reducing time and operational costs.",
    image: "/autoextract/automated-document-processing.png",
  },
  {
    title: "Template Learning",
    description:
      "The system learns document structures over time, improving extraction efficiency and reducing human intervention.",
    image: "/autoextract/template-learning.jpg",
  },
  {
    title: "Error Reduction",
    description:
      "By minimizing manual data entry, Auto Extractor reduces human errors, ensuring higher data integrity and consistency.",
    image: "/autoextract/error-reduction.jpg",
  },
  {
    title: "Custom Workflows",
    description:
      "Create workflows tailored to your document handling process, ensuring smooth integration with existing operations.",
    image: "/autoextract/custom-workflows.png",
  },
  {
    title: "Real-Time Validation",
    description:
      "Enable on-the-fly validation and correction of extracted data for faster turnaround and improved reliability.",
    image: "/autoextract/real-time-validation.png",
  },
];

const menuItems = [
  "Overview",
  "Features",
  "Insights",
  "Benefits",
  "Find Your Answers",
  "Other Products",

];

function AutoExtract() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section - Responsive */}
      <div className="w-full flex justify-center lg:px-8">
        <div className="max-w-[1400px] w-full">
          <TwoColumnLayout
            left={
              <LeftSection
                title="Auto Extractor"
                description="Auto Extractor is an AI-powered data extraction platform that automates document processing across formats such as invoices, receipts, and forms. It improves accuracy, reduces manual effort, and ensures secure handling of sensitive data. Designed for modern teams, it integrates with existing workflows and supports advanced analytics, template learning, and customizable validation rules."
              >
                <Requesademobtn text="Request a Demo" />
              </LeftSection>
            }
            right={
              <RightSection>
                <img
                  src="/auto.png"
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
            <h1 className="mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              What is Auto Extractor?
            </h1>
            <p className="mt-8 sm:mt-12 text-lg sm:text-xl md:text-2xl w-full lg:w-3/4 text-gray-500">
              Auto Extractor is an AI-driven platform designed to automate data extraction from diverse documents such as invoices, receipts, and forms. It simplifies document processing by providing real-time validation, advanced analytics, and customizable workflows, ensuring data accuracy, security, and seamless integration with your existing systems.
            </p>
          </section>

          {/* Features Section */}
          <section id="features" className="mt-12 sm:mt-16 scroll-mt-24">
            <div className="flex justify-center">
              <div className="flex flex-col sm:flex-row gap-6 max-w-7xl w-full justify-center">
                <FeatureCard
                  title="Smart Ticketing"
                  description="Track and manage issues from creation to resolution."
                />
                <FeatureCard
                  title="Real-Time SLA Monitoring"
                  description="Ensure timely resolution and compliance."
                />
                <FeatureCard
                  title="AI-Enhanced Support"
                  description="Automate tasks and get intelligent suggestions."
                />
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
                Automated Document Processing, Template Learning, Real-Time Validation, Custom Workflows, Data Security, AI & ML Integration, Analytics & Reporting, Multi-format Support
              </p>
            </div>
            <section className="my-8 sm:my-10 w-full">
              <FeatureTabs features={features} />
            </section>
          </section>

          {/* Insights Section */}
          <section id="insights" className="mt-16 sm:mt-20 w-full scroll-mt-24">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
              Insights that define value
            </h2>

            {/* Stats Cards - Responsive Grid */}
            <div className="py-8 sm:py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 bg-white">
              <StatCardStable
                percentage="30%"
                description="Reduction in data processing time within the first 3 months of deployment."
              />
              <StatCardStable
                percentage="45%"
                description="Increase in data extraction accuracy through AI-assisted validation."
              />
              <StatCardStable
                percentage="60%"
                description="Operational efficiency improvement with automated workflows and real-time monitoring."
              />
            </div>

            {/* CTA Section - Responsive */}
            <div className="bg-black mt-8 sm:mt-10 w-full flex flex-col lg:flex-row items-center lg:items-start rounded-lg overflow-hidden">
              <h1 className="text-white text-xl sm:text-2xl md:text-[27px] p-4 lg:p-10 w-full lg:w-3/4 leading-relaxed">
                Transform document processing with Auto Extractor’s AI-powered solution. Extract data efficiently, reduce manual effort, and improve accuracy across all workflows while maintaining data security and compliance.
              </h1>
              <Link to={"/contactus"} className="p-4 lg:p-10 w-full lg:w-auto flex justify-center lg:justify-end">
                <Requesademobtn text="Request a Demo" />
              </Link>
            </div>
          </section>

          {/* Benefits Section */}
          <section id="benefits" className="mt-16 sm:mt-20 w-full scroll-mt-24">
            <h2 className="text-2xl sm:text-3xl md:text-4xl w-full lg:w-3/4 font-semibold">
              Unlock powerful benefits
            </h2>
            <p className="mt-4 text-lg sm:text-xl md:text-2xl w-full lg:w-3/4 text-gray-500">
              Auto Extractor enables smarter document processing through automation, machine learning, and customizable workflows. Gain faster data extraction, enhanced accuracy, improved collaboration, and secure operations—all within a unified platform.
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
               Simplifying Support Operations for Modern Teams
                </h1>
                <Link to={"/contactus"} className="flex-shrink-0">
                  <Requesademobtn text="Request a Demo" />
                </Link>
              </div>

              {/* Paragraph */}
              <p className="mt-6 text-base sm:text-lg lg:text-xl w-full lg:w-3/4 text-white leading-relaxed">
           Extract, validate, and process critical data from documents effortlessly with Auto Extractor. Streamline workflows, enhance data accuracy, and ensure security—all while empowering teams to focus on what matters most, from a single, intelligent platform.
              </p>
            </div>
          </section>

          {/* Other Products Section */}
          <section id="other products" className="mt-16 sm:mt-20 scroll-mt-24">
            <ProductRange
              heading="Explore other range of products"
              paragraph="Discover products that complement your needs and drive business success."
              products={productData}
            />
          </section>

          {/* Resources Section */}
          {/* <section id="resources" className="mt-12 sm:mt-16 scroll-mt-24">
            <Resource
              heading="Explore Our Resources"
              paragraph="Helpful tools and insights for your export-import operations"
              products={[
                {
                  title: "NxDesk Documentation",
                  description:
                    "Complete guide to using and configuring NxDesk.",
                  image: "/images/trade-guide.jpg",
                  link: "/",
                },
              ]}
            />
          </section> */}
        </div>
      </div>

      {/* Certifications Section - Responsive */}
      <div className="p-8 relative  bg-white z-10">
    
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

export default AutoExtract;
