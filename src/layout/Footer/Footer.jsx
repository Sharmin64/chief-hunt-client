import React from "react";
import {FaFacebookF, FaFacebookMessenger, FaTwitter} from "react-icons/fa";
import {FcGoogle} from "react-icons/fc";

const Footer = () => {
  return (
    <div style={{backgroundColor: "#3a4664"}} className="main">
      <div className="footer-header grid grid-cols-2 lg:grid-cols-5 gap-8 text-gray-50 mb-5 mt-10">
        <div>
          <h2 className="font-bold text-5xl text-[#ffe9e9]">Food Valley</h2>
          <br />
          <div className="list-none ps-5 space-y-10">
            <li>
              <FaFacebookF className="text-sky-500 text-5xl"></FaFacebookF>
            </li>
            <li>
              <FaFacebookMessenger className="text-violet-500 text-5xl"></FaFacebookMessenger>
            </li>
            <li>
              <FcGoogle className="text-5xl"></FcGoogle>
            </li>
            <li>
              <FaTwitter className="text-blue-400 text-5xl"></FaTwitter>
            </li>
          </div>
          <br />
          <div className="flex items-center gap-2 w-30 h-10">
            <img src="/public/assets/Icons/Group 9969.png" alt="" />
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-3xl">Company</h4>
          <br />
          <br />
          <div className="font-normal text-xl text-[#fffaf0] ">
            <p>About Us</p>
            <br />
            <p>Work</p>
            <br />
            <p>Latest News</p>
            <br />
            <p>Careers</p>
            <br />
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-3xl">Product</h4>
          <br />
          <br />
          <div className="font-normal text-xl text-[#fffaf0]">
            <p>Prototype</p>
            <br />
            <p>Plans & Pricing</p>
            <br />
            <p>Customers</p>
            <br />
            <p>Integrations</p>
            <br />
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-3xl">Support</h4>
          <br />
          <br />
          <div className="font-normal text-xl text-[#fffaf0]">
            <p>Help Desk</p>
            <br />
            <p>Sales</p>
            <br />
            <p>Become a Partner</p>
            <br />
            <p>Developers</p>
            <br />
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-3xl">Contact</h4>
          <br />
          <br />
          <div className="font-normal text-xl text-[#fffaf0] ">
            <p>524 Broadway , NYC</p>
            <br />
            <p>+1 777 - 978 - 5570</p>
            <br />
          </div>
        </div>
      </div>
      <div className=" text-center mt-12 mb-32 mx-auto">
        <div className="">
          <p className="font-normal text-xl text-[#fffaf0] mb-5">
            © Copyright Protected Chef Recipe
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
