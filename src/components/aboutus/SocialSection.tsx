import React from "react";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: <Linkedin className="w-6 h-6" />,
    url: "https://www.linkedin.com/company/yourcompany",
  },
  {
    name: "Twitter",
    icon: <Twitter className="w-6 h-6" />,
    url: "https://twitter.com/yourcompany",
  },
  {
    name: "Facebook",
    icon: <Facebook className="w-6 h-6" />,
    url: "https://facebook.com/yourcompany",
  },
  {
    name: "Instagram",
    icon: <Instagram className="w-6 h-6" />,
    url: "https://instagram.com/yourcompany",
  },
  {
    name: "YouTube",
    icon: <Youtube className="w-6 h-6" />,
    url: "https://youtube.com/yourcompany",
  },
];

const SocialSection: React.FC = () => {
  return (
    <div className="bg-white text-black py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row overflow-hidden ">
        {/* Left Image */}
        <div className="md:w-1/3 w-full h-64 md:h-auto">
          <img
            src="https://www.accely.com/wp-content/uploads/2025/01/Contact-Banner-1.webp"
            alt="Get Social"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="md:w-2/3 w-full p-6 flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Let’s Get Social Together
          </h2>
          <div className="space-y-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 hover:text-yellow-500 transition-colors"
              >
                {social.icon}
                <span className="text-lg">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialSection;
