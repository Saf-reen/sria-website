import React, { useState } from "react";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  const [openSections, setOpenSections] = useState<string[]>([]);

  const toggleSection = (title: string) => {
    setOpenSections((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

  const locations = [
    {
      title: "New Jersey",
      address: "381 Blair Rd, Avenel, NJ 07001, USA",
      phone: "+1 647 408 7887",
      email: "info.us@sriainfotech.com",
    },
    {
      title: "United Kingdom",
      address: "Berkeley Square House, London, W1J 6BD",
      phone: "+44 797 982 1621",
      email: "info.uk@sriainfotech.com",
    },
    {
      title: "Singapore",
      address: "31 Cantonment Road, P.O. Box: 089747",
      phone: "+65 9086 0319",
      email: "info.sg@sriainfotech.com",
    },
    {
      title: "UAE",
      address: "308 Indigo Tower, Dubai, P.O. Box: 112965",
      phone: "+971 4 452 9897",
      email: "info.ae@sriainfotech.com",
    },
  ];

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

  return (
    <footer className="bg-black text-white px-6 md:px-20 py-10 text-sm">
      <section className="text-center mb-10">
        <p className="text-lg md:text-xl font-light">
          Join over 350+ global businesses already growing with SRia Infotech
        </p>
        <h2 className="text-3xl md:text-5xl font-semibold mt-2">
          Let's transform your business landscape
        </h2>
        <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded transition">
          Get started
        </button>

        <div className="overflow-hidden whitespace-nowrap mt-6">
          <div className="animate-marquee flex gap-8 items-center">
            {[1, 2, 3, 4, 5].map((i) => (
              <img
                key={i}
                src={`https://via.placeholder.com/100x50?text=Logo+${i}`}
                alt={`Partner ${i}`}
                className="inline-block"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 border-t border-gray-700 pt-10 pb-6">
        {locations.map((loc) => (
          <div
            key={loc.title}
            className="bg-gray-900 p-4 rounded-lg border border-gray-700 shadow-md break-words"
          >
            <p className="font-bold text-orange-400 mb-2">Location</p>
            <p className="font-medium text-lg mb-1">{loc.title}</p>
            <p className="mb-1">{loc.address}</p>
            <p className="flex items-center gap-2">
              <FaPhoneAlt /> {loc.phone}
            </p>
            <p className="flex items-center gap-2 break-all">
              <FaEnvelope /> {loc.email}
            </p>
          </div>
        ))}
      </section>

      <hr className="my-8 border-gray-700" />

      <section className="hidden md:grid grid-cols-2 md:grid-cols-5 gap-6 text-sm">
        {Object.entries(columns).map(([title, links]) => (
          <div key={title}>
            <h3 className="text-lg font-semibold mb-3">{title}</h3>
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
              className="w-full text-left font-semibold text-lg mb-2 bg-gray-800 p-2 rounded"
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

      <div className="text-center text-white text-xl font-bold mt-10">
        Sria Infotech
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 mt-6 pt-6 text-xs text-gray-400">
        <div className="flex justify-start gap-4 text-lg text-white mb-4 md:mb-0">
          <FaLinkedinIn />
          <FaFacebookF />
          <FaYoutube />
          <FaInstagram />
        </div>
        <div className="flex flex-wrap gap-4 justify-end">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Disclaimer</a>
          <a href="#">UK Modern Slavery Act</a>
          <a href="#">Cookie Preferences</a>
        </div>
      </div>

      <div className="text-center mt-4 text-xs text-gray-500">
        &copy; 2024 Sria Infotech. All rights reserved.
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
