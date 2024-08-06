import React from "react";
import SectionsHeading from "../components/SectionsHeading";
import DestinationCard from "../components/DestinationCard";

function TrendingDestinations() {
  return (
    <div className="main-container max-width">
      <div className="container">
        <SectionsHeading heading="Trending destinations" button="See All" />
        <div className="py-10 ">
          <DestinationCard/>
        </div>
      </div>
    </div>
  );
}

export default TrendingDestinations;
