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
            link:"/products/nxify"
    },
    {
        title: "Gate Check",
        description:
            "It digitizes maintenance, visitor management, compliance, and sustainability across multiple sites with actionable insights.",   link:"/products/gatecheck"
    },
 
];

const features = [
  {
    title: "Centralized Billing & Payments",
    description:
      "Automate maintenance billing, track dues, and enable residents to pay securely through multiple payment options.",
    image: "/big/billing-payments.png",
  },
  {
    title: "Smart Accounting",
    description:
      "Simplify society accounting with auto-reconciliations, ledgers, expense tracking, and financial reports.",
    image: "/big/accounting.png",
  },
  {
    title: "Complaint Management",
    description:
      "Allow residents to raise, track, and resolve issues easily with categorized tickets and real-time updates.",
    image: "/big/complaints.png",
  },
  {
    title: "Meeting Scheduler & Minutes",
    description:
      "Plan meetings, share agendas, record minutes, and notify members with built-in reminders and document sharing.",
    image: "/big/meetings.png",
  },
  {
    title: "Document Hub",
    description:
      "Store and share important documents like bylaws, invoices, and notices securely in one accessible place.",
    image: "/big/documents.png",
  },
  {
    title: "Resident Directory",
    description:
      "Maintain an up-to-date resident directory with flat-wise contact details and emergency information.",
    image: "/big/directory.png",
  },
  {
    title: "Polls & Notices",
    description:
      "Engage residents with instant polls, announcements, and community notices sent via app and email.",
    image: "/big/polls-notices.png",
  },
];


const faqs = [
  {
    question: "Is Big free to use?",
    answer: "Big App is offered under flexible pricing based on society size and requirements.",
  },
  {
    question: "Can I download bills and receipts?",
    answer: "Yes, but currently download functionality has issues and is under active development.",
  },
  {
    question: "How do I raise a complaint?",
    answer: "Navigate to the 'Raise Ticket' section in the app and submit your complaint.",
  },
  {
    question: "Are payment details secure?",
    answer: "Yes, we use secure gateways and data encryption to ensure all transactions are safe.",
  },
  {
    question: "Can multiple societies use Big ?",
    answer: "Yes, each society gets its own setup and administrative controls.",
  },
];

const tabs = [
  {
    icon: <Star className="w-10 h-10 text-yellow-500" />,
    title: "Maintenance Billing",
    description:
      "Generate, track, and download bills. Manage dues, payments, and summaries efficiently.",
  },
  {
    icon: <Globe className="w-10 h-10 text-blue-500" />,
    title: "Accounting & Vouchers",
    description:
      "Handle expenses, income, and voucher entries with transparency and ease.",
  },
  {
    icon: <Shield className="w-10 h-10 text-green-500" />,
    title: "Complaint & Ticket System",
    description:
      "Raise complaints, assign roles, and track resolutions from a centralized dashboard.",
  },
  {
    icon: <Rocket className="w-10 h-10 text-purple-500" />,
    title: "User & Role Management",
    description:
      "Manage multiple users with role-based permissions for secure access control.",
  },
  {
    icon: <BarChart2 className="w-10 h-10 text-pink-500" />,
    title: "Insights & Reports",
    description:
      "Access detailed reports like Income/Expense summaries and Receipt breakdowns.",
  },
  {
    icon: <Database className="w-10 h-10 text-orange-500" />,
    title: "Document Management",
    description:
      "Upload and manage essential documents for buildings, users, and notices.",
  },
  {
    icon: <Users className="w-10 h-10 text-red-500" />,
    title: "Daily Helpers & Staff",
    description:
      "Track staff attendance, manage details, and monitor daily helper activity.",
  },
  {
    icon: <Settings className="w-10 h-10 text-gray-500" />,
    title: "Event & Meeting Tracking",
    description:
      "Organize events and meetings with status, suggestions, and participation tracking.",
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

function Big() {
    return (
        <div className="min-h-screen">
            <Navigation />

            {/* Hero Section - Responsive */}
            <div className="w-full flex justify-center lg:px-8">
                <div className="max-w-[1400px] w-full">
                    <TwoColumnLayout
                        left={
                            <LeftSection
                                title="BIG - I am Building Guardian"
                                description="Simplify society operations with Big . From billing and accounting to complaints, meetings, and documents — everything in one place."
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
                            Why BIG?
                        </h1>
                        <p className="mt-8 sm:mt-12 text-lg sm:text-xl md:text-2xl w-full lg:w-3/4 text-gray-500">
                            Big is a society management platform built for residential communities. It streamlines billing, accounting, maintenance tracking, complaints, and more — all in one digital ecosystem that improves transparency, efficiency, and communication between residents and management.

                        </p>
                    </section>

                    {/* Features Section */}
                    <section id="features" className="mt-12 sm:mt-16 scroll-mt-24">
                        <div className="flex justify-center">
                            <div className="flex flex-col sm:flex-row gap-6 max-w-7xl w-full justify-center">
          <FeatureCard title="Centralized Billing" description="Handle dues, payments, and receipts in one place." />
                <FeatureCard title="Real-time Tracking" description="Keep tabs on reports, events, complaints, and attendance instantly." />
                <FeatureCard title="Role-Based Access" description="Secure society access based on roles like Admin, Resident, and Staff." />      </div>
                        </div>
                    </section>

                    {/* Key Features Section */}
                    <section id="key-features" className="mt-16 sm:mt-20 scroll-mt-24">
                        <div className="w-full lg:w-3/4">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                                Key features
                            </h2>
                            <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-500">
                                 Big simplifies everyday operations with its powerful tools — from billing and tickets to meetings, staff, and reports.



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
                                Streamline your society operations with BIG — an all-in-one platform for billing, accounting, complaints, meetings, and document management. Achieve complete control, transparency, and convenience in community living.
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
                               From boosting transparency to automating routine tasks, Big helps your community run better every day.
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
                                    Simplifying Community & Society Operations
                                </h1>
                                <Link to={"/contactus"} className="flex-shrink-0">
                                    <Requesademobtn text="Book a demo" />
                                </Link>
                            </div>

                            {/* Paragraph */}
                            <p className="mt-6 text-base sm:text-lg lg:text-xl w-full lg:w-3/4 text-white leading-relaxed">
                                  Streamline your HR and payroll operations with Nxify — an all-in-one platform for employee financials, IT declarations, attendance, and compliance. Achieve complete control, transparency, and efficiency in workforce management.
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
                  title: "User Guide",
                  description: "Step-by-step instructions to use each module of Big.",
                  image: "/images/user-guide.jpg",
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

export default Big;
