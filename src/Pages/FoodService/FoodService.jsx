import React from "react";
import serviceImg from "../../assets/service/foodWaiter.avif";
import "./FoodService.css";
import SectionTitle from "../../hooks/SectionTitle";
const FoodService = () => {
  return (
    <div className="service-bg bg-fixed text-white pt-10 my-10">
      <SectionTitle
        subHeading="Our best Service"
        heading="Favourite Item"
      ></SectionTitle>
      <h1></h1>
      <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36">
        <div>
          <img src={serviceImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>August 20, 2020</p>
          <p className="uppercase">Best Service to fulfill your expectations</p>
          <p>
            Its not just about training you good food from your favourite
            restaurant. Its about making a connection Aliquid unde magnam
            voluptates quisquam aut commodi dolores velit asperiores. Enim,
            nemo! Nam, explicabo eos! Iusto expedita ea eveniet ipsum, dolorum
            quis totam quisquam, minus error repudiandae tenetur corporis?
          </p>
          <div>
            <button className="btn btn-outline border-0 mt-4 border-b-4 peer-odd:shadow-md">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
    //<div className="container flex lg:flex-row flex-col-1 my-10 gap-4 mx-0 max-w-2xl">
    //  {/*<div className="container mx-auto max-w-xl">
    //    <div className="flex flex-col md:flex-row items-center">
    //      <div className=" p-4">
    //        <h2 className="mb-5 text-5xl font-bold uppercase text-violet-400">
    //          {" "}
    //          Best Service to fulfill your expectations
    //        </h2>
    //        <p className="text-gray-700">
    //          Its not just about training you good food from your favourite
    //          restaurant. Its about making a connection.
    //        </p>
    //        <button className="px-6 py-4 bg-violet-500 hover:bg-violet-300 transition-colors">
    //          Read More
    //        </button>
    //      </div>
    //      <div className=" p-4">
    //        <img
    //          src={serviceImg}
    //          alt="Sample"
    //          className="rounded-md shadow-md"
    //        />
    //      </div>
    //    </div>
    //  </div>*/}

    //  <div className="w-1/2 card">
    //    <h1 className="mb-5 text-4xl font-bold uppercase text-violet-400 indent-52">
    //      Best Service to fulfill your expectations
    //    </h1>
    //    <p>
    //      Its not just about training you good food from your favourite
    //      restaurant. Its about making a connection.
    //    </p>
    //    <button className="px-6 py-4 bg-violet-500 hover:bg-violet-300 transition-colors">
    //      Read More
    //    </button>
    //  </div>
    //  <div className="w-1/2">
    //    <img className=" lg:w-[700px] sm:w-full" src={serviceImg} alt="" />
    //  </div>
    //</div>
  );
};

export default FoodService;
