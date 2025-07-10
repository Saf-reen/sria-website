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
      className="mt-16 sticky top-0 h-[300px] md:h-[400px] w-full bg-cover bg-center z-10"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 h-full flex items-center px-6 md:px-12">
        <div className="text-white max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">{title}</h2>
          <p className="text-lg md:text-xl mb-6">{description}</p>
          <Requesademobtn text="Book a Consultation" />
        </div>
      </div>
    </div>
  );
};

export default ImageOverlay;
