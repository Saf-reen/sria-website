import React from "react";
import Navigation from "../Navigation";
import ImageOverlay from "../ImageOverlay";
import ContactImageOverlay from "../ContactImageOverlay";
import ContactForm from "./ContactForm";
import GlobalOffices from "./GlobalOffices";
import Footer from "@/components/Footer";
import SocialSection from "./SocialSection";

function ContactUs() {
  return (
    <div className="min-h-screen">
      <div>
        <Navigation enableScrollEffect={true} />

        <ContactImageOverlay
          imageUrl="https://www.accely.com/wp-content/uploads/2025/01/Contact-Banner-1.webp"
          title="We are Here to Help You"
        />
        <div className="w-full relative bg-black z-10">
          <ContactForm />
          <GlobalOffices />
          <SocialSection />
        </div>
        <div className="p-8 relative  bg-white z-10">
          <div className="flex flex-wrap justify-center items-center gap-8">
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
                className="flex flex-col items-center justify-center w-40 h-40 p-2"
              >
                <img
                  src={item.src}
                  alt={item.label}
                  className="h-24 mb-2 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;
