import React from 'react';

import restaurant from '../../assets/restaurant.jpg'


const Main = () => {
  return (
    <div className='container'>
      
      <h1>habri jabri outlete er content gulo  will llcome here</h1>
     
        <img className='w-full bg-fixed bg-contain' src={restaurant} alt="" />
        <button style={{backgroundColor:'#ffe9e9'}} className="btn btn-ghost">Contact Us</button>
   
    

      
    </div>
  );
};

export default Main;