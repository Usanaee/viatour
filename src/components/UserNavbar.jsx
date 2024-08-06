import { colorLogo } from "../assets/media";
import RoundedButton from "./RoundedButton";
import SearchBar from "./SearchBar";
import { CgMenuLeftAlt } from "react-icons/cg";
import { MdClose } from "react-icons/md";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const UserNavbar = ({ toggle, open }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`sticky top-0 z-10 mt-0 ${isScrolled ? "shadow-md" : ""}`}>
      <nav className=" bg-white border-b border-gray-200  ">
        <div className="flex items-center justify-between p-4 main-container max-width gap-10">
          <CgMenuLeftAlt
            className="hidden max-lg:block cursor-pointer text-3xl"
            onClick={() => {
              toggle();
            }}
          />
          <div className="flex items-center max-lg:my-0 max-lg:mx-auto">

           <Link to="/#"><img src={colorLogo} alt="Logo" className="h-8 mr-2 cursor-pointer" /></Link>
            <div className="flex mx-4 max-xl:hidden">
              <SearchBar w={96} />
            </div>
          </div>
          <div className="flex items-center space-x-10 max-lg:hidden">
            <div className="flex gap-10 text-lg">
              <Link to="#" className="nav-item-style">
                Destination
              </Link>
              <Link to="/tourslist" className="nav-item-style">
                Explore Tours
              </Link>

              <Link to="/blogs" className="nav-item-style">
                Blogs
              </Link>
              <Link to="/register" className="nav-item-style">
                Sign Up
              </Link>
            </div>
            <RoundedButton btnText="Admin Panel" />
          </div>
        </div>
      </nav>
      <div
        className={`${
          !open
            ? `transition-all duration-1000 ml-0`
            : "transition-all duration-1000"
        } h-screen max-lg:w-1/3 max-sm:w-1/2 bg-[#08083C] absolute top-0 m-0 z-10 -ml-[400px]`}
      >
        <div className="column ">
          <div className="border-b border-slate-500 pb-10">
            <MdClose
              className="text-[#08083c] text-2xl   cursor-pointer float-right justify-center  mr-6 mt-5 bg-white rounded-full  max-md:block"
              onClick={() => {
                toggle();
              }}
            />
          </div>
          <div className={`column gap-10 items-center mt-10`}>
            <Link to="#" className="nav-item-style-m">
              Destination
            </Link>
            <Link to="/tourslist" className="nav-item-style-m">
              Expolre Tours
            </Link>
            <Link to="/blogs" className="nav-item-style-m">
              Blogs
            </Link>
            <Link to="/register" className="nav-item-style-m">
              Sign Up
            </Link>
            <RoundedButton btnText="Admin Panel" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserNavbar;
