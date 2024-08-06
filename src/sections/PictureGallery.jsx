import React from "react";
import { articleImg1, articleImg3, bookNowTopImg, listingImg7 } from "../assets/media";

function PictureGallery() {
  return (
    <div>
      <div className="w-full h-auto flex gap-5">
        <div className="w-60 max-lg:w-full ">
          <img
            src={bookNowTopImg}
            alt=""
            className="w-full h-full  border  rounded-l-xl  object-cover bg-cover"

          />
        </div>
        <div className="w-40 column gap-4 max-lg:hidden ">
          <img src={listingImg7} alt="" className="h-1/2 w-full border-t-r" />
          <div className="flex h-1/2 gap-3 " >
            <img src={articleImg3} alt="" className="w-49  object-cover " />
            <img src={articleImg1} alt="" className="w-49  border-b-r object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PictureGallery;
