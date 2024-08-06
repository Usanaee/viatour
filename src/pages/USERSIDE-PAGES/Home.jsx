import React from "react";
import Hero from "../../sections/Hero";
import ChooseTour from "../../sections/ChooseTour";
import TrendingDestinations from "../../sections/TrendingDestinations";
import PopularTour from "../../sections/PopularTour";
import BookNow from "../../sections/BookNow";
import PopularThing from "../../sections/PopularThing";
import TopTrending from "../../sections/TopTrending";
import AppBooking from "../../sections/AppBooking";
import Articles from "../../sections/Articles";
import CustomerReviews from "../../sections/CustomerReviews";
function Home() {
  return (
    <div>
      <Hero />
      <ChooseTour />
      <TrendingDestinations />
      <PopularTour />
      <BookNow />
      <PopularThing />
      <TopTrending />
      <CustomerReviews />
      <AppBooking />
      <Articles />
    </div>
  );
}

export default Home;
