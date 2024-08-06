import React, { useState } from "react";
import ToursListedHeader from "../../sections/ToursListedHeader";
import TourListCard from "../../components/TourListCard";
import Pagination from "../../components/Pagination";
import SidebarFilter from "../../sections/SidebarFilter";
import { TbFilterDown } from "react-icons/tb";
import { sortLabels } from "../../constant";

function ToursListed() {
  const [open, setOpen] = useState(true);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <div className="main-container">
      <div className="container">
        <ToursListedHeader />
        <div className="flex gap-0 my-14 max-lg:flex-col">
          <div className="hidden hover:bg-[#08083c] hover:text-white cursor-pointer  duration-300 bg-[#d0786626] text-[#08083c]  items-center text-xl w-28 gap-1 px-6 py-4  rounded-xl  max-lg:flex ">
            <TbFilterDown />
            <p onClick={toggle}>filter</p>
          </div>
          <div
            className={`w-1/4   mr-8 max-lg:w-full   ${
              open ? `max-lg:hidden` : `block my-5`
            } `}
          >
            <SidebarFilter />
          </div>
          <div className=" w-9/12 max-lg:mt-4 flex-col max-lg:w-full">
            <div className="h-auto">
              <span className="flex items-center justify-between">
                <p>1362 results</p>
                <p className=" text-lg " >
                  Sort by:
                  <select className="cursor-pointer bg-transparent outline-none px-2 ">
                    {sortLabels.map((label) => (
                      <option value={label.label} key={label.id} >
                        {label.label}
                      </option>
                    ))}
                  </select>
                </p>
              </span>
              <TourListCard />
            </div>
            <div>
              <Pagination totalPages={15} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToursListed;
