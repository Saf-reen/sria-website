import React from "react";

const stats = [
  { value: "20+", label: "Global Offices" },
  { value: "$100 Mn", label: "Group Turnover" },
  { value: "25+", label: "Years of Experience" },
  { value: "1800+", label: "Group Employees" },
  { value: "1000+", label: "Referenceable Clients" },
  { value: "480+", label: "Projects" },
  { value: "98%", label: "Customer satisfaction" },
  { value: "14+", label: "Industry solutions" },
];

const AboutCompany: React.FC = () => {
  return (
    <section className="bg-black text-white py-16 px-4 sm:px-8 lg:px-10">
      {/* Who We Are Section */}
      <div className="w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-12 mb-16">
        <div className="lg:w-1/2">
          <h2 className="text-4xl sm:text-5xl font-semibold mb-6">
            Who we are
          </h2>
        </div>
        <div className="lg:w-1/2 text-gray-300">
          <p className="text-base leading-relaxed mb-4">
            Accely is a global SAP gold partner consulting company that offers
            world-class services using refined methodologies and innovation,
            thus creating a synergy of the latest technology and vast
            accumulated experience. From SAP S/4HANA migration to custom
            application development and beyond, our solutions are designed to
            unlock new possibilities.
          </p>
          <a
            href="#contact"
            className="text-white font-medium mt-4 inline-block hover:underline"
          >
            Get in touch →
          </a>
        </div>
      </div>

      {/* Stats Section */}
      <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-[#1a1a1a] p-8 rounded-lg mb-24">
        {stats.map((stat, i) => (
          <div key={i} className="text-center">
            <h3 className="text-3xl sm:text-4xl font-bold text-orange-400 mb-2">
              {stat.value}
            </h3>
            <p className="text-sm text-gray-400">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* CEO Quote Section */}
      <div className="w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row items-start gap-8">
        <div className="lg:w-2/3">
          <h2 className="text-4xl sm:text-5xl font-semibold mb-6">
            Starting a revolution
          </h2>
          <blockquote className="text-white text-lg leading-relaxed border-l-4 border-orange-400 pl-6 mb-6">
            “Accely uses Information Technology to make processes not just more
            efficient but also much more effective. We find automation as an
            opportunity to allow refined methodologies and innovation to create
            a synergy of the latest technology and vast accumulated experience.”
          </blockquote>
          <p className="text-gray-400 font-medium mb-2">
            — Nilesh Shah, CEO at Accely Group
          </p>
          <a href="#team" className="text-white font-medium hover:underline">
            Meet the team →
          </a>
        </div>

        <div className="lg:w-1/3">
          <img
            src="https://i.imgur.com/4M34hi2.jpg" // Replace with actual image path
            alt="CEO Nilesh Shah"
            className="rounded-md object-cover w-full max-w-xs mx-auto lg:mx-0"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
