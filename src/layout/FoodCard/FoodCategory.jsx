import React from 'react';

const FoodCategory = ({category}) => {
  const {picture,name,yearsOfExperience,numberOfRecipes,likes}=category
  return (
    <div className='container'>
      <div className="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src={picture} alt="chef" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>Years of experience:{yearsOfExperience}</p>
    <p>Recipe:{numberOfRecipes}</p>
    <p>Likes:{likes}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">View Recipes</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default FoodCategory;