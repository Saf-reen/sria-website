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

function Abap() {
const sampleSolutions = [
  {
    title: "Custom ABAP Development",
    heading: "Tailored Solutions for Your Business",
    description:
      "Design and develop custom ABAP applications to automate processes and address complex business requirements.",
    points: [
      "End-to-end ABAP application lifecycle support.",
      "User-friendly interfaces and reports.",
      "Integration with SAP and non-SAP systems.",
      "Optimized performance for high-volume data processing.",
    ],
  },
  {
    title: "ABAP Code Optimization",
    heading: "Boost System Performance",
    description:
      "Improve runtime efficiency by optimizing existing ABAP code and database queries.",
    points: [
      "Identify and remove performance bottlenecks.",
      "Implement best coding practices.",
      "Reduce database load with optimized queries.",
      "Enhance transaction speed and stability.",
    ],
  },
  {
    title: "ABAP on HANA Migration",
    heading: "Modernize Your SAP Landscape",
    description:
      "Upgrade legacy ABAP code to fully leverage SAP HANA's in-memory computing capabilities.",
    points: [
      "Code pushdown techniques for faster execution.",
      "Use of CDS Views for advanced reporting.",
      "Compatibility checks and adjustments.",
      "Performance tuning for HANA environments.",
    ],
  },
  {
    title: "Workflow and Report Automation",
    heading: "Streamline Business Processes",
    description:
      "Develop automated workflows, smart forms, and interactive reports using ABAP.",
    points: [
      "Custom SmartForms and Adobe Forms.",
      "Automated report generation.",
      "Workflow design and deployment.",
      "Integration with Fiori/UI5 applications.",
    ],
  },
  {
    title: "ABAP Debugging & Troubleshooting",
    heading: "Resolve Issues Quickly",
    description:
      "Identify, analyze, and fix issues in ABAP programs to ensure smooth system operation.",
    points: [
      "Advanced debugging techniques.",
      "Root cause analysis of functional errors.",
      "Performance and memory usage checks.",
      "Continuous improvement suggestions.",
    ],
  },
  {
    title: "ABAP Training & Knowledge Transfer",
    heading: "Empower Your Team",
    description:
      "Provide in-depth ABAP training to your in-house teams for long-term system management.",
    points: [
      "Beginner to advanced ABAP courses.",
      "Hands-on coding sessions.",
      "Real project-based learning.",
      "Ongoing mentorship and support.",
    ],
  },
];
  const faqs = [
     {
      question:
        "What is ABAP RESTful Application Programming Model and how does it benefit development?",
      answer: "",
    },
    {
      question:
        "How does RAP improve upon traditional ABAP development approaches?",
      answer: "",
    },
    {
      question:
        "What are the key components required for developing a RAP application?",
      answer: "",
    },
    {
      question:
        "How does RAP integrate with SAP Fiori Elements and modern UI frameworks?",
      answer: "",
    },
    {
      question:
        "Can existing ABAP applications be migrated to use the RAP framework?",
      answer:
        "Yes, existing ABAP applications can be modernized to leverage RAP capabilities. This involves creating CDS views over existing data models, implementing behavior definitions, and exposing services through the RAP framework while maintaining business logic integrity.",
    },
  ];

  <FAQSection faqs={faqs} />;

  const tabs = [
    {
      icon: <Star className="w-10 h-10 text-yellow-500" />,
      title: "Premium Features",
      description: "Access Exclusive Tools: Leverage intelligent tools for maximum SAP system performance and uptime.",
    },
    {
      icon: <Globe className="w-10 h-10 text-blue-500" />,
      title: "Global Reach",
      description: "Global Collaboration: Seamlessly connect with clients and teams worldwide through centralized SAP support.",
    },
    {
      icon: <Shield className="w-10 h-10 text-green-500" />,
      title: "Secure",
      description: "Enterprise-Grade Security: Ensure data protection with continuous monitoring and SAP-compliant security protocols.",
    },
    {
      icon: <Rocket className="w-10 h-10 text-purple-500" />,
      title: "Fast Deployment",
      description: "Faster Project Launches: Minimize delays with expertly managed SAP application support and rapid rollout services.",
    },
    {
      icon: <BarChart2 className="w-10 h-10 text-pink-500" />,
      title: "Analytics",
      description: "Insight-Driven Decision Making: Analyze user behavior and application metrics to drive business growth.",
    },
    {
      icon: <Database className="w-10 h-10 text-orange-500" />,
      title: "Data Management",
      description: "Seamless Data Management: Organize, maintain, and optimize SAP data through structured AMS support.",
    },
    {
      icon: <Users className="w-10 h-10 text-red-500" />,
      title: "Team Collaboration",
      description: "Real-Time Coordination: Enable synchronous collaboration across departments and geographies.",
    },
    {
      icon: <Settings className="w-10 h-10 text-gray-500" />,
      title: "Custom Settings",
      description: "Tailored SAP Experiences: Customize AMS strategies to match your organization's goals and workflows.",
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
    "Resources",
  ];
    const productData = [
    {
      title: "Field Service Management",
      description:
        "Efficiently manage remote teams, assets, and processes to enhance service delivery.",
        link:"/"
    },

    {
      title: "Real Estate Management",
      description:
        "Automate property management tasks, including rent collection and maintenance.",
           link:"/"
    },
    {
      title: "Intelligent Character Recognition",
      description:
        "Transforming document processing to achieve greater automation and efficiency.",
           link:"/"
    },
    {
      title: "Digital Logistics",
      description:
        "Modernize logistics operations for more efficient and reliable deliveries.",
           link:"/"
    },
  ];
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

const highlightData = [
  {
    title: "Optimized ABAP Performance",
    description:
      "Enhance application response times and streamline processing through expert ABAP code optimization.",
  },
  {
    title: "Seamless SAP Integration",
    description:
      "Integrate ABAP programs with other SAP modules and third-party systems effortlessly.",
  },
  {
    title: "Custom Business Logic",
    description:
      "Build tailored ABAP solutions to meet unique business workflows and compliance needs.",
  },
  {
    title: "Future-Ready Development",
    description:
      "Leverage the latest ABAP on HANA capabilities for faster, more efficient applications.",
  },
];

  return (
    <div className="w-full relative overflow-x-hidden lg:overflow-x-visible">
      <div className="scroll-smooth w-full relative ">
        <Navigation enableScrollEffect={true} />

        {/* Hero Pinned */}

        <ImageOverlay
          imageUrl="https://www.accely.com/wp-content/uploads/2024/12/SAP-Managed-Service-1.webp"
          title="SAP Managed Services"
          description="Achieve stability, reliability, and adaptability with Sria Infotech’s automation-driven SAP Managed Services."
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
                  Maximize your SAP investment with Sria Infotech
                </h1>
              </div>
              <div className="w-full md:w-1/2">
                <p className="text-base md:text-lg leading-relaxed">
                  The management and optimization of your SAP environment are
                  more important than ever in the current fast-paced digital
                  world. One of the top SAP managed service providers, Sria Infotech
                  offers all-inclusive solutions that will optimize your SAP
                  operations and guarantee that they are effective, safe, and
                  completely aligned with your business goals.
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
                    mainDescription="SAP Managed Services provide the full range of functional, technical, and cloud possibilities."
                    ctaText="Get a Consultation"
                  />
                </div>
              </section>
              {/* Insights Section */}
              <section id="insights" className="scroll-mt-24 py-16 bg-white">
                <div className="max-w-[1400px] w-full px-4 mx-auto">
                  <h2 className="text-3xl sm:text-[47px] font-semibold mb-8">
                    Resourceful insights of SAP Managed Services
                  </h2>

                  <div className="py-8 sm:py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 bg-white">
             <StatCardStable
  percentage="40%"
  description="Reduction in ABAP program execution time after code optimization."
/>
<StatCardStable
  percentage="55%"
  description="Faster report generation with ABAP on HANA migration."
/>
<StatCardStable
  percentage="70%"
  description="Increase in process automation using custom ABAP workflows."
/>
                  </div>
                </div>
              </section>
              <section id="services" className="mt-20 w-full scroll-mt-24">
                <div className="max-w-[1400px] w-full px-4 mx-auto">
                  <TabSection />
                </div>
              </section>
              <section
                id="benefits"
                className="mt-20 max-w-[1400px] scroll-mt-24"
              >
                <TopSectionWithTabs />
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
                <Resource
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
                />
              </section>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 rounded-lg mt-8">
        <div className="flex flex-wrap justify-center items-center gap-8">
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
        </div>
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

export default Abap;
