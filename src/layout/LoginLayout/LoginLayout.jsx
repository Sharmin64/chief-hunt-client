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
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default LoginLayout;