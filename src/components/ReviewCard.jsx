import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { reviews } from "../constant";

function ReviewCard() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
      };
  return (
    <div>
         <Slider {...settings} className=" p-4 mx-auto">
        {reviews.map((review) => (
          <div key={review.id} className="p-6 relative" >
            <div className="flex justify-center items-center mb-4">
              <div className="bg-orange-500 text-white rounded-full p-2 absolute top-3 left-1/2">
                <FaQuoteRight className="text-md" />
              </div>
              <img
                src={review.image}
                alt={review.name}
                className="rounded-full w-24 h-24 object-cover"
              />
            </div>
            <div className="column items-center justify-center" >
              <h3 className="text-orange-500 text-xl mb-2">{review.title}</h3>
              <p className="text-md mb-4 text-center px-96 max-lg:px-56 max-md:px-40 max-sm:px-20">{review.review}</p>
              <p className="font-bold text-[#08083c]">{review.name}</p>
              <p className="text-gray-500">{review.role}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default ReviewCard