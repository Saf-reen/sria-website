
import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const videoUrl = "https://res.cloudinary.com/dgz2omokl/video/upload/v1751461579/3141208-uhd_3840_2160_25fps_crtznr.mp4";

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
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
      <div className="relative z-30 flex items-center justify-center min-h-screen">
        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* Badge */}
          <div className="inline-block mb-8">
            <span className="bg-blue-600/20 text-blue-200 px-6 py-3 rounded-full text-sm font-semibold border border-blue-400/30 backdrop-blur-md shadow-lg uppercase tracking-wider">
              WE ARE A PREMIER SAP GOLD PARTNER
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight"
            style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.8)" }}
          >
            Globally Trusted{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              SAP Consulting
            </span>{" "}
            Company
          </h1>

          {/* Subtitle */}
          <div className="bg-black/20 backdrop-blur-sm rounded-lg p-8 mb-12 max-w-4xl mx-auto">
            <p
              className="text-xl md:text-2xl text-gray-100 leading-relaxed"
              style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.7)" }}
            >
              Empowering businesses to transform digitally with cloud-based solutions, where vision meets technology.
            </p>
          </div>

          {/* CTA Button */}
          <Link
            to="/contact"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-12 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-2xl backdrop-blur-sm"
          >
            Get Started
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
    </section>
  );
};

export default Hero;
