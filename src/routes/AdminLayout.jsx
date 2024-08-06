import React from "react";
import { Outlet, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useState } from "react";


const AdminLayout = () => {
    const [open, setOpen] = useState(true);
    const [selectTab, setselectedTab] = useState("Dashboard");
    const toggle = () => {
      setOpen(!open);
    };
    const tabSelction = (tab) => {
      setselectedTab(tab);
    };
  return (
    <div>
      <Sidebar
        toggle={toggle}
        open={open}
        selectTab={selectTab}
        tabSelction={tabSelction}
      />
      <div className="h-screen overflow-y-auto">
        <div className=" sticky top-0 z-10 mt-0 ">
          <Navbar toggle={toggle} open={open} />
        </div>
        <div className=" max-sm:pl-12 pl-[340px] pr-24 max-md:pl-24">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
