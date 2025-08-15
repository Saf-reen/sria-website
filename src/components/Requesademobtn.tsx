import React from "react";
import { ArrowRight } from "lucide-react";
import {Link} from "react-router-dom";

type RequesademobtnProps = {
  text: string;
};

const Requesademobtn: React.FC<RequesademobtnProps> = ({ text }) => {
  return (
    <div>
      <Link to="/contactus">
      <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-6 rounded inline-flex items-center gap-2 transition-all text-lg w-fit">
        <span>{text}</span>
        <ArrowRight className="w-5 h-5" />
      </button>
      </Link>
    </div>
  );
};

export default Requesademobtn;
