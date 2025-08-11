// components/FAQSection.tsx
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  faqs: FAQ[];
}

const FAQSection: React.FC<FAQSectionProps> = ({
  title = "Frequently asked questions",
  faqs,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full  mx-auto my-16 ">
      <h2 className="text-4xl font-semibold mb-8">{title}</h2>
      <div className="space-y-6 bg-gray-100 p-2">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-4">
            <button
              className="w-full text-left flex justify-between items-start"
              onClick={() => toggle(index)}
            >
              <span className="text-lg font-medium text-gray-800">
                {faq.question}
              </span>
              {openIndex === index ? (
                <Minus className="text-gray-600 w-5 h-5 mt-1" />
              ) : (
                <Plus className="text-gray-600 w-5 h-5 mt-1" />
              )}
            </button>
            {openIndex === index && (
              <p className="mt-4 text-gray-600 text-base">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
