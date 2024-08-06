import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Range } from "react-range";
import FilterCheckbox from "../components/FilterCheckbox";
import {
  filterLabels,
  durationFilterLabels,
  languageFilterLabels,
  spcialFilterLabels,
} from "../constant";

const SidebarFilter = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showFilterPrice, setShowFilterPrice] = useState(false);
  const [showDuration, setShowDuration] = useState(false);
  const [priceRange, setPriceRange] = useState([100]);

  const toggleFilterPrice = () => setShowFilterPrice(!showFilterPrice);
  const toggleDuration = () => setShowDuration(!showDuration);

  return (
    <div className=" bg-white  rounded-xl ">
      <div className="">
        <div className="mb-4 bg-[#EB662B] p-5 rounded-xl">
          <p className="text-white">When are you traveling?</p>
          <div className="max-lg:flex gap-5" >
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              className="w-full px-3 py-2 mt-2 outline-none rounded-lg"
              placeholderText="Sarting Date"
            />
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              className="w-full px-3 py-2 mt-2 outline-none border rounded-lg"
              placeholderText="End Date"
            />
          </div>
        </div>
      </div>
      <div className="px-5 pb-8">
        <FilterCheckbox filterLabel={filterLabels} />

        <div className="py-4 border-b border-slate-300">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={toggleFilterPrice}
          >
            <p className="text-[#08083c] text-xl">Filter Price</p>
            {showFilterPrice ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>
          {showFilterPrice && (
            <div className="border-b border-slate-300 py-4">
              <div
                className={`mt-2 transition-max-height ${
                  showFilterPrice ? "max-height-full" : "max-height-0"
                }`}
              >
                <div className="flex items-center mb-2">
                  <p className="mr-4">Min Price: ${priceRange[0]}</p>
                  <p>Max Price: $5000</p>
                </div>
                <Range
                  step={10}
                  min={0}
                  max={5000}
                  values={priceRange}
                  onChange={(values) => setPriceRange(values)}
                  renderTrack={({ props, children }) => (
                    <div
                      {...props}
                      style={{
                        ...props.style,
                        height: "6px",
                        width: "100%",
                        backgroundColor: "#ddd",
                      }}
                    >
                      {children}
                    </div>
                  )}
                  renderThumb={({ props }) => (
                    <div
                      {...props}
                      style={{
                        ...props.style,
                        height: "24px",
                        width: "24px",
                        borderRadius: "50%",
                        backgroundColor: "#EB662B",
                        border: "none",
                      }}
                    />
                  )}
                />
              </div>
            </div>
          )}
        </div>
        <FilterCheckbox filterLabel={durationFilterLabels} />
        <FilterCheckbox filterLabel={languageFilterLabels} />
        <FilterCheckbox filterLabel={spcialFilterLabels} />
      </div>
    </div>
  );
};

export default SidebarFilter;
