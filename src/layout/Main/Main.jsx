import React from "react";
import FoodCard from "../FoodCard/FoodCard";
import chef from "../../assets/chef.jpg";
import SwipePage from "../../Pages/SwipePage/SwipePage";
import DeliverFood from "../../Pages/DeliverFood/DeliverFood";
import FoodService from "../../Pages/FoodService/FoodService";
import Reservation from "../../Pages/Reservation/Reservation";
import SectionTitle from "../../hooks/SectionTitle";

const Main = () => {
  return (
    <div className="container rounded-xl">
      <div className="md:flex my-4">
        <div className="md:w-1/2">
          <img className="lg:w-[500px] sm:w-full" src={chef} alt="chef" />
        </div>
        <div className="md:w-1/2 p-6 bg-[#ffe9e9] border-spacing-1 rounded drop-shadow-xl justify-center items-center ">
          <SectionTitle
            heading={"About Chef"}
            subHeading={"who contribute in"}
          ></SectionTitle>
          <p className="text-3xl font-sans font-bold">
            Nigella Lucy Lawson is an English food writer, journalist, and
            television personality. She is known for her indulgent, comfort food
            recipes and her relaxed, conversational style of presenting. Lawson
            has written several bestselling cookbooks and hosted several
            television shows in the UK and around the world.In addition to their
            cooking skills, chefs may also be responsible for creating an
            enjoyable dining experience for their guests, including the
            presentation and plating of dishes, as well as managing the overall
            ambiance and atmosphere of the restaurant
          </p>
        </div>
      </div>

      <div className="mt-16 mx-auto">
        <FoodCard />
      </div>
      <div className="mt-20 mx-auto min-w-full">
        <SwipePage />
      </div>
      <div className="my-20">
        <FoodService />
      </div>
      <div className="my-20">
        <DeliverFood />
      </div>
      <div className="my-20">
        <Reservation />
      </div>
      <div className="my-20"></div>
    </div>
  );
};

export default Main;
