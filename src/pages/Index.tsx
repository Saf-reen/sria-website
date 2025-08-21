import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import FloatingChat from "@/components/FloatingChat";
import { ArrowRight, Link } from "lucide-react";
import { Link as RouterLink } from "react-router-dom";

import FeatureTabsWithText from "@/components/FeatureTabsWithText";
import Requesademobtn from "@/components/Requesademobtn";
import StatCard from "@/components/StatCard";
import { Cloud, Cpu, Layers } from "lucide-react";
import {
  FaSearch,
  FaRocket,
  FaArrowUp,
  FaSyncAlt,
  FaCog,
} from "react-icons/fa";
import StrategicPartners from "@/components/StartegicPartners";
import { Search, Rocket, ArrowUp, Repeat, Settings, Box } from "lucide-react";
import CombinedAnimatedFeatures from "@/components/CombinedAnimatedFeatures";
import SolutionDropdownSection from "@/components/SolutionDropdownSection";
import { it } from "node:test";
import {
  CustomerStories,
  Testimonials,
} from "@/components/CustomerStoriesTestimonials";
import EventsNewsComponent from "@/components/EventsNewsComponent";
import { link } from "fs";

const Index = () => {
  interface Step {
    icon: React.ReactNode;
    title: string;
    href: string;
  }
  interface SAPStepsSectionProps {
    sapSteps: Step[];
  }
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

const customerReviews = [
  {
    id: 1,
    name: "V. Jay",
    role: "Chairman, LVK Pharma",
    rating: 5,
    review:
      "Transitioning from pen and paper to a fully digital CRM with Odoo was a major shift for us. The team made the process seamless and supported us every step of the way. Their professionalism and technical depth have transformed our operations.",
    verified: true,
  },
  {
    id: 2,
    name: "Vidyasagar",
    role: "IT Head, Patil Group",
    rating: 4.5,
    review:
      "From SAP configuration to fund management and PDF OCR automation, their solutions have helped us scale faster and smarter. The team is responsive, strategic, and committed to long-term value. Excellent delivery across all modules.",
    verified: true,
  },
  {
    id: 3,
    name: "Mallesh",
    role: "Owner, 7Hills Restaurant",
    rating: 5,
    review:
      "Our digital transformation has been incredible. From a modern website to real-time POS and inventory control, everything just works smoothly. Guests are happier, and so is my staff. I'm thankful for their vision and execution.",
    verified: true,
  },
];


  const solutionSections = [
    {
      title: "SAP",
      icon: Cloud,
      items: [
        {
          title: "SAP S/4HANA",
          description:
            "Streamline transactions, analyze with Big Data, and predict smarter business decisions.",
          link: "/solutions/sap-s4hana",
        },
        {
          title: "SAP Private Cloud",
          description:
            "Real-time analytics, intelligent automation, and a user-friendly interface.",
          link: "/solutions/private-cloud",
        },
        {
          title: "SAP SuccessFactors",
          description: "Cloud-based HCM with next-gen business practices.",
          link: "/solutions/successfactors",
        },
        {
          title: "SAP CPI",
          description:
            "Streamline transactions, analyze with Big Data, and predict smarter business decisions.",
          link: "/solutions/cpi",
        },
        {
          title: "SAP Public Cloud",
          description:
            "Real-time analytics, intelligent automation, and a user-friendly interface.",
          link: "/solutions/public-cloud",
        },
      ],
    },

    {
      title: "Odoo",
      icon: Cpu,
      items: [
        {
          title: "Odoo Implementation",

          description:
            "All-in-one open-source business management suite with integrated apps for CRM, accounting, inventory, HR, and more.",
          link: "/odooservices/implementation",
        },
      ],
    },
    // {
    //   title: "Hyland",
    //   icon: Layers,
    //   items: [
    //     {
    //       title: "Hyland ECM",
    //       description:
    //         "Enterprise content management for secure document workflows.",
    //       link: "#",
    //     },
    //   ],
    // },
    // {
    //   title: "Eerly AI",
    //   icon: Layers,
    //   items: [
    //     {
    //       title: "Vendor Management",

    //       description:
    //         "Systematic processes for onboarding vendors and contract negotiation.",
    //       link: "#",
    //     },
    //   ],
    // },
    // {
    //   title: "Automation Anywhere",
    //   icon: Layers,
    //   items: [
    //     {
    //       title: "Vendor Management",

    //       description:
    //         "Systematic processes for onboarding vendors and contract negotiation.",
    //       link: "#",
    //     },
    //   ],
    // },
  ];

  const sapSolutions = [
    { title: "SAP Managed Services ", link: "/sapmanagedservices/" },
    { title: "SAP S/4HANA Implementation", link: "/sapimplement" },
    { title: "SAP  S/4HANA Consulting Services", link: "/consulting" },
    { title: "SAP Business Technology", link: "/businesstech/" },
    { title: "Odoo", link: "/odooservices/implementation/" },
  ];

  // sampleData.ts
const sampleEvents = [
  {
    id: 1,
    image: "/Events/sapevent.jpg", // Replace with your real banner if available
    title: "SAP Inside Track 2025 – Edition 2",
    tag: "In-person",
    date: "August 23, 2025",
    venue: "India (Venue TBA)",
  },
  
  {
    id: 2,
    image: "/Events/launch.jpg", // Use real photo of the office or launch event banner
    title: "New Office Launch – Mulugu District, Hyderabad",
    tag: "In-person",
    date: "August 11, 2025",
    venue: "Mulugu, Hyderabad",
  },
];



  const sampleNews = [
    {
      id: 1,
      title:
        "Leading Pharma Manufacturer in US Embarks on Digital Transformation with SAP S/4HANA and Commerce Platform",
      tag: "United States",
      description:
        "Major expansion announced across multiple continents to serve growing client base.",
      link: "/news1",
    },
    {
      id: 2,
      title: "Partnership with Leading Tech Giants",
      tag: "Europe",
      description:
        "Strategic partnerships formed to enhance service delivery and innovation capabilities.",
      link: "/news1",
    },
    {
      id: 3,
      title: "Award for Excellence in Digital Solutions",
      tag: "Asia",
      description:
        "Recognition received for outstanding contributions to digital transformation initiatives.",
      link: "/news1",
    },
    {
      id: 4,
      title: "New Research & Development Center",
      tag: "Canada",
      description:
        "State-of-the-art facility launched to drive innovation in emerging technologies.",
      link: "/news1",
    },
  ];

  const useIsLargeScreen = () => {
    const [isLarge, setIsLarge] = useState(false);

    useEffect(() => {
      const checkScreenSize = () => setIsLarge(window.innerWidth >= 1024);
      checkScreenSize(); // Run once on mount

      window.addEventListener("resize", checkScreenSize);
      return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    return isLarge;
  };

  const isLargeScreen = useIsLargeScreen();
  return (
    <div className="w-full min-h-screen  font-[Questrial,Arial,Verdana,Tahoma,sans-serif] font-normal overflow-x-hidden lg:overflow-x-visible">
      <Navigation enableScrollEffect={isLargeScreen} />
      <div className="h-32 w-full  bg-gradient-to-b from-transparent to-[#0F0F0F]">
        <div className=" bg-gradient-to-b from-transparent to-[#0F0F0F]">
          <Hero />
        </div>
        <div className="bg-[#0F0F0F] py-20  w-full">
          <div className="max-w-[1450px] mx-auto flex flex-col lg:flex-row items-center lg:items-start px-4 gap-10">
            {/* Left Column */}
            <div className="w-full  lg:w-1/2 flex justify-center lg:justify-end">
              <h1 className="text-[42px] lg:text-[61px] text-white font-bold font-[Questrial,Arial,Verdana,Tahoma,sans-serif] text-left">
                Innovation begins here
              </h1>
            </div>

            {/* Right Column */}
            <div className="w-full lg:w-1/2 ">
              <div className="w-full lg:w-full ">
                <p className="text-[18px] lg:text-[21px] text-[rgba(255,255,255,0.72)] font-[Questrial,Arial,Verdana,Tahoma,sans-serif] font-normal">
                  Sria Infotech offers top-tier SAP consulting services using
                  refined methodologies and innovation, creating a synergy of
                  cutting-edge technology and extensive industry experience.
                  Renowned for our technical expertise and swift ROI, we serve
                  businesses ranging from emerging enterprises to globally
                  recognized industry leaders. We deliver high-value, end-to-end
                  solutions tailored to meet diverse business needs.
                </p>

                <div className="mt-4 flex flex-col gap-2">
                  <RouterLink
                    to="/aboutus"
                    className="text-white flex items-center text-[16px]"
                  >
                    Know more about us <ArrowRight className="ml-2" />
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-[#0F0F0F] py-10">
          <div className="max-w-[1400px] mx-auto px-4 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard
              percentage="20+"
              description="Projects Completed."
              delay={0.4}
            />
            <StatCard
              percentage="4+"
              description="Global Offices"
              delay={0.0}
            />
            <StatCard
              percentage="5+"
              description="Years of Experience"
              delay={0.6}
            />
            <StatCard
              percentage="50+"
              description="Group Employees"
              delay={0.2}
            />
          </div>
        </div>
        {/* <div className="bg-[#0F0F0F] w-full  py-10">
          <div className="max-w-[1400px] mx-auto ">
            <StrategicPartners />
          </div>
        </div> */}
        <div className="mt-20 py-20 bg-white w-full">
          <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center lg:items-start px-4 gap-10">
            {/* Left Column */}
            <div className="w-full lg:w-1/2 flex justify-start lg:justify-start">
              <h1 className="text-[42px] lg:text-[61px] text-black font-[Questrial,Arial,Verdana,Tahoma,sans-serif] font-normal text-left">
                Explore our services
              </h1>
            </div>

            {/* Right Column */}
            <div className="w-full lg:w-1/2">
              <div className="w-full">
                <p className="pt-5 pb-8 text-[rgba(60,60,67,0.6)] text-[18px] lg:text-[21px] font-[Questrial,Arial,Verdana,Tahoma,sans-serif] font-normal">
                  Our SAP consulting services transcend traditional boundaries,
                  empowering you to envision, plan, and implement transformative
                  solutions.
                </p>
                <RouterLink
                  to="/contactus"
                  className="mt-2 text-yellow-500 flex items-center text-[16px] font-[Questrial,Arial,Verdana,Tahoma,sans-serif] font-normal"
                >
                  Request a consultation
                  <ArrowRight className="ml-2" />
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center py-6">
          <div className="flex flex-wrap justify-center  max-w-[1400px] px-4">
            {sapSolutions.map((solution, index) => {
              let IconComponent = Box;

              if (solution.title.toLowerCase().includes("managed"))
                IconComponent = Search;
              else if (solution.title.toLowerCase().includes("implementation"))
                IconComponent = Rocket;
              else if (solution.title.toLowerCase().includes("upgrade"))
                IconComponent = ArrowUp;
              else if (solution.title.toLowerCase().includes("business"))
                IconComponent = Repeat;
              else if (solution.title.toLowerCase().includes("odoo"))
                IconComponent = Settings;

              return (
                <RouterLink
                  key={index}
                  to={solution.link || "#"}
                  className="group w-full sm:w-[260px] h-auto min-h-[150px] flex flex-col justify-between bg-[rgb(247,247,247)] border border-gray-300 text-black p-6 transition-all duration-300 hover:bg-white hover:scale-[1.03] hover:z-10 cursor-pointer"
                >
                  <div>
                    <IconComponent className="w-8 h-8 text-yellow-500 mb-4" />
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-lg font-[Questrial,Arial,Verdana,Tahoma,sans-serif] font-normal break-words whitespace-normal leading-snug">
                        {solution.title}
                      </h3>
                      <span className="text-xl shrink-0">→</span>
                    </div>
                  </div>
                </RouterLink>
              );
            })}
          </div>
        </div>
        <div className="mt-20 py-10 bg-white w-full">
          <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center lg:items-start px-4 gap-10">
            <div className="w-full flex justify-between items-center">
              <h1 className="text-[2rem] sm:text-[2.8rem] md:text-[3.2rem] lg:text-[61px] font-[Questrial,Arial,Verdana,Tahoma,sans-serif] font-normal text-black leading-tight text-left">
                Industries we modernize
              </h1>
              <RouterLink
                to="/contactus"
                className="text-yellow-500 flex items-center text-[16px] font-[Questrial,Arial,Verdana,Tahoma,sans-serif] font-normal flex-row gap-2 cursor-pointer text-right"
              >
                Request a consultation
                <ArrowRight />
              </RouterLink>
            </div>
          </div>
        </div>
        <div className="w-full bg-white">
          <div className="max-w-[1400px] mx-auto px-4 ">
            <CombinedAnimatedFeatures />
          </div>
        </div>
        <div className="mt-5 py-10 bg-white w-full">
          {" "}
          {/* Outside wrapper: full width & background color */}
          <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center lg:items-start px-4 ">
            {/* --- LEFT --- */}
            <div className="w-full lg:w-3/4 flex justify-start items-start mb-8 lg:mb-0">
              <h1 className="text-[2rem] sm:text-[2.8rem] md:text-[3.2rem] lg:text-[61px] font-[Questrial,Arial,Verdana,Tahoma,sans-serif] font-normal text-black leading-tight">
                Redefining future
              </h1>
            </div>
            {/* --- RIGHT --- */}
            <div className="w-full lg:w-2/4 flex flex-col">
              <div className="w-full lg:w-full">
                <h1 className="pt-2 pb-6 text-[rgba(60,60,67,0.6)] text-base sm:text-lg md:text-xl font-[Questrial,Arial,Verdana,Tahoma,sans-serif] font-normal">
                  Being an SAP consulting company, we are a bunch of innovators
                  passionate about creating technologies...
                </h1>
                <RouterLink
                  to="/contactus"
                  className="mt-2 text-yellow-500 flex items-center text-[15px] sm:text-[16px] font-[Questrial,Arial,Verdana,Tahoma,sans-serif] font-normal flex-row gap-2 cursor-pointer"
                >
                  Get in touch
                  <ArrowRight />
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-white flex flex-row mb-20 ">
          <div className="max-w-[1400px] mx-auto w-full px-4 bg-white">
            <SolutionDropdownSection sections={solutionSections} />
          </div>
        </div>
        <div className="mb-20 w-full bg-black flex flex-col lg:flex-row justify-around">
          <div className="max-w-[1400px] w-full mx-auto flex flex-col gap-16 px-2 sm:px-4 ">
            <CustomerStories stories={customerStories} />
            <Testimonials
              reviews={customerReviews}
              overallRating={4.9}
              totalStars={5}
              companyName="Sria Infotech"
              poweredByLogo="https://via.placeholder.com/120x30/6366f1/ffffff?text=Powered+By"
            />
          </div>
        </div>
        <div className="mb-20 w-full bg-white flex flex-col lg:flex-row justify-around">
          <div className="max-w-[1400px]  w-full mx-auto flex flex-col gap-16 px-4 sm:px-6 lg:px-0">
            <EventsNewsComponent events={sampleEvents} news={sampleNews} />
          </div>
        </div>

        <div className="w-full flex justify-center px-4 sm:px-6 md:px-8 mt-8">
          <div className="w-full max-w-[1400px] flex flex-col lg:flex-row gap-8 bg-gray-100 p-6 sm:p-8 rounded-lg">
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
                — Ashwini Ganji, Chairman of SRIA Group of Companies
              </p>
            </div>

            {/* Video Content */}
            <div className="lg:w-[55%]">
              <div className="w-full h-64 sm:h-80 md:h-[32rem] overflow-hidden  shadow-md bg-black">
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

     

        <div className="w-full mt-5 bg-black">
          {" "}
          {/* Full width container */}
          <div className="max-w-[1400px] w-full mx-auto">
            {" "}
            {/* Centered max width container */}
            <Footer />
          </div>
        </div>
        <FloatingChat />
      </div>
    </div>
  );
};

export default Index;
