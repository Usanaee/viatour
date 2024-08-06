import React from "react";
import SectionsHeading from "../components/SectionsHeading";
import FavouriteTourCard from "../components/FavouriteTourCard";

function PopularTour() {
  return (
    <div className="main-container max-width ">
      <div className="container">
        <SectionsHeading heading="Find Popular Tours" button="See All" />
        <div className="py-10 " >
            <FavouriteTourCard/>
        </div>
      </div>
    </div>
  );
}

export default PopularTour;
