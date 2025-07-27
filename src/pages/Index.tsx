import React from "react";
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
    },
    {
      id: 2,
      title: "Partnership with Leading Tech Giants",
      tag: "Europe",
      description:
        "Strategic partnerships formed to enhance service delivery and innovation capabilities.",
    },
    {
      id: 3,
      title: "Award for Excellence in Digital Solutions",
      tag: "Asia",
      description:
        "Recognition received for outstanding contributions to digital transformation initiatives.",
    },
    {
      id: 4,
      title: "New Research & Development Center",
      tag: "Canada",
      description:
        "State-of-the-art facility launched to drive innovation in emerging technologies.",
    },
  ];

  return (
    <div className="w-full min-h-screen font-[Questrial,Arial,Verdana,Tahoma,sans-serif] font-normal">
      <Navigation enableScrollEffect={true} />

      <div className="h-32 w-full  bg-gradient-to-b from-transparent to-[#0F0F0F]">
        <Hero />
        <div className="relative z-20 py-20 bg-[#0F0F0F] w-full flex flex-row justify-around">
          <div className="w-1/2 flex justify-center items-start">
            <h1 className="text-[61px] font-[Questrial,Arial,Verdana,Tahoma,sans-serif] font-normal font-bold text-white ">
              Innovation begins here
            </h1>
          </div>
          <div className=" w-1/2 flex flex-col ">
            <div className="w-3/4 ">
              <h1 className="text-[rgba(255,255,255,0.72)]  font-[Questrial,Arial,Verdana,Tahoma,sans-serif] font-normal text-[21px]">
                Accely offers top-tier SAP consulting services using refined
                methodologies and innovation, thus creating a synergy of the
                latest technology and vast accumulated experience. Renowned for
                our technical expertise and rapid return on investment (ROI), we
                serve small-medium businesses to Fortune 500 Companies. We
                deliver high-value, end-to-end solutions as an SAP Value Added
                Reseller (VAR) partner.
              </h1>
              <div className="mt-4 flex flex-col gap-2">
                <h1 className="text-white flex flex-row text-[16px]">
                  Know more about us
                  <ArrowRight />
                </h1>
                <h1 className="text-white flex flex-row text-[16px]">
                  Download corporate profile
                  <ArrowRight />
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-[#0F0F0F] flex justify-center">
          <div className="w-3/4 px-4 py-10 flex flex-wrap justify-around gap-10 bg-[#0F0F0F]">
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

        <div className="bg-[#0F0F0F] pt-10 pb-20">
          <StrategicPartners />
        </div>

        <div className="mt-20  py-20 bg-white w-full flex flex-row  ">
          <div className="w-3/4 flex justify-center items-start">
            <h1 className="text-[61px]  font-[Questrial,Arial,Verdana,Tahoma,sans-serif] font-normal  text-black ">
              Explore our services
            </h1>
          </div>
          <div className=" w-2/4flex flex-col ">
            <div className="w-3/4">
              <h1 className=" pt-5 pb-8 text-[rgba(60,60,67,0.6)] text-[21px] font-[Questrial,Arial,Verdana,Tahoma,sans-serif] font-normal">
                Our SAP consulting services transcend traditional boundaries,
                empowering you to envision, plan, and implement transformative
                solutions.
              </h1>
              <h1 className="mt-2 text-yellow-500 flex  text-[16px] font-[Questrial,Arial,Verdana,Tahoma,sans-serif] font-normal flex-row">
                Request a consultation
                <ArrowRight />
              </h1>
            </div>
          </div>
        </div>
        <div className="w-full justify-around flex overflow-x-auto py-6">
          <div className="flex bg-[rgb(247,247,247)] px-0 gap-0">
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
                  className="group w-[260px] h-[150px] flex flex-col justify-between bg-[rgb(247,247,247)] border border-gray-300 backdrop-blur-sm text-black p-6 transition-all duration-300 hover:bg-white hover:scale-[1.03] hover:z-10 cursor-pointer"
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

        <div className=" mt-20 pt-10 bg-white">
          <div className="flex flex-row  justify-around">
            <h1 className="text-[61px] font-[Questrial,Arial,Verdana,Tahoma,sans-serif] font-normal ">
              Industries we modernize
            </h1>
            <h1 className="mt-10 text-yellow-500 flex  text-[16px] font-[Questrial,Arial,Verdana,Tahoma,sans-serif] font-normal flex-row">
              Request a consultation
              <ArrowRight />
            </h1>
          </div>
        </div>
        <div className=" mt-10 w-full flex flex-row  w- scroll-mt-24 justify-around">
          <section className="w-3/4 ">
            <CombinedAnimatedFeatures />
          </section>
        </div>

        <div className=" py-10 w-full flex flex-row justify-around">
          <div className="w-3/4 flex justify-center items-start">
            <h1 className="text-[61px]  font-[Questrial,Arial,Verdana,Tahoma,sans-serif] font-normal  text-black ">
              Redefining future
            </h1>
          </div>
          <div className=" w-2/4 flex flex-col ">
            <div className="w-3/4">
              <h1 className=" pt-5 pb-8 text-[rgba(60,60,67,0.6)] text-[21px] font-[Questrial,Arial,Verdana,Tahoma,sans-serif] font-normal">
                Being an SAP consulting company, we are a bunch of innovators
                passionate about creating technologies and products that propel
                your businesses to drive forward. Our value-added solutions will
                help you redefine the future of your enterprise and emerge as a
                leader in the industry.
              </h1>
              <h1 className="mt-2 text-yellow-500 flex  text-[16px] font-[Questrial,Arial,Verdana,Tahoma,sans-serif] font-normal flex-row">
                Get in touch
                <ArrowRight />
              </h1>
            </div>
          </div>
        </div>
        <div className="w-full bg-white flex flex-row mb-20 justify-around">
          <div className="bg-white w-3/4 flex-row py-10">
            <SolutionDropdownSection sections={solutionSections} />
          </div>
        </div>
        <div className="mb-20 w-full flex flex-row bg-black justify-around">
          <div className=" w-[1400px]  flex justify-center flex-col">
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
        <div className="mt-20">
          <EventsNewsComponent events={sampleEvents} news={sampleNews} />
        </div>
        <Footer />
        <FloatingChat />
      </div>
    </div>
  );
};

export default Index;
