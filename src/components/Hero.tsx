import { ArrowRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const sapSolutions = [
  { title: "RISE with SAP" },
  { title: "GROW with SAP" },
  { title: "SAP SuccessFactors" },
  { title: "SAP BTP" },
];

const Hero = () => {
  const videoUrl =
    "https://www.accely.com/wp-content/uploads/2024/05/Accely-Homepage-Hero-Video-Requirement.mp4";

  return (
    <section className="relative min-h-screen overflow-hidden font-[Questrial,Arial,Verdana,Tahoma,sans-serif] font-normal">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-[100vh] object-cover"
          style={{
            filter: "brightness(0.4) contrast(1.1)",
          }}
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40 z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-30 w-full flex items-center justify-center min-h-screen">
        <div className="w-full mx-auto px-6 text-center">
          {/* Badge */}
          <div className="inline-block mb-5">
            <span className=" text-white px-6 py-1 rounded-full text-md  shadow-lg uppercase tracking-wider">
              WE ARE A PREMIER SAP GOLD PARTNER
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className="text-5xl md:text-7xl font-[Questrial,Arial,Verdana,Tahoma,sans-serif] font-normal text-white mb-8 leading-tight"
            style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.8)" }}
          >
            Globally Trusted{" "}
            <span className="bg-white bg-clip-text ">SAP Consulting</span>{" "}
            Company
          </h1>

          {/* Subtitle */}
          <div className="bg-black/20 backdrop-blur-sm rounded-lg p-3 mb-4 w-full mx-auto">
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed">
              Empowering businesses to transform digitally with cloud-based
              solutions, where vision meets technology.
            </p>
          </div>

          {/* CTA Button */}
          <Link
            to="/contact"
            className="inline-block bg-orange-500 text-black px-6 py-2 text-lg  transition-all duration-300 hover:scale-105 shadow-2xl backdrop-blur-sm hover:rounded-lg rounded-none group"
          >
            <div className="flex items-center justify-center gap-2">
              <span className="block font-[Questrial,Arial,Verdana,Tahoma,sans-serif] font-normal ">
                Get Started
              </span>
              <span className="block transition-transform duration-300 group-hover:translate-x-2">
                <ArrowRight className="w-5 h-5" />
              </span>
            </div>
          </Link>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-blue-400/70 rounded-full animate-pulse z-30"></div>
      <div
        className="absolute top-1/3 right-20 w-1 h-1 bg-cyan-400/70 rounded-full animate-pulse z-30"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-blue-300/70 rounded-full animate-pulse z-30"
        style={{ animationDelay: "2s" }}
      ></div>

      {/* elemts  */}
      {/* SAP Solutions Overlay */}
      {/* SAP Solutions Overlay */}
      {/* FADE Layer - Only for visual fade effect */}
      <div className="absolute bottom-0 w-full h-32 z-10 bg-gradient-to-b from-transparent to-[#0F0F0F] pointer-events-none" />

      {/* Content Layer */}
      <div className="absolute bottom-0 w-full z-30 px-4 pb-10 font-[Questrial,Arial,Verdana,Tahoma,sans-serif] font-normal">
        <div className="mx-auto text-center mb-4">
          <p className="text-sm text-gray-400 tracking-wider">
            RECOMMENDED FOR YOU
          </p>
        </div>

        <div className="w-3/4 bg-transparent mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 bg-black/70 overflow-hidden">
          {sapSolutions.map((solution, index) => (
            <div
              key={index}
              className="group relative border border-gray-600 backdrop-blur-sm text-white p-6 overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-yellow-400 cursor-pointer"
            >
              <div className="transition-all duration-300 ease-in-out group-hover:-translate-y-1.5">
                <div className="mb-6">
                  <img
                    src="/icons/boxes.png"
                    alt="Solution Icon"
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <p className="text-xs text-gray-400 tracking-widest mb-1 transition-transform duration-300 group-hover:scale-105">
                  SOLUTION
                </p>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg transition-colors duration-300 group-hover:text-yellow-400">
                    {solution.title}
                  </h3>
                  <span className="text-xl text-gray-300 transition-colors duration-300 group-hover:text-yellow-400">
                    →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
