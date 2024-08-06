import { planIcon } from "../assets/media";
import { chooseTourCardData } from "../constant";
function ChooseTourCard() {
  return (
    <div className="flex flex-wrap max-lg:gap-5 " >
      {chooseTourCardData.map((data) => (
        <div className=" w-1/4  max-lg:w-[45%] max-md:w-full  pr-8 max-lg:pr-0  space-y-4" key={data.id} >
          <img src={data.icon} alt="" className="h-12 w-12" />
          <h2 className="text-xl"> {data.title} </h2>
          <p className="text-slate-600">
            {data.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ChooseTourCard;
