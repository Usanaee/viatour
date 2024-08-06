import React from "react";
import { searchItemData } from "../constant";

function SearchItem({items = []}) {
  return (
    <div className="flex gap-16 max-lg:flex-col max-lg:gap-4 ">
      {items.map((data) => (
          <div
            key={data.title}
            className="flex items-center space-x-3 bg-transparent rounded-lg cursor-pointer  "
          >
            <div className="text-gray-700 text-xl border border-gray-300 rounded-lg p-4 flex items-center justify-center">
              <img src={data.icon} alt={data.icon} className="h-6 w-6" />
            </div>
            <div>
              <p className="text-md font-medium text-gray-900">{data.title}</p>
              <p className="text-sm text-gray-500">{data.description}</p>
            </div>
          </div>
      ))}
    </div>
  );
}

export default SearchItem;
