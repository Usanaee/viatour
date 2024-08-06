import React from "react";
import { FaFileUpload } from "react-icons/fa";

function UploadFile() {
  return (
    <div className="relative mt-2 w-1/4 max-lg:w-1/2 max-sm:w-full rounded-md">
      <input id="fileInput" name="fileInput" type="file" className="hidden" />
      <label
        htmlFor="fileInput"
        className="flex flex-col items-center justify-center w-full h-56 border-2 border-dashed border-orange-500 rounded-lg cursor-pointer bg-[#FFF6F3] hover:bg-[#FFEFEB]"
      >
        <div className="text-4xl text-[#EB662B]" >
          <FaFileUpload />
        </div>
        <span className="mt-2 text-sm text-[#EB662B]">Upload Images</span>
      </label>
    </div>
  );
}

export default UploadFile;
