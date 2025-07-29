import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import SidebarMenu from "@/components/SidebarMenu";
import StoriesHero from "@/components/StoriesHero";
import React from "react";
import { FaLinkedin, FaFacebookF, FaTwitter, FaCopy } from "react-icons/fa";

function Resources1() {
  const menuItems = [
    "Introduction",
    "What Role Does Accely Import EXIM Solutions Play",
    "How Can SION Benefit You",
    "The benefit of the Letter of Credit Management",
  ];
  return (
    <div className="w-full  min-h-screen">
      <Navigation />
      <div className=" w-full flex sticky top-0 ">
        <StoriesHero
          imageSrc="https://www.accely.com/wp-content/uploads/2020/03/Accely-Import-EXIM-Solutions_-The-Key-Features-and-Major-Benefits.webp"
          imageAlt="Doctor at laptop"
          category=""
          title="Accely Import EXIM Solutions: The Key Features and Major Benefits

"
          tag="EXIM"
          datePublished="March 10, 2025"
        />
      </div>

      <div className="w-full relative z-10 bg-white">
        <div className="flex flex-col lg:flex-row   w-full max-w-[1400px] mx-auto mt-4 lg:px-8">
          {/* Sidebar - Hidden on mobile, sticky on desktop */}
          <div className="hidden lg:block  leading-tight">
            <div className="sticky top-24 ">
              <SidebarMenu menuItems={menuItems} />
            </div>
          </div>
          <div className="w-full lg:w-5/6 bg-white  p-4 lg:p-6">
            <section id="introduction" className="scroll-mt-24 mb-12">
              <h2 className="text-3xl font-semibold mb-4">Introduction</h2>
              <p>
                International trade and business operations have to comply with
                a series of regulatory policies and legal processes. Every
                business entrepreneur engaged in international trade must follow
                the rules, especially those pertaining to export and import
                management. How about having a next-generation Export-Import
                Management Software Solution that accelerates and streamlines
                your business decisions? We know how SAP’s advanced ERP business
                suite S/4 HANA transforms the whole international trade
                management scenario. Now, another innovative Import EXIM
                software solution has arrived to simplify the international
                trade process. Accely has created an Import EXIM software to
                ease the trade process in India.
                {/* Use your full paragraph content here */}
              </p>
            </section>

            <section
              id="what role does accely import exim solutions play"
              className="scroll-mt-24 mb-12"
            >
              <h2 className="text-3xl font-semibold mb-4">
                What Role Does Accely Import EXIM Solutions Play
              </h2>
              <p>
                Accely Import EXIM solutions play a vital role in handling the
                export promotion schemes. It deals with important tasks such as
                managing licenses, handling pre and post-shipping documentation,
                and providing the letter of credit. Obtaining an international
                trade license has been one of the most challenging and tough
                asks for companies that import and export products. They had
                been searching for a cutting-edge technology that focuses on
                reducing the complexities while operating an export-import
                business. This is where Accely Import EXIM comes into play. It
                smoothly streamlines the end-to-end license management process.
                Process management takes place from applications, assignments,
                status management, and history. Accely Import EXIM allows you to
                access Standard Input Output Norms (SION) and refers to the
                export shipping bills.
                {/* Use full content for this section here */}
              </p>
            </section>

            <section
              id="how can sion benefit you"
              className="scroll-mt-24 mb-12"
            >
              <h2 className="text-3xl font-semibold mb-4">
                How Can SION Benefit You
              </h2>
              <p>
                The Standard Input Output Norms or SION help in creating
                licenses. It also plays an important role in discharging the
                export obligation to exempt schemes along with keeping track of
                export accruals and realization. In addition to that, SION can
                also be a flexible space for you to develop document sets as
                well as pre and post shipping documents. The document is
                prepared on the basis of SAP sourced documents. Let’s now
                discuss the major features and benefits of the Accely Import
                EXIM Solutions. Eliminating the Manual Error Process You don’t
                have to indulge in the manual process to conduct the export and
                import activities. Instead, the Accely Import EXIM solution
                allows you to automate the manual steps that reduce the error.
                The accuracy of data will allow you to minimize your mistakes
                and you can prevent business revenue loss. A Single Window The
                Accely Export and Import Services provide business enterprises
                with a single-window or view for Export Promotion scheme
                management. A single view will also help you manage licenses,
                track import shipping details, handle shipment documentation,
                manage bank guarantees, and secure letters of credit. Get
                Real-time Tracking With Accely Import EXIM solutions, you have
                the leverage to track licenses, schemes, and the letter of
                credit in real-time. Facility for Real-time Analytics and
                Insights Getting real-time analytics and insights will help you
                access greater role-based visibility and monitor the
                export-import process. Allows a Smooth Integration Accely
                Export-Import Solutions allows you to seamlessly integrate the
                standard SAP logistics module. This includes a number of
                processes such as sales and distribution, financial accounting,
                and the management of materials. In addition to all that, you
                can also generate reports to view the import and export
                analytics insights. Get Improved Documentation and Tracking It
                has become much easier to track shipment documents, end-to-end
                license documentation, advanced email alerts, reporting, and
                bank guarantee using this. Providing the Transparency of the
                Banks It helps to capture important data and report insights
                that allow the bank to maintain transparency in the
                export-import process. Real-time Alerts Mobile applications
                provide on-the-fly alerts regarding export-import data, which
                helps you to effectively handle international trade management.
                Managing the Licence or Scheme The government keeps on revising
                all the dynamic schemes on a yearly basis. Accely Import EXIM
                helps to manage the scheme through end-to-end functionality. It
                also allows the management of licensed lifecycles. This can
                streamline advanced authorization, duty-free authorization,
                promoting capital goods schemes, and duty drawbacks. Encouraging
                the Export Initiative Management The automation of the export
                incentive process, MIES, and duty drawback help to put your
                business in a commanding position. You can even take control of
                the material based incentive rate and tariff number. Accely
                Import EXIM will help you in calculating the eligibility of the
                incentive-based on the generation of export invoices and
                received BRC. Facility for Import Shipment Tracking It is a
                pleasure to note that tracking the import shipments along with
                the customs clearance process has become much more simplified.
                {/* Use full content for this section here */}
              </p>
            </section>

            <section
              id="the benefit of the letter of credit management"
              className="scroll-mt-24 mb-12"
            >
              <h2 className="text-3xl font-semibold mb-4">
                The Benefit of the Letter of Credit Management
              </h2>
              <p>
                You can even streamline the letters of credit management during
                the import and export process. Apart from that, Accely Import
                EXIM also allows you to maintain the bank limits and manage the
                acceptance, retirement, and amendment process. You can have
                access to the scanned documents to read the LC details and
                update the same automatically. Exporting Documents and Process
                Management Gets Simpler The pre and post shipping documents play
                a pivotal role in creating the customs clearance. Accely Import
                EXIM lets you export obligations with a comprehensive tracking
                process. You can also generate post-shipment documentation based
                on the Letter of Credit terms and conditions. Getting Bonds and
                Bank Guarantee Accely Import EXIM allows seamlessly manage the
                bond and bank guarantee details that are issued and received for
                a different purpose.
                {/* Use full content for this section here */}
              </p>
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
            </section>
          </div>
        </div>
      </div>

      <div className="p-4 lg:p-8 relative bg-white z-10 rounded-lg ">
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

      <div className="w-full relative z-10 bg-black">
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

export default Resources1;
