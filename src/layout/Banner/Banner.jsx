import React from 'react';
import restaurant from '../../assets/restaurant.jpg'

const Banner = () => {
  return (
    <div>
      <div>
      <img src={restaurant} alt="restaurant" />
      </div>
      <div>
      <button style={{backgroundColor:'#ffe9e9'}} className="btn btn-ghost absolute top-96 items-center justify-center object-bottom">Contact Us</button>
      </div>
    </div>
  );
};

export default Banner;