import React, { useState } from "react";
import { Plus, Minus, Cloud, Package } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface SolutionItem {
  title: string;
  description: string;
  link: string;
}

interface SolutionDropdown {
  title: string;
  icon?: LucideIcon;
  items: SolutionItem[];
}

interface SolutionDropdownSectionProps {
  sections: SolutionDropdown[];
}

const SolutionDropdownSection: React.FC<SolutionDropdownSectionProps> = ({
  sections,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full mx-auto my-10 px-4">
      {sections.map((section, index) => (
        <div key={index} className="border-t first:border-b bg-[#f3f3f3]">
          <button
            onClick={() => toggle(index)}
            className="w-full text-left px-4 py-4 flex justify-between items-center"
          >
            <div className="flex items-center gap-2 text-xl font-medium">
              {section.icon && (
                <section.icon className="w-5 h-5 text-gray-700" />
              )}
              {section.title}
            </div>
            {openIndex === index ? (
              <Minus className="text-gray-600 w-5 h-5" />
            ) : (
              <Plus className="text-gray-600 w-5 h-5" />
            )}
          </button>

          {openIndex === index && (
            <div className="px-4 bg-white pb-6 pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {section.items.map((item, idx) => (
                  <div key={idx} className="text-sm pt-5 text-gray-800">
                    <h3 className="text-base font-semibold mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {item.description}
                    </p>
                    <a
                      href={item.link}
                      className="text-orange-500 font-medium hover:underline inline-flex items-center"
                    >
                      View solution details
                      <span className="ml-1">→</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SolutionDropdownSection;
