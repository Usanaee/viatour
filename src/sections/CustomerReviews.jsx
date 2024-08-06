import React from "react";
import { userAvatar } from "../assets/media";
import ReviewCard from "../components/ReviewCard";

function CustomerReviews() {
    

  return (
    <div className="relative py-12 mb-16 bg-white overflow-x-hidden ">
      <h2 className=" text-center text-3xl font-medium text-[#08083c] mb-8">Customer Reviews</h2>
      {userAvatar.map((avatar, index) => (
        <img
          key={index}
          src={avatar.avatarImage}
          alt="avatar"
          className={`background-avatar avatar-${index} `}
        />
      ))}
      <div className="" >  
        <ReviewCard/>
      </div>
      
     
      
    </div>
  );
}

export default CustomerReviews;
