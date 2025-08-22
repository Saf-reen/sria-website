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
} from "lucide-react";

import FAQSection from "@/components/FAQSection";

import ProductRange from "@/components/ProductRange";
import Resource from "@/components/Resource";
import WorldMap from "@/components/aboutus/WorldMap";
import BeautifulParallaxTailwind from "@/components/BeautifulParallaxTailwind";
import Footer from "@/components/Footer";
import StatCardStable from "@/components/StatCardStable";
import ContactImageOverlay from "@/components/ContactImageOverlay";
import TeamSection from "@/components/TeamSection";
import HeroSectionWithLinks from "@/components/HeroSectionWIthLInks";

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

const menuItems = [
  "Overview",
  "Features",
  "Insights",
  "Benefits",
  "Find Your Answers",
  "Other Products",
  "Resources",
];

function LeaderShip() {
  return (
    <div className="w-full min-h-screen">
      <Navigation enableScrollEffect={true} />
      <HeroSectionWithLinks
        imageUrl="/leadership.jpg"
        title="Meet leadership team"
        links={[
          { label: "About us", href: "/aboutus" },
          { label: "Careers", href: "/about/careers" },
        ]}
      />

      <TeamSection />
      <div className="w-full bg-black h-[100px]  relative z-10 text-white flex items-center p-4 justify-center">
        <div className="w-[1400px] flex flex-row justify-between items-center">
          <h1 className="text-[21px]">Learn about Sria Infotech and what we do</h1>
          <Link to="/contactus">
          <Requesademobtn text="Get in Touch" />
          </Link>
        </div>
      </div>

      <div className="w-full flex justify-center bg-white relative z-10 p-4 sm:p-6 md:p-8 ">
        <div className="w-full max-w-[1400px] flex flex-col md:flex-row gap-8 bg-gray-100 p-6 sm:p-8 rounded-lg">
          {/* Text Content */}
          <div className="lg:w-[45%]">
            <h3 className="text-sm text-gray-400 mb-2">Chairman's Statement</h3>
            <h4 className="text-3xl sm:text-4xl md:text-[42px] font-semibold text-black mb-6 leading-tight">
              Innovating the Change
            </h4>

            <p className="text-gray-500 text-base mb-4 leading-relaxed">
              At Sria Infotech, we believe technology is more than just a tool—it is a force for empowerment and transformation.
From our humble beginnings to where we stand today, our journey has always been driven by a single purpose: to deliver innovation with impact. We take pride not only in building ERP and digital solutions, but also in creating opportunities that uplift communities, empower rural talent, and bridge the digital divide.
In today’s fast-changing world, success depends on agility, inclusiveness, and resilience. These values are at the core of our philosophy—Smart, Resilient, Inclusive, Agile (SRIA)—guiding us in every decision and every partnership.
As Chairman, I envision Sria Infotech as a company that not only enables businesses to thrive but also shapes the future of young talent by preparing them for the AI-driven era of innovation. With strong partnerships, dedicated teams, and a relentless commitment to excellence, we are confident of building a brighter, more sustainable future.
Together, let us lead with purpose, innovate with passion, and grow with integrity.
            </p>
            <p className="text-gray-800 text-base font-medium mt-2">
              — Ashwini Ganji, Chairman of SRIA Group of Companies
            </p>
          </div>

          {/* Video Content */}
          <div className="lg:w-[55%]">
            <div className="w-full h-64 sm:h-80 md:h-[32rem] overflow-hidden rounded-md shadow-md bg-black">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/SNeFDUwpNoY"
                title="CEO Statement Video"
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 lg:p-8 w-full bg-white relative z-10 ">
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
      <div className="w-full  relative z-10 bg-black">
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

export default LeaderShip;
