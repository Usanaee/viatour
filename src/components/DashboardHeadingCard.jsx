import React from "react";
import { DashboardHeadingCardData } from "../constant";
function DashboardHeadingCard() {
  return (
    <div className="flex-col space-y-9  ">
      {DashboardHeadingCardData.map((data) => (
        <div className="flex items-start gap-5" key={data.id}>
          {/* <div className="  circle ">
          </div> */}

          <a
            href="#"
            className="group  rounded-lg p-6 bg-white  ring-slate-900/5 shadow-sm space-y-3 hover:bg-[#ffeaea] h-[155px] "
          >
            <div className="flex items-center space-x-3">
              <img
                src={data.icon}
                alt=""
                height={25}
                width={25}
                className=" hover:scale-125 cursor-pointer hover:duration-300  "
              />

              <h3 className=" text-slate-700 group-hover:text-slate-900 text-xl font-semibold">
                {data.title}
              </h3>
            </div>
            <p className="text-slate-500 group-hover:text-slate-900 text-sm px-10">
              {data.content}
            </p>
          </a>
        </div>
      ))}
    </div>
  );
}

export default DashboardHeadingCard;
