import React from "react";
import { approvedToursData } from "../../../constant";
import { MdOutlineModeEdit } from "react-icons/md";
import { GoTrash } from "react-icons/go";
function Approved() {
  return (
    <>
      {approvedToursData.map((data) => (
        <tr className="border-b border-gray-200" key={data.id}>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            {data.id}
          </td>
          <td className="px-6 py-4  text-sm text-gray-500 flex items-center justify-start gap-4">
            <img
              src={data.image}
              alt=""
              className="h-16 w-16 object-cover rounded-xl"
            />
            <span>{data.description}</span>
          </td>
          <td className="table-row-style">
            {data.startDate}
          </td>
          <td className="table-row-style">
            {data.endDate}
          </td>
          <td className="table-row-style">
            {data.details}
          </td>
          <td className="table-row-style">
            {data.price}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-[#8F58FC]">
            {data.status}
          </td>
          <td className="px-6 py-4 text-sm text-gray-500 flex items-center justify-center gap-2">
            <button className="text-slate-700 bg-gray-100 text-lg h-8 w-8 rounded-full center hover:bg-[#05073C] hover:text-white hover:duration-300 flex items-center justify-center">
              <MdOutlineModeEdit />
            </button>
            <button className="text-slate-700 bg-gray-100 h-8 w-8 rounded-full center hover:bg-[#05073C] hover:text-white hover:duration-300 flex items-center justify-center">
              <GoTrash />
            </button>
          </td>
        </tr>
      ))}
    </>
  );
}

export default Approved;
