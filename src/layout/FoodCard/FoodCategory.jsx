import React from "react";
import {Link} from "react-router-dom";
import LazyLoad from "react-lazy-load";

const FoodCategory = ({category}) => {
  const {id, picture, name, yearsOfExperience, numberOfRecipes, likes} =
    category;
  return (
    <div className="container">
      <div className="card  bg-base-100 shadow-xl image-full">
        <LazyLoad>
          <img className="h-[300px]" src={picture} alt="" />
        </LazyLoad>
        <div className="card-body leading-none p-4">
          <h2 className="card-title text-5xl">{name}</h2>
          <p>Years of experience:{yearsOfExperience}</p>
          <p className="leading-none text-2xl my-2">Recipe:{numberOfRecipes}</p>
          <p>Likes:{likes}</p>
          <div className="card-actions justify-end">
            <Link to={`/categories/${id}`}>
              <button className="btn btn-primary">View Recipes</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCategory;
