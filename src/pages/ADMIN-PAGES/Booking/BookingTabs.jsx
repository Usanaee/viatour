import React from "react";

function BookingTabs( {toggleTabs,tab} ) {
  return (
    <div>
      <h1 className="flex gap-8 text-xl text-slate-400 cursor-pointer max-sm:text-sm">
        <span className={`${tab === 1 ? `text-gray-950 underline` : ""} `} onClick={() => toggleTabs(1)}>Approved</span>
        <span className={`${tab === 2 ? `text-gray-950 underline` : ""} `} onClick={() => toggleTabs(2)} >Pending</span>
        <span className={`${tab === 3 ? `text-gray-950 underline` : ""} `} onClick={() => toggleTabs(3)} >Cancelled</span>
      </h1>
    </div>
  );
}

export default BookingTabs;
