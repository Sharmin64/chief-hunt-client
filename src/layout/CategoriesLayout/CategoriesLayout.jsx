import React from "react";
import Header from "../Header/Header";
import {Outlet} from "react-router-dom";
import Footer from "../Footer/Footer";

const CategoriesLayout = () => {
  return (
    <div>
      <Header />
      <div className="mt-12 container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default CategoriesLayout;
