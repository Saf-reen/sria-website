
import React from 'react';
import { Search, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-white">
              Accely
            </h1>
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Products
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Solutions
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Services
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Industries
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Insights
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              About
            </a>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <Search className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer" />
            <div className="flex items-center space-x-2 text-gray-300">
              <Globe className="w-4 h-4" />
              <span className="text-sm">Global</span>
            </div>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md">
              Contact us →
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
