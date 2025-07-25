import React from "react";
import Requesademobtn from "./Requesademobtn";
import { Contact } from "lucide-react";

interface ContactImageOverlayProps {
  imageUrl: string;
  title: string;
}

const ContactImageOverlay: React.FC<ContactImageOverlayProps> = ({
  imageUrl,
  title,
}) => {
  return (
    <div
      className="sticky top-0 h-[350px] sm:h-[500px] md:h-[600px] lg:h-[500px] xl:h-[350px] w-full bg-cover bg-top z-10 relative"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 z-0 bg-black/50"></div>

      {/* Responsive Content Container - centered on mobile, right-aligned on larger screens */}
      <div className="relative z-10 h-full flex items-center justify-center sm:justify-end">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-white max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl mx-auto sm:ml-auto text-center sm:text-right">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 leading-tight">
              {title}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactImageOverlay;
