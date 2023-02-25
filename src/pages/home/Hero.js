import React from "react";
import Navbar from "../../components/navbar";

export default function Hero() {
  return (
    <div className="bg-hero-banner h-screen">
      <Navbar />
      <div className="container">
        <div className="flex flex-wrap justify-between pt-10">
          <div className="text-white font-bold">
            <h1 className="text-5xl leading-tight">
              Start Your Day with <br /> Coffee and Good Meals
            </h1>
            <h2 className="text-xl my-10">
              We provide high quality beans, good taste, and healthy <br /> meals made by love just for you. Start your day with us <br /> for a bigger smile!
            </h2>
            <button className="btn btn-primary btn-wide font-bold">Get Started</button>
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
