import { FaLess, FaStar } from "react-icons/fa6";
import { MdStars } from "react-icons/md";
import { customerExcellentRating } from "../constant";
import TouriestFeedback from "../components/TouriestFeedback";
import Button from "../components/Button"

function TouriestReviews() {
  return (
    <div className="space-y-8 border-b border-slate-400 py-16">
      <h1 className="text-[#08083c] text-3xl font-medium">Customer Reviews</h1>
      <div className="space-y-2">
        <div className="bg-[#f5e3dc]  border-t-r border-t-l flex items-center justify-between p-4">
          <div className="center gap-3 text-3xl text-black ">
            <MdStars />
            <span>
              <h3 className="text-[#08083c] text-lg">Overall Rating</h3>
              <p className="text-slate-700 text-sm ">Excellent</p>
            </span>
          </div>
          <span className="center gap-2 text-lg text-[#E2AD64]">
            <FaStar /> <p className="text-[#08083c]">(5.0)</p>
          </span>
        </div>
        <div className="flex flex-wrap gap-3.5">
          {customerExcellentRating.map((rating) => (
            <div
              className="w-49  bg-[#f5ece8eb] flex items-center justify-between p-4 max-xl:w-full "
              key={rating.id}
            >
              <div className="center gap-3 text-3xl ">
                <img src={rating.icon} alt="" className="h-7 w-7" />
                <span>
                  <h3 className="text-[#08083c] text-lg">
                    {rating.ratingTitle}
                  </h3>
                  <p className="text-slate-700 text-sm ">Excellent</p>
                </span>
              </div>
              <span className="center gap-2 text-lg text-[#E2AD64]">
                <FaStar /> <p className="text-[#08083c]">(5.0)</p>
              </span>
            </div>
          ))}
        </div>
        <TouriestFeedback/>
        <Button btnText="See All Reviews"  />
      </div>
    </div>
  );
}

export default TouriestReviews;
