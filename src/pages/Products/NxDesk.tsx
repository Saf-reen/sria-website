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
    question: "What is NxDesk and who can use it?",
    answer:
      "NxDesk is an intelligent ticketing and issue management system designed for teams, support staff, and project-based departments to streamline ticket tracking and resolution.",
  },
  {
    question: "Does NxDesk support SLA tracking?",
    answer:
      "Yes, NxDesk includes real-time SLA enforcement based on ticket priority, with automatic escalation and deadline tracking.",
  },
  {
    question: "Can multiple roles access NxDesk?",
    answer:
      "Absolutely. Roles like Admin, Developer, Requestor, Manager, and Dispatcher can be configured with specific permissions.",
  },
  {
    question: "Is AI integrated into NxDesk?",
    answer:
      "Yes, NxDesk uses AI to answer contextual queries and plans to support ticket creation via voice/video and auto-assignment.",
  },
  {
    question: "Can we integrate NxDesk into our existing tools?",
    answer:
      "Yes, NxDesk has a modular design and RESTful APIs that support easy integration into your existing systems.",
  },
];

const tabs = [
  {
    icon: <Star className="w-10 h-10 text-yellow-500" />,
    title: "Smart Ticket Management",
    description:
      "Track, assign, and monitor tickets across lifecycle stages with full transparency.",
  },
  {
    icon: <Globe className="w-10 h-10 text-blue-500" />,
    title: "SLA Tracking",
    description:
      "Monitor resolution times, enforce deadlines, and reduce delays through real-time SLA enforcement.",
  },
  {
    icon: <Shield className="w-10 h-10 text-green-500" />,
    title: "Knowledge Base",
    description:
      "Store, search, and reuse solution articles linked to resolved tickets.",
  },
  {
    icon: <Rocket className="w-10 h-10 text-purple-500" />,
    title: "AI Support",
    description:
      "Integrated AI answers queries and supports future ticket creation from voice/video input.",
  },
  {
    icon: <BarChart2 className="w-10 h-10 text-pink-500" />,
    title: "Advanced Search",
    description:
      "Unified search across tickets, users, and articles with multiple filters.",
  },
  {
    icon: <Database className="w-10 h-10 text-orange-500" />,
    title: "Multi-role Access",
    description:
      "Role-based permissions for Admins, Developers, Requestors, Managers, and Dispatchers.",
  },
  {
    icon: <Users className="w-10 h-10 text-red-500" />,
    title: "Real-Time Notifications",
    description:
      "Receive instant updates via dashboard or email and stay on top of issue progress.",
  },
  {
    icon: <Settings className="w-10 h-10 text-gray-500" />,
    title: "Project & Category Grouping",
    description:
      "Organize tickets by project or function with custom tagging and categorization.",
  },
];

const features = [
  {
    title: "Unified Ticket Inbox",
    description:
      "Centralize all support channels—email, chat, and web—into one smart inbox for streamlined ticket management.",
    image: "/Axim/1.png",
  },
  {
    title: "Automated Workflows",
    description:
      "Save time with rule-based ticket routing, auto-responses, and SLA tracking to boost efficiency and response speed.",
    image: "/Axim/2.png",
  },
  {
    title: "AI-Powered Suggestions",
    description:
      "Leverage machine learning to auto-suggest solutions, categorize tickets, and reduce resolution times.",
    image: "/Axim/3.png",
  },
  {
    title: "Customizable Dashboards",
    description:
      "Track ticket metrics, team performance, and customer satisfaction in real-time with drag-and-drop widgets.",
    image: "/Axim/4.png",
  },
  {
    title: "Collaborative Ticketing",
    description:
      "Enable internal notes, tag teammates, and share updates seamlessly to resolve complex issues faster.",
    image: "/Axim/5.png",
  },
  //   {
  //     title: "Multi-Channel Support",
  //     description:
  //       "Deliver consistent support experiences across email, chat, social media, and more—within a single platform.",
  //     image: "/nxdesk/multi-channel.png",
  //   },
  //   {
  //     title: "Customer Portal",
  //     description:
  //       "Empower customers to track tickets, find answers through a self-service knowledge base, and raise requests easily.",
  //     image: "/nxdesk/customer-portal.png",
  //   },
];

const menuItems = [
  "Overview",
  "Features",
  "Insights",
  "Benefits",
  "Find Your Answers",
  "Other Products",

];

function NxDesk() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section - Responsive */}
      <div className="w-full flex justify-center lg:px-8">
        <div className="max-w-[1400px] w-full">
          <TwoColumnLayout
            left={
              <LeftSection
                title="NxDesk"
                description="NxDesk is a smart ticketing system designed to streamline issue tracking across teams and projects. It supports SLA monitoring, multi-role access, real-time updates, and a built-in knowledge base. Future-ready with AI features like auto-assignment and voice/video-based ticket creation."
              >
                <Requesademobtn text="Request a Demo" />
              </LeftSection>
            }
            right={
              <RightSection>
                <img
                  src="/Axim.png"
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
              What is NxDesk?
            </h1>
            <p className="mt-8 sm:mt-12 text-lg sm:text-xl md:text-2xl w-full lg:w-3/4 text-gray-500">
              NxDesk is a smart, scalable issue tracking system built to
              simplify ticket management across departments and teams. It
              enables SLA tracking, project-based ticket categorization,
              real-time updates, and multi-role access. The built-in knowledge
              base and AI-powered tools ensure quick resolutions and intelligent
              support workflows.
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
                Ticket Management, SLA Tracking, Multi-Role Access, Project &
                Category Grouping, Knowledge Base, Advanced Search, Real-Time
                Notifications, AI Assistance
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
                Streamline your support operations with the intelligent NxDesk
                ticketing solution. Gain complete control, visibility, and
                efficiency in handling tickets, workflows, and customer
                communication.
              </h1>
              <Link to={"/contactus"} className="p-4 lg:p-10 w-full lg:w-auto flex justify-center lg:justify-end">
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
              NxDesk brings streamlined issue tracking, SLA compliance,
              efficient team collaboration, AI-powered automation, and
              centralized knowledge—all in one unified solution.
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
                  <Requesademobtn text="Book a demo" />
                </Link>
              </div>

              {/* Paragraph */}
              <p className="mt-6 text-base sm:text-lg lg:text-xl w-full lg:w-3/4 text-white leading-relaxed">
           Manage customer queries, internal requests, and IT tickets with ease using NxDesk. Automate workflows, gain real-time visibility, and deliver fast, consistent support—all from a single, unified platform.
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

export default NxDesk;
