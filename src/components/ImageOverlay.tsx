import React from "react";
import Requesademobtn from "./Requesademobtn";

interface ImageOverlayProps {
  imageUrl: string;
  title: string;
  description: string;
}

const ImageOverlay: React.FC<ImageOverlayProps> = ({
  imageUrl,
  title,
  description,
}) => {
  return (
    <div
      className="sticky top-0 z-20  lg:block h-[600px] w-full bg-cover bg-center z-10 relative"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 z-0 bg-black/50"></div>

      {/* Centered & Responsive Content Container */}
      <div className="relative z-10 h-full flex items-center">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-white max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{title}</h2>
            <p className="text-base md:text-lg mb-6">{description}</p>
            <Requesademobtn text="Book a Consultation" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageOverlay;
