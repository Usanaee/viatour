import React from "react";

function TourTabs({toggleTabs , tab}) {
  
  return (
    <div>
      <h1 className="flex gap-16 max-lg:gap-8 max-md:gap-4 text-xl text-slate-400 cursor-pointer max-sm:text-sm">
        <span className={`${tab === 1 ? `text-gray-950 underline` : ""} `} onClick={() => toggleTabs(1)} >1.Content</span>
        <span className={`${tab === 2 ? `text-gray-950 underline` : ""} `} onClick={() => toggleTabs(2)} >2. Location</span>
        <span className={`${tab === 3 ? `text-gray-950 underline` : ""} `} onClick={() => toggleTabs(3)} >3. Pricing</span>
        <span className={`${tab === 4 ? `text-gray-950 underline` : ""} `} onClick={() => toggleTabs(4)} >4. Included</span>
      </h1>
    </div>
  );
}

export default TourTabs;
