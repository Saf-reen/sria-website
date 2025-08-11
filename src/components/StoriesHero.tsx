import React from "react";

interface StoriesHeroProps {
  imageSrc: string;
  imageAlt?: string;
  category: string;
  title: string;
  tag: string;
  datePublished: string;
}

const StoriesHero: React.FC<StoriesHeroProps> = ({
  imageSrc,
  imageAlt = "Hero image",
  category,
  title,
  tag,
  datePublished,
}) => {
  return (
    <div className="w-full relative  sticky top-0 flex justify-center bg-white z-50">
      <div className="w-[1400px] flex flex-col md:flex-row items-center md:items-start px-4 py-8 gap-8">
        <div className="w-full md:w-1/2 h-[400px] flex flex-col justify-center text-left">
          <p className="text-sm text-gray-600 uppercase tracking-wide mb-2">
            {category}
          </p>
          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 leading-tight mb-4">
            {title}
          </h1>
          <div className="text-sm text-gray-600 mt-2">
            <span className="inline-block bg-blue-100 text-blue-600 px-2 py-1 rounded mr-2">
              {tag}
            </span>
            <span>Published: {datePublished}</span>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default StoriesHero;
