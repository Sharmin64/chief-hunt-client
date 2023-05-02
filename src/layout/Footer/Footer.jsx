import React from 'react';
import { FaFacebookF, FaFacebookMessenger } from "react-icons/fa";
import { FcShipped} from "react-icons/fc";

const Footer = () => {
  return (
    <div className='mt-11 text-center'>
      <p> Copy © protected site .</p>
      <div className='flex items-center justify-between'>
        <div>
          <p>Home Delivery <span className='inline-flex'> <FcShipped/></span></p>
        </div>
        <div>
        <p> <FaFacebookF></FaFacebookF></p>
        <p> <FaFacebookMessenger></FaFacebookMessenger></p>
      </div>
    </div>

    </div>
  );
};

export default Footer;