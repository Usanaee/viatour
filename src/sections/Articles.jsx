import React from "react";
import { articleData } from "../constant";
import SectionsHeading from "../components/SectionsHeading";

function Articles() {
  return (
    <div className="main-container max-width">
      <div className="container">
        <SectionsHeading heading="Travel Articles" button="See All" link='blogs' />
        <div className="flex justify-evenly gap-5 max-lg:flex-wrap py-10 ">
          {articleData.map((data) => (
            <div
              className="w-1/3 space-y-8 group cursor-pointer max-lg:w-full"
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Articles;
