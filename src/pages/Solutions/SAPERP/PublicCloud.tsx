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
      "Access your ERP system from anywhere with enterprise-grade cloud performance.",
  },
  {
    icon: <Zap className="w-10 h-10 text-yellow-500" />,
    title: "Fast Deployment",
    description:
      "Go live in weeks with predefined content and guided configuration.",
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
  "Resources",
];

const sapData = {
  heading: "What is SAP ERP Public Cloud?",
  description:
    "SAP ERP Public Cloud is a scalable, SaaS-based ERP system offering standardized best practices, rapid deployment, automatic updates, and lower TCO — ideal for fast-growing businesses and subsidiaries.",
  imageUrl: "/Solutions/erp-public-cloud.webp",
  imageAlt: "Cloud ERP illustration",
  items: [
    {
      title: "Standardized Processes",
      highlight: "Built-in Industry Best Practices",
      description:
        "Accelerate time-to-value with ready-to-run business processes designed to streamline operations.",
    },
    {
      title: "Automatic Updates",
      highlight: "Always Up-to-Date",
      description:
        "Benefit from quarterly innovations and regular updates with zero manual effort or downtime.",
    },
    {
      title: "Rapid Deployment",
      description:
        "Get started in weeks using guided configuration and preconfigured content, without long implementation cycles.",
    },
  ],
};

const customerStories = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
    title: "Transforming Businesses with Cloud Adoption",
    readMoreLink: "#",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
    title: "Driving Innovation with Public Cloud Solutions",
    readMoreLink: "#",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop",
    title: "Scaling Enterprises Globally with Cloud",
    readMoreLink: "#",
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
      "Leverage out-of-the-box best practices across finance, sales, and procurement for quick go-live.",
    image: "/ERPCloud/best-practices.png",
  },
  {
    title: "Automatic Quarterly Updates",
    description:
      "Stay current with new features and legal compliance through seamless background updates.",
    image: "/ERPCloud/updates.png",
  },
  {
    title: "Guided Configuration",
    description:
      "Easily tailor the system to your business needs using intuitive setup tools without coding.",
    image: "/ERPCloud/configuration.png",
  },
  {
    title: "Global Compliance",
    description:
      "Operate confidently across regions with localized tax, legal, and regulatory support.",
    image: "/ERPCloud/compliance.png",
  },
  {
    title: "Subscription-Based Pricing",
    description:
      "Lower your upfront costs with predictable pricing and no infrastructure management.",
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
                <Requesademobtn text="Book a Consultation" />
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
                mainDescription="Public Cloud delivers scalability, cost optimization, and business agility to drive digital transformation."
                ctaText="Get a Consultation"
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
                description="Of enterprises use public cloud services for their operations."
              />
              <StatCardStable
                percentage="$1T"
                description="Projected global public cloud market size by 2030."
              />
              <StatCardStable
                percentage="60%"
                description="Average cost savings achieved by migrating to cloud."
              />
            </div>

            <div className="bg-black mt-8 sm:mt-10 w-full flex flex-col lg:flex-row items-center lg:items-start rounded-lg overflow-hidden">
              <h1 className="text-white text-xl sm:text-2xl md:text-[27px] p-4 lg:p-10 w-full lg:w-3/4 leading-relaxed">
                Unlock innovation and business agility with secure and scalable
                Public Cloud solutions. Accelerate your digital journey today.
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
                Key Features of Public Cloud
              </h2>
              <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-500">
                Experience unmatched flexibility, security, and performance with
                our Public Cloud offerings.
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
              Optimize costs, scale seamlessly, and access cutting-edge
              technologies with our Public Cloud solutions.
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
          <InsightsSection insights={insightsData} />
          <RelatedSolutions {...insights} />

          <section id="resources" className="mt-12 sm:mt-16 scroll-mt-24">
            <Resource
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
            />
          </section>
        </div>
      </div>

      {/* <div className="p-4 lg:p-8 rounded-lg mt-8">
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
      </div> */}

      <div className="w-full bg-black">
        <div className="max-w-[1400px] w-full mx-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default PublicCloud;


