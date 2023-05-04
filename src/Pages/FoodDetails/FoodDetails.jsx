import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FcLike } from "react-icons/fc";

const FoodDetails = () => {
  const details = useLoaderData()
  const {id, picture,name,description,likes,ingredients,yearsOfExperience} = details
  console.log(details);
  return (
    <div>
      <div className="card mx-auto w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={picture} alt="chef" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>Experiences: {yearsOfExperience}</p>
          {/*<li> Food Ingredient:{ingredients}</li>*/}
          
          <ul className=' ml-4'>

            {
              ingredients.map(ingredient => <li key={ingredient.id} className='list-disc' >{ingredient}</li>)
            }

                </ul>
    <p> Likes: {likes} <span><FcLike className='inline'/></span></p>
    <p> Details:{description}</p>
    <div className="card-actions">
      <button className="btn btn-primary">Download</button>
    </div>
  </div>
</div>
     
    </div>
  );
};

export default FoodDetails;


