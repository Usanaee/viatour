import React from "react";
import Button from "./Button";
import { recentActivitesContent } from "../constant";
function RecentActivites() {
  return (
    <div>
      <div className="bg-white p-8 space-y-6 rounded-lg h-auto shadow-sm">
        <h3 className="text-2xl text-slate-900 font-sm">Recent Activities</h3>
        {recentActivitesContent.map((data) => (
          <div key={data.id}>
            <div className="flex gap-3">
              <div className="bg-[#feefe9] h-[44px] w-16 rounded-full center">
                <img src={data.icon} alt="" height={16} width={16} />
              </div>
              <div>
                <p className="text-slate-500 text-sm">{data.content}</p>
                <p className=" float-end text-[#EB662B] ">{data.date}</p>
              </div>
            </div>
          </div>
        ))}

        <div className="">
          <Button btnText="View More" icon={""} />
        </div>
      </div>
    </div>
  );
}

export default RecentActivites;
