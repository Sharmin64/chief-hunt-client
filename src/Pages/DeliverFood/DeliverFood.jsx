import React from "react";
import SectionTitle from "../../hooks/SectionTitle";
import deliverImg from "../../assets/service/foodService.avif";

const DeliverFood = () => {
  return (
    <>
      <SectionTitle
        heading={"Deliver Food"}
        subHeading={"we make promise to "}
      ></SectionTitle>
      <div className="container md:flex my-28">
        <div className="md:w-1/2 justify-center items-center">
          <h2 className="text-6xl font-bold uppercase">
            Dedicated to Delight You
          </h2>
          <p className="text-3xl font-sans mt-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
            blanditiis impedit vel assumenda rerum, alias repudiandae non error
            nemo inventore fugit provident eos aspernatur atque, molestias
            pariatur voluptas! Sint deleniti dicta, in illum voluptates fugiat
            tempore corporis facere sapiente? Officia.
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores,
            voluptatum!
          </p>
          <button className=" px-10 py-5 hover:bg-violet-300 cursor-pointer border-b-violet-500  border-b-8 rounded-md border-0 mt-7 text-2xl">
            Learn More
          </button>
        </div>
        <div className="md:w-1/2">
          <img className="lg:w-[500px] sm:w-full" src={deliverImg} alt="" />
        </div>
      </div>
    </>
  );
};

export default DeliverFood;
