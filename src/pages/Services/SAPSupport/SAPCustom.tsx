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
  Activity,
  Database,
  Users,
  Settings,
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

function SAPCustom() {
  const tabsData2 = [
  {
    icon: <Cloud className="w-10 h-10 text-white" />,
    heading: "Tailored SAP Solutions",
    description:
      "Develop custom functionalities that align perfectly with your unique business needs.",
  },
  {
    icon: <Monitor className="w-10 h-10 text-white" />,
    heading: "UI/UX Enhancements",
    description:
      "Improve user experience with intuitive designs and streamlined SAP interfaces.",
  },
  {
    icon: <Server className="w-10 h-10 text-white" />,
    heading: "Seamless Integrations",
    description:
      "Connect SAP with other enterprise systems for smooth data flow and operations.",
  },
  {
    icon: <Shield className="w-10 h-10 text-white" />,
    heading: "Performance Optimization",
    description:
      "Boost application speed, reliability, and efficiency through targeted enhancements.",
  },
  {
    icon: <Settings className="w-10 h-10 text-white" />,
    heading: "Ongoing Improvements",
    description:
      "Continuously update and enhance your SAP environment to meet evolving demands.",
  },
  {
    icon: <Activity className="w-10 h-10 text-white" />,
    heading: "Quality & Security Assurance",
    description:
      "Ensure custom developments meet the highest standards for quality, compliance, and security.",
  },
];
  const tabsData = [
  {
    icon: <Cloud className="w-10 h-10 text-black" />,
    heading: "Custom Application Development",
    description:
      "Design and build tailored SAP applications to address your unique business requirements.",
  },
  {
    icon: <Monitor className="w-10 h-10 text-black" />,
    heading: "Process Enhancements",
    description:
      "Optimize and extend existing SAP processes to boost efficiency and align with evolving needs.",
  },
  {
    icon: <Server className="w-10 h-10 text-black" />,
    heading: "System Integration & Extensions",
    description:
      "Seamlessly integrate SAP with third-party systems and add new features for expanded capabilities.",
  },
];
const sampleSolutions = [
  {
    title: "Custom Module Development",
    heading: "Create New Functional Capabilities",
    description:
      "Develop SAP modules tailored to your business processes, ensuring maximum relevance and efficiency.",
    points: [
      "Design from scratch or enhance existing modules.",
      "Industry-specific customizations.",
      "Fully compatible with SAP updates.",
      "Optimized for performance and usability.",
    ],
  },
  {
    title: "SAP UI/UX Enhancements",
    heading: "Boost User Experience",
    description:
      "Improve productivity with user-friendly interfaces, Fiori apps, and personalized dashboards.",
    points: [
      "Custom SAP Fiori applications.",
      "Responsive and mobile-ready interfaces.",
      "Simplified navigation and workflows.",
      "Increased adoption rates.",
    ],
  },
  {
    title: "Integration with Third-Party Systems",
    heading: "Connect SAP with External Applications",
    description:
      "Enable seamless data exchange with CRM, ERP, analytics tools, and more.",
    points: [
      "API-based integration.",
      "Secure data transfer protocols.",
      "Real-time synchronization.",
      "Reduced manual intervention.",
    ],
  },
  {
    title: "Performance Optimization",
    heading: "Speed and Stability Improvements",
    description:
      "Enhance the efficiency of custom developments to deliver faster processing and reporting.",
    points: [
      "Code and query optimization.",
      "Database tuning.",
      "Load testing and monitoring.",
      "Improved transaction response time.",
    ],
  },
  {
    title: "Process Automation",
    heading: "Automate Repetitive Tasks",
    description:
      "Build SAP enhancements to eliminate manual work and increase operational efficiency.",
    points: [
      "Custom automated workflows.",
      "Integration with RPA tools.",
      "Error-free execution.",
      "Time and cost savings.",
    ],
  },
  {
    title: "Ongoing Support & Enhancement",
    heading: "Continuous Improvement",
    description:
      "Keep your SAP system evolving with regular updates, bug fixes, and performance checks.",
    points: [
      "24/7 support availability.",
      "Change management services.",
      "Version upgrade compatibility.",
      "Proactive performance monitoring.",
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
    title: "Tailored SAP Solutions",
    description:
      "Get SAP applications and modules customized precisely to your unique business workflows and industry needs.",
  },
  {
    title: "Seamless Integration",
    description:
      "Integrate custom developments with your existing SAP landscape without disrupting ongoing operations.",
  },
  {
    title: "Future-Ready Architecture",
    description:
      "Enhancements designed to scale and adapt with changing business requirements and SAP updates.",
  },
  {
    title: "Accelerated Deployment",
    description:
      "Rapid development cycles to deliver business-ready features faster with minimal downtime.",
  },
];

  return (
    <div className="w-full relative overflow-x-hidden lg:overflow-x-visible">
      <div className="scroll-smooth w-full relative ">
        <Navigation enableScrollEffect={true} />

        {/* Hero Pinned */}

        <ImageOverlay
          imageUrl="/Services/custom.png"
          title="SAP Custom Development"
          description="Enhance your SAP landscape with tailored solutions that align perfectly with your unique business processes."
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
                  Drive Innovation with Tailored SAP Solutions from Sria Infotech
                </h1>
              </div>
              <div className="w-full md:w-1/2">
                <p className="text-base md:text-lg leading-relaxed">
                  In today’s rapidly evolving business landscape, standard solutions often fall short of meeting unique operational needs. Sria Infotech’s SAP Custom Development and Enhancement services deliver personalized, scalable solutions designed to align seamlessly with your business processes. From developing new applications to enhancing existing functionalities, we ensure your SAP environment is innovative, efficient, and ready to adapt to future demands.
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
                    mainDescription="Development of custom SAP applications to address specific business challenges.Enhancement of standard SAP functionalities to improve usability and performance."
                    // ctaText="Get a Consultation"
                  />
                </div>
              </section>
              {/* Insights Section */}
              <section id="insights" className="scroll-mt-24 py-16 bg-white">
                <div className="max-w-[1400px] w-full px-4 mx-auto">
                  <h2 className="text-3xl sm:text-[47px] font-semibold mb-8">
                    Resourceful insights of SAP Custom Development Services
                  </h2>

                  <div className="py-8 sm:py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 bg-white">
               <StatCardStable
        percentage="30%"
        description="SAP Custom Development and Enhancement  improve process alignment"
      />
      <StatCardStable
        percentage="40%"
        description="Reduce operational inefficiencies"
      />
      <StatCardStable
        percentage="45%"
        description="Enhance user adoption"
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
      tabSectionHeading="Key benefits of SAP Custom Services"
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

export default SAPCustom;
