import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FloatingChat from "@/components/FloatingChat";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import StatCard from "@/components/StatCard";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaRocket,
  FaArrowUp,
  FaSyncAlt,
  FaCog,
} from "react-icons/fa";
import Requesademobtn from "@/components/Requesademobtn";
import FeatureTabsWithText from "@/components/FeatureTabsWithText";

const Index = () => {
  interface Step {
    icon: React.ReactNode;
    title: string;
    href: string;
  }

  interface SAPStepsSectionProps {
    sapSteps: Step[];
  }
  const sapSteps = [
    {
      icon: <FaSearch />,
      title: "SAP Discovery & Evaluation",
      href: "/sap-discovery",
    },
    {
      icon: <FaRocket />,
      title: "SAP Implementation",
      href: "/sap-implementation",
    },
    {
      icon: <FaArrowUp />,
      title: "SAP Upgrade Services",
      href: "/sap-upgrade",
    },
    {
      icon: <FaSyncAlt />,
      title: "SAP S/4HANA Migration",
      href: "/sap-migration",
    },
    {
      icon: <FaCog />,
      title: "SAP Managed Services",
      href: "/sap-managed",
    },
  ];
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <FloatingChat />
      <div className="py-20 bg-black w-full flex flex-row">
        <div className="w-1/2 flex justify-center items-center">
          <h1 className="text-4xl font-bold text-white ">
            Innovation begins here
          </h1>
        </div>
        <div className=" w-1/2 flex flex-col ">
          <div className="w-3/4">
            <h1 className="text-white">
              Accely offers top-tier SAP consulting services using refined
              methodologies and innovation, thus creating a synergy of the
              latest technology and vast accumulated experience. Renowned for
              our technical expertise and rapid return on investment (ROI), we
              serve small-medium businesses to Fortune 500 Companies. We deliver
              high-value, end-to-end solutions as an SAP Value Added Reseller
              (VAR) partner.
            </h1>
            <h1 className="text-white flex flex-row">
              Know more about us
              <ArrowRight />
            </h1>
            <h1 className="text-white flex flex-row">
              Download corporate profile
              <ArrowRight />
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full bg-black flex-row flex justify-center ">
        <div className="w-3/4 px-4 py-10 flex flex-wrap justify-around gap-10 bg-black">
          <StatCard percentage="100+ " description="Projects Completed." />
          <StatCard percentage="20+" description="Global Offices" />
          <StatCard percentage="10+" description="Years of Experience" />
          <StatCard percentage="500+" description="Group Employess" />
        </div>
      </div>

      <div className="py-10 w-full bg-black flex justify-around ">
        <div className="w-3/4 ">
          <h1 className="text-2xl text-white">Strategic partners</h1>
        </div>
      </div>
      <div className="w-full h-[20vh] pb-20 bg-black flex flex-row justify-around">
        <h1 className="text-white">org1</h1>
        <h1 className="text-white">org2</h1>

        <h1 className="text-white">org3</h1>
        <h1 className="text-white">org4</h1>
      </div>

      <div className=" py-20 bg-white w-full flex flex-row ">
        <div className="w-1/2 flex justify-center items-center">
          <h1 className="text-4xl font-bold text-black ">
            Explore our services
          </h1>
        </div>
        <div className=" w-1/2 flex flex-col ">
          <div className="w-3/4">
            <h1 className="text-black">
              Our SAP consulting services transcend traditional boundaries,
              empowering you to envision, plan, and implement transformative
              solutions.
            </h1>
            <h1 className="mt-2 text-yellow-500 flex  flex-row">
              Request a consultation
              <ArrowRight />
            </h1>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto w-full flex justify-center bg-white py-10">
        <div className="flex flex-nowrap gap-2 md:gap-4 px-4">
          {sapSteps.map((step, index) => (
            <Link to={step.href} key={index}>
              <div
                className="flex flex-col bg-gray-100 px-6 py-4 min-w-[240px] md:min-w-[280px] rounded-md shadow-sm
                         transition-all duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer"
              >
                {/* Icon */}
                <span className="text-2xl text-yellow-500">{step.icon}</span>

                {/* Title + Arrow */}
                <div className="flex items-center gap-2 mt-3 text-black text-sm md:text-base font-medium">
                  <span>{step.title}</span>
                  {index !== sapSteps.length - 1 && (
                    <span className="text-lg">→</span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className=" mt-20 bg-white">
        <div className="flex flex-row justify-around">
          <h1 className="text-5xl font-bold">Industries we modernize</h1>
          <Requesademobtn text="Talk to an Industry Expert" />
        </div>
      </div>
      <div className=" mt-20  flex flex-row  w- scroll-mt-24 justify-around">
        <section>
          <FeatureTabsWithText />
        </section>
      </div>

      <div className=" py-20 bg-white w-full flex flex-row ">
        <div className="w-1/2 flex justify-center items-center">
          <h1 className="text-4xl font-bold text-black ">Redefining future</h1>
        </div>
        <div className=" w-1/2 flex flex-col ">
          <div className="w-3/4">
            <h1 className="text-black">
              Being an SAP consulting company, we are a bunch of innovators
              passionate about creating technologies and products that propel
              your businesses to drive forward. Our value-added solutions will
              help you redefine the future of your enterprise and emerge as a
              leader in the industry.
            </h1>
            <h1 className="mt-2 text-yellow-500 flex  flex-row">
              Get in touch
              <ArrowRight />
            </h1>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
