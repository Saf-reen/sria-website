import { Check } from "lucide-react";

interface InfoItem {
  title: string;
  description: string;
  highlight?: string;
}

interface InfoSectionProps {
  heading: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  items: InfoItem[];
}

const InfoSection = ({
  heading,
  description,
  imageUrl,
  imageAlt,
  items,
}: InfoSectionProps) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="mb-12 text-center lg:text-left">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          {heading}
        </h1>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto lg:mx-0 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Main Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Section - Image */}
        <div className="relative">
          <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
            <img
              src={imageUrl}
              alt={imageAlt}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Section - Items */}
        <div className="space-y-6">
          {items.map((item, index) => (
            <div key={index} className="flex items-start space-x-4">
              {/* Check Icon */}
              <div className="flex-shrink-0 w-6 h-6 bg-black rounded-full flex items-center justify-center mt-1">
                <Check className="w-4 h-4 text-white" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.highlight && (
                    <span className="text-blue-600 font-medium">
                      {item.highlight}
                    </span>
                  )}
                  {item.highlight ? " " : ""}
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Example usage component

export default InfoSection;
