import React from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

interface OfficeLocation {
  id: string;
  name: string;
  top: string;
  left: string;
}

const offices: OfficeLocation[] = [
  { id: "ny", name: "New York, USA", top: "35%", left: "40%" },
  { id: "delhi", name: "Hyderabad, India", top: "55%", left: "70%" },
  { id: "dubai", name: "Dubai, UAE", top: "45%", left: "60%" },
  { id: "london", name: "London, UK", top: "32%", left: "48%" },
  { id: "singapore", name: "Singapore", top: "60%", left: "80%" },
  { id: "toronto", name: "Toronto, Canada", top: "28%", left: "34%" },
  {
    id: "johannesburg",
    name: "Johannesburg, South Africa",
    top: "75%",
    left: "55%",
  },
  { id: "sydney", name: "Sydney, Australia", top: "78%", left: "88%" },
];

const WorldMap: React.FC = () => {
  return (
    <div className="relative w-full max-w-7xl mx-auto h-[800px] bg-black text-white px-4">
      <h2 className="text-4xl text-center pt-10 font-light">Global Offices</h2>
      <p className="text-center text-gray-400 mb-10">
        Hover over each location to view address
      </p>

      <div
        className="relative w-full h-[600px] bg-cover bg-center rounded-xl"
        style={{
          backgroundImage:
            "url('https://www.accely.com/wp-content/themes/accely/assets/images/get-started/location-map.png')", // Replace with your map path
        }}
      >
        {offices.map((office) => (
          <div
            key={office.id}
            className="absolute z-10"
            style={{
              top: office.top,
              left: office.left,
              transform: "translate(-50%, -50%)",
            }}
          >
            <div
              data-tooltip-id={`tooltip-${office.id}`}
              data-tooltip-content={office.name}
              className="w-4 h-4 bg-yellow-400 rounded-full animate-pulse shadow-yellow-400 shadow-md"
            />
            <Tooltip id={`tooltip-${office.id}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorldMap;
