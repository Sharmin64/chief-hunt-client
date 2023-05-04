import React, { useEffect, useState } from 'react';
import FoodCategory from './FoodCategory';

const FoodCard = () => {
  const [categories, setCategories] = useState([])
  
  useEffect(() => {
    fetch('https://assignment-10-server-side-chef-hunter-sharmin64.vercel.app/categories')
      .then(res => res.json())
      .then(data => setCategories(data))
    .catch(error=> console.error(error))
  },[])
  return (
    <div>
      <h1 className='text-center'>All Cheves</h1>
      <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 mx-auto sm:w-full'>
      {
        categories.map(category => <FoodCategory
          key={category.id}
          category={category}
        ></FoodCategory>)
      }
     </div>
    </div>
  );
};

export default FoodCard;