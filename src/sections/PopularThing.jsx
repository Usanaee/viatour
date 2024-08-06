import {
  listingImg1,
  listingImg2,
  listingImg3,
  listingImg4,
  listingImg5,
  listingImg6,
} from "../assets/media";
import SectionsHeading from "../components/SectionsHeading";

function PopularThing() {
  return (
    <div className="main-container max-width">
      <div className="container" >
        <SectionsHeading heading="Popular things to do" button="See All" />
        <div className="mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-10 ">
          <div className="relative overflow-hidden cursor-pointer rounded-xl ">
            <img
              src={listingImg1}
              alt="Cruises"
              className="w-full h-full transform hover:scale-50 transition-transform duration-300 scale-hover "
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
              <span className="text-white text-lg font-medium mb-10 ml-10 tracking-[5px]">Cruises</span>
            </div>
          </div>
          <div className="relative overflow-hidden cursor-pointer lg:row-span-2 lg:col-span-1  rounded-xl">
            <img
              src={listingImg2}
              alt="City Tours"
              className="w-full  h-full object-cover transform hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
              <span className="text-white text-lg font-medium mb-10 ml-10 tracking-[5px]">
                City Tours
              </span>
            </div>
          </div>
          <div className="relative overflow-hidden cursor-pointer lg:col-span-1  rounded-xl">
            <img
              src={listingImg3}
              alt="Museum Tour"
              className="w-full h-full transform hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
              <span className="text-white text-lg font-medium mb-10 ml-10 tracking-[5px]">
                Museum Tour
              </span>
            </div>
          </div>
          <div className="relative overflow-hidden cursor-pointer lg:col-span-1  rounded-xl">
            <img
              src={listingImg4}
              alt="Beach Tours"
              className="w-full h-full transform hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
              <span className="text-white text-lg font-medium mb-10 ml-10 tracking-[5px]">
                Beach Tours
              </span>
            </div>
          </div>

          <div className="relative overflow-hidden cursor-pointer lg:col-span-1 rounded-xl">
            <img
              src={listingImg6}
              alt="Hiking"
              className="w-full h-full transform hover:scale-150 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end ">
              <span className="text-white text-lg font-medium mb-10 ml-10 tracking-[5px] ">Hiking</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularThing;
