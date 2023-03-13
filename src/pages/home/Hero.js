import React from "react";
import Navbar from "../../components/navbar";
import HeroBanner from "../../assets/png/herobanner1.png";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="w-full h-full lg:h-screen" style={{ backgroundImage: `url(${HeroBanner})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
      <Navbar />
      <div className="container">
        <div className="flex flex-wrap justify-between pt-[7rem]">
          <div className="text-white font-bold">
            <h1 className="text-5xl leading-tight">
              Start Your Day with <br /> Coffee and Good Meals
            </h1>
            <h2 className="text-xl my-10">
              We provide high quality beans, good taste, and healthy <br /> meals made by love just for you. Start your day with us <br /> for a bigger smile!
            </h2>
            <Link to="/product">
              <button className="btn btn-primary btn-wide font-bold">Get Started</button>
            </Link>
          </div>
          <div>
            <form>
              <input type="text" placeholder="Search" className="input w-64 rounded-full mt-5 lg:mt-0" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
