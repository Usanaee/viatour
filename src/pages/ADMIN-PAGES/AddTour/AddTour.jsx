import React, { useState } from "react";
import PageHeading from "../../../components/PageHeading";
import PageFotter from "../../../components/PageFotter";
import TourTabs from "./TourTabs";
import Content from "./Content";
import Location from "./Location";
import Pricing from "./Pricing";
import Included from "./Included";
function AddTour() {
  const [tab, setTabs] = useState(1);
  const toggleTabs = (tab) => {
    setTabs(tab);
  };
  return (
    <div>
      <PageHeading pageName="Add Tour" tagLine="Add Your Tour By Viatour." />
      <div className=" bg-white shadow-sm w-full h-auto rounded-lg  p-8 space-y-6 my-12 min-w-80 ">
        <TourTabs toggleTabs={toggleTabs} tab={tab} />
        {tab === 1 ? <Content /> : ""}
        {tab === 2 ? <Location /> : ""}
        {tab === 3 ? <Pricing /> : ""}
        {tab === 4 ? <Included /> : ""}
      </div>
      <div className=" mb-6">
        <PageFotter />
      </div>
    </div>
  );
}

export default AddTour;
