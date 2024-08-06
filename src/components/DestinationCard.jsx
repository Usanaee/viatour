import { destinationsData } from "../constant";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function DestinationCard() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 2,
    responsive: [
        {
          breakpoint: 1280,
          settings: {
              infinite: true,
              dots: true,
              slidesToShow: 5,
              slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 560,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
      ]
  };
  return (
    <div>
        <div className="">
      <Slider {...settings}>
          {destinationsData.map((data) => (
            <div className="group pb-10" key={data.id}>
              <div className="h-36 w-36 rounded-full max-sm:my-0 max-sm:mx-auto bg-red-500 overflow-hidden">
                <img
                  src={data.image}
                  alt=""
                  className="w-full h-full object-cover  group-hover:scale-125 duration-300 hover:duration-300 cursor-pointer"
                />
              </div>
              <div className=" text-center mt-5 cursor-pointer">
                <h3 className="font-medium">{data.name}</h3>
                <p>{data.tagLine}</p>
              </div>
            </div>
          ))}
      </Slider>
        </div>
    </div>
  );
}

export default DestinationCard;
