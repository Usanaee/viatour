import { bookNowBgImg, bookNowTopImg } from "../assets/media";
import FillButton from "../components/FillButton";
function BookNow() {
  return (
    <div className="relative main-container max-width">
      <div
        className="bg-local h-screen w-full bg-no-repeat bg-cover rounded-t-xl "
        style={{ backgroundImage: `url(${bookNowBgImg})` }}
      >
        <div className="absolute inset-0 gap-10 flex max-lg:flex-col main-container ">
          <div className=" w-1/2 px-16 column items-start gap-5  justify-center max-lg:w-full max-lg:h-1/2 max-lg:items-center max-lg:text-center  ">
            <h1 className="text-5xl font-semibold leading-[55px] text-[#08083c]">
              Grab up to <span className="text-[#EB662B]"> 35% off </span>on
              your favorite Destination
            </h1>
            <p className="text-slate-700">
              Limited time offer, don't miss the opportunity
            </p>
            <FillButton btnText="Book Now" />
          </div>
          <div className="w-1/2 max-lg:w-full max-lg:h-1/2">
            <img
              src={bookNowTopImg}
              alt=""
              className="h-full w-full object-cover rounded-r-lg max-lg:rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookNow;
