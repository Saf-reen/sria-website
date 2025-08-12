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
    question: "What types of apps can I build with SAP Build Apps?",
    answer: "You can build mobile, web, and internal business process apps without writing code.",
  },
  {
    question: "Is SAP Build Apps suitable for non-developers?",
    answer: "Yes, it's built for business users and developers to collaborate effectively.",
  },
  {
    question: "Does SAP Build Apps support backend integration?",
    answer: "Yes, it integrates with SAP and non-SAP systems using connectors and REST APIs.",
  },
];
const tabs = [
  {
    icon: <Shield className="w-10 h-10 text-green-600" />,
    title: "Enhanced Security",
    description: "Dedicated environment ensuring data confidentiality and safety.",
  },
  {
    icon: <Lock className="w-10 h-10 text-red-500" />,
    title: "Regulatory Compliance",
    description: "Meet strict standards like GDPR, HIPAA for sensitive data.",
  },
  {
    icon: <Settings className="w-10 h-10 text-gray-500" />,
    title: "Customizable Architecture",
    description: "Tailor infrastructure to match specific organizational needs.",
  },
  {
    icon: <Database className="w-10 h-10 text-orange-500" />,
    title: "Data Sovereignty",
    description: "Keep data within your jurisdiction for compliance and security.",
  },
  {
    icon: <Users className="w-10 h-10 text-blue-500" />,
    title: "Hybrid Cloud Integration",
    description: "Connect with public clouds for flexibility and scalability.",
  },
  {
    icon: <CheckCircle className="w-10 h-10 text-purple-500" />,
    title: "High Reliability",
    description: "Dedicated resources ensure consistent and predictable performance.",
  },
  {
    icon: <Server className="w-10 h-10 text-teal-500" />,
    title: "Dedicated Infrastructure",
    description: "Complete control over your own cloud hardware and software.",
  },
  {
    icon: <Cloud className="w-10 h-10 text-indigo-500" />,
    title: "Automation & Orchestration",
    description: "Streamline operations with advanced automation tools.",
  },
];

const sampleSolutions = [
{
                  title: "Private Cloud Overview",
                  heading: "What is Private Cloud?",
                  description:
                    "A dedicated cloud environment for a single organization ensuring security, performance, and compliance.",
                  points: [
                    "Ideal for sensitive data and critical workloads.",
                    "Provides full infrastructure control.",
                    "Supports hybrid cloud strategies.",
                  ],
                },
                 {
      title: "Enhanced Security & Compliance",
      heading: "Enterprise-Grade Security",
      description:
        "Advanced security measures and compliance frameworks tailored for your organization's specific requirements.",
      points: [
        "Multi-layered security architecture with encryption.",
        "Dedicated firewalls and intrusion detection systems.",
        "Compliance with industry standards (SOC 2, HIPAA, PCI-DSS).",
        "Regular security audits and vulnerability assessments.",
      ],
    },
    {
      title: "Scalable Infrastructure",
      heading: "Flexible Resource Management",
      description:
        "Dynamic scaling capabilities that adapt to your business needs while maintaining optimal performance.",
      points: [
        "Auto-scaling based on demand patterns.",
        "Resource allocation optimization.",
        "Load balancing for high availability.",
        "Performance monitoring and analytics.",
      ],
    },
    {
      title: "Data Governance & Control",
      heading: "Complete Data Sovereignty",
      description:
        "Maintain full control over your data location, access policies, and governance frameworks.",
      points: [
        "Data residency controls and geographic restrictions.",
        "Granular access management and role-based permissions.",
        "Automated backup and disaster recovery solutions.",
        "Data lifecycle management policies.",
      ],
    },
    {
      title: "Integration Capabilities",
      heading: "Seamless Connectivity",
      description:
        "Comprehensive integration options to connect with existing systems and third-party applications.",
      points: [
        "API-first architecture for easy integrations.",
        "Hybrid cloud connectivity options.",
        "Legacy system integration support.",
        "Real-time data synchronization.",
      ],
    },
    {
      title: "Performance Optimization",
      heading: "Superior Performance",
      description:
        "Dedicated resources and optimized infrastructure ensuring consistent high performance for critical applications.",
      points: [
        "Dedicated computing resources with no resource sharing.",
        "Low-latency network connections.",
        "SSD storage with high IOPS performance.",
        "24/7 performance monitoring and optimization.",
      ],
    },
                {
                  title: "Key Features",
                  heading: "Why Choose Private Cloud?",
                  description:
                    "Dedicated infrastructure, advanced security, customization, and hybrid integration.",
                  points: [
                    "Dedicated hardware and network resources.",
                    "Regulatory compliance support.",
                    "Full customization to meet business needs.",
                  ],
                },
  // Add more items as needed
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
  heading: "What is SAP BTP Build Apps?",
  description:
    "SAP Build Apps is a no-code/low-code platform within SAP BTP that enables users to rapidly build enterprise-ready applications without needing deep development expertise.",
  imageUrl: "/Solutions/BTP-BuildApps-Banner.png",
  imageAlt: "SAP BTP Build Apps Visual",
  items: [
    {
      title: "Visual Development",
      description: "Use drag-and-drop tools to build applications faster without writing code.",
    },
    {
      title: "Enterprise Integration",
      description: "Connect easily with SAP S/4HANA, SAP SuccessFactors, and 3rd-party APIs.",
    },
    {
      title: "Reusable Logic",
      description: "Reuse custom components and logic blocks across multiple applications.",
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
  heading: "Explore Private Cloud Opportunities",
  description:
    "Private Cloud is essential for businesses seeking maximum control, security, and compliance. It ensures data sovereignty and tailored infrastructure for mission-critical applications.",
  ctaText: "Talk to an Expert",
  ctaLink: "/contact",
  solutions: [
    { title: "Private Cloud Services", href: "/solutions/private-cloud" },
    { title: "Hybrid Cloud Solutions", href: "/solutions/hybrid-cloud" },
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
const features = [
  {
    title: "Centralized Financial Management",
    description:
      "Gain real-time insights into financial performance, cash flow, and reporting with a unified finance platform.",
    image: "/S4HANA/finance.png",
  },
  {
    title: "Smart Procurement & Sourcing",
    description:
      "Streamline supplier collaboration, automate procurement processes, and optimize purchasing strategies.",
    image: "/S4HANA/procurement.png",
  },
  {
    title: "Integrated Logistics & Supply Chain",
    description:
      "Enhance supply chain visibility, warehouse management, and logistics with live data integration.",
    image: "/S4HANA/logistics.png",
  },
  {
    title: "Predictive Analytics & Reporting",
    description:
      "Utilize embedded analytics and predictive intelligence to make proactive business decisions.",
    image: "/S4HANA/analytics.png",
  },
  {
    title: "Simplified User Experience",
    description:
      "Empower users with an intuitive, role-based interface through SAP Fiori and mobile-ready dashboards.",
    image: "/S4HANA/fiori.png",
  },
];

function BTP() {
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
                  src="/Solutions/cpi.jpg"
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

export default BTP;
