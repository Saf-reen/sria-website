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

function SAPManagedServices() {
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
    "Overview",
    "Features",
    "Insights",
    "Benifits",
    "Find Your Answers",
    "Other Products",
    "Resources",
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
    <>
      <div className="scroll-smooth">
        <Navigation />

        {/* Hero Pinned */}
        <ImageOverlay
          imageUrl="/your-background.jpg"
          title="Accelerate Your EXIM Journey"
          description="Automate your export-import processes with a certified SAP solution designed for scale."
        />

        {/* Scrollable content below */}
        <section className=" sticky top-0 z-20 bg-black py-20 px-6 relative z-20">
          <div className="max-w-7xl mx-auto">
            {/* Heading + Description */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
              <h2 className="text-4xl font-bold text-white w-full md:w-1/2">
                Accelerated EXIM Solution Advantages
              </h2>
              <p className="text-lg text-gray-300 w-full md:w-1/2">
                The SAP Certified Accelerated EXIM Solution brings streamlined
                automation, global compliance coverage, and seamless SAP
                integration to scale your export-import operations with
                efficiency and clarity.
              </p>
            </div>

            {/* Highlight cards */}
            <div className="flex flex-wrap gap-6">
              {highlightData.map((item, idx) => (
                <HighlightCard key={idx} {...item} />
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="  sticky top-0 z-20   bg-white ">
          <div className="   flex flex-col lg:flex-row w-full md:max-w-[100vw] lg:max-w-[80vw]  mt-20 mx-auto px-4">
            <SidebarMenu menuItems={menuItems} />

            <div className="w-full lg:w-4/5 bg-gray-50 min-h-screen p-6">
              {/* Overview */}
              <section id="overview" className="scroll-mt-24">
                <h1 className="mt-5 text-6xl font-bold">
                  What is Accelerated EXIM Solution?
                </h1>
                <p className="mt-12 text-2xl w-3/4 text-gray-500">
                  Our Accelerated EXIM solution is SAP certified, seamlessly
                  integrating with SAP to cover a wide range of export-import
                  processes at an affordable cost. Operating globally, we ensure
                  complete support and expert advice on legal, local, and
                  statutory needs.
                </p>
              </section>
              {/* Features */}
              <section id="features" className="mt-5 scroll-mt-24">
                <div className="flex justify-center px-4 py-10">
                  <div className="flex gap-6 flex-wrap md:flex-nowrap max-w-7xl w-full justify-center">
                    <FeatureCard
                      title="SAP Certified"
                      description="Officially certified by SAP, ensuring seamless and efficient integration with SAP systems."
                    />
                    <FeatureCard
                      title="Global Support"
                      description="With a robust global operation..."
                    />
                    <FeatureCard
                      title="EXIM Expertise"
                      description="Our EXIM experts offer implementation advice..."
                    />
                  </div>
                </div>
              </section>
              {/* Future Sections */}
              <section id="features" className="mt-20  w-3/4 w- scroll-mt-24">
                <h2 className="text-4xl font-semibold">Key features</h2>
                <p className="mt-4 text-2xl text-gray-500">
                  Accelerated EXIM solution offers license management, export
                  incentives, expense tracking, and automation.
                </p>
                <section className="my-10 px-2">
                  <FeatureTabs />
                </section>
              </section>
              <section id="insights" className="mt-20 scroll-mt-24">
                <h2 className="text-4xl font-semibold">
                  Insights that define value
                </h2>
                <div className="w-full px-4 py-10 flex flex-wrap justify-center gap-10 bg-white">
                  <StatCard
                    percentage="25%"
                    description="Reduction in direct and indirect expenses related to import-export activities within a year."
                  />
                  <StatCard
                    percentage="50%"
                    description="Improvement within the initial 6 months of implementation."
                  />
                  <StatCard
                    percentage="100%"
                    description="Productivity with seamless mobile integration in EXIM solution."
                  />
                </div>

                <div className="bg-gray-500 mt-10 w-full flex items-between">
                  <h1 className="text-white p-10 w-3/4">
                    Streamline your Export-Import operations with the SAP
                    Certified Accelerated EXIM solution. Get a hold of complete
                    control, visibility, and ease in compliance and
                    documentation procedures.
                  </h1>
                  <div className="p-10 ">
                    <Requesademobtn text="Book a demo" />
                  </div>
                </div>
              </section>
              <section id="benifits" className="mt-20 w-full scroll-mt-24">
                <h2 className="text-4xl w-3/4 font-semibold">
                  Unlock powerful benefits
                </h2>
                <p className="mt-4 text-2xl w-3/4 text-gray-500">
                  Accelerated EXIM solution enhances import-export management
                  with tracking, SAP integration, and efficiency.
                </p>

                <div className="max-w-7xl mx-auto px-4 py-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {tabs.map((tab, idx) => (
                      <InfoTab key={idx} {...tab} />
                    ))}
                  </div>
                </div>
              </section>
              <section
                id="find your answers"
                className="mt-20 w-full scroll-mt-24"
              >
                <FAQSection faqs={faqs} />
              </section>{" "}
              <section id="other products" className="mt-20 scroll-mt-24">
                <div className="bg-gray-500 mt-10 w-full p-10 text-white">
                  {/* Heading and button aligned horizontally */}
                  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                    <h1 className="text-3xl lg:text-4xl font-semibold">
                      Empowering global trade for businesses
                    </h1>
                    <Requesademobtn text="Book a demo" />
                  </div>

                  {/* Paragraph below the heading and button */}
                  <p className="mt-6 text-lg lg:text-xl w-full lg:w-3/4 text-white">
                    Streamline your Export-Import operations with the SAP
                    Certified Accelerated EXIM solution. Get a hold of complete
                    control, visibility, and ease in compliance and
                    documentation procedures.
                  </p>
                </div>
              </section>
              <section id="other products" className="mt-20 scroll-mt-24">
                <ProductRange
                  heading="Explore other range of products"
                  paragraph="Discover products that complement your needs and drive business success."
                  products={productData}
                />
              </section>
              <section id="resource" className="mt-10 scroll-mt-24">
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
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default SAPManagedServices;
