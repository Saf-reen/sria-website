import React, { useState } from "react";

interface TimelineEvent {
  year: number;
  title: string;
  description: string;
  imageUrl: string;
}

const allEvents: TimelineEvent[] = [

  {
    year: 2022,
    title: "Sria Infotech is Launched",
    description: "Officially launched Sria Infotech.",
    imageUrl: "https://via.placeholder.com/150", // replace with actual image
  },
  {
    year: 2022,
    title: "Started with SAP All Modules",
    description: "Expanded expertise to cover all SAP modules.",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    year: 2023,
    title: "Started Data Analytics",
    description: "Ventured into data analytics services.",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    year: 2024,
    title: "Started Application Development",
    description: "Began delivering cutting-edge application development solutions.",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    year: 2025,
    title: "AMS from Patil Group",
    description: "Awarded Application Management Services contract from Patil Group.",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    year: 2025,
    title: "Odoo Implementation Partner",
    description: "Became official Odoo Implementation Partner.",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    year: 2025,
    title: "Branch in Mulugu (Launching Soon)",
    description: "Preparing to launch our new branch in Mulugu.",
    imageUrl: "https://via.placeholder.com/150",
  }

];

const CompanyTimeline: React.FC = () => {
  const [startYear, setStartYear] = useState(2022);
  const yearsPerView = 2;
  const currentYear = new Date().getFullYear();

  // Filter events to only include those up to current year
  const currentEvents = allEvents.filter((event) => event.year <= currentYear);

  const visibleEvents = currentEvents.filter(
    (event) => event.year >= startYear && event.year < startYear + yearsPerView
  );

  const maxStartYear = Math.max(2022, currentYear - yearsPerView + 1);

  const handlePrev = () => {
    if (startYear > 2022) setStartYear(startYear - yearsPerView);
  };

  const handleNext = () => {
    if (startYear < maxStartYear) setStartYear(startYear + yearsPerView);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-10 bg-white">
      <div className="max-w-[1400px] mx-auto">
        {/* Top row: title + timeline controller */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <h2 className="text-4xl font-semibold text-black">
            Iconic moments in Sria Infotech history
          </h2>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">{startYear}</span>
            <span className="w-8 h-px bg-black" />
            <span className="text-gray-600">
              {startYear + yearsPerView - 1}
            </span>
            <button
              onClick={handlePrev}
              disabled={startYear <= 2022}
              className="w-8 h-8 border border-gray-300 text-gray-600 flex items-center justify-center disabled:opacity-40"
            >
              ←
            </button>
            <button
              onClick={handleNext}
              disabled={startYear >= maxStartYear}
              className="w-8 h-8 border border-gray-300 text-gray-600 flex items-center justify-center disabled:opacity-40 disabled:border-gray-300"
            >
              {">"}→
            </button>
          </div>
        </div>

        {/* Timeline */}
        {/* Large screen: horizontal with up/down branches */}
        <div
          className="hidden md:block relative"
          style={{ minHeight: "500px" }}
        >
          {/* Content above timeline */}
          <div className="absolute top-0 left-0 right-0 h-48 flex justify-between">
            {visibleEvents.map((event, index) => {
              if (index % 2 !== 0) return <div key={index} className="w-1/5" />; // Skip odd indices (down items)

              return (
                <div key={index} className="w-1/5 flex justify-center">
                  <div className="text-center w-48">
                    <div className="h-20 w-20 rounded-full overflow-hidden shadow-md mx-auto mb-2 bg-white">
                      <img
                        src={event.imageUrl}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-sm text-gray-500 mb-1">{event.year}</p>
                    <h3 className="text-md font-semibold text-black mb-1">
                      {event.title}
                    </h3>
                    <p className="text-sm text-gray-500">{event.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Horizontal timeline line */}
          <div className="absolute top-60 left-0 right-0 h-px bg-gray-300 z-10" />

          {/* Timeline dots and branch lines */}
          <div className="absolute top-60 left-0 right-0 flex justify-between">
            {visibleEvents.map((event, index) => (
              <div key={index} className="w-1/5 flex justify-center relative">
                {/* Timeline dot */}
                <div className="w-3 h-3 bg-orange-500 rounded-full relative z-20 -mt-1.5" />

                {/* Branch line */}
                <div
                  className={`absolute left-1/2 transform -translate-x-0.5 w-px border-l border-dotted border-orange-400 z-10 ${
                    index % 2 === 0
                      ? "bottom-1.5 h-16" // Up branch
                      : "top-1.5 h-16" // Down branch
                  }`}
                />
              </div>
            ))}
          </div>

          {/* Content below timeline */}
          <div className="absolute bottom-0 left-0 right-0 h-48 flex justify-between">
            {visibleEvents.map((event, index) => {
              if (index % 2 === 0) return <div key={index} className="w-1/5" />; // Skip even indices (up items)

              return (
                <div key={index} className="w-1/5 flex justify-center">
                  <div className="text-center w-48">
                    <div className="h-20 w-20 rounded-full overflow-hidden shadow-md mx-auto mb-2 bg-white">
                      <img
                        src={event.imageUrl}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-sm text-gray-500 mb-1">{event.year}</p>
                    <h3 className="text-md font-semibold text-black mb-1">
                      {event.title}
                    </h3>
                    <p className="text-sm text-gray-500">{event.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Small screen: vertical */}
        <div className="md:hidden flex flex-col gap-10 relative mt-6">
          <div className="absolute left-4 top-0 h-full w-px bg-gray-300 z-0" />
          {visibleEvents.map((event, index) => (
            <div key={index} className="relative pl-12 z-10">
              <div className="absolute left-3 top-0 h-4 w-4 bg-orange-500 rounded-full z-10" />
              <div className="flex items-start gap-4">
                <div className="h-16 w-16 rounded-full overflow-hidden shadow-md bg-white">
                  <img
                    src={event.imageUrl}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-500">{event.year}</p>
                  <h3 className="text-md font-semibold text-black">
                    {event.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {event.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyTimeline;
