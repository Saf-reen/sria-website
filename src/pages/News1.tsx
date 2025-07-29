import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import StoriesHero from "@/components/StoriesHero";
import React from "react";
import { FaLinkedin, FaFacebookF, FaTwitter, FaCopy } from "react-icons/fa";

function News1() {
  return (
    <div className="w-full min-h-screen">
      <Navigation />
      <div className=" w-full flex relative sticky top-0 z-0">
        <StoriesHero
          imageSrc="https://www.accely.com/wp-content/uploads/2025/07/UAE-Mining-Giant-Embarks-on-E-Invoicing-Transformation.webp"
          imageAlt="Doctor at laptop"
          category=""
          title="UAE Mining Giant Embarks on E-Invoicing Transformation"
          tag="SUnited Arab Emirates"
          datePublished="July 16, 2025"
        />
      </div>

      <div className="w-full bg-white text-black flex justify-center  relative z-10 px-4 py-12">
        <div className="max-w-[800px] w-full space-y-8">
          {/* Top Paragraph */}
          <p className="text-sm text-gray-800 leading-relaxed">
            The UAE’s leading mining business has effectively implemented a
            comprehensive e-invoicing system, turning a traditionally
            paper-based process into an intelligent, effective digital
            foundation for financial operations. This marks a major advancement
            in the harmonization of regulations and digital finance.
          </p>

          <p className="text-sm text-gray-800 leading-relaxed">
            E-Invoicing solution that completely complies with the UAE Federal
            Tax Authority’s (FTA) e-invoicing framework has made it possible for
            all invoices, from fuel suppliers to machinery contractors, to be
            prepared, reviewed, and authorized electronically.
          </p>

          {/* Heading Section */}
          <h2 className="text-xl font-semibold mt-8">
            Managing E-Invoicing operations
          </h2>
          <p className="text-sm text-gray-800 leading-relaxed">
            In addition to taking a lot of time, manually maintaining invoices
            was slowing down operations for a company that handled a lot of
            transactions in the areas of equipment leasing, transportation, and
            procurement. The procedure included mountains of paper records,
            emails back and forth daily, getting approval, and all the hassles
            of missing documentation in an industry that depends on accuracy and
            volume.
          </p>

          <h2 className="text-xl font-semibold mt-8">Our Solutions</h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-md mb-1">
                Seamless ERP Integration
              </h3>
              <p className="text-sm text-gray-800">
                We integrated the e-invoicing system with the company’s existing
                ERP landscape, enabling real-time syncing of financial,
                procurement, and vendor data.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-md mb-1">
                Automated Invoice Validation and VAT Compliance
              </h3>
              <p className="text-sm text-gray-800">
                We enabled system-driven validation of VAT elements, invoice
                structure, and digital signatures, reducing human errors and
                eliminating delays in invoice approval.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-md mb-1">
                Real-Time Invoice Tracking Dashboards
              </h3>
              <p className="text-sm text-gray-800">
                We provided user-friendly dashboards and reporting tools for
                finance teams to monitor invoice status, track payment
                timelines, and manage exceptions efficiently.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-md mb-1">
                Vendor Portal Enablement
              </h3>
              <p className="text-sm text-gray-800">
                We improved supplier collaboration by streamlining vendor
                interaction through an integrated interface that enables
                partners to electronically submit, track, and manage invoices.
              </p>
            </div>

            <p className="text-sm text-gray-800">
              Throughout the entire implementation process, the mining company
              was assisted by Accely, an established digital transformation
              company and technology consulting partner, which contributed a
              thorough understanding of the regulatory frameworks and
              industry-specific complications.
            </p>
          </div>

          {/* Footer-like Section */}
          <div className="flex flex-col  relative z-10 sm:flex-row sm:items-center sm:justify-between border-t pt-6 mt-10 gap-4">
            {/* Left Side: Logo & Text */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-sm font-semibold">
                A
              </div>
              <div>
                <div className="font-medium text-sm">Accely Group</div>
                <div className="text-xs text-gray-600">
                  Official News & Media Team
                </div>
              </div>
            </div>

            {/* Right Side: Icons */}
            <div className="flex items-center gap-4 text-gray-600 text-sm">
              <FaLinkedin />
              <FaFacebookF />
              <FaTwitter />
              <button className="flex items-center gap-1 border px-2 py-1 rounded hover:bg-gray-100">
                <FaCopy size={12} />
                <span className="text-xs">Copy link</span>
              </button>
            </div>
          </div>

          {/* Bottom Description */}
          <p className="text-xs text-gray-600 mt-4">
            Accely’s news and media team delivers the latest company news,
            client milestones, and strategic insights driving digital
            transformation across global enterprises.
          </p>
        </div>
      </div>

      <div className="p-4 lg:p-8   bg-white relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {[
            { src: "/fixedIcons/1.png", label: "ISO 9001" },
            { src: "/fixedIcons/2.png", label: "ISO 27001" },
            { src: "/fixedIcons/3.png", label: "CMMI Level 5" },
            { src: "/fixedIcons/4.png", label: "AWS Partner" },
            { src: "/fixedIcons/5.png", label: "Microsoft Gold" },
            { src: "/fixedIcons/6.png", label: "ISO 9001" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-2 lg:p-4"
            >
              <img
                src={item.src}
                alt={item.label}
                className="h-46 sm:h-40 lg:h-40 mb-2 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="w-full  relative z-10 bg-black">
        {" "}
        {/* Full width container */}
        <div className="max-w-[1400px] w-full mx-auto">
          {" "}
          {/* Centered max width container */}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default News1;
