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
  Cloud,
  Monitor,
  Activity,
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

function BasicServices() {
  const tabsData2 = [
  {
    icon: <Cloud className="w-10 h-10 text-white" />,
    heading: "Lower Total Cost of Ownership",
    description:
      "Efficient BASIS management reduces maintenance expenses and optimizes resource utilization, lowering overall TCO.",
  },
  {
    icon: <Monitor className="w-10 h-10 text-white" />,
    heading: "Expert Technical Support",
    description:
      "Round-the-clock BASIS technical assistance to ensure smooth SAP operations and rapid issue resolution.",
  },
  {
    icon: <Server className="w-10 h-10 text-white" />,
    heading: "Scalable System Management",
    description:
      "Easily scale SAP infrastructure and BASIS resources in line with evolving business needs.",
  },
  {
    icon: <Shield className="w-10 h-10 text-white" />,
    heading: "High Availability & Reliability",
    description:
      "Continuous system monitoring ensures uptime, stability, and uninterrupted SAP performance.",
  },
  {
    icon: <Settings className="w-10 h-10 text-white" />,
    heading: "Efficient Patch & Upgrade Handling",
    description:
      "Smooth execution of kernel updates, patches, and system upgrades with minimal downtime.",
  },
  {
    icon: <Activity className="w-10 h-10 text-white" />,
    heading: "System & Security Audits",
    description:
      "Regular SAP BASIS audits to identify vulnerabilities, optimize configurations, and ensure compliance.",
  },
];
  const tabsData = [
  {
    icon: <Cloud className="w-10 h-10 text-black" />,
    heading: "Comprehensive BASIS Administration",
    description:
      "End-to-end SAP BASIS administration, covering system installation, configuration, and daily monitoring for optimal performance.",
  },
  {
    icon: <Monitor className="w-10 h-10 text-black" />,
    heading: "Performance Monitoring & Optimization",
    description:
      "Proactive monitoring and fine-tuning of your SAP systems to ensure high availability and peak performance.",
  },
  {
    icon: <Server className="w-10 h-10 text-black" />,
    heading: "Upgrade & Patch Management",
    description:
      "Seamless execution of SAP upgrades, patches, and kernel updates to maintain stability, security, and compliance.",
  },
];
const sampleSolutions = [
  {
    title: "System Installation & Configuration",
    heading: "Reliable SAP Basis Setup",
    description:
      "Comprehensive installation and configuration of SAP environments tailored to business needs.",
    points: [
      "Landscape planning and sizing.",
      "Installation of SAP applications and databases.",
      "Configuration of system parameters.",
      "Integration with existing IT infrastructure.",
    ],
  },
  {
    title: "Performance Tuning",
    heading: "Optimize SAP System Speed",
    description:
      "Identify and eliminate performance bottlenecks to ensure smooth operations.",
    points: [
      "Memory and CPU usage optimization.",
      "Database performance tuning.",
      "Workload analysis and balancing.",
      "Regular performance audits.",
    ],
  },
  {
    title: "User & Role Administration",
    heading: "Secure Access Management",
    description:
      "Control and manage user permissions to maintain system security.",
    points: [
      "Role-based access control.",
      "User provisioning and de-provisioning.",
      "Periodic access reviews.",
      "Compliance-driven security policies.",
    ],
  },
  {
    title: "System Monitoring & Maintenance",
    heading: "Proactive Support",
    description:
      "Continuous monitoring to identify issues before they cause downtime.",
    points: [
      "Real-time health checks.",
      "Alert and notification setup.",
      "Preventive maintenance tasks.",
      "Early issue detection and resolution.",
    ],
  },
  {
    title: "Backup & Recovery",
    heading: "Disaster Recovery Ready",
    description:
      "Protect critical SAP data with reliable backup and recovery procedures.",
    points: [
      "Scheduled full and incremental backups.",
      "Database and application-level recovery plans.",
      "Cloud-based backup solutions.",
      "Regular recovery drills.",
    ],
  },
  {
    title: "System Upgrades & Patching",
    heading: "Stay Updated & Secure",
    description:
      "Regular updates to ensure compatibility and security.",
    points: [
      "SAP kernel upgrades.",
      "Database patch management.",
      "Support package implementation.",
      "Testing and validation post-upgrade.",
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
];

  const faqs = [
    {
      question:
        "What is included in SAP Basic Support Services?",
      answer: "",
    },
    {
      question:
        "How quickly can you respond to critical SAP issues?",
      answer: "",
    },
    {
      question:
        "Do you provide support for all SAP modules and versions?",
      answer: "",
    },
    {
      question:
        "Can you provide both functional and technical SAP support?",
      answer: "",
    },
    {
      question:
        "How do you ensure minimal downtime during maintenance activities?",
      answer:
        "We follow structured maintenance procedures with advance planning, testing in non-production environments, and scheduled maintenance windows during off-peak hours to minimize business impact.",
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
    title: "24/7 System Monitoring",
    description: "Proactive monitoring of SAP landscapes to detect and resolve issues before they impact operations.",
  },
  {
    title: "Performance Optimization",
    description: "Tuning SAP systems for faster response times, efficient memory use, and optimal database performance.",
  },
  {
    title: "Disaster Recovery Readiness",
    description: "Ensuring high availability and quick recovery with well-planned backup and restore strategies.",
  },
  {
    title: "Security & Compliance",
    description: "Role-based access control and patch updates to meet industry-specific compliance requirements.",
  },
];

  return (
    <div className="w-full relative overflow-x-hidden lg:overflow-x-visible">
      <div className="scroll-smooth w-full relative ">
        <Navigation enableScrollEffect={true} />

        {/* Hero Pinned */}

        <ImageOverlay
          imageUrl="/Services/basis.png"
          title="SAP Basis Services"
          description="Enhance the reliability, performance, and security of your SAP landscape with our comprehensive SAP BASIS Support Service."
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
                  Maximize Your SAP Performance with Sria Infotech
                </h1>
              </div>
              <div className="w-full md:w-1/2">
                <p className="text-base md:text-lg leading-relaxed">
                  In today’s fast-paced digital landscape, efficient management of your SAP BASIS layer is critical for ensuring system reliability, performance, and security. As a trusted SAP BASIS Support Service provider, Sria Infotech delivers end-to-end solutions, including system administration, performance tuning, upgrades, and proactive monitoring, to keep your SAP environment stable, secure, and aligned with your business objectives.
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
                    mainDescription="System Monitoring & Administration,Continuous performance tracking and fine-tuning.Patch & Upgrade Management Timely updates to keep systems secure and compliant."
                    // ctaText="Get a Consultation"
                  />
                </div>
              </section>
              {/* Insights Section */}
              <section id="insights" className="scroll-mt-24 py-16 bg-white">
                <div className="max-w-[1400px] w-full px-4 mx-auto">
                  <h2 className="text-3xl sm:text-[47px] font-semibold mb-8">
                    Resourceful insights of SAP Basis Services
                  </h2>

                  <div className="py-8 sm:py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 bg-white">
     <StatCardStable
  percentage="30%"
  description="Performance Optimization  improvement in system efficiency"
/>
<StatCardStable
  percentage="25%"
  description="Downtime Reduction decrease in unplanned outages"
/>
<StatCardStable
  percentage="20%"
  description="Upgrade Efficiency  faster patch and upgrade cycles"
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
      tabSectionHeading="Key benefits of SAP Basis Services"
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

export default BasicServices;
