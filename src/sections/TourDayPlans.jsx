import React, { useState } from "react";
import { planDays } from "../constant";
import { CgCheck } from "react-icons/cg";

const TourDayPlans = () => {
  const [visibleDays, setVisibleDays] = useState({});

  const toggleDetails = (dayId) => {
    setVisibleDays((prevVisibleDays) => ({
      ...prevVisibleDays,
      [dayId]: !prevVisibleDays[dayId],
    }));
  };

  return (
    <div className="space-y-8 border-b border-slate-400 py-16">
      <h1 className="text-[#08083c] text-3xl font-medium">Itinerary</h1>
      {planDays.map((day) => (
        <div
          className=" rounded-lg overflow-hidden"
          id={day.id}
          key={day.id}
        >
          <div
            className="flex items-center cursor-pointer  "
            onClick={() => toggleDetails(day.id)}
          >
            <span className="text-2xl mr-3 bg-[#EB662B] h-6 w-6 rounded-full flex items-center justify-center text-white">
              <CgCheck />
            </span>
            <h2 className="text-[#08083c] text-lg">{day.title}</h2>
          </div>
          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              visibleDays[day.id] ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-8 pb-4 mt-3">
              <p className="text-gray-700">{day.details}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TourDayPlans;
