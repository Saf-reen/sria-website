import React, { useState, useEffect } from "react";
import { MapPin, Phone, Mail, Headphones } from "lucide-react";

interface Office {
  id: number;
  country: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  position: {
    top: string;
    left: string;
  };
}

interface SupportBlock {
  icon: React.ReactNode;
  title: string;
  description: string;
  contact: string;
  phone: string;
}

const GlobalOffices: React.FC = () => {
  const [viewMode, setViewMode] = useState<"map" | "list">("map");
  const [hoveredOffice, setHoveredOffice] = useState<Office | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<string>("USA");
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

const offices: Office[] = [
    {
      id: 1,
      country: "USA",
      name: "New York Office",
      address: "18 Hunters Dr Gilbertsvile, PA 19525-6601 USA",
      phone: "+91 99897 95335",
      email: "hr@sriainfotech.com",
      position: { top: "36%", left: "20%" },
    },
    {
      id: 2,
      country: "INDIA",
      name: "Hyderabad Office",
      address: "First Floor, 1-121/63 Survey No. 63 PartHotel, Sitara Grand Backside, Miyapur, Hyderabad, Telangana 500049, India",
      phone: "+91 97013 14138",
      email: "hr@sriainfotech.com",
      position: { top: "53%", left: "70%" },
    },
    {
      id: 3,
      country: "INDIA",
      name: "Amaravati Office",
      address: "Amaravati, Telangana 500081",
      phone: "+91 95539 55893",
      email: "hr@sriainfotech.com",
      position: { top: "54%", left: "71%" },
    },
    {
      id: 4,
      country: "INDIA",
      name: "Mulugu Office",
      address: "TASK Center,Mulugu, Telangana 506343",
      phone: "+91 90145 52492",
      email: "hr@sriainfotech.com",
      position: { top: "53%", left: "71%" },
    },
  ];

  const supportBlocks: SupportBlock[] = [
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Support",
      description: "Get help with your account",
      contact: "hr@sriainfotech.com",
      phone: "+91 90145 52492",
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Sales",
      description: "Talk to our sales team",
      contact: "sales@sriainfotech.com",
      phone: "+91 90145 52492",
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "General",
      description: "General inquiries",
      contact: "admin@sriainfotech.com",
      phone: "+91 90145 52492",
    },
  ];

  const countries = Array.from(new Set(offices.map((o) => o.country)));
  const filteredOffices = offices.filter(
    (office) => office.country === selectedCountry
  );

  return (
    <div className="bg-black text-white">
      <div className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Global Offices</h1>
        <p className="text-gray-300 mb-8 max-w-2xl">
          Find the location nearest to you and get in touch with our local
          teams.
        </p>

        {/* Toggle shown only on md+ */}
        {!isMobile && (
          <div className="flex bg-gray-800 rounded-lg p-1 w-fit mb-10">
            <button
              onClick={() => setViewMode("map")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                viewMode === "map"
                  ? "bg-yellow-500 text-black"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Map View
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                viewMode === "list"
                  ? "bg-yellow-500 text-black"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              List View
            </button>
          </div>
        )}

        {/* Map View (only on md+) */}
        {viewMode === "map" && !isMobile && (
          <div className="relative mb-16 overflow-hidden rounded-2xl">
            <div className="relative bg-black w-full h-[600px]">
              <img
                className="w-full h-full object-cover"
                src="https://www.accely.com/wp-content/themes/accely/assets/images/get-started/location-map.png"
                alt="Map"
              />
              {offices.map((office) => (
                <div
                  key={office.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                  style={{
                    top: office.position.top,
                    left: office.position.left,
                  }}
                  onMouseEnter={() => setHoveredOffice(office)}
                  onMouseLeave={() => setHoveredOffice(null)}
                >
                  <div className="w-4 h-4 bg-yellow-500 rounded-full animate-pulse shadow-lg shadow-yellow-500/50">
                    <div className="w-full h-full bg-yellow-400 rounded-full animate-ping"></div>
                  </div>
                  {hoveredOffice?.id === office.id && (
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white text-black p-3 rounded-lg shadow-xl min-w-48 z-10">
                      <div className="font-semibold text-sm mb-1">
                        {office.name}
                      </div>
                      <div className="text-xs text-gray-600">
                        {office.address}
                      </div>
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rotate-45"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Always show list view on small screens, and when selected on md+ */}
        {viewMode === "list" && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {/* Country List */}
            <div className="md:col-span-1 space-y-4">
              <h3 className="text-lg font-semibold mb-4">Countries</h3>
              <ul className="flex flex-col sm:flex-col md:flex-col gap-2">
                {countries.map((country) => (
                  <li
                    key={country}
                    className={`cursor-pointer px-4 py-2 rounded-md text-sm min-w-[80px] text-left ${
                      selectedCountry === country
                        ? "text-yellow-500 bg-gray-800 font-semibold"
                        : "text-white hover:bg-gray-700 font-normal"
                    }`}
                    onClick={() => setSelectedCountry(country)}
                  >
                    {country}
                  </li>
                ))}
              </ul>
            </div>

            {/* Office List */}
            <div className="md:col-span-3 space-y-6">
              <h3 className="text-xl font-semibold mb-4">
                Offices in {selectedCountry}
              </h3>
              {filteredOffices.map((office) => (
                <div
                  key={office.id}
                  className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors"
                >
                  <h4 className="text-lg font-semibold mb-2">{office.name}</h4>
                  <p className="text-gray-300 text-sm mb-2">{office.address}</p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-yellow-500" />
                      <span>{office.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-yellow-500" />
                      <span>{office.email}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Support Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {supportBlocks.map((block, index) => (
            <div
              key={index}
              className="rounded-xl p-6 text-center transition-colors bg-gray-900"
            >
              <div className="flex justify-center mb-4 text-yellow-500">
                {block.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{block.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{block.description}</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-center gap-2">
                  <Mail className="w-4 h-4 text-yellow-500" />
                  <span>{block.contact}</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4 text-yellow-500" />
                  <span>{block.phone}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GlobalOffices;
