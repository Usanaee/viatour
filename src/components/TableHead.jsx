import React from "react";

function TableHead() {
  return (
    <thead className="bg-gray-100  sticky top-0 z-10 mt-0 w-full ">
      <tr className=" w-full ">
        <th className="table-head-style">
          ID
        </th>
        <th className="table-head-style">
          Title
        </th>
        <th className="table-head-style">
          Start Date
        </th>
        <th className="table-head-style">
          End Date
        </th>
        <th className="table-head-style">
          Details
        </th>
        <th className="table-head-style">
          Price
        </th>
        <th className="table-head-style">
          Status
        </th>
        <th className="table-head-style">
          Action
        </th>
      </tr>
    </thead>
  );
}

export default TableHead;
