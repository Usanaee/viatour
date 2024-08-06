import React from "react";
import Breadcrums from "../components/Breadcrums";
import TourListCard from "../components/TourListCard";

function ToursListedHeader() {
  const breadcrumbItems = [
    { path: "/", label: "Home" },
    { path: "/tourslist", label: "Tours Listed" },
  ];
  return (
    <header>
      <div className="flex justify-between items-center text-slate-700">
        <Breadcrums items={breadcrumbItems} />
        <p>THE 10 BEST Phuket Tours & Excursions</p>
      </div>
      <h1 className="text-4xl font-semibold mt-8">
        Explore all things to do in Phuket
      </h1>
    </header>
  );
}

export default ToursListedHeader;
