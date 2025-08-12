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


const faqs = [
  {
    question: "What is SAP SuccessFactors?",
    answer:
      "SAP SuccessFactors is a cloud-based Human Experience Management (HXM) suite for core HR, talent, learning, and analytics."
  },
  {
    question: "How does SuccessFactors differ from on-premise HR systems?",
    answer:
      "It delivers HR capabilities as a SaaS solution—meaning quicker deployment, automatic updates, and built-in scalability."
  },
  {
    question: "Can SuccessFactors handle global payroll?",
    answer:
      "Yes. SuccessFactors supports multi-country payroll and local compliance across regions."
  },
  {
    question: "Is learning management (LMS) included?",
    answer:
      "Yes—SuccessFactors includes a robust LMS for course delivery, development paths, and certification tracking."
  },
  {
    question: "What's the timeline for implementation?",
    answer:
      "Implementation can vary by scope—but many core HR modules go live in 3–6 months, depending on complexity."
  }
];

const tabs = [
  {
    icon: <Users className="w-10 h-10 text-blue-500" />,
    title: "Global Core HR",
    description:
      "Centralize employee records, organizational structure, and payroll in a unified system."
  },
  {
    icon: <Star className="w-10 h-10 text-yellow-500" />,
    title: "Talent & Performance",
    description:
      "Drive performance reviews, goal alignment, and succession planning seamlessly."
  },
  {
    icon: <Globe className="w-10 h-10 text-green-500" />,
    title: "Learning & Development",
    description:
      "Deliver training and upskilling via a modern, scalable learning management system."
  },
  {
    icon: <BarChart2 className="w-10 h-10 text-pink-500" />,
    title: "People Analytics",
    description:
      "Gain insights into your workforce trends via real-time dashboards and predictive models."
  },
  {
    icon: <Shield className="w-10 h-10 text-red-500" />,
    title: "Compliance & Security",
    description:
      "Ensure global data privacy and HR governance with built-in compliance."
  },
  {
    icon: <Settings className="w-10 h-10 text-gray-500" />,
    title: "Cloud Scalability",
    description:
      "Leverage a scalable SaaS framework that grows with your organization."
  }
];

const features = [
  {
    title: "Unified HR Platform",
    description:
      "Manage core HR, payroll, talent and learning all in one integrated cloud platform.",
    image: "/SuccessFactors/platform.png"
  },
  {
    title: "Talent Lifecycle Coverage",
    description:
      "From recruiting to performance review to learning—supporting every stage in the talent journey.",
    image: "/SuccessFactors/talent-lifecycle.png"
  },
  {
    title: "Mobile-First Experience",
    description:
      "Engage employees and managers with intuitive mobile access to HR tasks and learning.",
    image: "/SuccessFactors/mobile-experience.png"
  },
  {
    title: "People Analytics",
    description:
      "Transform workforce data into actionable insights with real-time dashboards and predictive models.",
    image: "/SuccessFactors/analytics.png"
  },
  {
    title: "Compliance & Globalization",
    description:
      "Support global HR requirements with local compliance, data privacy, and multi-country payroll.",
    image: "/SuccessFactors/global-compliance.png"
  }
];

const sampleSolutions = [
  {
    title: "Core HR & Payroll",
    heading: "Employee Central",
    description:
      "Streamline core HR processes and payroll management with a unified, cloud-native system.",
    points: [
      "Central employee database",
      "Automated payroll processing",
      "Global compliance support",
      "Real-time HR reporting"
    ]
  },
  {
    title: "Talent Management",
    heading: "Recruiting, Onboarding & Performance",
    description:
      "Attract, onboard, and develop talent across the employee lifecycle.",
    points: [
      "Modern applicant tracking",
      "Seamless onboarding flows",
      "Goal-setting and performance reviews",
      "Learning & development integration"
    ]
  },
  {
    title: "Learning & Development",
    heading: "Learning Management System",
    description:
      "Empower your team with personalized learning paths and content delivery.",
    points: [
      "Self-paced learning",
      "Certification tracking",
      "Social learning features",
      "Mobile-first access"
    ]
  },
  {
    title: "Workforce Analytics",
    heading: "HR Analytics & Insights",
    description:
      "Leverage dashboards and predictive analytics to make data-driven talent decisions.",
    points: [
      "Pre-built HR dashboards",
      "Predictive attrition insights",
      "eNPS and engagement monitoring",
      "Talent gap analysis"
    ]
  }
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
  heading: "What is SAP SuccessFactors?",
  description:
    "SAP SuccessFactors is a cloud-based Human Experience Management (HXM) suite that helps organizations manage core HR, payroll, talent, and employee experience seamlessly.",
  imageUrl: "/Solutions/successfactors.webp",
  imageAlt: "HR cloud experience visualization",
  items: [
    {
      title: "Employee Central",
      highlight: "Core HR & Payroll",
      description:
        "Centralize employee records, organizational data, and payroll with cloud-native simplicity."
    },
    {
      title: "Talent Management",
      highlight: "Recruitment & Learning",
      description:
        "Drive recruitment, onboarding, performance reviews, and learning—all in one suite."
    },
    {
      title: "Workforce Analytics",
      description:
        "Gain workforce insights with dashboards, reporting, and predictive HR analytics."
    }
  ]
};

const customerStories = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
    title: "Transforming Workforce Experience with SuccessFactors",
    readMoreLink: "#",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
    title: "AI-Powered HR Operations for Global Enterprise",
    readMoreLink: "#",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop",
    title: "Driving Employee Engagement with SAP SuccessFactors",
    readMoreLink: "#",
  },
];

const insights = {
  heading: "Explore related HR solutions",
  description:
    "Learn more about how to elevate your HR strategy with AI-powered tools and workforce analytics.",
  ctaText: "Talk to an expert",
  ctaLink: "/contact",
  solutions: [
    { title: "SAP S/4HANA", href: "/solutions/s4hana" },
    { title: "SAP Analytics Cloud", href: "/solutions/analytics" },
  ],
};

const insightsData = [
  {
    title: "Future of Human Experience Management",
    imageUrl: "/images/successfactors-future.jpg",
    imageAlt: "HXM Future",
    gradientFrom: "from-blue-600",
    gradientTo: "to-blue-800",
  },
  {
    title: "AI in Talent Management",
    imageUrl: "/images/successfactors-ai.jpg",
    imageAlt: "AI in HR",
    gradientFrom: "from-teal-600",
    gradientTo: "to-cyan-700",
  },
  {
    title: "Building a Learning Culture",
    imageUrl: "/images/successfactors-learning.jpg",
    imageAlt: "Learning Development",
    gradientFrom: "from-purple-600",
    gradientTo: "to-indigo-700",
  },
];

function SuccessFactors() {
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
                  src="/Solutions/successfactors.webp"
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
          <FeatureTabs  features={features}/>
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
              heading="Explore Our Resources"
              paragraph="Helpful tools and insights for your export-import operations"
              products={[
              {
                  title: "SuccessFactors Implementation Guide",
                  description:
                    "Step-by-step strategies to onboard and optimize the HXM suite.",
                  image: "/images/successfactors-guide.jpg",
                  link:"/"
                },
                {
                  title: "Case Study: Workforce Transformation",
                  description:
                    "See how leading enterprises improved HR efficiency with SuccessFactors.",
                  image: "/images/successfactors-case-study.jpg",
                link:""
                },
              ]}
            />
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

export default SuccessFactors ;
