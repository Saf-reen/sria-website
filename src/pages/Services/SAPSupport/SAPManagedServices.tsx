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
  Activity,
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

function SAPManagedServices() {
  const tabsData2 = [
  {
    icon: <Cloud className="w-10 h-10 text-white" />,
    heading: "Reduced total cost of ownership",
    description:
      "SAP managed services can help reduce maintenance costs and total cost of ownership (TCO).",
  },
  {
    icon: <Monitor className="w-10 h-10 text-white" />,
    heading: "Dedicated technical & functional assistance",
    description:
      "Better resource allocation within the company is made possible by technical and functional assistance boosting creativity and production.",
  },
  {
    icon: <Server className="w-10 h-10 text-white" />,
    heading: "Flexibility to scale",
    description:
      "Flexible contracting and data processing systems enable businesses to scale their SAP resources up or down as needed.",
  },
  {
    icon: <Shield className="w-10 h-10 text-white" />,
    heading: "High availability & guaranteed uptime",
    description:
      "Guaranteed uptime and high availability are possible with SAP managed services.",
  },
  {
    icon: <Settings className="w-10 h-10 text-white" />,
    heading: "Smart patch & upgrade management",
    description:
      "Database management, smart patch, upgrades and enhancements.",
  },
  {
    icon: <Activity className="w-10 h-10 text-white" />,
    heading: "Application & database security audits",
    description:
      "Routine database and application audits to make sure there are no vulnerabilities or non-compliances.",
  },
];
  const tabsData = [
  {
    icon: <Cloud className="w-10 h-10 text-black" />,
    heading: "SAP on Cloud Hosting",
    description:
      "Improved performance and lower operating expenses, adapting to shift company requirements.",
  },
  {
    icon: <Monitor className="w-10 h-10 text-black" />,
    heading: "SAP Performance Optimization",
    description:
      "Improve the cloud performance of your SAP systems with our customized services.",
  },
  {
    icon: <Server className="w-10 h-10 text-black" />,
    heading: "SAP Cloud Managed Services",
    description:
      "We handle the configuration of your SAP cloud for thorough and ongoing assistance.",
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
    "Resources",
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
      title: "Automated Compliance",
      description:
        "Handle export-import compliance effortlessly with automation.",
    },
    {
      title: "Global Scalability",
      description: "Supports international operations across regions.",
    },
    {
      title: "Integration Ready",
      description: "SAP certified and easily integrates with existing systems.",
    },
    {
      title: "Actionable Insights",
      description: "Detailed reports to inform better decisions.",
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
                      percentage="30%"
                      description="Reduction in direct and indirect expenses related to import-export activities within a year."
                    />
                    <StatCardStable
                      percentage="50%"
                      description="Improvement within the initial 6 months of implementation."
                    />
                    <StatCardStable
                      percentage="60%"
                      description="Productivity with seamless mobile integration in EXIM solution."
                    />
                  </div>
                </div>
              </section>
              <section id="services" className="mt-20 w-full scroll-mt-24">
                <div className="max-w-[1400px] w-full px-4 mx-auto">
                  <TabSection 
                  headingText="SAP services to support your cloud operations"
                   tabs={tabsData}
                  />
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

export default SAPManagedServices;
