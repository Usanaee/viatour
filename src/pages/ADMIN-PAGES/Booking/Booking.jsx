import PageHeading from "../../../components/PageHeading";
import PageFotter from "../../../components/PageFotter";
import Pagination from "../../../components/Pagination";
import BookingTabs from "./BookingTabs";
import Approved from "../Booking/Approved";
import Cancelled from "../Booking/Cancelled";
import Pending from "../Booking/Pending";
import { useState } from "react";
import TableHead from "../../../components/TableHead";

function Booking() {
  const [tab, setTabs] = useState(1);
  const toggleTabs = (tab) => {
    setTabs(tab);
  };
  return (
    <div>
      <PageHeading
        pageName="Booking Tour"
        tagLine="Book Your Tour By Viatour."
      />
      <div className=" bg-white shadow-lg w-full h-auto rounded-lg my-16 p-10 min-w-72">
        <BookingTabs toggleTabs={toggleTabs} tab={tab} />

        <div className=" overflow-x-auto my-8">
          <div className="max-h-full">
            <table className="min-w-full bg-white shadow-lg">
              <TableHead />
              <tbody className="">
                {tab === 1 ? <Approved /> : ""}
                {tab === 2 ? <Pending /> : ""}
                {tab === 3 ? <Cancelled /> : ""}
              </tbody>
            </table>
          </div>
        </div>
        <Pagination totalPages={20} />
      </div>
      <div className="mt-12 mb-6">
        <PageFotter />
      </div>
    </div>
  );
}

export default Booking;
