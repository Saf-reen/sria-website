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
      title: "Auto Extract",
      description:
        "AI-powered platform that automates data extraction from documents, invoices, receipts, and forms with accuracy and speed.",
      link: "/products/autoextract",
    },
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
            link:"/products/nxify"
    },
    {
       title: "BIG",
        description:
            "From billing and accounting to complaints, meetings, and documents — everything in one place.",   link:"/products/big"
    },
 
];

const features = [
  {
    title: "IoT-Enabled Monitoring",
    description:
      "Get real-time visibility into facility conditions with smart sensors for temperature, energy, water, and more.",
    image: "/gatecheck/IoT-Enabled Monitoring.png",
  },
  {
    title: "Predictive Maintenance",
    description:
      "Reduce downtime with automated alerts, maintenance schedules, and asset health insights powered by IoT data.",
    image: "/gatecheck/Predictive Maintenance.png",
  },
  {
    title: "Compliance & Audits",
    description:
      "Digitize checklists, inspections, and audit trails to ensure regulatory compliance and safety standards.",
    image: "/gatecheck/Compliance & Audits.png",
  },
  {
    title: "Incident Reporting",
    description:
      "Log, track, and resolve incidents efficiently with mobile-first reporting and automated escalation workflows.",
    image: "/gatecheck/Incident Reporting.png",
  },
  {
    title: "Asset & Inventory Tracking",
    description:
      "Monitor critical assets and consumables in real-time to avoid shortages, overstocking, or misuse.",
    image: "/gatecheck/Asset & Inventory Tracking.png",
  },
  {
    title: "Role-Based Dashboards",
    description:
      "Empower teams with custom dashboards for admins, supervisors, and operators—tailored to their responsibilities.",
    image: "/gatecheck/Role-Based Dashboards.png",
  },
  {
    title: "Cloud-Based Access",
    description:
      "Access data and reports from anywhere with a secure, scalable, and mobile-friendly cloud platform.",
    image: "/gatecheck/Cloud-Based Access.png",
  },
];


const faqs = [
  {
    question: "Is hardware mandatory?",
    answer: "No, gatecheck supports both IoT-based and manual operations.",
  },
  {
    question: "Can I integrate it with my BMS or ERP?",
    answer: "Yes, it supports API integrations for seamless connectivity.",
  },
  {
    question: "Is there a mobile app?",
    answer: "Yes, available for both Android and iOS with offline sync options.",
  },
  {
    question: "Does it support multi-location access?",
    answer: "Yes, the system is designed for multi-campus or multi-building setups.",
  },
  {
    question: "What are the support hours?",
    answer: "Support is typically available 9AM–6PM IST, Monday to Saturday.",
  },
];
const tabs = [
  {
    icon: <Star className="w-10 h-10 text-yellow-500" />,
    title: "DigilogCheck",
    description:
      "QR/NFC-based maintenance & housekeeping logs with geofencing and alerts.",
  },
  {
    icon: <Globe className="w-10 h-10 text-blue-500" />,
    title: "Visitor/VendorCheck",
    description:
      "Contactless visitor management with OTP/QR validation and e-passes.",
  },
  {
    icon: <Shield className="w-10 h-10 text-green-500" />,
    title: "ComplianceCheck",
    description:
      "Green, fire safety, and EHS compliance readiness & reporting tools.",
  },
  {
    icon: <Rocket className="w-10 h-10 text-purple-500" />,
    title: "SustainabilityCheck",
    description:
      "Live dashboards to track energy usage, water, waste, and emissions.",
  },
  {
    icon: <BarChart2 className="w-10 h-10 text-pink-500" />,
    title: "Helpdesk",
    description:
      "Digital ticketing and issue resolution system with role-wise tracking.",
  },
  {
    icon: <Database className="w-10 h-10 text-orange-500" />,
    title: "InventoryCheck",
    description:
      "Consumable tracking and usage analytics with reorder alerts.",
  },
  {
    icon: <Users className="w-10 h-10 text-red-500" />,
    title: "AI Fault Analytics",
    description:
      "Machine learning to predict failures and detect maintenance anomalies.",
  },
  {
    icon: <Settings className="w-10 h-10 text-gray-500" />,
    title: "Mobile App Access",
    description:
      "Mobile-based real-time tasks, alerts, and dashboards per role.",
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

function GateCheck() {
    return (
        <div className="min-h-screen">
            <Navigation />

            {/* Hero Section - Responsive */}
            <div className="w-full flex justify-center lg:px-8">
                <div className="max-w-[1400px] w-full">
                    <TwoColumnLayout
                        left={
                            <LeftSection
                                title="GateCheck- Platform"
                                description="Digitize your facility operations with gatecheck—an IoT-based cloud platform for maintenance, compliance, and smart monitoring."
                            >
                                <Requesademobtn text="Request a Demo" />
                            </LeftSection>
                        }
                        right={
                            <RightSection>
                                <img
                                    src="/gatecheck/GATE CHECK.png"
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
                            What is GateCheck?
                        </h1>
                        <p className="mt-8 sm:mt-12 text-lg sm:text-xl md:text-2xl w-full lg:w-3/4 text-gray-500">
                               GateCheck is a unified smart facility platform integrating IoT,
              cloud, and mobility. It digitizes maintenance, visitor
              management, compliance, and sustainability across multiple sites
              with actionable insights.


                        </p>
                    </section>

                    {/* Features Section */}
                    <section id="features" className="mt-12 sm:mt-16 scroll-mt-24">
                        <div className="flex justify-center">
                            <div className="flex flex-col sm:flex-row gap-6 max-w-7xl w-full justify-center">
          <FeatureCard
                  title="Digital Logs"
                  description="QR/NFC-based logging of facility operations and real-time geofencing."
                />
                <FeatureCard
                  title="AI-Driven Analytics"
                  description="Predictive maintenance insights and real-time risk detection."
                />
                <FeatureCard
                  title="Mobile Dashboards"
                  description="Access dashboards and alerts from anywhere on any device."
                />   </div>
                        </div>
                    </section>

                    {/* Key Features Section */}
                    <section id="key-features" className="mt-16 sm:mt-20 scroll-mt-24">
                        <div className="w-full lg:w-3/4">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                                Key features
                            </h2>
                            <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-500">
                             Discover a suite of features built to digitize operations from
              visitor entry to sustainability metrics.


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
                               Streamline your facility operations with GateCheck — an IoT-powered platform for smart maintenance, compliance checks, and real-time infrastructure monitoring. Achieve complete control, visibility, and operational efficiency.
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
                      Transform facility management with automation, visibility, and compliance.
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
                                   Digitizing Facility Operations with Smart Monitoring
                                </h1>
                                <Link to={"/contactus"} className="flex-shrink-0">
                                    <Requesademobtn text="Request a Demo" />
                                </Link>
                            </div>

                            {/* Paragraph */}
                            <p className="mt-6 text-base sm:text-lg lg:text-xl w-full lg:w-3/4 text-white leading-relaxed">
                         Streamline your facility operations with GateCheck — an IoT-powered cloud platform for predictive maintenance, compliance tracking, and real-time asset monitoring. Achieve full visibility, automation, and control across your infrastructure.
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
                  title: "Smart Facility Guide",
                  description:
                    "A comprehensive guide to digital transformation in facility management.",
                  image: "/images/facility-guide.jpg",
                  link:"/"
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

export default GateCheck;
