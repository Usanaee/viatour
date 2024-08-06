import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { starRating } from "../assets/media";
import { MdOutlineLocationOn } from "react-icons/md";
import { LuClock } from "react-icons/lu";
import { favoriteCardsData } from "../constant";
import { FaRegHeart } from "react-icons/fa";
function CardSlider() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
            infinite: true,
            dots: true,
            slidesToShow: 3,
            slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  };
  return (
    <div className="">
      <Slider {...settings} className="px-4 ">
        {favoriteCardsData.map((data) => (
            <div
            className=" bg-white w-[24%] space-y-4 h-full rounded-lg shadow-sm flex-col pl-4 py-4 pr-3 gap-4 max-xl:flex-col max-xl:h-full max-lg:w-full  cursor-pointer mb-7 "  
            key={data.id}
          >
            <img
              src={data.image}
              alt=""
              className="h-44 w-full object-cover rounded-xl max-xl:w-full"
            />

            <div className="space-y-1">
              <p className="flex items-center gap-0.5">
                <MdOutlineLocationOn className="text-xl font-bold" />
                <span className="text-slate-800"> {data.location} </span>
              </p>
              <h1 className=" text-lg leading-7 hover:underline transition-all hover:duration-300">
                {data.title}
              </h1>
              <div className="flex justify-between border-b border-slate-200 ">
                <div className="flex">
                  <img
                    src={starRating}
                    alt=""
                    className=" h-12 w-[66px] object-cover rounded-xl -mt-3"
                  />
                  <p className="text-sm font-medium"> {data.rating} </p>
                </div>
                <div className=" text-xl font-medium hover:bg-orange-500 h-9 w-9 hover:text-white cursor-pointer hover:duration-500 hover:rounded-full center -mt-2 ">
                  <FaRegHeart />
                </div>
              </div>
              <div className="flex justify-between pt-4">
                <p className="flex items-center gap-0.5">
                  <LuClock />
                  {data.days}
                </p>
                <p>
                  From <span>{data.endingPrice}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CardSlider;
