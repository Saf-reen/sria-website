import { ArrowRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const sapSolutions = [
  { title: "RISE with SAP",link:"/solutions/sap-s4hana" },
  { title: "GROW with SAP", link:"/solutions/financial" },
  { title: "SAP SuccessFactors", link:"/solutions/successfactors" },
  { title: "SAP CPI",link:"/solutions/cpi" },
];

const Hero = () => {
  const videoUrl =
    "https://www.accely.com/wp-content/uploads/2024/05/Accely-Homepage-Hero-Video-Requirement.mp4";

  return (
    <section className="relative     min-h-[100vh] bg-[#0F0F0F] font-[Questrial,Arial,Verdana,Tahoma,sans-serif] font-normal">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          // THIS LINE IS CHANGED ↓↓↓
          className="absolute inset-0 w-full h-full min-h-[100vh] object-cover"
          style={{
            filter: "brightness(0.4) contrast(1.1)",
          }}
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* ... */}
      </div>

      {/* Content */}
      <div className="relative z-30 w-full flex flex-col items-center justify-between min-h-screen pt-[25vh] pb-[10vh]">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 text-center">
          {/* Badge */}
          <div className="inline-block mb-4">
            <span className="text-white px-5 py-1 rounded-full text-sm shadow-lg uppercase tracking-wide">
              WE ARE A PREMIER SAP DIGITAL PARTNER
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className="text-[2rem] sm:text-[3rem] md:text-[3.5rem] text-white mb-4 leading-snug"
            style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.8)" }}
          >
            Globally Trusted SAP Consulting Company
          </h1>

          {/* Subtitle */}
          <div className="bg-black/30 backdrop-blur-sm rounded-lg px-4 py-4 mb-6 w-full max-w-3xl mx-auto">
            <p className="text-base sm:text-lg md:text-xl text-gray-100 leading-relaxed">
              Empowering businesses to transform digitally with cloud-based
              solutions, where vision meets technology.
            </p>
          </div>

          {/* CTA Button */}
          <Link
            to="/contact"
            className="inline-block bg-orange-500 text-black px-5 py-2 text-md transition-all duration-300 hover:scale-105 shadow-2xl backdrop-blur-sm hover:rounded-lg rounded-none group"
          >
            <div className="flex items-center justify-center gap-2">
              <span className="block">Get Started</span>
              <span className="block transition-transform duration-300 group-hover:translate-x-2">
                <ArrowRight className="w-5 h-5" />
              </span>
            </div>
          </Link>
        </div>

        {/* Spacer to push boxes lower */}
        <div style={{ height: "100px" }} />

        {/* Solutions Section */}
        <div className="w-full mb-5 sm:mb-28 px-4 sm:px-6 max-w-7xl mx-auto relative bottom-0">
          <div className="mx-auto text-center mb-3">
            <p className="text-xs text-gray-400 tracking-wider">
              RECOMMENDED FOR YOU
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 ">
            {sapSolutions.map((solution, index) => (
              <Link

                key={index}
                to={solution.link}
                className="group relative border border-gray-600 bg-black/40 text-white px-5 py-5 overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-yellow-400 cursor-pointer"
              >
                <div className="transition-all duration-300 ease-in-out group-hover:-translate-y-1.5">
                  <div className="mb-4 flex justify-start">
                    <img
                      src="/icons/boxes.png"
                      alt="Solution Icon"
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <p className="text-[10px] text-gray-400 tracking-widest mb-1 text-start group-hover:scale-105 transition-transform">
                    SOLUTION
                  </p>

                  <div className="flex items-start justify-between">
                    <h3 className="text-base group-hover:text-yellow-400">
                      {solution.title}
                    </h3>
                    <span className="text-lg text-gray-300 group-hover:text-yellow-400">
                      →
                    </span>
                  </div>
                </div>
            </Link>
            ))}
          </div>
        </div>

        {/* Floating Elements */}

        {/* Fade Layer Fix */}
        <div className="absolute bottom-0 w-full h-24 z-10 bg-gradient-to-b from-transparent to-[#0F0F0F] pointer-events-none" />
      </div>
    </section>
  );
};

export default Hero;
