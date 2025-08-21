import React from "react";

const points = [
  {
    number: "#1",
    title: "Accountability",
    description:
      "We provide the strongest accountability to deliver our commitment to our customers.",
  },
  {
    number: "#2",
    title: "Customer commitment",
    description:
      "We give the highest level of commitment to our customers to make a positive impact.",
  },
  {
    number: "#3",
    title: "Teamwork",
    description:
      "We work across borders with utmost respect toward each other to achieve a common goal.",
  },
  {
    number: "#4",
    title: "Integrity",
    description: "We uphold the highest level of integrity in all our actions.",
  },
  {
    number: "#5",
    title: "Value",
    description:
      "We provide outstanding quality services to deliver premium value to our customers.",
  },
  {
    number: "#6",
    title: "Environment",
    description:
      "We are good citizens in the communities in which we live and work.",
  },
];

const MissionStatement: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-10">
      <div className="max-w-[1400px] mx-auto hidden md:block">
        {/* Top Section */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-semibold text-black">
            ACTIVE: Mission Statement
          </h2>
          <a href="/contactus" className="text-orange-500 font-medium hover:underline">
            Let’s work together →
          </a>
        </div>

        {/* Layout for large screens */}
        <div className="hidden lg:flex justify-between items-start gap-12">
          {/* Left Column - First 3 Points */}
          <div className="w-1/3 flex flex-col gap-8">
            {points.slice(0, 3).map((point, i) => (
              <div key={i}>
                <p className="text-sm text-orange-500 font-semibold">
                  {point.number}
                </p>
                <h3 className="text-lg font-semibold text-black mb-1">
                  {point.title}
                </h3>
                <p className="text-gray-600 text-sm">{point.description}</p>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="w-1/3">
            <img
              src="/mission.jpg"
              alt="Teamwork"
              className="w-full h-auto rounded-md object-cover"
            />
          </div>

          {/* Right Column - Last 3 Points */}
          <div className="w-1/3 flex flex-col gap-8">
            {points.slice(3).map((point, i) => (
              <div key={i}>
                <p className="text-sm text-orange-500 font-semibold">
                  {point.number}
                </p>
                <h3 className="text-lg font-semibold text-black mb-1">
                  {point.title}
                </h3>
                <p className="text-gray-600 text-sm">{point.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Layout for medium screens */}
        <div className="block lg:hidden">
          <div className="flex flex-col md:flex-row items-start gap-8">
            {/* Image on left */}
            <div className="w-full md:w-1/2">
              <img
                src="https://www.accely.com/wp-content/uploads/2024/12/Mission-Statement_-ACTIVE.webp"
                alt="Teamwork"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* All points stacked */}
            <div className="w-full md:w-1/2 flex flex-col gap-8">
              {points.map((point, i) => (
                <div key={i}>
                  <p className="text-sm text-orange-500 font-semibold">
                    {point.number}
                  </p>
                  <h3 className="text-lg font-semibold text-black mb-1">
                    {point.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionStatement;
