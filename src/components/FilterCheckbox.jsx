import React, { useState } from "react";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { TbLayoutSidebarLeftCollapseFilled } from "react-icons/tb";
function FilterCheckbox({ filterLabel }) {
  const [showTourType, setShowTourType] = useState(false);
  const toggleTourType = () => setShowTourType(!showTourType);
  
  return (
    <div>
      {filterLabel.map((label) => (
        <div className=" py-4 border-b border-slate-300 " key={label.id}>
          <div
            className="flex justify-between items-center cursor-pointer duration-300"
            onClick={toggleTourType}
          >
            <p className="text-[#08083c] text-xl">{label.title}</p>
            {showTourType ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>
          {showTourType && (
            <div className="mt-3 space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />{" "}
                {label.labels[0].label}
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />{" "}
                {label.labels[1].label}
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />{" "}
                {label.labels[2].label}
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />{" "}
                {label.labels[3].label}
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />{" "}
                {label.labels[4].label}
              </label>
              <p className="text-blue-500 cursor-pointer">See More</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default FilterCheckbox;
