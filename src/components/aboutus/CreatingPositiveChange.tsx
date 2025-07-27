import React, { useState } from "react";

const accordionData = [
  {
    title: "Leadership",
    content: {
      text: `Accely’s leadership team embodies a blend of expertise and forward-thinking vision, steering the company to deliver cutting-edge solutions. With a focus on ERP, Mobility Solutions, Ecommerce, and Business Analytics through SAP’s suite of applications, our leaders drive innovation and excellence. Their technical depth, hands-on experience, and customer-first approach enable us to craft tailored solutions that deliver rapid ROI. By combining agility, technological expertise, and a commitment to quality, the team ensures we exceed client expectations at every step.`,
      link: "#",
      image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee3a", // Replace with actual image
    },
  },
  {
    title: "Corporate governance",
  },
  {
    title: "Alliances",
  },
  {
    title: "Corporate social responsibility",
  },
  {
    title: "Business partners",
  },
];

const CreatingPositiveChange: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-10">
      <div className="max-w-[1400px] mx-auto">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-10">
          <h2 className="text-4xl sm:text-5xl font-semibold text-black">
            Creating positive change
          </h2>
          <p className="text-gray-600 max-w-xl text-lg leading-relaxed">
            We’re committed to creating positive change around the world and
            ensuring we act as responsible business leaders for our people,
            clients, and the communities we call home.
          </p>
        </div>

        {/* Accordion Section */}
        <div className="border border-gray-200  divide-y divide-gray-300 rounded-md overflow-hidden">
          {accordionData.map((item, index) => (
            <div key={index} className="bg-gray-100">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left text-black font-medium hover:bg-gray-50 transition"
              >
                {item.title}
                <span className="text-xl">
                  {activeIndex === index ? "✕" : "＋"}
                </span>
              </button>

              {/* Expanded Content */}
              {activeIndex === index && item.content && (
                <div className="px-6 py-6 flex flex-col lg:flex-row gap-8 bg-gray-50">
                  {/* Text */}
                  <div className="lg:w-1/2 text-gray-700">
                    <p className="text-base leading-relaxed mb-4">
                      {item.content.text}
                    </p>
                    <a
                      href={item.content.link}
                      className="text-black font-medium hover:underline"
                    >
                      Learn more →
                    </a>
                  </div>
                  {/* Image */}
                  <div className="lg:w-1/2">
                    <img
                      src={item.content.image}
                      alt={item.title}
                      className="w-full h-auto rounded-md object-cover max-h-64 lg:max-h-full"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreatingPositiveChange;
