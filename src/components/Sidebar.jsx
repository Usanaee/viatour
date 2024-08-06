import { whitelogo } from "../assets/media";
import { AiFillHome } from "react-icons/ai";
import { MdAssignmentAdd, MdTabUnselected } from "react-icons/md";
import { FaListAlt } from "react-icons/fa";
import { MdAddBox } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";



function Sidebar( {toggle, open,selectTab,tabSelction} ) {
  // const tabName = (tab) =>{
  //   tabSelction(tab);
  // }
  return (
    <div className={`overflow-y-hidden ${open ? `transition-all duration-1000 max-md:-ml-72` : 'transition-all duration-1000'} w-72 absolute z-50`}>
      <div className={`bg-[#05073C]  h-screen`}>
        <div className="p-10" >
          <MdClose className="text-[#05073C] text-2xl float-end items-center cursor-pointer  justify-center  -mr-6 -mt-5 bg-white rounded-full hidden max-md:block" onClick={()=> {toggle()}}  />
          <div className="flex items-center">
            <Link to="/" className="flex ml-5">
              <img src={whitelogo} className="h-8 me-3" alt="Viatour Logo" />
            </Link>
          </div>
        </div>
        <hr />
        <div className="h-full px-6 py-16  overflow-y-auto bg-[#05073C]">
          <ul className="space-y-2">
            <li>
              <Link 
                to="/admin"
                className={`flex gap-2 duration-200 items-center justify-start p-2 rounded-lg hover:bg-gray-700 text-white ${selectTab == "Dashboard" && `bg-gray-700 ` } group `}
                onClick={()=>{
                  tabSelction("Dashboard");
                }}
              >
                <AiFillHome fontSize="20px" />
                <span className="mt-0.5">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to="admin/booking"
                className={`flex gap-2 items-center duration-200 justify-start p-2 rounded-lg  hover:bg-gray-700 text-white ${selectTab == "Booking" && `bg-gray-700 ` }  group`}
                onClick={()=>{
                  tabSelction("Booking")
                }}
              >
                <MdAssignmentAdd fontSize="20px" />
                <span className="mt-0.5">My Booking</span>
              </Link>
            </li>
            <li>
              <Link
                to="admin/listing"
                className={`flex gap-2 duration-200 items-center justify-start p-2 rounded-lg hover:bg-gray-700 text-white ${selectTab == "Listing" && `bg-gray-700 ` } group `}
                onClick={()=>{
                  tabSelction("Listing");
                }}
                >
                <FaListAlt fontSize="20px" />
                <span className="mt-0.5">My Listing</span>
              </Link>
            </li>
            <li>
              <Link
                to="admin/add-tour"
                className={`flex gap-2 duration-200 items-center justify-start p-2 rounded-lg hover:bg-gray-700 text-white ${selectTab == "Add Tour" && `bg-gray-700 ` }group `}
                onClick={()=>{
                  tabSelction("Add Tour");
                }}
                >
                <MdAddBox fontSize="20px" />
                <span className="mt-0.5">Add Tour</span>
              </Link>
            </li>
            <li>
              <Link
                to="admin/favorites"
                className={`flex gap-2 duration-200 items-center justify-start p-2 rounded-lg hover:bg-gray-700 text-white ${selectTab == "Favourites" && `bg-gray-700 ` } group `}
                onClick={()=>{
                  tabSelction("Favourites");
                }}
                >
                <FaHeart fontSize="20px" />
                <span className="mt-0.5">My Favourites</span>
              </Link>
            </li>
            <li>
              <Link
                to="admin/messages"
                className={`flex gap-2 duration-200 items-center justify-start  hover:bg-gray-700 p-2 rounded-lg text-white ${selectTab == "Messages" && `bg-gray-700 ` }  group `}
                onClick={()=>{
                  tabSelction("Messages");
                }}
                >
                <MdMessage fontSize="20px" />
                <span className="mt-0.5">Messages</span>
              </Link>
            </li>
            <li>
              <Link
                to="admin/user-profile"
                className={`flex gap-2 duration-200 items-center justify-start hover:bg-gray-700 p-2 rounded-lg text-white ${selectTab == "Profile" && `bg-gray-700 ` } group `}
                onClick={()=>{
                  tabSelction("Profile");
                }}
                >
                <FaUserCircle fontSize="20px" />
                <span className="mt-0.5">My Profile</span>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className={`flex gap-2 duration-200 items-center justify-start hover:bg-gray-700 p-2 rounded-lg text-white ${selectTab == "Logo out" && `bg-gray-700 ` } group`}
                onClick={()=>{
                  tabSelction("Logo out");
                }}
                >
                <IoMdLogOut fontSize="20px" />
                <span className="mt-0.5">Logo Out</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
