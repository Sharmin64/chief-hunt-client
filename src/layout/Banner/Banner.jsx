import React from 'react';
import restaurant from '../../assets/restaurant.jpg'

const Banner = () => {
  return (
    <div className='sm:w-full lg:w-cover container'>
      <div>
      <img className='my-image' src={restaurant} alt="restaurant" />
      </div>
      <div className=' absolute top-20 items-center justify-center items-center align-sub text-center mx-auto '>
        <p className='text-white'>Our delicious Food Recipe</p>
        <button style={{ backgroundColor: '#ffe9e9' }} className="btn btn-ghost object-bottom">Contact Us</button>
        
      </div>
    </div>
  );
};

export default Banner;