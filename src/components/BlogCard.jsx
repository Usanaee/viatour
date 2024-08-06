import React from "react";
import { blogsData } from "../constant";
import { Link } from "react-router-dom";

function BlogCard({ select }) {
  return (
    <div className="flex justify-evenly  flex-wrap py-12 ">
      {blogsData.filter((data) => select === "All Guide" || data.tabId === select).map((data) => (
          <Link
            to="/blogdetails"
            className={` w-[30%]  space-y-8 group cursor-pointer max-lg:w-[45%] max-md:w-full mb-10  `}
            key={data.id}
          >
            <div
              className="h-56 w-full rounded-xl object-cover bg-no-repeat bg-cover   "
              style={{ backgroundImage: `url(${data.image})` }}
            >
              <div className=" absolute bg-white px-4 py-1 rounded-full mt-5 ml-5 group ">
                <p className="text-gray-800 text-sm group-hover:text-[#7772D3]">
                  Trips
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-slate-800 text-sm  group-hover:text-[#7772D3] group-hover:duration-200 ">
                {data.date}
                <span className=" mx-1"> | </span>
                {data.author}
              </p>
              <p>{data.title}</p>
            </div>
          </Link>
        ))}
    </div>
  );
}

export default BlogCard;
