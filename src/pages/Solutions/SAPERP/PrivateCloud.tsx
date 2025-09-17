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
import {Link} from "react-router-dom";
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
      "Modify core ERP processes, interfaces, and configurations to align perfectly with your unique business requirements.",
    image: "/privateCloud/customization.png",
  },
  {
    title: "Controlled Upgrades",
    description:
      "Manage upgrades on your schedule with minimized disruption and full control over deployment.",
    image: "/privateCloud/upgrades.png",
  },
  {
    title: "Enhanced Security & Compliance",
    description:
      "Ensure enterprise-grade security and meet regulatory requirements with dedicated infrastructure and advanced controls.",
    image: "/privateCloud/security.png",
  },
  {
    title: "Scalable Infrastructure",
    description:
      "Scale resources seamlessly to match business growth while maintaining high performance.",
    image: "/privateCloud/scalability.png",
  },
  {
    title: "Dedicated Landscape",
    description:
      "Benefit from an isolated, dedicated environment tailored exclusively to your enterprise.",
    image: "/privateCloud/landscape.png",
  },
];




const faqs = [
  {
    question: "What is SAP S/4HANA Private Cloud?",
    answer:
      "SAP S/4HANA Private Cloud combines the flexibility and customization of on-premise solutions with the scalability and agility of cloud computing, delivering tailored deployments, full control, and secure, scalable infrastructure within a managed environment.",
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
      "Create ERP setups tailored to your organizational workflows and approval processes for maximum efficiency.",
  },
  {
    icon: <Shield className="w-10 h-10 text-green-500" />,
    title: "Data Protection & Governance",
    description:
      "EnEnsure compliance with internal policies and regulatory mandates within a secure private cloud environment.",
  },
  {
    icon: <BarChart2 className="w-10 h-10 text-pink-500" />,
    title: "Autonomous Upgrades",
    description:
      "Control the timing and execution of upgrades to minimize downtime and thoroughly test before rollout.",
  },
  {
    icon: <Globe className="w-10 h-10 text-blue-500" />,
    title: "Global Custom Deployments",
    description:
      "Deploy SAP S/4HANA Private Cloud in regional data centers to maintain localization and compliance.",
  },
  {
    icon: <Rocket className="w-10 h-10 text-purple-500" />,
    title: "Agility with Custom Logic",
    description:
      "Implement tailored enhancements and integrate third-party applications without restrictions.",
  },
  {
    icon: <Users className="w-10 h-10 text-red-500" />,
    title: "Role-Based Experience",
    description:
      "Deliver a streamlined user experience with SAP Fiori and customizable dashboards based on user roles.",
  },
  {
    icon: <Database className="w-10 h-10 text-orange-500" />,
    title: "Integrated Data Models",
    description:
      "Seamlessly connect your private ERP with other enterprise platforms and tools for unified data management.",
  },
  {
    icon: <Star className="w-10 h-10 text-yellow-500" />,
    title: "Consistent Performance",
    description:
      "Maintain stable, enterprise-grade performance with dedicated infrastructure built for heavy workloads.",
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
  // "Resources",
];

const sapData = {
  heading: "What is SAP S/4HANA Private Cloud?",
  description:
    "SAP S/4HANA Private Cloud combines the best of on-premise customization with cloud agility, enabling tailored deployments, full control, and scalable infrastructure within a secure environment.",
  imageUrl: "/Solutions/private-cloud.png",
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
    { title: "SAP ERP S/4HANA", href: "/solutions/sap-s4hana" },
    { title: "SAP ERP Public Cloud", href: "/solutions/public-cloud" },
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
                title="Private Cloud Solutions"
                description="SAP Private Cloud delivers a dedicated, secure, and fully managed cloud environment tailored to your business needs. It combines the agility and scalability of cloud computing with enhanced control, compliance, and customization capabilities — ideal for enterprises requiring data sovereignty and stringent security."
              >
                <Link to="/contactus">
                <Requesademobtn text="Book a Consultation" />
                </Link>
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
                mainDescription="SAP S/4HANA Private Cloud delivers comprehensive managed services encompassing functional, technical, and cloud capabilities, tailored to your enterprise’s unique needs."
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
                percentage="25%"
                description="Reduction in operational costs within the first year through optimized processes and cloud efficiency."
              />
              <StatCardStable
                percentage="50%"
                description="Improvement in business performance within the initial 6 months of SAP S/4HANA Private Cloud implementation."
              />
              <StatCardStable
                percentage="100%"
                description="Productivity gain with seamless mobile integration and real-time access to critical business functions."
              />
            </div>

            {/* CTA Section - Responsive */}
            <div className="bg-black mt-8 sm:mt-10 w-full flex flex-col lg:flex-row items-center lg:items-start rounded-lg overflow-hidden">
              <h1 className="text-white text-xl sm:text-2xl md:text-[27px] p-4 lg:p-10 w-full lg:w-3/4 leading-relaxed">
                Streamline your business operations with the SAP S/4HANA Private Cloud. Gain complete control, real-time visibility, and simplified compliance and documentation processes across your enterprise.
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
                SAP S/4HANA Private Cloud offers advanced automation, real-time analytics, seamless integration, and comprehensive process management to drive efficiency and compliance.
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
              SAP S/4HANA Private Cloud enhances business management with real-time tracking, seamless SAP integration, and improved operational efficiency across all processes.
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
                Streamline your enterprise operations with SAP S/4HANA Private Cloud. Achieve complete control, real-time visibility, and simplified compliance and documentation across all functions.
              </p>
            </div>
          </section>

          {/* Resources Section */}
{/* 
          <InsightsSection insights={insightsData} /> */}
          

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

export default PrivateCloud ;
