import {
  listedImg1,
  userAvatar,
  listedImg2,
  listedImg3,
} from "../assets/media";
import { starRating } from "../assets/media";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { touriestFeedback } from "../constant";
function TouriestFeedback() {
  return (
    <div>
      {touriestFeedback.map((feedBack) => (
        <div className="py-8 " key={feedBack.id} >
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-3">
              <img
                src={feedBack.avatarImage}
                alt=""
                className="h-16 w-16 rounded-full"
              />
              <p className="text-[#08083c] text-lg">{feedBack.name}</p>
            </span>
            <p className="text-slate-700">{feedBack.date}</p>
          </div>
          <span className="flex items-center -my-5 ">
            <img
              src={starRating}
              alt="rating"
              className="h-20 w-44  -ml-10 bg-cover object-cover"
            />
            <p className="-ml-7">{feedBack.rating}</p>
          </span>
          <p className=" text-slate-700 ">
            {feedBack.feedbackText}
          </p>
          <div className="flex gap-5 mt-4 max-lg:flex-wrap ">
            <img src={feedBack.img1} alt="" className="h-36 w-36 rounded-lg" />
            <img src={feedBack.img2} alt="" className="h-36 w-36 rounded-lg" />
            <img src={feedBack.img3} alt="" className="h-36 w-36 rounded-lg" />
          </div>
          <div className="flex items-center gap-4 mt-4 ">
            <span className="center gap-1.5 text-[#08083c] hover:text-[#7772D3] cursor-pointer duration-200  ">
              <FaThumbsUp />
              <p>Helpful</p>
            </span>
            <span className="center gap-1.5 text-[#08083c] hover:text-[#7772D3] cursor-pointer duration-200">
              <FaThumbsDown />
              <p>Not Helpful</p>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TouriestFeedback;
