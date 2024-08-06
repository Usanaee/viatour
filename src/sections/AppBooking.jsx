import React from "react";
import { appBookingBgImg, mobilePic } from "../assets/media";

function AppBooking() {
  return (
    <div className="relative main-container max-width ">
      <div
        className="bg-local h-96 
         w-full bg-no-repeat rounded-t-xl "
        style={{ backgroundImage: `url(${appBookingBgImg})` }}
      >
        <div className="absolute inset-0 gap-10 flex max-lg:flex-col main-container">
          <div className=" w-1/2 px-16 column  gap-5  justify-center max-lg:w-full max-lg:h-full max-lg:items-center max-lg:text-center  ">
            <h1 className="text-5xl font-semibold leading-[55px] text-white">
              Get <span className="text-[#EB662B]"> 5% off </span> your 1st app
              booking
            </h1>
            <p className="text-white">
              Booking's better on the app. Use promo code "TourBooking" to save!
            </p>
            <p className="text-white ">
            Get a magic link sent to your email
            </p>
            <div className="flex gap-6 items-center max-lg:justify-center">
              <div className="bg-white rounded-lg h-14 w-1/2 max-lg:w-10/12 content-center">
                <input
                  type="email"
                  placeholder="viatour@example.com"
                  className="bg-transparent flex-grow outline-none w-full px-10 "
                />
              </div>
              <button className="bg-white px-6 py-4 rounded-lg text-[#4A43C4] hover:bg-[#EB662B] hover:text-white ">
                Send
              </button>
            </div>
          </div>
          <div className="w-1/2 max-lg:w-full">
            <img
              src={mobilePic}
              alt=""
              className="w-[500px] h-96 object-cover max-lg:hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppBooking;
