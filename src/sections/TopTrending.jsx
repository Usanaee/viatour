import React from "react";
import SectionsHeading from "../components/SectionsHeading";
import FavouriteTourCard from "../components/FavouriteTourCard";
import CardSlider from "../components/CardSlider";

function TopTrending() {
  return (
    <div className="main-container max-width m-b ">
      <div className="bg-[#e7e7e7] w-full h-full rounded-xl container"> 
        <SectionsHeading heading="Top Trending" button="See All" />
        <div className="py-10" >
            <CardSlider/>
        </div>
         </div>
    </div>
  );
}

export default TopTrending;
