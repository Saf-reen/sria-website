
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Grid3X3 } from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      title: 'RISE with SAP',
      description: 'Transform your business with comprehensive cloud solutions and seamless migration services.',
    },
    {
      title: 'GROW with SAP',
      description: 'Scale your operations efficiently with intelligent automation and advanced analytics.',
    },
    {
      title: 'SAP SuccessFactors',
      description: 'Optimize your human capital management with integrated HR solutions and talent analytics.',
    },
    {
      title: 'SAP BTP',
      description: 'Build, integrate, and extend applications on the SAP Business Technology Platform.',
    },
  ];

  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-blue-400 text-sm font-semibold tracking-wider uppercase">
            RECOMMENDED FOR YOU
          </span>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <Card 
              key={index} 
              className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300 group cursor-pointer backdrop-blur-sm hover:bg-slate-800/70"
            >
              <CardContent className="p-8">
                {/* Icon */}
                <div className="mb-6">
                  <Grid3X3 className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors" />
                </div>

                {/* Content */}
                <div className="mb-6">
                  <span className="text-gray-400 text-sm font-medium">
                    SOLUTION
                  </span>
                  <h3 className="text-white text-xl font-bold mt-2 group-hover:text-blue-100 transition-colors">
                    {solution.title}
                  </h3>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {solution.description}
                </p>

                {/* Arrow */}
                <div className="flex justify-end">
                  <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
