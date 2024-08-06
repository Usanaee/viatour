import React from "react";
import SectionsHeading from "../components/SectionsHeading";
import ChooseTourCard from "../components/ChooseTourCard";

function ChooseTour() {
  return (
    <div className="main-container max-width ">
      <div className="container">
        <SectionsHeading heading="Why choose Tourz" />
        <div className="py-10">
          <ChooseTourCard />
        </div>
      </div>
    </div>
  );
}

export default ChooseTour;
