import { ArrowRight, Fullscreen } from "lucide-react";
import React, { useState } from "react";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"

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
  const [email, setEmail] = useState("");

  const toggleSection = (title: string) => {
    setOpenSections((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

  const countries: Country[] = [
    { name: "United States", flag: "🇺🇸" },
    // { name: "United Kingdom", flag: "🇬🇧" },
    // { name: "Singapore", flag: "🇸🇬" },
    // { name: "South Africa", flag: "🇿🇦" },
    // { name: "Saudi Arabia", flag: "🇸🇦" },
    // { name: "UAE", flag: "🇦🇪" },
    // { name: "Kuwait", flag: "🇰🇼" },
    // { name: "Greece", flag: "🇬🇷" },
    // { name: "Qatar", flag: "🇶🇦" },
    { name: "India", flag: "🇮🇳" },
    // { name: "Egypt", flag: "🇪🇬" },
  ];

  const locationData: LocationDataMap = {
    "United States": [
      {
        address: "18 Hunters Dr Gilbertsville, PA 19525-6601, USA",
        phone: "+91 99897 95335",
        email: "hr@sriainfotech.com",
      },
    ],
    // "United Kingdom": [
    //   {
    //     address: "Berkeley Square House, London, W1J 6BD",
    //     phone: "+44 797 982 1621",
    //     email: "info.uk@sriainfotech.com",
    //   },
    // ],
    // Singapore: [
    //   {
    //     address: "31 Cantonment Road, P.O. Box: 089747",
    //     phone: "+65 9086 0319",
    //     email: "info.sg@sriainfotech.com",
    //   },
    // ],
    // "South Africa": [
    //   {
    //     address: "123 Business District, Cape Town, 8001",
    //     phone: "+27 21 555 0123",
    //     email: "info.za@sriainfotech.com",
    //   },
    // ],
    // "Saudi Arabia": [
    //   {
    //     address: "King Fahd Road, Riyadh 11564, Saudi Arabia",
    //     phone: "+966 11 555 0123",
    //     email: "info.sa@sriainfotech.com",
    //   },
    // ],
    // UAE: [
    //   {
    //     address: "308 Indigo Tower, Dubai, P.O. Box: 112965",
    //     phone: "+971 4 452 9897",
    //     email: "info.ae@sriainfotech.com",
    //   },
    // ],
    // Kuwait: [
    //   {
    //     address: "Al-Shuhada Street, Kuwait City, Kuwait",
    //     phone: "+965 2555 0123",
    //     email: "info.kw@sriainfotech.com",
    //   },
    // ],
    // Greece: [
    //   {
    //     address: "Syntagma Square, Athens 10563, Greece",
    //     phone: "+30 210 555 0123",
    //     email: "info.gr@sriainfotech.com",
    //   },
    // ],
    // Qatar: [
    //   {
    //     address: "West Bay, Doha, Qatar",
    //     phone: "+974 4455 0123",
    //     email: "info.qa@sriainfotech.com",
    //   },
    // ],
    India: [
      {
        address: "First Floor, 1-121/63 Survey No. 63 Part Hotel, Sitara Grand Backside, Miyapur, Hyderabad, Telangana, India 500049",
        phone: "+91 97013 14138",
        email: "hr@sriainfotech.com",
      },
      {
        address: "Amaravati, Telangana 500081",
        phone: "+91 95539 55893",
        email: "hr@sriainfotech.com",
      },
      {
        address: "TASK Center, Mulugu, Telangana 506343",
        phone: "+91 90145 52492",
        email: "hr@sriainfotech.com",
      },
      
    ],
    // Egypt: [
    //   {
    //     address: "New Cairo, Cairo Governorate, Egypt",
    //     phone: "+20 2 555 0123",
    //     email: "info.eg@sriainfotech.com",
    //   },
    // ],
  };

  const columns = {
    "Services": [
      { label: "Managed Services", href: "/sapmanagedservices" },
      { label: "AMS", href: "/ams" },
      // { label: "Why Sria", href: "/about/why-sria" },
      { label: "SAP Implementation Services", href: "/sapimplement" },
      // { label: "Life at Sria", href: "/about/life-at-sria" },
      { label: "ABAP", href: "/abap" },
    ],
    Solutions: [
      { label: "SAP S/4HANA", href: "/solutions/sap-s4hana" },
      { label: "SAP S/4HANA Private Cloud", href: "/solutions/private-cloud" },
      { label: "SAP S/4HANA Public Cloud", href: "/solutions/public-cloud" },
      { label: "SAP SuccessFactors", href: "/solutions/successfactors" },
      { label: "SAP CPI", href: "/solutions/cpi" },
      { label: "SAP Build Apps", href: "/solutions/build-apps" },
      { label: "SAP Financial Mgmt", href: "/solutions/financial" },
    ],
    Products: [
        { label: "NxDesk", href: "/products/nxdesk" },
        { label: "Nxify", href: "/products/nxify" },
        { label: "Big", href: "/products/big" },
        { label: "Gate Check", href: "/products/gatecheck" },
      ],
    // Industries: [
    //   { label: "Retail", href: "/industries/retail" },
    //   { label: "Consumer Products", href: "/industries/consumer-products" },
    //   { label: "Engineering & Construction", href: "/industries/engineering" },
    //   {
    //     label: "Professional Services",
    //     href: "/industries/professional-services",
    //   },
    //   { label: "Life Sciences & Healthcare", href: "/industries/healthcare" },
    //   { label: "Manufacturing", href: "/industries/manufacturing" },
    // ],
    // "Quick Links": [
    //   { label: "Customer Stories", href: "/customer-stories" },
    //   { label: "Blogs", href: "/blogs" },
    //   { label: "Newsroom", href: "/newsroom" },
    //   { label: "CSR", href: "/csr" },
    //   { label: "Corporate Governance", href: "/governance" },
    //   {
    //     label: "Labor Condition Application",
    //     href: "/labor-condition-application",
    //   },
    // ],
  };

  const handleSubscribe = (): void => {
    console.log("Subscribed with email:", email);
    setEmail("");
  };

  return (
    <div className="bg-black w-full text-white font-[Questrial,Arial,Verdana,Tahoma,sans-serif] overflow-hidden">
      <footer className="bg-black text-white py-10  w-full">
        <div className="mt-3 w-full mb-4">
          <section className="text-center w-full mb-12">
            <div className="bg-cover bg-center bg-red-500 bg-no-repeat py-5 px-2 "
              style={{
                backgroundImage:
                  "url('https://www.accely.com/wp-content/themes/accely/assets/images/footer-bg.webp')",
                backgroundColor: "#222",
              }}
            >
              <div className=" w-full mx-auto px-4 text-center">
                <p className="text-[18px] sm:text-[20px] md:text-[21px] font-light text-white leading-relaxed">
                  Join global businesses already growing with Sria Infotech.
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal mt-4 sm:mt-6 text-white leading-tight">
                  Let's transform your business landscape
                </h2>
              </div>

              <button className="mt-6 mb-10 text-[16px] bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 transition">
                <Link  to={"/contactus"} className="flex flex-row justify-center items-center gap-2">
                
                  Get started <ArrowRight />
                  </Link>
              
              </button>
            </div>

            {/* <div
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
                    className="h-20 sm:h-24 px-10 sm:px-20 w-auto object-contain inline-block"
                  />
                ))}
              </div>
            </div> */}
          </section>
        </div>

        {/* Newsletter Section */}
        <div className="mt-3 w-full mb-16">
          <div
            className="py-2 px-2 w-full"
            style={{
              background: `linear-gradient(90deg, rgb(34, 34, 34) 0%, rgb(24, 24, 24) 55.5%, rgb(34, 34, 34) 100%)`,
            }}
          >
            <div className="flex flex-col md:flex-row justify-between gap-6 p-2">
              <div className="w-full flex flex-col">
                <h3 className="text-[27px] font-normal text-white">
                  Subscribe to our Newsletter
                </h3>
                <p className="text-gray-300 text-[16px] font-normal">
                  Get the weekly updates and insights right in your inbox.
                </p>
              </div>
              <div className="flex flex-col justify-center align-center sm:flex-row gap-3 md:w-1/2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-8 p-2 text-sm bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
                />
                <button
                  onClick={handleSubscribe}
                  className="p-1 h-8 font-normal text-sm bg-orange-500 hover:bg-orange-600 text-white transition"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Location Section */}
        <section className="border-t border-gray-700 pt-10 pb-6">
          <div className="mb-6">
            <h3 className="text-[36px] font-normal text-white mb-2 pl-2">
              Location
            </h3>
            <div className="flex items-center gap-2 text-orange-400 hover:text-orange-300 cursor-pointer pl-2">
              <span>View all locations</span>
              <ArrowRight size={16} />
            </div>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {Object.entries(locationData).map(([countryName, locations]) => {
                const country = countries.find((c) => c.name === countryName);
                return locations.map((loc, index) => (
                  <div
                    key={`${countryName}-${index}`}
                    className="bg-gray-900 p-5 border border-gray-700 shadow-md w-full"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[16px]">{country?.flag}</span>
                      <span className="text-[16px] font-normal text-white">
                        {countryName}
                      </span>
                    </div>
                    <p className="text-gray-300 text-[16px] font-normal">
                      <strong>Address:</strong> {loc.address}
                    </p>
                    <p className="flex items-center gap-2 text-gray-300 text-[15px] font-normal mt-2">
                      <FaPhoneAlt className="text-orange-400" />
                      <strong>Phone:</strong> {loc.phone}
                    </p>
                    <p className="flex items-center gap-2 text-gray-300 text-[15px] font-normal mt-2">
                      <FaEnvelope className="text-orange-400" />
                      <strong>Email:</strong> {loc.email}
                    </p>
                  </div>
                ));
              })}
            </div>
          </div>
        </section>

        <hr className="my-8  border-gray-700" />

        {/* Desktop Columns */}
        <section className="hidden md:grid grid-cols-2 md:grid-cols-3 gap-8  px-2 text-sm">
          {Object.entries(columns).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-[16px] font-semibold mb-3">
                {title}
              </h3>
              <ul className="felx justify-between">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} className="hover:underline">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Mobile Collapsible Columns */}
        <section className="md:hidden ">
          {Object.entries(columns).map(([title, links]) => (
            <div key={title} className="mb-4">
              <button
                className="w-full flex justify-between items-center text-left text-[16px] font-normal mb-2  p-2 rounded"
                onClick={() => toggleSection(title)}
              >
                <span>{title}</span>
                <svg
                  className={`w-4 h-4 transform transition-transform ${
                    openSections.includes(title) ? "rotate-90" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {openSections.includes(title) && (
                <ul className="pl-4 space-y-1 px-2 bg-gray-800">
                  {links.map(({ label, href }) => (
                    <li key={label}>
                      <a href={href} className="hover:underline">
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>

        <hr className="my-8 border-gray-700" />

        {/* Social and Links */}
        <div className="flex flex-col sm:flex-col px-2 md:flex-row justify-between items-center gap-4 text-[16px] font-normal text-gray-400 mb-6">
          <div className="flex justify-center gap-4 text-lg text-white">
            <a
              href="https://www.linkedin.com/company/sria-infotech-pvt-ltd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="hover:text-orange-400 cursor-pointer" />
            </a>

            <a
              href="https://www.facebook.com/sriainfotech/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="hover:text-orange-400 cursor-pointer" />
            </a>

            <a
              href="https://www.youtube.com/@sriainfotechpvtltd.4494"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="hover:text-orange-400 cursor-pointer" />
            </a>

            <a
              href="https://www.instagram.com/sriainfotech/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="hover:text-orange-400 cursor-pointer" />
            </a>
          </div>

          {/* <div className="flex flex-wrap gap-2 justify-center md:justify-end text-center">
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
          </div> */}
        </div>

        {/* Branding */}
        <div className="w-full flex  px-2 sm:flex-row items-center justify-between gap-2 text-center">
          <div className="text-left">    <div className="flex flex-row items-center">
                          <Link to="/" className="font-bold flex flex-row items-center">
                            <img src={logo} alt="Logo" className="h-10 w-auto" />
                            <span className="ml-2 text-orange-500">Sria</span>
                            <span className="ml-1">
                              <span className="text-white">Info</span>
                              <span className="text-green-500">Tech</span>
                            </span>
                          </Link>
                        </div>
          <div className="text-xs ml-2 text-gray-50">
                    
            <p>Smart.</p>
            <p>Resilient.</p>
            <p> Inclusive.</p>
            <p>Agile.</p>
            <p>Your trusted partner in digital transformation.</p>
          </div>
          </div>
          <div>
            {/* <div className="text-4xl font-bold text-orange-400 bg-gradient-to-r from-orange-500 via-white to-green-500 ">2025</div> */}
<div className="text-4xl font-bold bg-gradient-to-r from-orange-500 via-white to-green-500 bg-clip-text text-transparent">
  2025
</div>
<div className="mt-2 text-xs bg-gradient-to-r from-orange-500 via-white to-green-500 bg-clip-text text-transparent">
  All rights reserved
</div>
            {/* <div className="mt-2 text-xs ">
              All rights reserved
            </div> */}
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
    </div>
  );
};

export default Footer;