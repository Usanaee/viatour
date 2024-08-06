import { CiSearch } from "react-icons/ci";
import { CgMenuLeftAlt } from "react-icons/cg";
import { Avatar, Box, AvatarBadge } from "@chakra-ui/react";
import { userAvatar } from "../assets/media";
import { PiEnvelopeThin } from "react-icons/pi";
import { CiBellOn } from "react-icons/ci";




function Navbar({toggle}) {   
  return (
    <div>
      <nav className="bg-white shadow-md h-20 min-w-80 ">
        <div className="ml-80 flex justify-between items-center max-md:ml-40 px-8">
          <div className="flex items-center gap-20 my-5 ">
            <span className="-ml-24 max-sm:-ml-36 text-2xl max-sm:my-1.5">
              <CgMenuLeftAlt onClick={()=> {toggle()}} className="hidden max-md:block cursor-pointer" />
            </span>
            <div className="bg-transparent border-slate-400 border gap-4 h-10 w-64 flex px-4 items-center justify-center rounded-full hover:shadow-md  max-sm:hidden">
              <span className=" cursor-pointer">
                <CiSearch />
              </span>
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent flex-grow outline-none w-20 "
              />
            </div>
          </div>
          <div className=" flex justify-center items-center gap-4 ">
            <span className="text-2xl cursor-pointer">
              <PiEnvelopeThin />
            </span>
            <span className="text-2xl cursor-pointer">
              <CiBellOn />
            </span>
            <Box cursor='pointer'>
              <Avatar
                src={userAvatar[1].avatarImage}
                boxSize="50px"
                borderRadius="50px"
              >
                <AvatarBadge boxSize="1.2em" bg="#EB662B" borderRadius="50px">
                  <span style={{ color: "white", fontSize: "12px" }}></span>
                </AvatarBadge>
              </Avatar>
            </Box>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
