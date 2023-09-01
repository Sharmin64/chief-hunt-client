import React, {useEffect, useState} from "react";
import FoodCategory from "./FoodCategory";
import SectionTitle from "../../hooks/SectionTitle";

const FoodCard = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://assignment-10-server-side-chef-hunter.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      <SectionTitle
        heading={"All Cheves"}
        subHeading={"The Most Popular"}
      ></SectionTitle>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 mx-auto sm:w-full">
        {categories.map((category) => (
          <FoodCategory key={category.id} category={category}></FoodCategory>
        ))}
      </div>
    </div>
  );
};

export default FoodCard;
