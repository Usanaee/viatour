import { blogBg } from "../../assets/media";
import BlogCard from "../../components/BlogCard";
import Pagination from "../../components/Pagination";
import Tabs from "../../components/Tabs";
import { blogsData, blogTabs } from "../../constant";
import { useState,useEffect } from "react";
function Blog() {
const [select, setSelect] = useState("All Guide");
  const toggleTabs = (tab) => {
    setSelect(tab);
  };
  return (
    <div className="main-container">
      <div
        className="h-screen w-full bg-no-repeat bg-cover bg-center rounded-xl"
        style={{ backgroundImage: `url(${blogBg})` }}
      >
        <div className="absolute inset-0 items-center  gap-10 column max-md:inset-28 max-width ">
          <div className="text-center text-white mt-28">
            <h1 className="text-7xl font-semibold max-xl:text-6xl max-sm:text-4xl">
              Your guide to everywhere
            </h1>
            <p className="mt-4 text-lg ">
              Find inspiration, guides and stories for wherever you're going
              Select a destination
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10" >
        <Tabs tabs={blogTabs} select={select} toggleTabs={toggleTabs}  />
      </div>
      <div className="px-8">
      <BlogCard  select={select} />
      </div>
      <div className="mb-16 -mt-10">
        <Pagination totalPages={10} />
      </div>
    </div>
  );
}

export default Blog;
