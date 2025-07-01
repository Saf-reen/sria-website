
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234A90E2' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Digital Grid Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 gap-1 h-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div
              key={i}
              className="border border-blue-400/20 animate-pulse"
              style={{
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Badge */}
          <div className="inline-block mb-8">
            <span className="bg-blue-600/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium border border-blue-600/30">
              WE ARE A PREMIER SAP GOLD PARTNER
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Globally Trusted{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              SAP Consulting
            </span>{' '}
            Company
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Empowering businesses to transform digitally with cloud-based solutions, where vision meets technology.
          </p>

          {/* CTA Button */}
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg rounded-md transition-all duration-300 transform hover:scale-105">
            Get started →
          </Button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 right-20 w-1 h-1 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-blue-300 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default Hero;
