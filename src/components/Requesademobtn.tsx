import React from "react";
import { ArrowRight } from "lucide-react";

type RequesademobtnProps = {
  text: string;
};

const Requesademobtn: React.FC<RequesademobtnProps> = ({ text }) => {
  return (
    <div>
      <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-6 rounded inline-flex items-center gap-2 transition-all text-lg w-fit">
        <span>{text}</span>
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Requesademobtn;
