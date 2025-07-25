import React, { useRef } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

interface Product {
  title: string;
  description: string;
}

interface ProductRangeProps {
  heading: string;
  paragraph: string;
  products: Product[];
}

const ProductRange: React.FC<ProductRangeProps> = ({
  heading,
  paragraph,
  products,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 240; // adjust based on card width
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
            className="w-[400px]  bg-gray-50 p-4 rounded-md shadow-sm hover:shadow-md flex-shrink-0"
          >
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mb-3 inline-block">
              Raapyd
            </span>
            <h3 className="text-[21px] font-semibold mb-1">{product.title}</h3>
            <p className="text-[16px] text-gray-600 mb-4">
              {product.description}
            </p>
            <a
              href="#"
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

export default ProductRange;
