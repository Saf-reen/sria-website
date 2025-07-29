import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom"; // Replace with "next/link" if needed

interface HeroSectionWithLinksProps {
  imageUrl: string;
  title: string;
  links: { label: string; href: string }[];
}

const HeroSectionWithLinks: React.FC<HeroSectionWithLinksProps> = ({
  imageUrl,
  title,
  links,
}) => {
  return (
    <div
      className=" sticky top-0 relative w-full h-[300px] sm:h-[400px] md:h-[500px] bg-cover bg-top"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Content */}
      <div className="relative z-10 w-full h-full flex items-center justify-center text-white px-4">
        <div className="text-center">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-6">
            {title}
          </h2>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {links.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className="group inline-flex items-center gap-1 text-base sm:text-lg font-medium text-white hover:text-white"
              >
                <span className="relative after:block after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all group-hover:after:w-full">
                  {link.label}
                </span>
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionWithLinks;
