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
  Star,
  BarChart2,
  Globe,
  Rocket,
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


const features = [
  {
    title: "Flexible Customization",
    description:
      "Modify core ERP processes, interfaces, and configurations to match unique business needs.",
    image: "/privateCloud/customization.png",
  },
  {
    title: "Controlled Upgrades",
    description:
      "Manage upgrade cycles and testing schedules independently to reduce disruption.",
    image: "/privateCloud/upgrades.png",
  },
  {
    title: "Enhanced Security & Compliance",
    description:
      "Meet industry-specific security and compliance requirements in a private environment.",
    image: "/privateCloud/security.png",
  },
  {
    title: "Scalable Infrastructure",
    description:
      "Adapt computing resources dynamically as your operations expand or contract.",
    image: "/privateCloud/scalability.png",
  },
  {
    title: "Dedicated Landscape",
    description:
      "Deploy on a dedicated infrastructure for complete isolation and performance assurance.",
    image: "/privateCloud/landscape.png",
  },
];




const faqs = [
  {
    question: "What is SAP S/4HANA Private Cloud?",
    answer:
      "It is a deployment model offering the benefits of cloud infrastructure with the flexibility of on-premise ERP customization.",
  },
  {
    question: "How is Private Cloud different from Public Cloud or On-Premise?",
    answer:
      "Private Cloud provides customization and dedicated infrastructure, unlike public cloud which is standardized, and unlike on-premise which requires full hardware management.",
  },
  {
    question: "Can I migrate from SAP ECC to Private Cloud?",
    answer:
      "Yes, many businesses opt for brownfield or hybrid migration paths to move to SAP S/4HANA Private Cloud with minimal disruption.",
  },
  {
    question: "Is Private Cloud secure?",
    answer:
      "Yes. It includes enterprise-grade security, role-based access control, and compliance with major regulatory standards.",
  },
  {
    question: "Who should consider SAP S/4HANA Private Cloud?",
    answer:
      "Businesses that require customized ERP processes, greater control over upgrades, and industry-specific compliance should consider this model.",
  },
];

const tabs = [
  {
    icon: <Settings className="w-10 h-10 text-gray-500" />,
    title: "Flexible Configurations",
    description:
      "Create ERP setups aligned with your organizational workflows and approval chains.",
  },
  {
    icon: <Shield className="w-10 h-10 text-green-500" />,
    title: "Data Protection & Governance",
    description:
      "Ensure compliance with internal policies and regulatory mandates in a private cloud setting.",
  },
  {
    icon: <BarChart2 className="w-10 h-10 text-pink-500" />,
    title: "Autonomous Upgrades",
    description:
      "Control when and how upgrades are rolled out to minimize downtime and ensure testing.",
  },
  {
    icon: <Globe className="w-10 h-10 text-blue-500" />,
    title: "Global Custom Deployments",
    description:
      "Deploy in regional data centers while maintaining localization and compliance.",
  },
  {
    icon: <Rocket className="w-10 h-10 text-purple-500" />,
    title: "Agility with Custom Logic",
    description:
      "Deploy tailored enhancements and third-party integrations without constraints.",
  },
  {
    icon: <Users className="w-10 h-10 text-red-500" />,
    title: "Role-Based Experience",
    description:
      "Offer a streamlined UX based on user roles using SAP Fiori and custom dashboards.",
  },
  {
    icon: <Database className="w-10 h-10 text-orange-500" />,
    title: "Integrated Data Models",
    description:
      "Seamlessly connect your private ERP with other enterprise platforms and tools.",
  },
  {
    icon: <Star className="w-10 h-10 text-yellow-500" />,
    title: "Consistent Performance",
    description:
      "Achieve stable performance with infrastructure designed for enterprise-grade loads.",
  },
];



const sampleSolutions = [
  {
    title: "Tailored Financial Operations",
    heading: "SAP S/4HANA Private Cloud for Finance",
    description:
      "Achieve financial transparency with fully customized processes, real-time insights, and regulatory compliance.",
    points: [
      "Configurable chart of accounts",
      "Real-time data modeling",
      "Localized tax and regulatory support",
      "Advanced financial analytics",
    ],
  },
  {
    title: "Customized Manufacturing Models",
    heading: "SAP S/4HANA Private Cloud for Manufacturing",
    description:
      "Flexible production planning and execution to meet unique industry requirements.",
    points: [
      "Adaptable BOM & routing",
      "IoT integration with custom KPIs",
      "Shop-floor execution with real-time feedback",
      "Asset lifecycle control",
    ],
  },
  {
    title: "Agile Supply Chain",
    heading: "SAP S/4HANA Private Cloud for Supply Chain",
    description:
      "End-to-end visibility and customization across planning, sourcing, and logistics.",
    points: [
      "Tailored warehouse workflows",
      "Smart inventory strategies",
      "Custom transport modules",
      "Predictive demand planning",
    ],
  },
  {
    title: "Flexible Procurement",
    heading: "SAP S/4HANA Private Cloud for Procurement",
    description:
      "Design procurement strategies with enhanced vendor collaboration and custom approval flows.",
    points: [
      "Custom vendor scorecards",
      "Automated requisitioning rules",
      "Integrations with niche vendors",
      "Procure-to-pay automation",
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
  heading: "What is SAP S/4HANA Private Cloud?",
  description:
    "SAP S/4HANA Private Cloud combines the best of on-premise customization with cloud agility, enabling tailored deployments, full control, and scalable infrastructure within a secure environment.",
  imageUrl: "/Solutions/private-cloud.webp",
  imageAlt: "Private Cloud Infrastructure Illustration",
  items: [
    {
      title: "Private Cloud",
      highlight: "SAP S/4HANA Private Cloud",
      description:
        "offers customization with cloud benefits like scalability, lower infrastructure overhead, and controlled upgrades.",
    },
    {
      title: "On-Premise",
      description:
        "Best for businesses needing full control, deep customization, and dedicated hosting.",
    },
    {
      title: "Public Cloud",
      description:
        "Standardized SaaS deployment model with minimal customization and fast implementation cycles.",
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


function PrivateCloud() {
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
                  src="/Solutions/private.webp"
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

export default PrivateCloud ;
