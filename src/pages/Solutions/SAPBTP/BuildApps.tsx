import React from "react";
import Navigation from "@/components/Navigation";
import TwoColumnLayout from "@/components/TwoColumnLayout";
import LeftSection from "@/components/LeftSection";
import RightSection from "@/components/RightSection";
import Requesademobtn from "@/components/Requesademobtn";
import SidebarMenu from "@/components/SidebarMenu";
import {Link} from "react-router-dom";
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
  BarChart2,
  Globe,
  Rocket,
  Star,
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
    question: "What is BUILD APPS?",
    answer:
      "BUILD APPS is a low-code platform for creating enterprise applications quickly, with minimal coding knowledge required.",
  },
  {
    question: "Who can use BUILD APPS?",
    answer:
      "Both technical and non-technical users can build applications, making it ideal for cross-functional teams.",
  },
  {
    question: "Does BUILD APPS support integrations?",
    answer:
      "Yes, it supports integrations with ERP, CRM, databases, and REST APIs.",
  },
  {
    question: "Can I deploy apps on mobile devices?",
    answer:
      "Yes. Applications can be deployed to web, Android, and iOS platforms from the same build.",
  },
  {
    question: "Is my data secure on BUILD APPS?",
    answer:
      "Absolutely. The platform uses enterprise-grade encryption and authentication protocols.",
  },
];
const tabs = [
  {
    icon: <Star className="w-10 h-10 text-yellow-500" />,
    title: "Faster Time-to-Market",
    description:
      "Launch applications in days instead of months using prebuilt templates and automation tools.",
  },
  {
    icon: <Globe className="w-10 h-10 text-blue-500" />,
    title: "Global Accessibility",
    description:
      "Access and manage applications from anywhere with cloud hosting.",
  },
  {
    icon: <Shield className="w-10 h-10 text-green-500" />,
    title: "Enterprise-Grade Security",
    description:
      "Ensure application security with built-in authentication and encryption.",
  },
  {
    icon: <Rocket className="w-10 h-10 text-purple-500" />,
    title: "Scalability",
    description:
      "Scale applications to meet growing user demands without rewriting code.",
  },
  {
    icon: <BarChart2 className="w-10 h-10 text-pink-500" />,
    title: "Data Insights",
    description:
      "Integrate analytics for informed decision-making directly within apps.",
  },
  {
    icon: <Database className="w-10 h-10 text-orange-500" />,
    title: "Centralized Data",
    description:
      "Unify business data from multiple sources for better governance.",
  },
  {
    icon: <Users className="w-10 h-10 text-red-500" />,
    title: "Collaborative Development",
    description:
      "Allow cross-functional teams to contribute in real-time.",
  },
  {
    icon: <Settings className="w-10 h-10 text-gray-500" />,
    title: "Customizable Workflows",
    description:
      "Adapt application logic to suit specific business processes.",
  },
];
const features = [
  {
    title: "Low-Code Development",
    description:
      "Enables rapid application creation with minimal coding, empowering business users and developers to build apps efficiently.",
    image: "/buildapps/lowcode.png",
  },
  {
    title: "Multi-Platform Deployment",
    description:
      "Deploy applications across web, mobile, and desktop environments from a single development platform.",
    image: "/buildapps/multiplatform.png",
  },
  {
    title: "Seamless Integrations",
    description:
      "Connects easily with SAP and third-party systems, ensuring consistent data flow and interoperability.",
    image: "/buildapps/integration.png",
  },
  {
    title: "Reusable Components",
    description:
      "Reusable components enable developers to build modular, consistent, and maintainable applications by reusing pre-built elements across projects",
    image: "/buildapps/reusable.png",
  },
  {
    title: "Real-Time Collaboration",
    description:
      "Allows teams to co-develop, test, and iterate applications simultaneously, improving productivity and innovation.",
    image: "/buildapps/collaboration.png",
  },
];
const sampleSolutions = [
  {
    title: "Custom Business Applications",
    heading: "BUILD APPS for Enterprise Solutions",
    description:
      "Design and launch tailor-made applications that align with your unique business processes.",
    points: [
      "Drag-and-drop UI builder",
      "Custom workflows and automation",
      "Integration with ERP/CRM systems",
      "Role-based access control",
    ],
  },
  {
    title: "Mobile-First Solutions",
    heading: "BUILD APPS for Mobile",
    description:
      "Create mobile-ready applications that work seamlessly across devices.",
    points: [
      "Responsive design templates",
      "Offline access capabilities",
      "Push notifications",
      "Device feature integration",
    ],
  },
  {
    title: "Workflow Automation",
    heading: "BUILD APPS for Process Optimization",
    description:
      "Automate repetitive processes to improve efficiency and reduce human error.",
    points: [
      "Visual workflow designer",
      "Task assignment automation",
      "Real-time process tracking",
      "Approval workflows",
    ],
  },
  {
    title: "Data-Driven Applications",
    heading: "BUILD APPS for Analytics",
    description:
      "Build applications with integrated analytics to make informed decisions.",
    points: [
      "Embedded dashboards",
      "Real-time reporting",
      "Data visualization tools",
      "Predictive insights",
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
  heading: "What is BUILD APPS?",
  description:
    "BUILD APPS is a low-code application development platform that enables you to create, customize, and deploy enterprise-grade applications quickly—without extensive coding expertise.",
  imageUrl: "/Solutions/buildapps.webp",
  imageAlt: "App development visualization",
  items: [
    {
      title: "Cloud-Based",
      highlight: "BUILD APPS Cloud",
      description:
        "Develop, test, and deploy applications directly in the cloud with seamless collaboration and scalability.",
    },
    {
      title: "On-Premise",
      highlight: "BUILD APPS On-Premise",
      description:
        "Host your application development environment internally for maximum control and compliance.",
    },
    {
      title: "Hybrid Deployment",
      description:
        "Combine cloud flexibility with on-premise security to balance scalability and compliance.",
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
  heading: "Explore Private Cloud Opportunities",
  description:
    "Private Cloud is essential for businesses seeking maximum control, security, and compliance. It ensures data sovereignty and tailored infrastructure for mission-critical applications.",
  ctaText: "Talk to an Expert",
  ctaLink: "/contactus",
  solutions: [
    { title: "SAP BTP CPI", href: "/solutions/cpi" },
    { title: "SAP Success Factors", href: "/solutions/successfactors" },
  ],
};

const insightsData = [
  {
    title: "Private Cloud for Regulated Industries",
    imageUrl: "/images/private-cloud-health.jpg",
    imageAlt: "Private Cloud in Healthcare",
    gradientFrom: "from-green-600",
    gradientTo: "to-green-800",
  },
  {
    title: "Hybrid Cloud Strategies",
    imageUrl: "/images/hybrid-cloud.jpg",
    imageAlt: "Hybrid Cloud",
    gradientFrom: "from-teal-600",
    gradientTo: "to-cyan-700",
  },
  {
    title: "Data Sovereignty in Private Cloud",
    imageUrl: "/images/private-cloud-security.jpg",
    imageAlt: "Secure Private Cloud",
    gradientFrom: "from-purple-600",
    gradientTo: "to-indigo-700",
  },
];

function BuildApps() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section - Responsive */}
      <div className="w-full flex justify-center lg:px-8">
        <div className="max-w-[1400px] w-full">
          <TwoColumnLayout
            left={
              <LeftSection
                title="SAP Build Apps"
                description="Rapidly create and deploy enterprise applications with SAP Build Apps — a low-code development platform that empowers businesses to innovate faster, streamline processes, and deliver user-friendly applications across devices and environments."
              >
                <Link to="/contactus">
                <Requesademobtn text="Book a Consultation" />
                </Link>
              </LeftSection>
            }
            right={
              <RightSection>
                <img
                  src="/Solutions/buildapps.png"
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
                mainDescription="SAP Build Apps enables low-code application development, multi-platform deployment, and seamless integrations with existing systems."
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
                percentage="55%"
                description="Real-time collaboration and low-code tools improve team productivity"
              />
              <StatCardStable
                percentage="60%"
                description="Accelerate deployment cycles"
              />
              <StatCardStable
                percentage="70%"
                description="Build Apps can reduce development time"
              />
            </div>

            {/* CTA Section - Responsive */}
            <div className="bg-black mt-8 sm:mt-10 w-full flex flex-col lg:flex-row items-center lg:items-start rounded-lg overflow-hidden">
              <h1 className="text-white text-xl sm:text-2xl md:text-[27px] p-4 lg:p-10 w-full lg:w-3/4 leading-relaxed">
                Transform your application development with SAP Build Apps, gaining low-code tools, real-time collaboration, and seamless integrations to deliver scalable, user-friendly applications faster than ever.
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
                SAP Build Apps offers low-code development, multi-platform deployment, and seamless integrations for rapid, efficient app creation. 
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
              SAP Build Apps accelerates development cycles, reduces costs, and improves team productivity with low-code tools and real-time collaboration.
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
                Transform your application development with SAP Build Apps, gaining low-code tools, real-time collaboration, and seamless integrations to deliver scalable, user-friendly applications faster than ever.
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

export default BuildApps ;
