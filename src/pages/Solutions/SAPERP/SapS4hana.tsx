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

const tabs = [
  {
    icon: <Star className="w-10 h-10 text-yellow-500" />,
    title: "Live Tracking",
    description:
      "Monitor schemes, licenses, and letters of credit in real-time for better control and efficiency.",
  },
  {
    icon: <Globe className="w-10 h-10 text-blue-500" />,
    title: "Bank and Bond Management",
    description:
      "Handle bond and bank guarantee details seamlessly for various business purposes and requirements.",
  },
  {
    icon: <Shield className="w-10 h-10 text-green-500" />,
    title: "Seamless Integration",
    description:
      "Effortlessly integrate with SAP logistics, SD/MM, and financial modules to streamline financial accounting, sales, distribution, and material management.",
  },
  {
    icon: <Rocket className="w-10 h-10 text-purple-500" />,
    title: "Efficient Letter of Credit Handling",
    description:
      "Coordinate letters of credit for import and export, including managing bank limits, acceptance, and amendments.",
  },
  {
    icon: <BarChart2 className="w-10 h-10 text-pink-500" />,
    title: "Enhanced Operational Efficiency",
    description:
      "Optimize business operations and import processes with reduced manual input and increased automation.",
  },
  {
    icon: <Database className="w-10 h-10 text-orange-500" />,
    title: "Streamlined Documentation Process",
    description:
      "Generate pre- and post-shipment documents based on Letter of Credit conditions for efficient customs clearance.",
  },
  {
    icon: <Users className="w-10 h-10 text-red-500" />,
    title: "Error Reduction",
    description:
      "Coordinate with your Automate import and export processes to minimize manual errors, enhancing efficiency and accuracy. ",
  },
  {
    icon: <Settings className="w-10 h-10 text-gray-500" />,
    title: "Custom Banking Transparency",
    description:
      "Tailor the experience Access critical data and insights to ensure transparency in the import-export procedures.",
  },
];

const sampleSolutions = [
  {
    title: "Supervised infrastructure, migration, and equipping",
    heading: "SAP security compliance",
    description:
      "Our SAP security services focus on data protection, security plans, and vulnerability assessments. Our strong governance approach offers role-based access management.",
    points: [
      "Round-the-clock Security Operation Center (SOC).",
      "Up-to-date dashboards for events and alerts.",
      "Adherence to geographic and industry-specific compliance rules.",
      "Ensures improved SAP security.",
    ],
  },
  {
    title: "Regular monitoring and auditing",
    heading: "Empower Your Workforce",
    description:
      "Drive workforce transformation and improve employee experience.",
    points: [
      "HR automation",
      "Talent management",
      "Performance tracking",
      "Employee engagement",
    ],
  },
  {
    title: "Management and quality",
    heading: "Empower Your Workforce",
    description:
      "Drive workforce transformation and improve employee experience.",
    points: [
      "HR automation",
      "Talent management",
      "Performance tracking",
      "Employee engagement",
    ],
  },
  {
    title: "Downtime management and business progression",
    heading: "Empower Your Workforce",
    description:
      "Drive workforce transformation and improve employee experience.",
    points: [
      "HR automation",
      "Talent management",
      "Performance tracking",
      "Employee engagement",
    ],
  },
  {
    title: "SAP implementation and support",
    heading: "Empower Your Workforce",
    description:
      "Drive workforce transformation and improve employee experience.",
    points: [
      "HR automation",
      "Talent management",
      "Performance tracking",
      "Employee engagement",
    ],
  },
  {
    title: "SAP security compliance",
    heading: "Empower Your Workforce",
    description:
      "Drive workforce transformation and improve employee experience.",
    points: [
      "HR automation",
      "Talent management",
      "Performance tracking",
      "Employee engagement",
    ],
  },
  // Add more items as needed
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
  heading: "What is SAP S/4HANA?",
  description:
    "SAP S/4HANA is a next-generation ERP suite offering real-time analytics, streamlined workflows, and enhanced user experience for optimized business processes.",
  imageUrl: "/Solutions/Banner-Image.png",
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
  heading: "Explore related business solutions",
  description:
    "From strategy to execution, find the perfect solution to accelerate your journey toward success.",
  ctaText: "Talk to an expert",
  ctaLink: "/contact",
  solutions: [
    { title: "SAP S/4HANA Public Cloud", href: "/solutions/public-cloud" },
    { title: "SAP S/4HANA Private Cloud", href: "/solutions/private-cloud" },
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
                <Requesademobtn text="Book a Consultation" />
              </LeftSection>
            }
            right={
              <RightSection>
                <img
                  src="/Solutions/Banner-Image.png"
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
              <FeatureTabs />
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
                  title: "Trade Guide",
                  description:
                    "Comprehensive guide to international trade practices.",
                  image: "/images/trade-guide.jpg",
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

export default SapS4hana;
