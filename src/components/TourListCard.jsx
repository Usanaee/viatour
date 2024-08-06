import React from "react";
import { starRating } from "../assets/media";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";
import { IoPricetagOutline } from "react-icons/io5";
import { LuClock } from "react-icons/lu";
import Button from "./Button";
import { tourListedData } from "../constant";

function TourListCard() {
  return (
    <div>
      {tourListedData.map((data) => (
        <div
          key={data.id}
          className="w-full border border-slate-500 rounded-xl h-auto flex gap-3 p-5 my-8 cursor-pointer group max-xl:flex-col"
        >
          <div className="w-1/3 h-full max-xl:w-full">
            <div className="">
              <div
                className="h-56 w-full rounded-xl object-cover bg-no-repeat bg-cover max-xl:h-80 max-xl:"
                style={{ backgroundImage: `url(${data.image})` }}
              >
                <div className="absolute flex justify-between items-center w-[16%] px-2 pt-4 max-xl:w-[48%] max-lg:w-7/12 max-sm:w-8/12  ">
                  <div className="text-xl font-medium bg-white h-9 w-9 hover:text-[#EA580C] cursor-pointer hover:duration-500 rounded-full flex items-center justify-center float-right">
                    <FaRegHeart />
                  </div>
                  {data.offer && (
                    <div className="bg-[#EA580C] px-4 py-1 rounded-xl">
                      <p className="text-white text-md">20% Off</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="w-[80%] flex max-xl:w-full max-sm:flex-col gap-4">
            <div className=" w-8/12 h-full max-xl:w-9/12 max-sm:w-full ">
              <div className="space-y-1">
                <p className="flex items-center gap-0.5">
                  <MdOutlineLocationOn className="text-xl font-bold" />
                  <span className="text-slate-800">{data.location}</span>
                </p>
                <h1 className="text-[20px] leading-7 group-hover:underline">
                  {data.title}
                </h1>
                <div className="flex-col justify-between">
                  <div className="flex">
                    <img
                      src={starRating}
                      alt=""
                      className="h-12 w-[66px] object-cover rounded-xl -mt-3"
                    />
                    <p className="text-sm font-medium">
                      {data.rating} ({data.reviews})
                    </p>
                  </div>
                  <p>{data.description}</p>
                </div>
                <div className="flex gap-4 pt-4">
                  <p className="flex items-center gap-1 text-[#EA580C]">
                    <IoPricetagOutline />
                    Best Price Guarantee
                  </p>
                  <p className="flex items-center gap-0.5 text-[#EA580C]">
                    <IoMdCheckmark />
                    Free Cancellation
                  </p>
                </div>
              </div>
            </div>
            <div className=" w-1/3  h-full border-l border-slate-400 max-sm:border-none ">
              <div className="column gap-16 max-sm:gap-5 ">
                <p className="flex items-center justify-center gap-2 max-sm:justify-start">
                  <LuClock />
                  {data.duration}
                </p>
                <div className="column items-center gap-2 max-sm:items-start">
                  <p className="text-center max-sm:text-start text-slate-400">
                    <span className="line-through">${data.oldPrice}</span>{" "}
                    <br />
                    <span className="text-[#08083c] font-bold">
                      From ${data.price}
                    </span>
                  </p>
                  <Button btnText="View Details" link={true} />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TourListCard;
