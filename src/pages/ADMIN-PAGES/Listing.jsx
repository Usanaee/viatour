import PageHeading from "../../components/PageHeading";
import PageFotter from "../../components/PageFotter";
import Pagination from "../../components/Pagination";
import {  starRating } from "../../assets/media";
import { MdOutlineLocationOn } from "react-icons/md";
import { LuClock } from "react-icons/lu";
import { listingCardData } from "../../constant";

function Listing() {
  return (
    <div>
      <PageHeading
        pageName="Tour Listing"
        tagLine="All Tours Are Listed Hare."
      />
      <div className=" bg-white shadow-lg w-full h-auto rounded-lg my-16 p-8 min-w-72 ">
        <div className="flex gap-4 flex-wrap max-lg:flex-col">
          {listingCardData.map((data) => (
            <div className="border border-slate-400 w-[48%] h-56 rounded-lg shadow-sm flex pl-4 py-4 pr-3 gap-4 max-xl:flex-col max-xl:h-full max-lg:w-full" key={data.id}>
              <img
                src={data.image}
                alt=""
                className=" h-full w-64 object-cover rounded-xl max-xl:w-full"
              />
              <div className="space-y-1">
                <p className="flex items-center gap-0.5">
                  <MdOutlineLocationOn className="text-xl font-bold" />
                  <span className="text-slate-800"> {data.location} </span>
                </p>
                <h1 className=" text-[20px] leading-7 ">
                  {data.title}
                </h1>
                <div className="flex justify-between ">
                  <div className="flex">
                    <img
                      src={starRating}
                      alt=""
                      className=" h-12 w-[66px] object-cover rounded-xl -mt-3.5"
                    />
                    <p className="text-sm font-medium"> {data.rating} </p>
                  </div>
                  <div className=" text-sm font-medium mt-[26px]">
                    <p>{data.startingPrice}</p>
                  </div>
                </div>
                <div className="flex justify-between">
                  <p className="flex items-center gap-0.5">
                    <LuClock />{data.days}
                  </p>
                  <p>
                    From <span>{data.endingPrice}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <Pagination totalPages={20} />
        </div>
      </div>

      <div className="mt-12 mb-6">
        <PageFotter />
      </div>
    </div>
  );
}

export default Listing;
