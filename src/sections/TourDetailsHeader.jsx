import { starRating } from "../assets/media";
import Breadcrums from "../components/Breadcrums";
import { CiLocationOn } from "react-icons/ci";
import { TbConePlus } from "react-icons/tb";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { FaRegGrinHearts } from "react-icons/fa";

function TourDetailsHeader() {
  const breadcrumbItems = [
    { path: "/", label: "Home" },
    { path: "/tourslist", label: "Tours Listed" },
    { path: "/tourdetails", label: "Tour Details" },
  ];
  return (
    <header>
      <div className="flex justify-between items-center text-slate-700">
        <Breadcrums items={breadcrumbItems} />
        <p>THE 10 BEST Phuket Tours & Excursions</p>
      </div>
      <div className="my-8 space-x-2">
        <button className="bg-[#f8e1d7de] text-[#EB662B] px-5 py-2 rounded-full hover:bg-[#EB662B] hover:text-white duration-200 ">
          Best Seller
        </button>
        <button className="bg-[#ece0d5bd] text-black px-5 py-2 rounded-full hover:bg-[#EB662B] hover:text-white duration-200">
          Free Cancellation
        </button>
      </div>
      <h1 className="text-4xl font-semibold  w-8/12 max-lg:w-full ">
        Phi Phi Islands Adventure Day Trip with Seaview Lunch by V. Marine Tour
      </h1>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start gap-4 max-lg:flex-col ">
          <span className="center">
            <img
              src={starRating}
              alt="rating"
              className="h-20 w-44 -ml-10 bg-cover object-cover"
            />
            <p className="-ml-7">4.8 (269)</p>
          </span>
          <span className="center gap-1 max-lg:hidden ">
            <CiLocationOn />
            <p>Paris, France</p>
          </span>
          <span className="center gap-1 max-lg:hidden ">
            <TbConePlus />
            <p>30K+ booked</p>
          </span>
        </div>
        <div className="flex  items-center gap-6">
          <span className="center gap-2 cursor-pointer hover:text-[#7772D3] duration-200 ">
            <FaRegShareFromSquare />
            <p>Share</p>
          </span>
          <span className="center gap-2 cursor-pointer hover:text-[#7772D3] duration-200">
            <FaRegGrinHearts />
            <p>Wishlist</p>
          </span>
        </div>
      </div>
    </header>
  );
}

export default TourDetailsHeader;
