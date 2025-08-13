import React from "react";
import Navigation from "@/components/Navigation";
import TwoColumnLayout from "@/components/TwoColumnLayout";
import LeftSection from "@/components/LeftSection";
import RightSection from "@/components/RightSection";
import Requesademobtn from "@/components/Requesademobtn";
import SidebarMenu from "@/components/SidebarMenu";
import FeatureCard from "@/components/FeatureCard";
import FeatureTabs from "@/components/FeatureTabs";
import {Link} from "react-router-dom";
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
  Lock,
  Cloud,
  Zap,
  Repeat,
  BarChart,
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

const faqs = [
  {
    question: "What is SAP ERP Public Cloud?",
    answer:
      "SAP ERP Public Cloud is a SaaS ERP solution offering preconfigured best practices, rapid deployment, and automatic updates — ideal for growing businesses.",
  },
  {
    question: "How is Public Cloud different from Private Cloud or On-Premise?",
    answer:
      "Public Cloud offers lower TCO, faster deployment, and standardized processes, whereas Private Cloud and On-Premise provide more customization and control.",
  },
  {
    question: "Who should use SAP ERP Public Cloud?",
    answer:
      "It’s best suited for mid-sized organizations and subsidiaries looking for fast time-to-value, innovation, and global reach without high IT overhead.",
  },
  {
    question: "Is customization possible in SAP Public Cloud?",
    answer:
      "While deep customization is limited, extensibility is possible via SAP BTP and low-code/no-code options.",
  },
  {
    question: "How long does it take to implement?",
    answer:
      "With predefined content and guided setup, many companies go live in 6 to 12 weeks.",
  },
];

const tabs = [
  {
    icon: <Cloud className="w-10 h-10 text-blue-500" />,
    title: "Cloud-Native ERP",
    description:
      "Access your ERP system anytime, anywhere with enterprise-grade cloud performance and reliability.",
  },
  {
    icon: <Zap className="w-10 h-10 text-yellow-500" />,
    title: "Fast Deployment",
    description:
      "Go live in weeks using predefined content and guided configuration for accelerated time-to-value.",
  },
  {
    icon: <Repeat className="w-10 h-10 text-green-500" />,
    title: "Continuous Innovation",
    description:
      "Benefit from regular feature releases, compliance updates, and performance improvements.",
  },
  {
    icon: <BarChart className="w-10 h-10 text-indigo-500" />,
    title: "Built-In Analytics",
    description:
      "Make informed decisions with embedded analytics and real-time dashboards.",
  },
  {
    icon: <Globe className="w-10 h-10 text-red-500" />,
    title: "Global Reach",
    description:
      "Support multiple languages, currencies, and regulatory needs across borders.",
  },
  {
    icon: <Settings className="w-10 h-10 text-gray-500" />,
    title: "Flexible Extensibility",
    description:
      "Extend functionality using SAP BTP or low-code/no-code tools as your business evolves.",
  },
  {
    icon: <Users className="w-10 h-10 text-pink-500" />,
    title: "User-Friendly Interface",
    description:
      "Empower employees with SAP Fiori UX and a responsive interface.",
  },
  {
    icon: <Lock className="w-10 h-10 text-purple-500" />,
    title: "Enterprise-Grade Security",
    description:
      "Rely on data protection, role-based access, and secure cloud hosting.",
  },
];

const sampleSolutions = [
  {
    title: "Core Finance & Accounting",
    heading: "SAP ERP Public Cloud for Finance",
    description:
      "Gain real-time insights and standardized processes across accounts receivable, payable, and financial reporting.",
    points: [
      "Prebuilt financial workflows",
      "Real-time analytics",
      "Automated compliance reports",
      "Cost-effective operations",
    ],
  },
  {
    title: "Procurement Automation",
    heading: "SAP ERP Public Cloud for Procurement",
    description:
      "Streamline sourcing and purchasing with guided buying and integration to supplier networks.",
    points: [
      "Touchless invoice processing",
      "Supplier collaboration",
      "Spend visibility",
      "Catalog integration",
    ],
  },
  {
    title: "Professional Services",
    heading: "ERP Public Cloud for Service Firms",
    description:
      "Deliver client projects efficiently with built-in time tracking, resource allocation, and billing.",
    points: [
      "Project cost control",
      "Timesheet tracking",
      "Customer invoicing",
      "Utilization monitoring",
    ],
  },
  {
    title: "Sales & Distribution",
    heading: "SAP ERP Public Cloud for Sales",
    description:
      "Drive revenue with streamlined order-to-cash processes, pricing automation, and delivery integration.",
    points: [
      "Order management",
      "Customer returns handling",
      "Real-time inventory visibility",
      "Automated pricing rules",
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
  heading: "What is SAP ERP Public Cloud?",
  description:
    "SAP ERP Public Cloud is a scalable, cloud-based SaaS ERP solution that delivers standardized best practices, rapid deployment, automatic updates, and reduced total cost of ownership (TCO). It’s designed for fast-growing businesses and subsidiaries seeking agility, innovation, and cost efficiency.",
  imageUrl: "/Solutions/erp-public-cloud.png",
  imageAlt: "Cloud ERP illustration",
  items: [
    {
      title: "Standardized Processes",
      highlight: "Built-in Industry Best Practices",
      description:
        "Accelerate time-to-value with built-in industry best practices and ready-to-run processes that streamline operations and improve efficiency.",
    },
    {
      title: "Automatic Updates",
      highlight: "Always Up-to-Date",
      description:
        "Stay always up-to-date with quarterly innovations and regular enhancements—delivered automatically without manual effort or downtime.",
    },
    {
      title: "Rapid Deployment",
      description:
        "Go live in weeks with guided configuration, preconfigured content, and minimal implementation cycles, ensuring faster ROI.",
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
  heading: "Explore SAP ERP Public Cloud Use Cases",
  description:
    "Explore how public cloud ERP brings agility and scalability to finance, procurement, and professional services.",
  ctaText: "Connect with a cloud consultant",
  ctaLink: "/contact",
  solutions: [
    { title: "SAP ERP Public Cloud for Finance", href: "/solutions/finance-public-cloud" },
    { title: "SAP ERP Public Cloud for Procurement", href: "/solutions/procurement-public-cloud" },
  ],
};

const features = [
  {
    title: "Preconfigured Business Processes",
    description:
      "Leverage out-of-the-box best practices across finance, sales, and procurement for quick go-live and streamlined operations.",
    image: "/ERPCloud/best-practices.png",
  },
  {
    title: "Automatic Quarterly Updates",
    description:
      "Benefit from regular, automated updates that deliver the latest innovations without disruption.",
    image: "/ERPCloud/updates.png",
  },
  {
    title: "Guided Configuration",
    description:
      "Simplify implementation with step-by-step guided setup tailored to your business needs.",
    image: "/ERPCloud/configuration.png",
  },
  {
    title: "Global Compliance",
    description:
      "Ensure adherence to local and international regulations with built-in compliance features.",
    image: "/ERPCloud/compliance.png",
  },
  {
    title: "Subscription-Based Pricing",
    description:
      "Enjoy predictable costs and flexible subscription models that scale with your business.",
    image: "/ERPCloud/pricing.png",
  },
];
const insightsData = [
  {
    title: "Public Cloud Adoption for Enterprises",
    imageUrl: "/images/public-cloud-enterprise.jpg",
    imageAlt: "Enterprise Cloud Adoption",
    gradientFrom: "from-blue-600",
    gradientTo: "to-blue-800",
  },
  {
    title: "Hybrid Cloud Strategies",
    imageUrl: "/images/hybrid-cloud.jpg",
    imageAlt: "Hybrid Cloud",
    gradientFrom: "from-teal-600",
    gradientTo: "to-cyan-700",
  },
  {
    title: "AI and Analytics in the Cloud",
    imageUrl: "/images/ai-cloud.jpg",
    imageAlt: "AI in Cloud",
    gradientFrom: "from-purple-600",
    gradientTo: "to-indigo-700",
  },
];

function PublicCloud() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section - Responsive */}
      <div className="w-full flex justify-center lg:px-8">
        <div className="max-w-[1400px] w-full">
          <TwoColumnLayout
            left={
              <LeftSection
                title="Public Cloud Solutions"
                description="Empower your business with Public Cloud – a secure, scalable, and cost-effective way to innovate faster and achieve operational excellence."
              >
                <Link to="/contactus">
                <Requesademobtn text="Book a Consultation" />
                </Link>
              </LeftSection>
            }
            right={
              <RightSection>
                <img
                  src="/Solutions/public.jpeg"
                  alt="Public Cloud Visual"
                  className="w-full h-full object-cover"
                />
              </RightSection>
            }
          />
        </div>
      </div>

      {/* Main Content - Responsive Layout */}
      <div className="flex flex-col lg:flex-row w-full max-w-[1400px] mx-auto mt-4 lg:px-8">
        {/* Sidebar */}
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
                mainHeading="Explore our Public Cloud Capabilities"
                mainDescription="Public Cloud delivers unmatched scalability, cost optimization, and business agility, empowering organizations to accelerate digital transformation and adapt quickly to changing market demands."
                // ctaText="Get a Consultation"
              />
            </div>
          </section>

          {/* Insights */}
          <section id="insights" className="mt-16 sm:mt-20 w-full scroll-mt-24">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
              Insights into Public Cloud
            </h2>

            <div className="py-8 sm:py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 bg-white">
              <StatCardStable
                percentage="90%"
                description="Of enterprises use public cloud services to run critical business operations."
              />
              <StatCardStable
                percentage="$1T"
                description="Projected size of the global public cloud market by 2030."
              />
              <StatCardStable
                percentage="60%"
                description="Average cost savings organizations achieve by migrating to the public cloud."
              />
            </div>

            <div className="bg-black mt-8 sm:mt-10 w-full flex flex-col lg:flex-row items-center lg:items-start rounded-lg overflow-hidden">
              <h1 className="text-white text-xl sm:text-2xl md:text-[27px] p-4 lg:p-10 w-full lg:w-3/4 leading-relaxed">
                Unlock innovation and business agility with secure and scalable
                Public Cloud solutions. Accelerate your digital journey today.
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
                Key Features of Public Cloud
              </h2>
              <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-500">
                Experience unmatched flexibility, robust security, and high performance with our comprehensive Public Cloud solutions designed to meet diverse business needs.
              </p>
            </div>
            <section className="my-8 sm:my-10 w-full">
              <FeatureTabs features={features} />
            </section>
          </section>

          {/* Benefits Section */}
          <section id="benefits" className="mt-16 sm:mt-20 w-full scroll-mt-24">
            <h2 className="text-2xl sm:text-3xl md:text-4xl w-full lg:w-3/4 font-semibold">
              Benefits of Public Cloud
            </h2>
            <p className="mt-4 text-lg sm:text-xl md:text-2xl w-full lg:w-3/4 text-gray-500">
              Optimize costs, scale seamlessly, and access cutting-edge technologies with our flexible and secure Public Cloud solutions designed for modern enterprises.
            </p>

            <div className="max-w-7xl mx-auto py-8 sm:py-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6">
                {tabs.map((tab, idx) => (
                  <InfoTab key={idx} {...tab} />
                ))}
              </div>
            </div>
          </section>

          <div className="mt-16 sm:mt-20 w-full scroll-mt-24 text-black">
            <CustomerStories stories={customerStories}  theme="light"/>
          </div>

          {/* FAQ Section */}
          <section
            id="find your answers"
            className="mt-16 sm:mt-20 w-full scroll-mt-24"
          >
            <FAQSection faqs={faqs} />
          </section>

          {/* Insights Section */}
          {/* <InsightsSection insights={insightsData} /> */}
          

          <section id="other products" className="mt-12 sm:mt-16 scroll-mt-24">
            <RelatedSolutions {...insights} />
            {/* <Resource
              heading="Explore Public Cloud Resources"
              paragraph="Discover best practices, guides, and insights to maximize your cloud investment."
              products={[
                {
                  title: "Public Cloud Adoption Guide",
                  description:
                    "Step-by-step strategies to migrate and scale your business on the cloud.",
                  image: "/images/public-cloud-guide.jpg",
                  link:""
                },
                {
                  title: "Case Study: Cloud Success",
                  description:
                    "Learn how enterprises achieved growth with Public Cloud.",
                  image: "/images/cloud-case-study.jpg",
                  link:""
                },
              ]}
            /> */}
          </section>
        </div>
      </div>

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
        <div className="max-w-[1400px] w-full mx-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default PublicCloud;


