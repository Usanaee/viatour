import React from "react";
import { CgCheck } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";

const includedServices = [
  { id: 1, service: "Beverages, drinking water, morning tea and buffet lunch" },
  { id: 2, service: "Hotel pickup and drop-off by air-conditioned minivan" },
  { id: 3, service: "InsuranceTransfer to a private pier" },
  { id: 4, service: "Local taxes" },
  { id: 5, service: "Tour Guide" },
  { id: 6, service: "Soft drinks" },
];
const NotIncludedServices = [
  { id: 1, service: "Towel" },
  { id: 2, service: "Tips" },
  { id: 3, service: "Alcoholic Beverages" },
];
function ItemsIncluded() {
  return (
    <div className="space-y-5 border-b border-slate-400 py-16">
      <h2 className="text-[#08083c] text-3xl font-medium">What's included</h2>
      <div className="w-full flex items-start justify-between gap-10" >
        <div className="flex-col space-y-4 w-1/2">
          {includedServices.map((service) => (
            <div className="flex items-start gap-3" key={service.id}>
              <div className="bg-[#d3e4d7] p-1 rounded-full text-xl center text-green-400 ">
                <CgCheck />
              </div>
              <p  className="text-slate-600" >{service.service}</p>
            </div>
          ))}
        </div>
        <div className="flex-col w-1/2 space-y-4">
          {NotIncludedServices.map((service) => (
            <div className="flex items-start gap-3" key={service.id} >
              <div className="bg-red-100 p-1 rounded-full text-xl center text-red-600 ">
                <RxCross2 />
              </div>
              <p className="text-slate-600" >{service.service}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ItemsIncluded;
