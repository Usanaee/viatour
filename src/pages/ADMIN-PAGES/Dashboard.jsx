import PageHeading from "../../components/PageHeading";
import { dashboardCard } from "../../constant";
import PageFotter from "../../components/PageFotter";
import DashboardHeadingCard from "../../components/DashboardHeadingCard";
import RecentActivites from "../../components/RecentActivites";
function Dashboard() {
  return (
    <div>
      <PageHeading
        pageName="Dashboard"
        tagLine="Wellcome To Viatour User Dashborad."
      />
      <div className=" grid grid-cols-4 w-full gap-7 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 my-16">
        {dashboardCard.map((cardData) => (
          <div
            key={cardData.id}
            className="h-60 w-full shadow-sm bg-white rounded-lg flex flex-wrap gap-4 items-start p-8 justify-between"
          >
            <div className=" space-y-2 ">
              <p className=" text-slate-700 "> {cardData.tagline} </p>
              <h2 className=" text-[25px] font-bold "> {cardData.number} </h2>
              <p>
                <span className="text-orange-400">{cardData.count}</span> Today
              </p>
            </div>
            <div className="bg-[#feefe9] h-[70px] w-[70px] rounded-full center">
              <img src={cardData.icon} alt="plan icon" className="h-8 w-8" />
            </div>
          </div>
        ))}
      </div>
      <div className=" flex justify-between flex-wrap max-lg:gap-4 ">
        <div className=" w-60  max-lg:w-full ">
          <DashboardHeadingCard />
        </div>
        <div className=" w-40 pl-10 max-lg:w-full max-lg:p-0 ">
          <RecentActivites />
        </div>
      </div>
      <div className="mt-12 mb-6">
        <PageFotter />
      </div>
    </div>
  );
}

export default Dashboard;
