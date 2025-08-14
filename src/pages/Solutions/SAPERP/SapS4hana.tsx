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
import {Link} from "react-router-dom";
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

const productData = [
  {
    title: "Field Service Management",
    description:
      "Efficiently manage remote teams, assets, and processes to enhance service delivery.",
  },
  {
    title: "Real Estate Management",
    description:
      "Automate property management tasks, including rent collection and maintenance.",
  },
  {
    title: "Intelligent Character Recognition",
    description:
      "Transforming document processing to achieve greater automation and efficiency.",
  },
  {
    title: "Digital Logistics",
    description:
      "Modernize logistics operations for more efficient and reliable deliveries.",
  },
];
const features = [
  {
    title: "Centralized Financial Management",
    description:
      "Gain real-time insights into financial performance, cash flow, and compliance with SAP S/4HANA’s unified finance platform, enabling faster decision-making and improved business outcomes.",
    image: "/S4HANA/finance.jpg",
  },
  {
    title: "Smart Procurement & Sourcing",
    description:
      "Streamline supplier collaboration, automate procurement workflows, and optimize purchasing strategies with SAP S/4HANA’s intelligent sourcing capabilities.",
    image: "/S4HANA/procurement.png",
  },
  {
    title: "Integrated Logistics & Supply Chain",
    description:
      "Enhance supply chain visibility, optimize warehouse operations, and streamline logistics with SAP S/4HANA’s real-time data integration and predictive insights.",
    image: "/S4HANA/logistics.png",
  },
  {
    title: "Predictive Analytics & Reporting",
    description:
      "Leverage embedded analytics and predictive intelligence in SAP S/4HANA to make proactive, data-driven business decisions and identify opportunities ahead of time.",
    image: "/S4HANA/analytics.png",
  },
  {
    title: "Simplified User Experience",
    description:
      "Empower users with an intuitive, role-based interface through SAP Fiori in SAP S/4HANA, offering mobile-ready dashboards and personalized workflows for enhanced productivity.",
    image: "/S4HANA/fiori.png",
  },
];

const faqs = [
  {
    question: "What is SAP S/4HANA and how does it differ from SAP ECC?",
    answer:
      "SAP S/4HANA is SAP’s next-gen ERP that runs on the in-memory HANA database, enabling real-time analytics, simplified data models, and enhanced user experience compared to SAP ECC.",
  },
  {
    question: "What deployment options are available for SAP S/4HANA?",
    answer:
      "SAP S/4HANA can be deployed on-premise, in a private cloud, or as a public cloud solution, offering flexibility based on your business needs.",
  },
  {
    question: "How can SAP S/4HANA improve business processes?",
    answer:
      "It streamlines processes across finance, supply chain, manufacturing, and more by enabling automation, real-time reporting, and integrated workflows.",
  },
  {
    question: "Is SAP S/4HANA suitable for small and medium enterprises?",
    answer:
      "Yes. With public cloud options and rapid deployment methodologies, SAP S/4HANA is scalable and fits SMEs as well as large enterprises.",
  },
  {
    question: "How long does it take to migrate to SAP S/4HANA?",
    answer:
      "Timelines vary based on complexity, but many organizations complete greenfield or brownfield migrations within 6 to 12 months.",
  },
];


const tabs = [
  {
    icon: <Star className="w-10 h-10 text-yellow-500" />,
    title: "Real-Time Analytics",
    description:
      "Get instant, actionable insights across all departments with built-in analytics powered by SAP HANA in SAP S/4HANA.",
  },
  {
    icon: <Globe className="w-10 h-10 text-blue-500" />,
    title: "Global Scalability",
    description:
      "Support multinational operations with localized compliance, multi-currency capabilities, and scalable architecture.",
  },
  {
    icon: <Shield className="w-10 h-10 text-green-500" />,
    title: "Advanced Security",
    description:
      "Protect enterprise data with integrated governance, risk management, and advanced access controls.",
  },
  {
    icon: <Rocket className="w-10 h-10 text-purple-500" />,
    title: "Faster Decision-Making",
    description:
      "Leverage predictive analytics, AI, and machine learning to make intelligent, proactive decisions.",
  },
  {
    icon: <BarChart2 className="w-10 h-10 text-pink-500" />,
    title: "Streamlined Processes",
    description:
      "Automate workflows across finance, procurement, manufacturing, and supply chain with simplified data models.",
  },
  {
    icon: <Database className="w-10 h-10 text-orange-500" />,
    title: "Unified Data Platform",
    description:
      "Consolidate data from multiple sources into a single, trusted source of truth.",
  },
  {
    icon: <Users className="w-10 h-10 text-red-500" />,
    title: "Improved User Experience",
    description:
      "Enhance productivity with SAP Fiori’s responsive, intuitive, and role-based interface.",
  },
  {
    icon: <Settings className="w-10 h-10 text-gray-500" />,
    title: "Flexible Deployment",
    description:
      "Deploy SAP S/4HANA on-premise, in a private cloud, or in a public cloud—tailored to your business needs",
  },
];


const sampleSolutions = [
  {
    title: "End-to-End Financial Management",
    heading: "SAP S/4HANA for Finance",
    description:
      "Transform financial operations with real-time accounting, reporting, and predictive insights.",
    points: [
      "Automated financial close",
      "Real-time cash flow visibility",
      "Regulatory compliance",
      "Advanced financial analytics",
    ],
  },
  {
    title: "Smart Manufacturing",
    heading: "SAP S/4HANA for Manufacturing",
    description:
      "Streamline production planning, asset management, and shop floor control.",
    points: [
      "Production monitoring",
      "Digital twins and IoT",
      "Predictive maintenance",
      "Seamless inventory control",
    ],
  },
  {
    title: "Efficient Supply Chain",
    heading: "SAP S/4HANA for Supply Chain",
    description:
      "Enhance logistics, order fulfillment, and demand forecasting with real-time capabilities.",
    points: [
      "Automated warehouse operations",
      "Smart sourcing",
      "Advanced planning tools",
      "Improved order accuracy",
    ],
  },
  {
    title: "Procurement Transformation",
    heading: "SAP S/4HANA for Procurement",
    description:
      "Digitalize procurement cycles for better supplier collaboration and cost control.",
    points: [
      "Vendor performance tracking",
      "Contract management",
      "Catalog buying",
      "Invoice automation",
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
  heading: "What is SAP S/4HANA?",
  description:
    "SAP S/4HANA is a next-generation ERP suite offering real-time analytics, streamlined workflows, and enhanced user experience for optimized business processes.",
  imageUrl: "/Solutions/s4hana.png",
  imageAlt: "Digital technology visualization",
  items: [
    {
      title: "Public Cloud",
      highlight: "SAP S/4HANA Public Cloud",
      description:
        "offers SaaS, rapid implementation, scalability, and standardized processes with minimal customization.",
    },
    {
      title: "Private Cloud",
      highlight: "SAP S/4HANA Private Cloud",
      description:
        "offers customization with cloud benefits like reduced infrastructure management.",
    },
    {
      title: "On-Premise",
      description:
        "SAP S/4HANA on-premise enables maximum control, customization, suitable for strict regulatory needs.",
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
  heading: "Explore SAP S/4HANA Use Cases",
  description:
    "Discover industry-specific applications and real-world business value with SAP S/4HANA, enabling organizations to innovate, optimize operations, and drive growth.",
  ctaText: "Talk to an expert",
  ctaLink: "/contact",
  solutions: [
    { title: "SAP ERP Public Cloud", href: "/solutions/public-cloud" },
    { title: "SAP ERP Private Cloud", href: "/solutions/private-cloud" },
  ],
};


const insightsData = [
  {
    title: "SAP S/4HANA Migration for Consumer Products",
    imageUrl: "/images/sap-consumer.jpg",
    imageAlt: "Consumer Products",
    gradientFrom: "from-blue-600",
    gradientTo: "to-blue-800",
  },
  {
    title: "SAP S/4HANA Migration for EC&O",
    imageUrl: "/images/sap-eco.jpg",
    imageAlt: "EC&O Industry",
    gradientFrom: "from-teal-600",
    gradientTo: "to-cyan-700",
  },
  {
    title: "Digital Transformation in Manufacturing",
    imageUrl: "/images/digital-mfg.jpg",
    imageAlt: "Digital Manufacturing",
    gradientFrom: "from-purple-600",
    gradientTo: "to-indigo-700",
  },
];

function SapS4hana() {
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
                <Link to="/contactus">
                <Requesademobtn text="Book a Consultation" />
                </Link>
              </LeftSection>
            }
            right={
              <RightSection>
                <img
                  src="/Solutions/s4hana.png"
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
                mainDescription="SAP S/4HANA provides an intelligent, integrated ERP suite that delivers real-time data processing, simplified business operations, and advanced analytics capabilities to drive digital transformation."
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
                description="Reduction in operational costs through streamlined processes and real-time decision-making within the first year."
              />
              <StatCardStable
                percentage="50%"
                description="Improvement in process efficiency within the initial 6 months of SAP S/4HANA implementation."
              />
              <StatCardStable
                percentage="100%"
                description="Productivity boost with seamless mobile integration and anytime, anywhere access to business operations."
              />
            </div>

            {/* CTA Section - Responsive */}
            <div className="bg-black mt-8 sm:mt-10 w-full flex flex-col lg:flex-row items-center lg:items-start rounded-lg overflow-hidden">
              <h1 className="text-white text-xl sm:text-2xl md:text-[27px] p-4 lg:p-10 w-full lg:w-3/4 leading-relaxed">
                Streamline your business operations with the SAP S/4HANA intelligent ERP suite. Gain complete control, real-time visibility, and simplified compliance and documentation processes across all departments.
              </h1>
              <div className="p-4 lg:p-10 w-full lg:w-auto flex justify-center lg:justify-end">
                <Link to="/contactus">
                <Requesademobtn text="Book a demo" />
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
                SAP S/4HANA offers intelligent automation, real-time analytics, seamless integration across business units, and advanced process optimization for enhanced efficiency.
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
              SAP S/4HANA enhances enterprise management with real-time tracking, seamless SAP integration across processes, and improved operational efficiency.
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
                <Requesademobtn text="Book a demo" />
                </Link>
                </div>
              </div>

              {/* Paragraph */}
              <p className="mt-6 text-base sm:text-lg lg:text-xl w-full lg:w-3/4 text-white leading-relaxed">
                Streamline your enterprise operations with SAP S/4HANA’s intelligent suite. Achieve complete control, real-time visibility, and simplified compliance and documentation processes across all departments.
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
                  title: "Trade Guide",
                  description:
                    "Comprehensive guide to international trade practices.",
                  image: "/images/trade-guide.jpg",
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

export default SapS4hana;
