import React from "react";
import { Link } from "react-router-dom";

function SectionsHeading({ heading, button,link }) {
  return (
    <div className="flex items-center justify-between" >
      <h1 className="text-3xl text-[#08083c] font-semibold">{heading}</h1>
      {button? (
        <button className="px-4 py-2 text-white bg-[#08083c]  hover:bg-[#E1550E] rounded-full transition-all hover:duration-300"><Link to={`${link === "blogs" ? `/blogs`: `/tourslist`}`}> {button} </Link> </button>
      ) : ""}
    </div>
  );
}

export default SectionsHeading;
