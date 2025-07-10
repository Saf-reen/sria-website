// SAPS4HANAPage.tsx
import React from "react";
import {
  ChevronRight,
  Database,
  Shield,
  Zap,
  Users,
  BarChart3,
  Settings,
  CheckCircle,
  ArrowRight,
  Cloud,
  Cpu,
  Globe,
  TrendingUp,
  Award,
  Clock,
} from "lucide-react";
import Navigation from "@/components/Navigation";

const SAPS4HANAPage = () => {
  const sidebarItems = [
    { id: "overview", label: "Overview", icon: <Globe className="w-4 h-4" /> },
    {
      id: "implementation",
      label: "Implementation Process",
      icon: <Settings className="w-4 h-4" />,
    },
    {
      id: "migration",
      label: "Migration Strategy",
      icon: <Database className="w-4 h-4" />,
    },
    {
      id: "benefits",
      label: "Key Benefits",
      icon: <TrendingUp className="w-4 h-4" />,
    },
    { id: "modules", label: "Core Modules", icon: <Cpu className="w-4 h-4" /> },
    {
      id: "support",
      label: "Support & Training",
      icon: <Users className="w-4 h-4" />,
    },
    {
      id: "why-choose",
      label: "Why Choose Us",
      icon: <Award className="w-4 h-4" />,
    },
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: "Real-time Analytics",
      description:
        "Make data-driven decisions with instant insights from your business data",
    },
    {
      icon: <Cloud className="w-8 h-8 text-green-500" />,
      title: "Cloud-Ready",
      description:
        "Future-proof your business with cloud deployment capabilities",
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: "Enhanced Security",
      description:
        "Advanced security features to protect your critical business data",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-500" />,
      title: "Improved Performance",
      description:
        "Up to 10x faster processing with in-memory computing technology",
    },
  ];

  const implementationSteps = [
    {
      title: "Assessment & Planning",
      description:
        "Comprehensive analysis of your current SAP landscape and business requirements",
      duration: "4-6 weeks",
    },
    {
      title: "System Design",
      description:
        "Custom solution architecture tailored to your business processes",
      duration: "3-4 weeks",
    },
    {
      title: "Development & Configuration",
      description: "Implementation of core modules and custom development",
      duration: "12-16 weeks",
    },
    {
      title: "Testing & Quality Assurance",
      description:
        "Rigorous testing across all business scenarios and integrations",
      duration: "6-8 weeks",
    },
    {
      title: "Training & Change Management",
      description: "Comprehensive user training and change management support",
      duration: "4-6 weeks",
    },
    {
      title: "Go-Live & Support",
      description:
        "Smooth transition to production with 24/7 hypercare support",
      duration: "2-4 weeks",
    },
  ];

  const modules = [
    {
      name: "Finance (FI)",
      description: "Complete financial management and reporting capabilities",
      features: [
        "General Ledger",
        "Accounts Payable/Receivable",
        "Asset Management",
        "Financial Reporting",
      ],
    },
    {
      name: "Sales & Distribution (SD)",
      description: "End-to-end sales process management",
      features: [
        "Order Management",
        "Pricing",
        "Billing",
        "Customer Management",
      ],
    },
    {
      name: "Materials Management (MM)",
      description: "Comprehensive procurement and inventory management",
      features: [
        "Purchase Orders",
        "Inventory Management",
        "Vendor Management",
        "Material Planning",
      ],
    },
    {
      name: "Production Planning (PP)",
      description: "Optimize your manufacturing processes",
      features: [
        "Production Orders",
        "Capacity Planning",
        "Shop Floor Control",
        "Quality Management",
      ],
    },
  ];

  return (
    <div className="scroll-smooth">
      <Navigation />

      {/* HERO - Pinned */}
      <div className="sticky top-0 z-10 h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto px-6">
            <div className="mb-8">
              <div className="w-24 h-24 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Database className="w-12 h-12 text-blue-200" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                SAP S/4HANA
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                Transform Your Business with Next-Generation ERP
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
                Get Started <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </div>
      </div>

      {/* WHY S/4HANA - Pinned */}
      <div className="sticky top-0 z-20 h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative h-full flex items-center justify-center">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Why S/4HANA?
              </h2>
              <p className="text-xl text-purple-100 max-w-3xl mx-auto">
                Experience the power of intelligent ERP that adapts to your
                business needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
                >
                  <div className="mb-4 flex justify-center">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-purple-100">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scrollable Sections + Sidebar */}
      <div className="relative z-30 bg-white min-h-screen flex">
        {/* Sidebar - Sticky */}
        <aside className="w-80 bg-gray-900 text-white sticky top-0 h-screen">
          <div className="p-6 border-b border-gray-700">
            <h3 className="text-xl font-bold">SAP S/4HANA Guide</h3>
            <p className="text-gray-400 text-sm mt-2">
              Implementation Services
            </p>
          </div>
          <nav className="p-4">
            {sidebarItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="block flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-colors mb-2"
              >
                {item.icon}
                <span>{item.label}</span>
              </a>
            ))}
          </nav>
        </aside>

        {/* Content Sections */}
        <main className="flex-1 overflow-y-auto p-8 space-y-24">
          {/* Overview */}
          <section id="overview">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              SAP S/4HANA Overview
            </h2>
            <p className="text-gray-600 mb-6">
              SAP S/4HANA is the next-generation business suite designed to help
              you run simple in today's complex world. Built on the advanced SAP
              HANA in-memory platform...
            </p>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">
                Key Highlights
              </h3>
              <ul className="space-y-2 text-blue-800">
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" /> In-memory computing
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" /> Simplified user
                  experience
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" /> Cloud-ready
                  architecture
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" /> Analytics & machine
                  learning
                </li>
              </ul>
            </div>
          </section>

          {/* Implementation */}
          <section id="implementation">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Implementation Process
            </h2>
            <div className="space-y-6">
              {implementationSteps.map((step, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between mb-2">
                        <h3 className="text-xl font-semibold">{step.title}</h3>
                        <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                          <Clock className="w-4 h-4" /> {step.duration}
                        </span>
                      </div>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Add the rest of your sections: migration, benefits, modules, support, why-choose */}
        </main>
      </div>
    </div>
  );
};

export default SAPS4HANAPage;
