import React from "react";
import { Link } from "react-router-dom";

function Button({ btnText, link }) {
  return (
    <div>
      <button
        className={`p-4 bg-transparent border border-[#EB662B]  hover:bg-[#EB662B] hover:text-white hover:duration-300 rounded-lg text-lg`}
      >
        {link ? (
          <Link to="/tourdetails" className="text-inherit no-underline">
            {btnText}
          </Link>
        ) : (
          btnText
        )}
      </button>
    </div>
  );
}

export default Button;
