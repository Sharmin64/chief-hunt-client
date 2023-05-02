import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../Home/Header/Header';
import Footer from '../../Home/Footer/Footer';


const Home = () => {
  return (
    <div className='container'>
    <Header></Header>
      <div className='mb-5'>
      <Outlet></Outlet>
     </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;