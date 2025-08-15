import React, { useState } from "react";

const accordionData = [
  {
    title: "Leadership",
    content: {
      text: "At Sria Infotech, our leadership team is a blend of visionary strategists, technology experts, and passionate innovators—each committed to driving digital transformation, operational excellence, and lasting business value.",
      link: "#",
      image: "/aboutus/leadership.png", // Replace with actual image
    },
  },
  {
    title: "Core Values",
    content: {
      text: `Smart We leverage cutting-edge technology and data-driven insights to provide intelligent solutions that meet the evolving needs of our clients.
	           Resilient We design solutions that are built to endure challenges and continue to perform under pressure, ensuring long-term success for our clients.
	           Inclusive We believe in fostering an inclusive work culture and ensuring that our services create opportunities for everyone, empowering communities and businesses alike.
             Agile Our flexible, adaptive approach allows us to respond swiftly to market changes, enabling us to stay ahead of the curve and deliver timely solutions to our clients.`,
      link: "#",
      image: "/aboutus/corevalues.png", // Replace with actual image
    },
  },
  {
    title: "Our Services",
    content: {
      text: `SAP Consulting & Implementation
Expert SAP solutions to streamline your enterprise processes and drive digital transformation.
Enterprise Application Development
Tailored applications that improve business efficiency and collaboration.
Cloud Solutions
Scalable and secure cloud services to elevate your infrastructure, enhance business agility, and ensure seamless operations.
AI & Machine Learning
Advanced AI-driven solutions to boost automation, improve decision-making, and create smarter business processes.
IT Consulting & Managed Services
Comprehensive IT advisory and support services to ensure smooth day-to-day operations and future growth.`,
      link: "#",
      image: "/aboutus/ourservices.png", // Replace with actual image
    },
  },
  {
    title: "Why Choose Us?",
    content: {
      text: `Proven Expertise: Our team brings years of industry expertise, focusing on delivering customized, high-quality solutions.
Client-Centric Approach: We place your business needs at the center of everything we do, ensuring your success is our priority.
Innovation: We stay ahead of technology trends to ensure we deliver the most innovative solutions for your business.
Collaborative Culture: Our collaborative approach ensures seamless integration with your teams and maximizes value.`,
      link: "#",
      image: "/aboutus/chooseus.png", // Replace with actual image
    },
    
  },
   {
    title: "Vision",
    content: {
      text: `At Sria Infotech, our vision is to build a future where technology empowers every business and individual to thrive.
We stand for being Smart in our solutions, Resilient in our execution, Inclusive in our impact, and Agile in adapting to tomorrow’s challenges.`,
      link: "#",
      image: "/aboutus/vision.png", // Replace with actual image
    },
    
  },
  {
    title: "Mission",
    content: {
      text: `Our mission is to deliver world-class digital services—ranging from enterprise software to AI and IT consulting—by embracing the core values of being Smart, Resilient, Inclusive, and Agile.
We are committed to transforming businesses, uplifting communities, and fostering innovation for a better digital future.`,
      link: "#",
      image: "/aboutus/mission.png", // Replace with actual image
    },
    
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
                <div className="px-6 py-6 flex flex-col justify-between lg:flex-row gap-8 bg-gray-50">
                  {/* Text */}
                  <div className="lg:w-1/2 text-gray-700">
                    <p className="text-base leading-relaxed mb-4">
                      {item.content.text}
                    </p>
                    {/* <a
                      href={item.content.link}
                      className="text-black font-medium hover:underline"
                    >
                      Learn more →
                    </a> */}
                  </div>
                  {/* Image */}
                  <div className="lg:w-3/2">
                    <img
                      src={item.content.image}
                      alt={item.title}
                      className="rounded-lg shadow-lg w-full h-[200px] object-cover"
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
