import React from "react";
import {Outlet} from "react-router-dom";
import Header from "../../layout/Header/Header";
import Footer from "../../layout/Footer/Footer";
import Banner from "../../layout/Banner/Banner";

const Home = () => {
  return (
    <div className="">
      <div className="bg-banner">
        <div>
          <Header></Header>
        </div>
        <div>
          <Banner></Banner>
        </div>
      </div>
      <div className="my-14">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
