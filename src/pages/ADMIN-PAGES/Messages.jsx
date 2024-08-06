import PageHeading from "../../components/PageHeading";
import PageFotter from "../../components/PageFotter";
import { Avatar, Box, AvatarBadge } from "@chakra-ui/react";
import { messagesData } from "../../constant";
import { CiSearch } from "react-icons/ci";
import TransparentButton from "../../components/FillButton";
import Button from "../../components/Button";
import FillButton from "../../components/FillButton";
function Messages() {
  return (
    <div>
      <PageHeading pageName="Messages" tagLine="Read Your Daily Messages." />
      <div className="flex gap-8 max-lg:flex-col max-lg:gap-0">
        <div className=" bg-white shadow-lg w-1/3 h-auto rounded-lg my-16 p-10 max-lg:w-full min-w-80 max-sm:  ">
          <div className="space-y-7">
            <div className="bg-[#F5F5F5] gap-4 h-12 w-full flex px-4 items-center justify-center rounded-xl">
              <span className=" cursor-pointer">
                <CiSearch />
              </span>
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent flex-grow outline-none w-20 text-black"
              />
            </div>
            {messagesData.map((data) => (
              <div className="space-y-2 " key={data.name}>
                <div className="flex gap-6 items-center">
                  <Box cursor="pointer">
                    <Avatar
                      src={data.avatarImage}
                      boxSize="50px"
                      borderRadius="50px"
                    >
                      {data.Badge ? (
                        <AvatarBadge
                          boxSize="1.2em"
                          bg="#EB662B"
                          borderRadius="50px"
                        >
                          <span style={{ color: "white", fontSize: "12px" }}>
                            5
                          </span>
                        </AvatarBadge>
                      ) : (
                        ""
                      )}
                    </Avatar>
                  </Box>
                  <div>
                    <h2 className="text-lg font-[400]"> {data.name} </h2>
                    <p className="text-sm text-slate-800"> {data.msgLine} </p>
                  </div>
                </div>
                <p> {data.time} </p>
              </div>
            ))}
          </div>
        </div>

        <div className=" bg-white shadow-lg w-66 h-[930px] rounded-lg my-16 p-8 max-lg:w-full min-w-80 ">
          <section className="message-body h-[750px] overflow-x-hidden overflow-y-auto max-sm:overflow-x-auto">
            <div className="flex justify-between items-center border-b border-slate-300 pb-5 ">
              <div className=" flex items-center gap-4 ">
                <Box cursor="pointer">
                  <Avatar
                    src={messagesData[0].avatarImage}
                    boxSize="50px"
                    borderRadius="50px"
                  ></Avatar>
                </Box>
                <div>
                  <h2 className="text-lg font-[400]"> Arlene McCoy </h2>
                  <p className="text-sm text-slate-800"> Active </p>
                </div>
              </div>
              <div className="max-md:hidden" >
                <Button btnText="Delete Conversation" />
              </div>
            </div>
            <div className="mt-8 space-y-2">
              <div className="flex gap-2 items-center">
                <Box cursor="pointer">
                  <Avatar
                    src={messagesData[0].avatarImage}
                    boxSize="50px"
                    borderRadius="50px"
                  ></Avatar>
                </Box>
                <h2 className="text-lg">
                Arlene McCoy <span className="text-sm"> 35 mins </span>
                </h2>
              </div>
              <div className="bg-[#F5F5F5] h-auto w-80 rounded-lg p-8 ">
                <p className="text-slate-700 font-normal">
                  How likely are you to recommend our company to your friends
                  and family?
                </p>
              </div>
            </div>
            <div className="mt-8 space-y-2">
              <div className="flex gap-2 justify-end items-center">
                <Box cursor="pointer">
                  <Avatar
                    src={messagesData[3].avatarImage}
                    boxSize="50px"
                    borderRadius="50px"
                  ></Avatar>
                </Box>
                <h2 className="text-lg">
                Ken <span className="text-sm"> 35 mins </span>
                </h2>
              </div>
              <div className=" flex justify-end ">
                <div className="bg-[#F5F5F5] h-auto w-80 rounded-lg p-8 text-right ">
                  <p className="text-slate-700 font-normal">
                    How likely are you to recommend our company to your friends
                    and family?
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 space-y-2">
              <div className="flex gap-2 items-center">
                <Box cursor="pointer">
                  <Avatar
                    src={messagesData[0].avatarImage}
                    boxSize="50px"
                    borderRadius="50px"
                  ></Avatar>
                </Box>
                <h2 className="text-lg">
                  Albert Flores <span className="text-sm"> 35 mins </span>
                </h2>
              </div>
              <div className="bg-[#F5F5F5] h-auto w-80 rounded-lg p-4 ">
                <p className="text-slate-700 font-normal">
                Ok, Understood!
                </p>
              </div>
            </div>
          </section>
          <div className="flex justify-between items-center border-t border-slate-300 pt-5 mt-8">
            <div className="bg-transparent gap-4 h-12 w-1/2 flex px-4 items-center justify-center rounded-xl">
              <input
                type="text"
                placeholder="Type Message"
                className="bg-transparent flex-grow outline-none w-20 text-black"
              />
            </div>
            <div className="">
              <FillButton btnText="Send Message" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 mb-6">
        <PageFotter />
      </div>
    </div>
  );
}

export default Messages;
