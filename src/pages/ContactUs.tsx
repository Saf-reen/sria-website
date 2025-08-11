import React from "react";
import Navigation from "../components/Navigation";
import ImageOverlay from "../components/ImageOverlay";
import ContactImageOverlay from "../components/ContactImageOverlay";
import ContactForm from "../components/aboutus/ContactForm";
import GlobalOffices from "../components/aboutus/GlobalOffices";
import Footer from "@/components/Footer";
import SocialSection from "../components/aboutus/SocialSection";

function ContactUs() {
  return (
    
      <div>
            {" "}
        <Navigation enableScrollEffect={true} />

        <ContactImageOverlay
          imageUrl="https://www.accely.com/wp-content/uploads/2025/01/Contact-Banner-1.webp"
          title="We are Here to Help You"
        />
        <div className="w-full   max-w-[1400px] relative bg-black z-10">
          <ContactForm />
          <GlobalOffices />
          <SocialSection />
        </div>
      
      
       
      </div>
   
  );
}

export default ContactUs;
