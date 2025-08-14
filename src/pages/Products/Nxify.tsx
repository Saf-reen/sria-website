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
    link: "/products/nxdesk",
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
    question: "What is Nxify?",
    answer:
      "Nxify is an AI-driven, modular platform that simplifies workflow automation, lead management, payroll, HR tasks, and EXIM operations for modern businesses.",
  },
  {
    question: "Who can use Nxify?",
    answer:
      "Anyone—from HR professionals, payroll managers, sales and marketing teams, to leadership and analytics teams—can benefit from Nxify’s structured and scalable features.",
  },
  {
    question: "Is Nxify customizable?",
    answer:
      "Yes. Nxify is designed with modular components that can be tailored to fit specific workflows, business rules, and user interface needs.",
  },
  {
    question: "Can Nxify integrate with other systems?",
    answer:
      "Absolutely. Nxify supports seamless API integration to connect with CRMs, ERPs, accounting software, and third-party tools.",
  },
  {
    question: "How is data secured on Nxify?",
    answer:
      "Nxify enforces secure, role-based access with encrypted data transfer and storage, ensuring sensitive information is always protected.",
  },
  {
    question: "What deployment options are available?",
    answer:
      "Nxify can be deployed on-premises or on the cloud, based on your organization’s infrastructure and preferences.",
  },
  {
    question: "Does Nxify support analytics and reporting?",
    answer:
      "Yes. Nxify provides real-time dashboards, insight cards, and drill-down analytics to help teams make informed decisions.",
  },
  {
    question: "Can users manage multiple modules from a single dashboard?",
    answer:
      "Yes. Nxify offers a unified interface where users can navigate and control all modules—such as payroll, attendance, IT declarations, etc.—from one central place.",
  },
  {
    question: "Is training provided for using Nxify?",
    answer:
      "Yes. Nxify includes onboarding support, documentation, and training sessions to help your team get started quickly.",
  },
  {
    question: "What support channels does Nxify offer?",
    answer:
      "Nxify provides email, chat, and ticket-based support. Premium users may also get dedicated account managers.",
  },
];

const tabs = [
  {
    icon: <Star className="w-10 h-10 text-yellow-500" />,
    title: "Automated Payroll & Payslip Generation",
    description:
      "Configure salary structures, auto-generate payslips, and manage payroll revisions with ease, reducing manual intervention.",
  },
  {
    icon: <Globe className="w-10 h-10 text-blue-500" />,
    title: "Integrated IT Declaration & Compliance",
    description:
      "Allow employees to declare investments, automate Form-16 and compliance reporting, and ensure statutory adherence.",
  },
  {
    icon: <Shield className="w-10 h-10 text-green-500" />,
    title: "Loans & Advances Management",
    description:
      "Simplify loan applications, disbursements, approvals, and deductions for employees, all with workflow automation.",
  },
  {
    icon: <Rocket className="w-10 h-10 text-purple-500" />,
    title: "Attendance & Leave Tracking",
    description:
      "Biometric, geotag, or software-based attendance logging with robust holiday, leave, and absence policy configuration.",
  },
  {
    icon: <BarChart2 className="w-10 h-10 text-pink-500" />,
    title: "Onboarding & Exit Workflows",
    description:
      "Structured joining and full-and-final settlement processes, with approval chains and auto-generated documentation.",
  },
  {
    icon: <Database className="w-10 h-10 text-orange-500" />,
    title: "Dashboard & Analytics",
    description:
      "Live dashboards give visibility into salary processing, approvals, compliance status, headcount, payroll trends, and more.",
  },
  {
    icon: <Users className="w-10 h-10 text-red-500" />,
    title: "Secure Role-Based Access",
    description:
      "Control who can access, view, or update data—granular permissions for admins, HR, finance, and employees.",
  },
  {
    icon: <Settings className="w-10 h-10 text-gray-500" />,
    title: "Customizable & API-Friendly",
    description:
      "Easily adapt Nxify to your specific salary policies, workflows, and connect with ERP/accounting systems like SAP, Tally, etc.",
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

const features = [
  {
    title: "Unified Employee Financials",
    description:
      "Manage salaries, reimbursements, loans, and advances from a single, streamlined platform with real-time visibility.",
    image: "/Nxify/Unified Employee Financials.png",
  },
  {
    title: "Automated Payroll Processing",
    description:
      "Run accurate and timely payrolls with automated calculations, statutory compliance, and direct bank transfers.",
    image: "/Nxify/Automated Payroll Processing.png",
  },
  {
    title: "Smart Attendance & Leave",
    description:
      "Track attendance, shifts, and leave balances with biometric integrations and employee self-service portals.",
    image: "/Nxify/Smart Attendance & Leave.png",
  },
  {
    title: "IT Declarations & Taxation",
    description:
      "Simplify income tax declarations and automate deductions with built-in compliance and real-time projections.",
    image: "/Nxify/IT Declarations & Taxation.png",
  },
  {
    title: "Workflow Automation",
    description:
      "Digitize approvals for expenses, leaves, onboarding, and more using custom rule-based workflows.",
    image: "/Nxify/Workflow Automation.png",
  },
  {
    title: "Role-Based Access Control",
    description:
      "Ensure data privacy and compliance with secure, role-specific access to HR and financial data.",
    image: "/Nxify/Role-Based Access Control.png",
  },
  {
    title: "Insightful Analytics",
    description:
      "Make informed decisions with dashboards and reports on payroll, workforce trends, and financial health.",
    image: "/Nxify/Insightful Analytics.png",
  },
];

function Nxify() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section - Responsive */}
      <div className="w-full flex justify-center lg:px-8">
        <div className="max-w-[1400px] w-full">
          <TwoColumnLayout
            left={
              <LeftSection
                title="Nxify"
                description="Nxify is a unified platform for automating employee financials, payroll, attendance, and HR workflows. It streamlines salary, loans, IT declarations, and approvals with secure role-based access and real-time insights."
              >
                <Requesademobtn text="Request a Demo" />
              </LeftSection>
            }
            right={
              <RightSection>
                <img
                  src="/Nxify/Nxify.png"
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
              Why Nxify?
            </h1>
            <p className="mt-8 sm:mt-12 text-lg sm:text-xl md:text-2xl w-full lg:w-3/4 text-gray-500">
              Nxify is a comprehensive cloud-based platform designed to simplify
              and automate employee financial operations, HR processes, and EXIM
              workflows. From payroll, IT declarations, and loans to attendance
              tracking, onboarding, and exit processes, Nxify unifies everything
              under one intelligent system with real-time dashboards and
              analytics.
            </p>
          </section>

          {/* Features Section */}
          <section id="features" className="mt-12 sm:mt-16 scroll-mt-24">
            <div className="flex justify-center">
              <div className="flex flex-col sm:flex-row gap-6 max-w-7xl w-full justify-center">
                <FeatureCard
                  title="Automated Payroll"
                  description="Configure complex salary structures, generate payslips, and manage salary revisions with a few clicks."
                />
                <FeatureCard
                  title="Integrated IT Declarations"
                  description="Let employees declare investments and download Form-16s, with compliance and ease."
                />
                <FeatureCard
                  title="Loans & Advances Management"
                  description="Track employee loan applications, disbursements, and deductions with complete transparency."
                />{" "}
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
                Nxify's intelligent automation covers payroll, IT declarations,
                employee loans, attendance tracking, onboarding, exit processes,
                and seamless EXIM solutions—all integrated, customizable, and
                available anywhere via the cloud.
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
                Streamline your HR and payroll operations with Nxify — an
                all-in-one platform for employee financials, IT declarations,
                attendance, and compliance. Achieve complete control,
                transparency, and efficiency in workforce management.
              </h1>
              <Link
                to="/contactus"
                className="p-4 lg:p-10 w-full lg:w-auto flex justify-center lg:justify-end"
              >
                <Requesademobtn text="Book a demo" />
              </Link>
            </div>
          </section>

          {/* Benefits Section */}
          <section id="benefits" className="mt-16 sm:mt-20 w-full scroll-mt-24">
            <h2 className="text-2xl sm:text-3xl md:text-4xl w-full lg:w-3/4 font-semibold">
              Unlock powerful benefits
            </h2>
            <p className="mt-4 text-lg sm:text-xl md:text-2xl w-full lg:w-3/4 text-gray-500">
              Nxify enhances HR and financial management by automating
              repetitive tasks, ensuring real-time visibility, and delivering
              scalable, compliance-ready workflows for enterprises of any size.
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
                  Automating HR & Payroll for the Modern Workforce
                </h1>
                <Link to="/contactus" className="flex-shrink-0">
                  <Requesademobtn text="Book a demo" />
                </Link>
              </div>

              {/* Paragraph */}
              <p className="mt-6 text-base sm:text-lg lg:text-xl w-full lg:w-3/4 text-white leading-relaxed">
                Streamline employee financials, payroll, IT declarations, and HR
                operations with Nxify. Gain complete control, compliance, and
                clarity—while empowering your teams through automation and
                real-time insights.{" "}
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
                  title: "Nxify Product Brochure",
                  description: "Comprehensive overview of features, benefits, and real-world use cases. Download the PDF.",
                  image: "/images/brochure.jpg",
                  link:""
                },
                {
                  title: "How-To Videos",
                  description: "Step-by-step video guides on Payroll, Loans, and IT declaration workflows.",
                  image: "/images/how-to-videos.jpg",
                  link:""
                },
                {
                  title: "Case Studies",
                  description: "Success Stories: Nxify in Manufacturing, IT, and logistics enterprises.",
                  image: "/images/case-studies.jpg",  link:""
                },
                {
                  title: "Blog",
                  description: "Read: Digitizing HR & Payroll—Trends for 2025 and beyond.",
                  image: "/images/blog.jpg",  link:""
                },
              ]}
                        />
                    </section> */}
        </div>
      </div>

      {/* Certifications Section - Responsive */}
      <div className="p-8 relative  bg-white z-10">
        {/* <div className="flex flex-wrap justify-center items-center gap-8">
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
                            className="flex flex-col items-center justify-center w-40 h-40 p-2"
                        >
                            <img
                                src={item.src}
                                alt={item.label}
                                className="h-24 mb-2 object-contain"
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

export default Nxify;
