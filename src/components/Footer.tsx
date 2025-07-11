import { ArrowRight } from "lucide-react";
import React, { useState } from "react";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

interface Country {
  name: string;
  flag: string;
}

interface LocationData {
  address: string;
  phone: string;
  email: string;
}

type LocationDataMap = {
  [key: string]: LocationData[];
};

const Footer: React.FC = () => {
  const [openSections, setOpenSections] = useState<string[]>([]);
  const [selectedCountry, setSelectedCountry] = useState("United States");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [email, setEmail] = useState("");

  const toggleSection = (title: string) => {
    setOpenSections((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

  const countries: Country[] = [
    { name: "United States", flag: "🇺🇸" },
    { name: "United Kingdom", flag: "🇬🇧" },
    { name: "Singapore", flag: "🇸🇬" },
    { name: "South Africa", flag: "🇿🇦" },
    { name: "Saudi Arabia", flag: "🇸🇦" },
    { name: "UAE", flag: "🇦🇪" },
    { name: "Kuwait", flag: "🇰🇼" },
    { name: "Greece", flag: "🇬🇷" },
    { name: "Qatar", flag: "🇶🇦" },
    { name: "India", flag: "🇮🇳" },
    { name: "Egypt", flag: "🇪🇬" },
  ];

  const locationData: LocationDataMap = {
    "United States": [
      {
        address: "381 Blair Rd, Avenel, NJ 07001, USA",
        phone: "+1 647 408 7887",
        email: "info.us@sriainfotech.com",
      },
      {
        address: "100 California St, San Francisco, CA 94111",
        phone: "+1 415 555 1234",
        email: "westcoast@sriainfotech.com",
      },
    ],
    "United Kingdom": [
      {
        address: "Berkeley Square House, London, W1J 6BD",
        phone: "+44 797 982 1621",
        email: "info.uk@sriainfotech.com",
      },
    ],

    Singapore: [
      {
        address: "31 Cantonment Road, P.O. Box: 089747",
        phone: "+65 9086 0319",
        email: "info.sg@sriainfotech.com",
      },
    ],
    "South Africa": [
      {
        address: "123 Business District, Cape Town, 8001",
        phone: "+27 21 555 0123",
        email: "info.za@sriainfotech.com",
      },
    ],
    "Saudi Arabia": [
      {
        address: "King Fahd Road, Riyadh 11564, Saudi Arabia",
        phone: "+966 11 555 0123",
        email: "info.sa@sriainfotech.com",
      },
    ],
    UAE: [
      {
        address: "308 Indigo Tower, Dubai, P.O. Box: 112965",
        phone: "+971 4 452 9897",
        email: "info.ae@sriainfotech.com",
      },
    ],
    Kuwait: [
      {
        address: "Al-Shuhada Street, Kuwait City, Kuwait",
        phone: "+965 2555 0123",
        email: "info.kw@sriainfotech.com",
      },
    ],
    Greece: [
      {
        address: "Syntagma Square, Athens 10563, Greece",
        phone: "+30 210 555 0123",
        email: "info.gr@sriainfotech.com",
      },
    ],
    Qatar: [
      {
        address: "West Bay, Doha, Qatar",
        phone: "+974 4455 0123",
        email: "info.qa@sriainfotech.com",
      },
    ],
    India: [
      {
        address: "Cyber City, Gurgaon, Haryana 122002, India",
        phone: "+91 124 555 0123",
        email: "info.in@sriainfotech.com",
      },
    ],
    Egypt: [
      {
        address: "New Cairo, Cairo Governorate, Egypt",
        phone: "+20 2 555 0123",
        email: "info.eg@sriainfotech.com",
      },
    ],
  };

  const columns = {
    "Company Information": [
      "About SRia Infotech",
      "SAP Partner",
      "Why SRia",
      "Current Openings",
      "Life at SRia",
      "Partner with Us",
    ],
    Solutions: [
      "SAP S/4HANA Private Cloud",
      "SAP S/4HANA Public Cloud",
      "SAP SuccessFactors",
      "SAP BTP",
      "SAP Analytics Cloud",
      "SAP Customer Experience",
    ],
    Products: [
      "Vendor Management",
      "Field Service Management",
      "Real Estate Management",
      "Asset Management",
      "Distribution Management",
      "Digital Retail Solution",
    ],
    Industries: [
      "Retail",
      "Consumer Products",
      "Engineering & Construction",
      "Professional Services",
      "Life Sciences & Healthcare",
      "Manufacturing",
    ],
    "Quick Links": [
      "Customer Stories",
      "Blogs",
      "Newsroom",
      "CSR",
      "Corporate Governance",
      "Labor Condition Application",
    ],
  };

  const handleSubscribe = (): void => {
    console.log("Subscribed with email:", email);
    setEmail("");
  };

  return (
    <footer className="bg-black text-white px-6 md:px-20 py-10 text-sm">
      <div className="w-full flex justify-around">
        <section className="text-center w-3/4 mb-12  ">
          {/* Background image applied ONLY to this content block */}
          <div
            className="bg-cover bg-center bg-no-repeat pt-20 pb-20"
            style={{
              backgroundImage:
                "url('https://www.accely.com/wp-content/themes/accely/assets/images/footer-bg.webp')",
              backgroundColor: "#222",
            }}
          >
            <p className="text-[21px] font-[Questrial,Arial,Verdana,Tahoma,sans-serif] font-light text-white">
              Join over 350+ global businesses already growing with SRia
              Infotech
            </p>
            <h2 className="text-[47px] md:text-5xl font-[Questrial,Arial,Verdana,Tahoma,sans-serif] font-normal mt-2 text-white">
              Let's transform your business landscape
            </h2>
            <button className="mt-6 mb-10 text-[16px] bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 transition">
              <div className="flex flex-row justify-center items-center gap-2">
                Get started <ArrowRight />
              </div>
            </button>
          </div>

          {/* Marquee section */}
          <div
            className="overflow-hidden pb-10 border-t border-gray-500 whitespace-nowrap"
            style={{
              background: `linear-gradient(90deg, rgb(34, 34, 34) 0%, rgb(24, 24, 24) 55.5%, rgb(34, 34, 34) 100%)`,
            }}
          >
            <div className="animate-marquee pt-3 flex gap-8 items-center">
              {[1, 2, 3, 4, 5].map((i) => (
                <img
                  key={i}
                  src={`/fixedIcons/${i}.png`}
                  alt={`Partner ${i}`}
                  className="h-24 pl-20 w-auto object-contain inline-block"
                />
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Newsletter section - separate block */}
      <div className="mt-3 w-full mb-16 flex justify-around">
        <div
          className="py-5 px-2 w-3/4 flex justify-between "
          style={{
            background: `linear-gradient(90deg, rgb(34, 34, 34) 0%, rgb(24, 24, 24) 55.5%, rgb(34, 34, 34) 100%)`,
          }}
        >
          <div className="flex w-full flex-row justify-between max-w-4xl mx-auto">
            <div className="w-full flex flex-col justify-start mb-6 md:mb-0">
              <h3 className=" text-[27px]  font-[Questrial,Arial,Verdana,Tahoma,sans-serif] font-normal text-white mb-2">
                Subscribe to our Newsletter
              </h3>
              <p className="text-gray-300 text-[16px] font-[Questrial,Arial,Verdana,Tahoma,sans-serif] font-normal">
                Get the weekly updates and insights right in your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 md:w-1/2">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-2 py-1 bg-gray-800 border border-gray-600  text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
              />
              <button
                onClick={handleSubscribe}
                className="px-6 py-2 font-[Questrial,Arial,Verdana,Tahoma,sans-serif] font-normal bg-orange-500 hover:bg-orange-600 text-white  transition"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Location section with new layout */}
      <section className="border-t border-gray-700 pt-10 pb-6">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left side - 1/4 width */}
          <div className="lg:w-1/4">
            <div className="mb-6">
              <h3 className="text-[36px] font-[Questrial,Arial,Verdana,Tahoma,sans-serif] font-normal text-white mb-2">
                Location
              </h3>
              <div className="flex items-center gap-2 text-orange-400 hover:text-orange-300 cursor-pointer">
                <span>View all locations</span>
                <ArrowRight size={16} />
              </div>
            </div>

            {/* Country Dropdown */}
            <div className=" p-4 rounded-lg ">
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full flex items-center justify-between p-3 bg-black   border border-gray-600 text-white transition"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[16px] font-[Questrial,Arial,Verdana,Tahoma,sans-serif] font-normal">
                      {countries.find((c) => c.name === selectedCountry)?.flag}
                    </span>
                    <span className="text-sm">{selectedCountry}</span>
                  </div>
                  <ArrowRight
                    size={16}
                    className={`transform transition-transform ${
                      isDropdownOpen ? "rotate-90" : ""
                    }`}
                  />
                </button>

                {isDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-gray-800 border border-gray-600 rounded shadow-lg z-10 max-h-60 overflow-y-auto">
                    {countries.map((country) => (
                      <div
                        key={country.name}
                        onClick={() => {
                          setSelectedCountry(country.name);
                          setIsDropdownOpen(false);
                        }}
                        className={`flex items-center gap-3 p-3 hover:bg-gray-700 cursor-pointer transition ${
                          selectedCountry === country.name
                            ? "bg-orange-500 text-white"
                            : "text-gray-300"
                        }`}
                      >
                        <span className="text-lg">{country.flag}</span>
                        <span className="text-sm">{country.name}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right side - 3/4 width */}
          <div className="lg:w-3/4">
            <div className=" p-6  ">
              {/* <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">
                  {countries.find((c) => c.name === selectedCountry)?.flag}
                </span>
                <h4 className="text-xl font-semibold text-white">
                  {selectedCountry}
                </h4>
              </div> */}
              <div className="flex flex-wrap gap-6">
                {locationData[selectedCountry]?.map((loc, index) => {
                  const country = countries.find(
                    (c) => c.name === selectedCountry
                  );
                  return (
                    <div
                      key={index}
                      className="bg-gray-900 p-5  border border-gray-700 shadow-md w-full sm:w-[280px]"
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-[16px] ">{country?.flag}</span>
                        <span className="text-[16px] font-[Questrial,Arial,Verdana,Tahoma,sans-serif] font-normal text-white font-medium">
                          {selectedCountry}
                        </span>
                      </div>
                      <p className="text-gray-300 text-[16px] font-[Questrial,Arial,Verdana,Tahoma,sans-serif] font-normal">
                        <strong>Address:</strong> {loc.address}
                      </p>
                      <p className="flex items-center gap-2 text-gray-300 text-[15px] font-[Questrial,Arial,Verdana,Tahoma,sans-serif] font-normal mt-2">
                        <FaPhoneAlt className="text-orange-400" />
                        <strong>Phone:</strong> {loc.phone}
                      </p>
                      <p className="flex items-center gap-2 text-gray-300 text-[15px] font-[Questrial,Arial,Verdana,Tahoma,sans-serif] font-normal mt-2">
                        <FaEnvelope className="text-orange-400" />
                        <strong>Email:</strong> {loc.email}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="my-8 border-gray-700" />

      <section className="hidden md:grid grid-cols-2 md:grid-cols-5 gap-6 text-sm">
        {Object.entries(columns).map(([title, links]) => (
          <div key={title}>
            <h3 className="text-[16px] font-[Questrial,Arial,Verdana,Tahoma,sans-serif] font-normal font-semibold mb-3">
              {title}
            </h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                    className="hover:underline"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="md:hidden">
        {Object.entries(columns).map(([title, links]) => (
          <div key={title} className="mb-4">
            <button
              className="w-full text-left  text-[16px] font-[Questrial,Arial,Verdana,Tahoma,sans-serif] font-normal mb-2 bg-gray-800 p-2 rounded"
              onClick={() => toggleSection(title)}
            >
              {title}
            </button>
            {openSections.includes(title) && (
              <ul className="pl-4 space-y-1">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                      className="hover:underline"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </section>

      <hr className="my-8 border-gray-700" />

      <div className="flex flex-col md:flex-row justify-between items-center text-[16px] font-[Questrial,Arial,Verdana,Tahoma,sans-serif] font-normal text-gray-400 mb-6">
        <div className="flex justify-start gap-4 text-lg text-white mb-4 md:mb-0">
          <FaLinkedinIn className="hover:text-orange-400 cursor-pointer" />
          <FaFacebookF className="hover:text-orange-400 cursor-pointer" />
          <FaYoutube className="hover:text-orange-400 cursor-pointer" />
          <FaInstagram className="hover:text-orange-400 cursor-pointer" />
        </div>
        <div className="flex flex-wrap gap-4 justify-end">
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white">
            Terms of Use
          </a>
          <a href="#" className="hover:text-white">
            Disclaimer
          </a>
          <a href="#" className="hover:text-white">
            UK Modern Slavery Act
          </a>
          <a href="#" className="hover:text-white">
            Cookie Preferences
          </a>
        </div>
      </div>

      <div className=" flex flex-row items-center justify-around gap-4">
        <div className="text-xl font-bold text-white">Sria Infotech</div>
        <div className="flex-col ">
          <div className="text-4xl font-bold text-orange-400">2024</div>
          <div className="text-center mt-2 text-xs text-gray-500">
            All rights reserved
          </div>
        </div>
      </div>

      <style>
        {`
        @keyframes marquee {
          0% { transform: translateX(100%) }
          100% { transform: translateX(-100%) }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 20s linear infinite;
        }
        `}
      </style>
    </footer>
  );
};
export default Footer;
