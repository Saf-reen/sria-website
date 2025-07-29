import React, { useRef } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

interface Product {
  title: string;
  description: string;
  image: string; // Add image source
}

interface ResourceProps {
  heading: string;
  paragraph: string;
  products: Product[];
}

const Resource: React.FC<ResourceProps> = ({
  heading,
  paragraph,
  products,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 240;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full px-6 py-12">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-3xl font-semibold">{heading}</h2>
          <p className="text-lg text-gray-500 mt-1">{paragraph}</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="p-2 border rounded hover:bg-gray-100"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2 border rounded hover:bg-gray-100"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex space-x-4 overflow-x-auto scrollbar-hide scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {products.map((product, idx) => (
          <div
            key={idx}
            className="w-[400px] h-[400px] bg-gray-50 p-4 rounded-md shadow-sm hover:shadow-md flex-shrink-0"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-3/4 object-cover rounded-md mb-3"
            />
            <h3 className="text-sm font-semibold mb-1">{product.title}</h3>
            <p className="text-xs text-gray-600 mb-4">{product.description}</p>
            <a
              href="/resource1"
              className="flex items-center text-sm font-medium hover:underline"
            >
              Learn more <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resource;
