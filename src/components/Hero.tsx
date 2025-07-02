import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Grid3X3 } from "lucide-react";

const solutions = [
  {
    title: "RISE with SAP",
  },
  {
    title: "GROW with SAP",
  },
  {
    title: "SAP SuccessFactors",
  },
  {
    title: "SAP BTP",
  },
];

const Hero = () => {
  // Replace this with your actual Cloudinary video URL
  const videoUrl =
    "https://res.cloudinary.com/dgz2omokl/video/upload/v1751461579/3141208-uhd_3840_2160_25fps_crtznr.mp4";

  return (
    <>
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
              filter: "brightness(0.8) contrast(1.1)",
            }}
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Light overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 z-10"></div>
        </div>

        {/* Content */}
        <div className="relative z-30 pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-6 text-center">
            {/* Badge */}
            <div className="inline-block mb-8">
              <span className="bg-black/40 text-blue-200 px-4 py-2 rounded-full text-sm font-medium border border-blue-400/50 backdrop-blur-md shadow-lg">
                WE ARE A PREMIER SAP GOLD PARTNER
              </span>
            </div>

            {/* Main Heading */}
            <h1
              className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight"
              style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.8)" }}
            >
              Globally Trusted{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg">
                SAP Consulting
              </span>{" "}
              Company
            </h1>

            {/* Subtitle */}
            <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6 mb-12 max-w-4xl mx-auto">
              <p
                className="text-xl md:text-2xl text-gray-100 leading-relaxed"
                style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.7)" }}
              >
                Empowering businesses to transform digitally with cloud-based
                solutions, where vision meets technology.
              </p>
            </div>

            {/* CTA Button */}
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl backdrop-blur-sm mb-20">
              Get started →
            </Button>

            {/* Solutions Section */}
            <div className="mt-32">
              {/* Section Header */}
              <div className="text-center mb-16">
                <span className="text-blue-400 text-sm font-medium tracking-[0.2em] uppercase">
                  RECOMMENDED FOR YOU
                </span>
              </div>

              {/* Solutions Grid - Centered with proper spacing */}
              <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl">
                  {solutions.map((solution, index) => (
                    <Card
                      key={index}
                      className="bg-gray-900/95 border-gray-800 hover:border-blue-500/30 transition-all duration-300 group cursor-pointer backdrop-blur-sm w-72 h-48"
                    >
                      <CardContent className="p-8 h-full flex flex-col justify-between">
                        {/* Icon */}
                        <div className="mb-6">
                          <Grid3X3 className="w-8 h-8 text-white group-hover:text-blue-400 transition-colors" />
                        </div>

                        {/* Content */}
                        <div className="flex-grow">
                          <span className="text-gray-400 text-xs font-medium uppercase tracking-wider">
                            SOLUTION
                          </span>
                          <h3 className="text-white text-xl font-bold mt-3 group-hover:text-white transition-colors leading-tight">
                            {solution.title}
                          </h3>
                        </div>

                        {/* Arrow */}
                        <div className="flex justify-end mt-6">
                          <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
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
    </>
  );
};

export default Hero;