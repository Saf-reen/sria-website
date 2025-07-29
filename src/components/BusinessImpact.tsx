import React from "react";

interface ImpactItem {
  title: string;
  description: string;
}

interface BusinessImpactProps {
  sectionTitle: string;
  bgImage: string;
  items: ImpactItem[];
}

const BusinessImpact: React.FC<BusinessImpactProps> = ({
  sectionTitle,
  bgImage,
  items,
}) => {
  return (
    <div className="w-full relative z-10 flex flex-col items-center bg-white text-black">
      {/* Section Title */}
      <div className="w-full max-w-[1400px] px-4 pt-12">
        <h2 className="text-2xl font-semibold mb-6">{sectionTitle}</h2>
      </div>

      {/* Content Container */}
      <div className="w-full max-w-[1400px] relative px-4">
        {/* Background Image (desktop only) */}
        <div
          className="hidden md:block w-full max-w-[1300px] h-[750px] bg-no-repeat bg-left bg-contain"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundPosition: "left",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        ></div>

        {/* Data blocks */}
        <div
          className={`
            w-full
            md:max-w-[900px]
            p-4
            sm:px-6
            flex
            flex-col
            gap-4
         
            ${/* Shift block over image only on medium screens */ ""}
            md:absolute 
            md:top-0 
            md:right-0 
            md:translate-x-10 
            md:-translate-y-10
          `}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="w-full border-b last:border-b-0 pb-4 p-4 bg-gray-200 rounded"
            >
              <h3 className="text-sm font-semibold text-gray-800 mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessImpact;
