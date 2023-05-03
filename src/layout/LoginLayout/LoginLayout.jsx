import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const LoginLayout = () => {
  return (
    <div>
      <div className='text-slate-950'>
      <Header></Header>
     </div>
      <div className='mt-20 mb-20'>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default LoginLayout;