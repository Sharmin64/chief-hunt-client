import React from "react";
import restaurant from "../../assets/bannerFood.jpg";

const Banner = () => {
  return (
    <div className="w-full lg:max-w-full opacity-80">
      <div className="mx-auto w-fit">
        <img
          className="bg-center bg-no-repeat bg-gradient-to-r from-cyan-500 to-blue-500"
          src={restaurant}
          alt="restaurant"
        />
      </div>
      <div className=" items-center justify-center align-sub text-center mx-auto "></div>
    </div>
  );
};

export default Banner;
