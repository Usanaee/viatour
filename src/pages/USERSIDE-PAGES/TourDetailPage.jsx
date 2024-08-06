import React from "react";
import PictureGallery from "../../sections/PictureGallery";
import TourDetailsHeader from "../../sections/TourDetailsHeader";
import SearchItem from "../../components/SearchItem";
import { tourDetailDataForCustomer } from "../../constant";
import TourDetails from "../../sections/TourDetails";
import ItemsIncluded from "../../sections/ItemsIncluded";
import TourDayPlans from "../../sections/TourDayPlans";
import FAQs from "../../sections/FAQs";
import TouriestReviews from "../../sections/TouriestReviews";
import WriteComment from "../../sections/WriteComment";
import BookingDetail from "../../sections/BookingDetail";

function TourDetailPage() {
  return (
    <div className="main-container">
      <div className="container">
        <TourDetailsHeader />
        <PictureGallery />
        <div className="flex gap-4 max-xl:flex-col ">
          <div className="mt-16 w-8/12 pr-8 max-xl:w-full">
            <SearchItem items={tourDetailDataForCustomer} />
            <TourDetails />
            <ItemsIncluded />
            <TourDayPlans />
            <div className="space-y-8 border-b border-slate-400 py-16">
              <h1 className="text-[#08083c] text-3xl font-medium">Tour Map</h1>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.3059707229054!2d98.38802757476799!3d7.96729759205758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x305036aeab8fa03d%3A0x4d60aca5c646232f!2sV.MarineTour-%20Phi%20Phi%20Islands%20Day%20Trip%20-%20Private%20Boat%20Charters!5e0!3m2!1sen!2s!4v1722506565213!5m2!1sen!2s"
                className="w-full"
                height="450"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <FAQs/>
            <TouriestReviews/> 
            <WriteComment/>
          </div>
          <div className="w-1/3 mt-16 max-xl:w-full  ">
            <BookingDetail/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TourDetailPage;
