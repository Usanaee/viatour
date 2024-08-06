import React from "react";
import { andriodIcon, appleIcon, headphoneIcon } from "../assets/media";
import { fotterLinks, socialIcons } from "../constant";

function Fotter() {
  return (
    <div className="main-container max-width">
      <div className="bg-[#f1e8e3] w-full h-auto ">
        <div className="flex items-center justify-between p-16 max-lg:flex-col-reverse">
          <div className="center gap-5">
            <img src={headphoneIcon} alt="" className="h-16 w-16" />
            <p className="text-xl text-[#08083c] ">
              Speak to our expert at
              <span className="text-[#EB662B]"> 1-800-453-6744 </span>
            </p>
          </div>
          <div className="center gap-5">
            <p className="text-[#08083c] text-xl">Follow Us:</p>
            <div className="gap-1 center ">
              {socialIcons.map((icons) => (
                <div
                  className=" h-8 w-8 hover:bg-[#EB662B] rounded-full center duration-200 cursor-pointer "
                  key={icons.id}
                >
                  <img src={icons.icon} alt="" className="h-4 w-4" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full flex  px-16 max-lg:flex-wrap ">
          <div className="w-1/4 max-lg:w-1/2 max-sm:w-full">
            <h2 className="text-[#08083c] text-2xl font-medium">Contact</h2>
            <p className="leading-normal fotter-hover mt-4 ">
              328 Queensberry Street, North Melbourne VIC3051, Australia.
            </p>
            <p className="fotter-hover mt-2">hi@viatours.com</p>
          </div>
          {fotterLinks.map((link) => (
            <div className="w-1/4  max-lg:w-1/2 max-sm:w-full column items-center max-sm:items-start max-lg:items-start" key={link.id}>
              <h2 className="text-[#08083c] text-2xl font-medium">
                {link.title}
              </h2>
              {link.links.map((link) => (
                <ul key={link.id} className="mt-4">
                  <li className="fotter-hover hover:scale-105">{link.link}</li>
                </ul>
              ))}
            </div>
          ))}
          <div className="w-1/4 max-lg:w-1/2 max-sm:w-full">
            <h2 className="text-[#08083c] text-2xl font-medium">Newsletter</h2>
            <p className="text-slate-600 mt-4">
              Subscribe to the free newsletter and stay up to date
            </p>
            <div className="w-full bg-white h-14 border border-slate-300 rounded-lg content-center flex px-4 mt-4">
              <input
                type="text"
                name=""
                id=""
                className="bg-transparent placeholder:text-sm outline-none w-full "
                placeholder="Your Email Address"
              />
              <button className="text-slate-600">Send</button>
            </div>
            <h2 className="text-[#08083c] text-2xl font-medium mt-4">
              Mobile Apps
            </h2>
            <span className="flex items-center gap-2 mt-4">
              <img src={appleIcon} alt="" className="h-4 w-4" />
              <p className="hover:text-[#4A43C4] duration-200 cursor-pointer">
                iOS App
              </p>
            </span>
            <span className="flex items-center gap-2">
              <img src={andriodIcon} alt="" className="h-4 w-4" />
              <p className="hover:text-[#4A43C4] duration-200 cursor-pointer">
                Android App
              </p>
            </span>
          </div>
        </div>
        <div className="flex items-center justify-center text-center my-8 bg-white h-10 w-full">
          <p className="text-[#08083c] text-md">
            &copy; 2024 <span className=" cursor-pointer text-[#EA580C] hover:text-[#08083c] " >Viatours</span>. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Fotter;
