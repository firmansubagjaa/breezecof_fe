import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import HeroBanner from "../../assets/webp/herobanner2.webp";
import { Link } from "react-router-dom";

export default function Hero() {

  return (
    <section className="w-full bg-fixed h-screen lg:h-screen" style={{ backgroundImage: `url(${HeroBanner})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
      <Navbar />
      <div className="container">
        <div className="flex flex-wrap justify-between pt-[7rem]">
          <div className="text-white font-bold">
            {/* {greeting ? greeting() : ""} */}
            <h1 className="text-5xl leading-tight">
              Start Your Day with <br /> Coffee and Good Meals
            </h1>
            <h2 className="text-xl my-10">
              We provide high quality beans, good taste, and healthy <br /> meals made by love just for you. Start your day with us <br /> for a bigger smile!
            </h2>
            <Link to="/product">
              <button className="btn btn-primary btn-block lg:btn-wide font-bold shadow-2xl">Get Started</button>
            </Link>
          </div>
          <div>
            {/* <form className="w-screen flex justify-center items-center">
              <input type="text" placeholder="Search" className="input w-64 rounded-full mt-5 lg:mt-0" />
            </form> */}
            <div className="form-control">
              <div className="input-group shadow-2xl mt-5">
                <button className="btn btn-square btn-primary ">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
                <input type="text" placeholder="Search…" className="input input-bordered rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
