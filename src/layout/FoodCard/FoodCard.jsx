import React, { useEffect, useState } from 'react';
import FoodCategory from './FoodCategory';

const FoodCard = () => {
  const [categories, setCategories] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:9001/categories')
      .then(res => res.json())
      .then(data => setCategories(data))
    .catch(error=> console.error(error))
  },[])
  return (
    <div>
      <h1 className='text-center'>All Cheves</h1>
      {
        categories.map(category => <FoodCategory
          key={category.id}
          category={category}
        ></FoodCategory>)
      }
    </div>
  );
};

export default FoodCard;