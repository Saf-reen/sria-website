import React from "react";
import FeatureCard from "@/components/FeatureCard";
import HighlightCard from "@/components/HighlightCard";
import ImageOverlay from "@/components/ImageOverlay";
import Navigation from "@/components/Navigation";
import Requesademobtn from "@/components/Requesademobtn";
import FAQSection from "@/components/FAQSection";
import FeatureTabs from "@/components/FeatureTabs";
import InfoTab from "@/components/InfoTab";
import ProductRange from "@/components/ProductRange";
import Resource from "@/components/Resource";
import SidebarMenu from "@/components/SidebarMenu";
import StatCard from "@/components/StatCard";
import {
  Star,
  Globe,
  Shield,
  Rocket,
  BarChart2,
  Database,
  Users,
  Settings,
  Activity,
  Cloud,
  Monitor,
  Server,
} from "lucide-react";
import Footer from "@/components/Footer";
import ConsultationTabsSection from "@/components/services/ConsultationTabsSection";
import StatCardStable from "@/components/StatCardStable";
import TabSection from "@/components/services/TabSection";
import Section from "@/components/services/PartnersCarousel";

import ParallaxScrollingComponent from "@/components/services/ParallaxScrollingComponent";
import TopSectionWithTabs from "@/components/services/TopSectionWithTabs";

import PartnersCarousel from "@/components/services/PartnersCarousel";
import { CustomerStories } from "@/components/CustomerStoriesTestimonials";

function SAPImplementationServices() {
  const tabsData2 = [
  {
    icon: <Cloud className="w-10 h-10 text-white" />,
    heading: "Optimized Total Cost of Ownership",
    description:
      "Efficient S/4HANA implementation helps reduce operational costs and maximize ROI from your ERP investment.",
  },
  {
    icon: <Monitor className="w-10 h-10 text-white" />,
    heading: "Expert Technical & Functional Support",
    description:
      "Dedicated guidance from SAP experts ensures proper system configuration, process alignment, and functional excellence.",
  },
  {
    icon: <Server className="w-10 h-10 text-white" />,
    heading: "Scalable ERP Solutions",
    description:
      "Flexible implementation and architecture allow your S/4HANA system to grow and adapt to evolving business needs.",
  },
  {
    icon: <Shield className="w-10 h-10 text-white" />,
    heading: "Reliable Go-Live & System Uptime",
    description:
      "Ensure smooth go-live, minimal disruption, and high system availability throughout the implementation process.",
  },
  {
    icon: <Settings className="w-10 h-10 text-white" />,
    heading: "Data Migration & Upgrade Management",
    description:
      "Secure and efficient data migration, along with system updates, guarantees a seamless transition to S/4HANA.",
  },
  {
    icon: <Activity className="w-10 h-10 text-white" />,
    heading: "Compliance & Security Assurance",
    description:
      "Comprehensive audits and compliance checks ensure your S/4HANA system is secure and adheres to industry standards.",
  },
];
  const tabsData = [
  {
    icon: <Cloud className="w-10 h-10 text-black" />,
    heading: "SAP S/4HANA Planning & Strategy",
    description:
      "Comprehensive planning and strategy to ensure a smooth and risk-free S/4HANA implementation.",
  },
  {
    icon: <Monitor className="w-10 h-10 text-black" />,
    heading: "System Configuration & Optimization",
    description:
      "Tailored configuration and process optimization to maximize the efficiency and performance of your S/4HANA system.",
  },
  {
    icon: <Server className="w-10 h-10 text-black" />,
    heading: "Data Migration & Go-Live Support",
    description:
      "Expert management of data migration, testing, and go-live support to ensure seamless adoption and minimal business disruption.",
  },
];
const sampleSolutions = [
  {
    title: "End-to-End Implementation",
    heading: "Seamless S/4HANA Deployment",
    description:
      "Comprehensive planning, execution, and go-live support to ensure successful S/4HANA implementation.",
    points: [
      "Project scoping and roadmap definition",
      "Custom module configuration",
      "User training and documentation",
      "Go-live and hypercare support",
    ],
  },
  {
    title: "System Conversion",
    heading: "Transition to S/4HANA",
    description:
      "Smooth transition from existing ECC systems to modern S/4HANA landscapes.",
    points: [
      "System readiness check",
      "Data migration and validation",
      "Custom code adaptation",
      "Downtime minimization strategies",
    ],
  },
  {
    title: "Landscape Transformation",
    heading: "Centralized Operations",
    description:
      "Unify fragmented systems and streamline operations in a centralized S/4HANA environment.",
    points: [
      "Multi-system consolidation",
      "Business process harmonization",
      "Data mapping and transformation",
      "Testing and performance tuning",
    ],
  },
  {
    title: "Custom Fiori App Development",
    heading: "Enhanced User Experience",
    description:
      "Build intuitive and responsive applications using SAP Fiori for a modern UI/UX.",
    points: [
      "Role-based access",
      "Responsive design",
      "Mobile compatibility",
      "Improved usability and adoption",
    ],
  },
  {
    title: "SAP Activate Methodology",
    heading: "Agile Implementation Framework",
    description:
      "Leverage SAP Activate for rapid, agile, and predictable S/4HANA projects.",
    points: [
      "Preconfigured best practices",
      "Guided configuration",
      "Agile sprint cycles",
      "Business-driven testing",
    ],
  },
];


  const productData = [
  {
    title: "Managed Services",
    description:
      "Ongoing, proactive management and support of IT infrastructure, applications, or business processes by a third-party provider—offered under subscription or usage-based models to improve reliability, reduce costs, and align IT with business goals.",
    link: "/sapmanagedservices"
  },
  {
    title: "AMS",
    description:
      "Application Management Services provide continuous maintenance, enhancement, and support for enterprise applications—ensuring optimal performance, adaptability, and alignment with business requirements.",
    link: "/ams"
  },
  {
    title: "SAP S/4HANA Consulting Services",
    description:
      "Expert advisory for strategic planning, ERP landscape assessment, migration strategy, system optimization, process redesign, and tailored implementation to maximize the benefits of an SAP S/4HANA deployment.",
    link: "/consulting"
  },
  {
    title: "SAP Fiori Development Services",
    description:
      "Design and customization of SAP Fiori applications to deliver intuitive, role-based, and mobile-friendly user experiences across the SAP S/4HANA ecosystem.",
    link: "/fioridevelop"
  },
  {
    title: "SAP Business Technology Platform",
    description:
      "A unified multi-cloud platform integrating data management, analytics, application development, integration, automation, and AI—enabling businesses to build, extend, and run intelligent enterprise applications.",
    link: "/businesstech"
  },
  {
    title: "SAP Custom Development and Enhancement",
    description:
      "Tailored development and extension of SAP systems—using ABAP, SAP UI5, APIs, and other technologies—to create custom functionalities, interfaces, and integrations aligned with unique business needs.",
    link: "/custom"
  },
  {
    title: "ABAP RESTful Application Programming Model Service",
    description:
      "Development of modern, scalable business applications on SAP S/4HANA using the ABAP RESTful Application Programming Model (RAP), enabling RESTful services, clean architecture, and maintainable code.",
    link: "/abap"
  },
  {
    title: "SAP BASIS Support Services",
    description:
      "Foundational administration and technical operations for SAP environments—including system installation, configuration, performance tuning, updates, security, and infrastructure management.",
    link: "/basicservices"
  }
];

  const faqs = [
    {
      question:
        "What is the Accelerated SAP EXIM solution, and how does it benefit my business?",
      answer: "",
    },
    {
      question:
        "How does Accelerated EXIM address common challenges in export-import operations?",
      answer: "",
    },
    {
      question:
        "What are the key benefits of using accelerated SAP EXIM solutions?",
      answer: "",
    },
    {
      question:
        "How does Accelerated EXIM ensure compliance with export-import regulations?",
      answer: "",
    },
    {
      question:
        "Does managed logistics cost and export incentive benefit from Accelerated EXIM?",
      answer:
        "Yes, Accelerated EXIM provides tools for tracking logistics expenses and managing export incentives with high precision. It enables detailed tracking of costs, helps manage license and scheme development, and automates processes to avoid loss of export income due to manual errors.",
    },
  ];

  <FAQSection faqs={faqs} />;

  const tabs = [
    {
      icon: <Star className="w-10 h-10 text-yellow-500" />,
      title: "Premium Features",
      description: "Access exclusive tools designed for optimal performance.",
    },
    {
      icon: <Globe className="w-10 h-10 text-blue-500" />,
      title: "Global Reach",
      description: "Connect with clients and teams across the world.",
    },
    {
      icon: <Shield className="w-10 h-10 text-green-500" />,
      title: "Secure",
      description: "Top-notch security ensures your data is always safe.",
    },
    {
      icon: <Rocket className="w-10 h-10 text-purple-500" />,
      title: "Fast Deployment",
      description: "Launch your projects quickly and efficiently.",
    },
    {
      icon: <BarChart2 className="w-10 h-10 text-pink-500" />,
      title: "Analytics",
      description: "Gain insights into user behavior and engagement.",
    },
    {
      icon: <Database className="w-10 h-10 text-orange-500" />,
      title: "Data Management",
      description: "Organize and maintain your data seamlessly.",
    },
    {
      icon: <Users className="w-10 h-10 text-red-500" />,
      title: "Team Collaboration",
      description: "Coordinate with your team in real time.",
    },
    {
      icon: <Settings className="w-10 h-10 text-gray-500" />,
      title: "Custom Settings",
      description: "Tailor the experience to your business needs.",
    },
  ];

  const menuItems = [
    "Offerings",
    "Insights",
    "Services",
    "Benefits",
    "Customer stories",
    "Partners",
    "Related services",
    // "Resources",
  ];
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

const highlightData = [
  {
    title: "Real-Time Analytics",
    description:
      "Enable instant decision-making with real-time data and analytics.",
  },
  {
    title: "Simplified Data Model",
    description:
      "Streamline operations with a leaner, more efficient architecture.",
  },
  {
    title: "Faster Processes",
    description:
      "Accelerate critical processes with in-memory computing capabilities.",
  },
  {
    title: "Future-Ready Platform",
    description:
      "Leverage a scalable foundation for digital transformation.",
  },
];

  return (
    <div className="w-full relative overflow-x-hidden lg:overflow-x-visible">
      <div className="scroll-smooth w-full relative ">
        <Navigation enableScrollEffect={true} />

        {/* Hero Pinned */}

        <ImageOverlay
          imageUrl="/Solutions/sap-implemeentation.png"
          title="SAP Implementation Services"
          description="SAP S/4HANA Implementation Service helps businesses transition to the next-generation ERP system efficiently and effectively."
        />
        <section className="relative min-h-[500px]  sticky top-0 z-20  bg-black bg-cover bg-center overflow-hidden">
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black z-10" />

          {/* Content Layer */}
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 py-24 text-white">
            {/* Heading + Paragraph - 50/50 */}
            <div className="flex flex-col md:flex-row justify-between gap-8 mb-10">
              <div className="w-full md:w-1/2">
                <h1 className="text-[47px]  leading-tight">
                  Accelerate Your SAP S/4HANA Transformation with Sria Infotech
                </h1>
              </div>
              <div className="w-full md:w-1/2">
                <p className="text-base md:text-lg leading-relaxed">
                  Sria Infotech provides end-to-end SAP S/4HANA Implementation Services to help businesses transition smoothly to the next-generation ERP system. Our experts manage planning, configuration, data migration, and go-live support to ensure optimized processes, real-time analytics, and seamless adoption, minimizing risks and maximizing ROI.
                </p>
              </div>
            </div>

            {/* Highlight Cards */}
            <div className="flex flex-wrap gap-6">
              {highlightData.map((item, idx) => (
                <HighlightCard key={idx} {...item} />
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className=" relative  sticky top-0 z-20   bg-white ">
          <div className="  flex flex-col lg:flex-row w-full max-w-[1400px] mx-auto ">
            <div className="hidden lg:block lg:w-1/6">
              <div className="sticky top-24">
                <SidebarMenu menuItems={menuItems} />
              </div>
            </div>

            <div className="w-full lg:w-5/6 min-h-screen p-2">
              {/* Overview */}
              {/* Offerings Section */}
              <section id="offerings" className="scroll-mt-24 py-16 bg-white">
                <div className="max-w-[1400px] w-full px-4 mx-auto">
                  <ConsultationTabsSection
                    solutions={sampleSolutions}
                    mainHeading="Explore our wide range of offerings"
                    mainDescription="SAP S/4HANA Implementation Services cover system planning, configuration, data migration, testing, and go-live support."
                    // ctaText="Get a Consultation"
                  />
                </div>
              </section>
              {/* Insights Section */}
              <section id="insights" className="scroll-mt-24 py-16 bg-white">
                <div className="max-w-[1400px] w-full px-4 mx-auto">
                  <h2 className="text-3xl sm:text-[47px] font-semibold mb-8">
                    Resourceful insights of SAP Implementation Services
                  </h2>

                  <div className="py-8 sm:py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 bg-white">
             <StatCardStable
  percentage="50%"
  description="Reduce process cycle times."
/>
<StatCardStable
  percentage="60%"
  description="Improve real-time reporting accuracy."
/>
<StatCardStable
  percentage="45%"
  description="Enhance operational efficiency"
/>
                  </div>
                </div>
              </section>
              <section id="services" className="mt-20 w-full scroll-mt-24">
                <div className="max-w-[1400px] w-full px-4 mx-auto">
                  <TabSection headingText="SAP services to support your cloud operations"
      tabs={tabsData} />
                </div>
              </section>
              <section
                id="benefits"
                className="mt-20 max-w-[1400px] scroll-mt-24"
              >
                <TopSectionWithTabs
      tabSectionHeading="Key benefits of SAP Managed Services"
      tabs={tabsData2}
    />
              </section>{" "}
              <section
                id="customer stories"
                className=" max-w-[1400px] px-2  w-full pb-10 bg-black "
              >
                <CustomerStories stories={customerStories} />
              </section>{" "}
              <section id="partners" className="max-w-[1400px]">
                <div className="max-w-[1400px] w-full mx-auto ">
                  <PartnersCarousel />
                </div>
              </section>{" "}
              <section
                id="partners"
                className="mt-20 hidden lg:block scroll-mt-24"
              >
                <ParallaxScrollingComponent />
              </section>
              <section id="related services" className="mt-20 scroll-mt-24">
                <ProductRange
                  heading="Explore other range of products"
                  paragraph="Discover products that complement your needs and drive business success."
                  products={productData}
                />
              </section>
              <section id="resources" className="mt-10 scroll-mt-24">
                {/* <Resource
                  heading="Explore Our Resources"
                  paragraph="Helpful tools and insights for your export-import operations"
                  products={[
                    {
                      title: "Trade Guide",
                      description:
                        "Comprehensive guide to international trade practices.",
                      image:
                        "https://www.accely.com/wp-content/uploads/2022/07/What-Is-Included-In-SAP-Managed-Services.webp",
                   link:"" },
                  ]}
                /> */}
              </section>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 rounded-lg mt-8">
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
      <div>
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
    </div>
  );
}

export default SAPImplementationServices;
