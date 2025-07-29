import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import FloatingChat from "@/components/FloatingChat";
import { ArrowRight, Link } from "lucide-react";
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
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      title: "Transforming Business Operations With Innovative Solutions",
      readMoreLink: "/customerstories1",
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

  const customerReviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechCorp",
      rating: 5,
      review:
        "Outstanding service and incredible results. The team's dedication to excellence is evident in every aspect of their work. Highly recommend their services to anyone looking for top-tier solutions.",
      verified: true,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO, InnovateLabs",
      rating: 4.5,
      review:
        "Professional, efficient, and results-driven. They delivered exactly what was promised and more. The communication throughout the project was excellent and the final outcome exceeded expectations.",
      verified: true,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Marketing Director, GrowthCo",
      rating: 5,
      review:
        "Exceptional quality and attention to detail. The team's expertise shines through in every deliverable. Working with them has been a game-changer for our business operations and growth strategy.",
      verified: true,
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Founder, StartupX",
      rating: 4.5,
      review:
        "Innovative solutions and outstanding support. The technical expertise and strategic guidance provided has been invaluable to our company's success and continued growth in the market.",
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
          link: "#",
        },
        {
          title: "SAP Private Cloud",
          description:
            "Real-time analytics, intelligent automation, and a user-friendly interface.",
          link: "#",
        },
        {
          title: "SAP SuccessFactors",
          description: "Cloud-based HCM with next-gen business practices.",
          link: "#",
        },
        {
          title: "SAP S/4HANA",
          description:
            "Streamline transactions, analyze with Big Data, and predict smarter business decisions.",
          link: "#",
        },
        {
          title: "SAP Private Cloud",
          description:
            "Real-time analytics, intelligent automation, and a user-friendly interface.",
          link: "#",
        },
        {
          title: "SAP SuccessFactors",
          description: "Cloud-based HCM with next-gen business practices.",
          link: "#",
        },
      ],
    },

    {
      title: "Raapyd",
      icon: Cpu,
      items: [
        {
          title: "Vendor Management",

          description:
            "Systematic processes for onboarding vendors and contract negotiation.",
          link: "#",
        },
      ],
    },
    {
      title: "Hyland",
      icon: Layers,
      items: [
        {
          title: "Hyland ECM",
          description:
            "Enterprise content management for secure document workflows.",
          link: "#",
        },
      ],
    },
    {
      title: "Eerly AI",
      icon: Layers,
      items: [
        {
          title: "Vendor Management",

          description:
            "Systematic processes for onboarding vendors and contract negotiation.",
          link: "#",
        },
      ],
    },
    {
      title: "Automation Anywhere",
      icon: Layers,
      items: [
        {
          title: "Vendor Management",

          description:
            "Systematic processes for onboarding vendors and contract negotiation.",
          link: "#",
        },
      ],
    },
  ];

  const sapSolutions = [
    { title: "SAP Discovery & Evaluation" },
    { title: "SAP Implementation" },
    { title: "SAP Upgrade Services" },
    { title: "SAP S/4HANA Migration" },
    { title: "SAP Managed Services" },
  ];

  // sampleData.ts
  const sampleEvents = [
    {
      id: 1,
      image: "https://via.placeholder.com/300x200/4F46E5/FFFFFF?text=Event+1",
      title: "Tech Innovation Summit 2025",
      tag: "In-person",
      date: "May 28, 2025",
      venue: "Dubai",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/300x200/7C3AED/FFFFFF?text=Event+2",
      title: "Digital Transformation Conference",
      tag: "Virtual",
      date: "June 15, 2025",
      venue: "New York",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/300x200/059669/FFFFFF?text=Event+3",
      title: "AI & Machine Learning Workshop",
      tag: "Hybrid",
      date: "July 10, 2025",
      venue: "London",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/300x200/DC2626/FFFFFF?text=Event+4",
      title: "Cloud Computing Expo",
      tag: "In-person",
      date: "August 20, 2025",
      venue: "Singapore",
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
                  Accely offers top-tier SAP consulting services using refined
                  methodologies and innovation, thus creating a synergy of the
                  latest technology and vast accumulated experience. Renowned
                  for our technical expertise and rapid return on investment
                  (ROI), we serve small-medium businesses to Fortune 500
                  Companies. We deliver high-value, end-to-end solutions as an
                  SAP Value Added Reseller (VAR) partner.
                </p>

                <div className="mt-4 flex flex-col gap-2">
                  <p className="text-white flex items-center text-[16px]">
                    Know more about us <ArrowRight className="ml-2" />
                  </p>
                  <p className="text-white flex items-center text-[16px]">
                    Download corporate profile <ArrowRight className="ml-2" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-[#0F0F0F] py-10">
          <div className="max-w-[1400px] mx-auto px-4 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard
              percentage="480+"
              description="Projects Completed."
              delay={0.4}
            />
            <StatCard
              percentage="20+"
              description="Global Offices"
              delay={0.0}
            />
            <StatCard
              percentage="25+"
              description="Years of Experience"
              delay={0.6}
            />
            <StatCard
              percentage="1800+"
              description="Group Employees"
              delay={0.2}
            />
          </div>
        </div>
        <div className="bg-[#0F0F0F] w-full  py-10">
          <div className="max-w-[1400px] mx-auto ">
            <StrategicPartners />
          </div>
        </div>
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
                <p className="mt-2 text-yellow-500 flex items-center text-[16px] font-[Questrial,Arial,Verdana,Tahoma,sans-serif] font-normal">
                  Request a consultation
                  <ArrowRight className="ml-2" />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center py-6">
          <div className="flex flex-wrap justify-center  max-w-[1400px] px-4">
            {sapSolutions.map((solution, index) => {
              let IconComponent = Box;

              if (solution.title.toLowerCase().includes("discovery"))
                IconComponent = Search;
              else if (solution.title.toLowerCase().includes("implementation"))
                IconComponent = Rocket;
              else if (solution.title.toLowerCase().includes("upgrade"))
                IconComponent = ArrowUp;
              else if (solution.title.toLowerCase().includes("migration"))
                IconComponent = Repeat;
              else if (solution.title.toLowerCase().includes("managed"))
                IconComponent = Settings;

              return (
                <div
                  key={index}
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
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-20 py-20 bg-white w-full">
          <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center lg:items-start px-4 gap-10">
            <div className="w-full flex justify-between items-center">
              <h1 className="text-[2rem] sm:text-[2.8rem] md:text-[3.2rem] lg:text-[61px] font-[Questrial,Arial,Verdana,Tahoma,sans-serif] font-normal text-black leading-tight text-left">
                Industries we modernize
              </h1>
              <h1 className="text-yellow-500 flex items-center text-[16px] font-[Questrial,Arial,Verdana,Tahoma,sans-serif] font-normal flex-row gap-2 cursor-pointer text-right">
                Request a consultation
                <ArrowRight />
              </h1>
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
                <h1 className="mt-2 text-yellow-500 flex items-center text-[15px] sm:text-[16px] font-[Questrial,Arial,Verdana,Tahoma,sans-serif] font-normal flex-row gap-2 cursor-pointer">
                  Get in touch
                  <ArrowRight />
                </h1>
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
          <div className="max-w-[1400px] w-full mx-auto flex flex-col gap-16 px-0 sm:px-4 ">
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
            <div className="lg:w-[35%]">
              <h3 className="text-sm text-gray-400 mb-2">CEO Statement</h3>
              <h4 className="text-3xl sm:text-4xl md:text-[42px] font-semibold text-black mb-6 leading-tight">
                Innovating the Change
              </h4>

              <p className="text-gray-500 text-base mb-4 leading-relaxed">
                Accely uses Information Technology to make processes not just
                more efficient, but also much more effective. We look at
                automation as an opportunity to allow refined methodologies and
                innovation to create a synergy of the latest technology and vast
                accumulated experience. Once again, our differentiator is in the
                depth of technical knowledge, project execution, and
                problem-solving skills that enable us to provide high-value
                solutions, and rapid return on investment.
              </p>

              <p className="text-gray-800 text-base font-medium mt-2">
                - Mr. Nilesh Shah, CEO at Accely Group
              </p>
            </div>

            {/* Video Content */}
            <div className="lg:w-[65%]">
              <div className="w-full h-64 sm:h-80 md:h-[32rem] overflow-hidden  shadow-md bg-black">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="CEO Statement Video"
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>

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
                  className="h-46 sm:h-40 lg:h-40 mb-2 object-contain"
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
        <FloatingChat />
      </div>
    </div>
  );
};

export default Index;
