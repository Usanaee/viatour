import { heroBg } from "../assets/media";
import FillButton from "../components/FillButton";
import SearchItem from "../components/SearchItem";
import { searchItemData } from "../constant";

function Hero() {
  return (
    <div className="main-container relative">
      <div
        className="bg-local h-screen w-full bg-no-repeat bg-cover rounded-t-xl"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-56 items-center gap-10 column max-md:inset-28 max-width ">
          <div className="text-center text-white p-4 ">
            <h1 className="text-7xl font-semibold max-xl:text-6xl max-sm:text-4xl">Your world of joy</h1>
            <p className="mt-4 text-lg max-lg:">
              From local escapes to far-flung adventures, find what makes you
              happy anytime, anywhere
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-2 flex space-x-4 items-center justify-evenly w-10/12 max-lg:flex-col max-lg:items-start max-xl:gap-4">
            <SearchItem items={searchItemData}/>
            <FillButton btnText="Search" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
