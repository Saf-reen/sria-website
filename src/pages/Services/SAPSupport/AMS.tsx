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
import {Link} from "react-router-dom";
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
  Cloud,
  Monitor,
  Server,
  Activity,
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

function AMS() {
  const tabsData2 = [
  {
    icon: <Cloud className="w-10 h-10 text-white" />,
    heading: "Optimized Total Cost of Ownership",
    description:
      "AMS helps reduce maintenance costs and optimize total cost of ownership (TCO) for your SAP environment.",
  },
  {
    icon: <Monitor className="w-10 h-10 text-white" />,
    heading: "Dedicated Technical & Functional Support",
    description:
      "Provide specialized SAP support to enhance productivity, streamline operations, and improve resource allocation.",
  },
  {
    icon: <Server className="w-10 h-10 text-white" />,
    heading: "Scalable SAP Resources",
    description:
      "Flexible contracting and resource management allow businesses to scale SAP operations up or down as needed.",
  },
  {
    icon: <Shield className="w-10 h-10 text-white" />,
    heading: "High Availability & Reliability",
    description:
      "Ensure continuous SAP system uptime with proactive monitoring, performance management, and guaranteed availability.",
  },
  {
    icon: <Settings className="w-10 h-10 text-white" />,
    heading: "Proactive Patch & Upgrade Management",
    description:
      "Automated patching, system upgrades, and enhancements keep your SAP environment secure and up to date.",
  },
  {
    icon: <Activity className="w-10 h-10 text-white" />,
    heading: "Comprehensive Security & Compliance Audits",
    description:
      "Regular application and database audits to ensure system security, compliance, and protection against vulnerabilities.",
  },
];
  const tabsData = [
  {
    icon: <Cloud className="w-10 h-10 text-black" />,
    heading: "SAP System Monitoring",
    description:
      "Continuous monitoring of your SAP environment to ensure high availability, reliability, and optimal performance.",
  },
  {
    icon: <Monitor className="w-10 h-10 text-black" />,
    heading: "Performance & Issue Management",
    description:
      "Proactively optimize SAP performance and resolve incidents quickly to minimize downtime and operational disruption.",
  },
  {
    icon: <Server className="w-10 h-10 text-black" />,
    heading: "End-to-End SAP Support",
    description:
      "Comprehensive AMS support including upgrades, maintenance, security management, and process improvement for seamless operations.",
  },
];
const sampleSolutions = [
  {
    title: "End-to-End Application Support",
    heading: "Streamlined Application Operations",
    description:
      "We provide complete support across your SAP landscape to ensure optimized performance and business continuity.",
    points: [
      "24x7 monitoring and issue resolution.",
      "Application upgrades and enhancements.",
      "User management and access control.",
      "Continuous process improvements.",
    ],
  },
  {
    title: "Proactive Monitoring and Optimization",
    heading: "Drive Efficiency with Insights",
    description:
      "Reduce downtime and improve application responsiveness through real-time monitoring and analytics.",
    points: [
      "Automated health checks.",
      "System performance tuning.",
      "Error trend analysis.",
      "Capacity planning and scaling.",
    ],
  },
  {
    title: "Change and Release Management",
    heading: "Manage Changes with Confidence",
    description:
      "Deploy new functionalities and updates without disrupting business operations.",
    points: [
      "Impact analysis and risk assessment.",
      "Version control and rollback plans.",
      "Scheduled deployments.",
      "Minimal disruption and maximum agility.",
    ],
  },
  {
    title: "Application Enhancement & Upgrades",
    heading: "Enhance Business Value",
    description:
      "Improve user experience and operational effectiveness with application enhancements.",
    points: [
      "Custom developments.",
      "Functional enhancements.",
      "Periodic upgrades.",
      "UI/UX improvements.",
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
    title: "SAP S/4HANA Implementation Services",
    description:
      "Comprehensive support for deploying SAP S/4HANA—including planning, deployment (greenfield, brownfield, or selective transition), data migration, system integration, and go-live execution to transform business operations.",
    link: "/sapimplement"
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
    title: "24/7 Support",
    description: "Ensure continuous application uptime and performance.",
  },
  {
    title: "Issue Resolution",
    description: "Swift response and resolution of application issues.",
  },
  {
    title: "Change Management",
    description: "Seamless implementation of changes with minimal disruption.",
  },
  {
    title: "Performance Monitoring",
    description: "Real-time monitoring and proactive optimization of systems.",
  },
];
  return (
    <div className="w-full relative overflow-x-hidden lg:overflow-x-visible">
      <div className="scroll-smooth w-full relative ">
        <Navigation enableScrollEffect={true} />

        {/* Hero Pinned */}

        <ImageOverlay
          imageUrl="/Services/ams.png"
          title="SAP AMS"
          description="Application Management Services (AMS) provide ongoing support, maintenance, and optimization for enterprise applications."
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
                  Optimizing SAP Operations with Sria Infotech
                </h1>
              </div>
              <div className="w-full md:w-1/2">
                <p className="text-base md:text-lg leading-relaxed">
                  Sria Infotech offers comprehensive Application Management Services (AMS) to ensure your SAP systems run smoothly, securely, and efficiently. Our end-to-end support includes system monitoring, performance optimization, and proactive issue resolution, helping your business achieve operational excellence while reducing risk and maximizing ROI.
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
                    mainDescription="Application Management Services (AMS) cover end-to-end SAP support, including system monitoring, incident management, and performance optimization."
                    // ctaText="Get a Consultation"
                  />
                </div>
              </section>
              {/* Insights Section */}
              <section id="insights" className="scroll-mt-24 py-16 bg-white">
                <div className="max-w-[1400px] w-full px-4 mx-auto">
                  <h2 className="text-3xl sm:text-[47px] font-semibold mb-8">
                    Resourceful insights of SAP AMS Services
                  </h2>

                  <div className="py-8 sm:py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 bg-white">
            <StatCardStable
  percentage="50%"
  description="Enhance overall SAP performance."
/>
<StatCardStable
  percentage="60%"
  description="AMS  improve system uptime."
/>
<StatCardStable
  percentage="70%"
  description="Reduce incident resolution time"
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
      tabSectionHeading="Key benefits of SAP AMS Services"
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

export default AMS;
