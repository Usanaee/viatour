import React from "react";
import { Link } from "react-router-dom";

function RoundedButton( {btnText} ) {
  return (
    <div>
      <button className="px-5 py-3 text-white bg-orange-600 rounded-full hover:bg-[#08083C] hover:duration-300">
        <Link to="/admin">{btnText}</Link>
      </button>
    </div>
  );
}

export default RoundedButton;
