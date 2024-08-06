import {  starRating } from "../assets/media";
import { MdOutlineLocationOn } from "react-icons/md";
import { LuClock } from "react-icons/lu";
import {  favoriteCardsData } from  "../constant";
import { FaRegHeart } from "react-icons/fa";
function FavouriteTourCard() {
  return (
    <div className="flex gap-3.5  flex-wrap" >
      {favoriteCardsData.map((data) => (
        <div
          className="border border-slate-400 w-[24%] space-y-4 h-full rounded-lg shadow-sm flex-col pl-4 py-4 pr-3 gap-4 max-xl:flex-col max-xl:h-full max-lg:w-full cursor-pointer group"
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
            <h1 className=" text-[20px] leading-7 group-hover:underline ">
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
    </div>
  );
}

export default FavouriteTourCard;
