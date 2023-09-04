import React from "react";
import SectionTitle from "../../hooks/SectionTitle";
//import "./Reservation.css";
import chefFood from "../../assets/service/foodBerger.jpeg";
//import {FaPhoneAlt} from "react-icons/fa";

const Reservation = () => {
  return (
    <div>
      <SectionTitle
        heading={"Our Reservation"}
        subHeading={"Creek fine Restaurant"}
      ></SectionTitle>

      <div className="relative mb-8 mt-5 h-screen">
        {/* Background Image */}
        <img
          className="w-full h-full object-cover opacity-70"
          src={chefFood}
          alt="Background"
        />

        {/* Overlay */}
        <div className="absolute top-16 left-40 w-9/12 h-64 items-center justify-center  bg-white mx-auto opacity-32 origin-center translate-y-5">
          <span className=" absolute justify-center  bg-pink-700 rounded-full w-28 h-28 -mt-12 -mr-24 text-center items-center pt-6">
            Call
          </span>

          <h1 className="text-4xl font-bold mb-4 text-center">Phone Number</h1>
          <p className="text-lg text-center">
            080-090-0990
            <br />
            080-090-0880
          </p>
        </div>

        {/*<div className="absolute top-16 left-40 w-9/12 h-64 items-center justify-center  bg-white mx-auto opacity-32 origin-center translate-y-5"></div>*/}

        {/*Content*/}
        <div className="absolute top-0  w-full  h-full flex md:flex-col justify-center items-center text-gray-900">
          <div className="mt-40 w-1/2">
            <h1 className="text-4xl font-bold mb-4 text-center">
              Table Reservation
            </h1>
            <form>
              <label htmlFor="Name">
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered border-indigo-400  w-full px-10 py-5 mb-4"
                  required
                />
              </label>
              <label htmlFor="Email">
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered border-indigo-400 w-full  px-10 py-5 mb-4"
                  required
                />
              </label>
              <label htmlFor="number">
                <input
                  type="number"
                  placeholder="Number"
                  className="input input-bordered border-indigo-400 w-full  px-10 py-5 mb-4"
                  required
                />
              </label>
              <label htmlFor="number of Guest">
                <input
                  type="number"
                  placeholder="Number of Guest"
                  className="input input-bordered border-indigo-400 w-full  px-10 py-5 mb-4"
                />
              </label>
              <label htmlFor="number">
                <input
                  type="time"
                  placeholder="Time"
                  className="input input-bordered border-indigo-400 w-full  px-10 py-5 mb-4"
                />
              </label>
              <label htmlFor="date">
                <input
                  type="date"
                  placeholder="Date"
                  className="input input-bordered border-indigo-400 w-full  px-10 py-5 mb-4"
                />
              </label>
              <textarea
                className="textarea textarea-bordered w-full"
                cols="30"
                placeholder="Message"
              ></textarea>
              <input
                type="submit"
                value="Submit"
                className="w-full bg-indigo-400 hover:bg-indigo-600 text-slate-200 px-10 py-5 uppercase rounded-md"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
