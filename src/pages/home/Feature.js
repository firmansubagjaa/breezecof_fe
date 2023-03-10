import React from "react";
// herobanner2
import herobanner2 from "../../assets/jpg/barista-with-customer.jpg";
import checklist from "../../assets/svg/checklist.svg";
import { BannerCard } from "../../components/card";

export default function Feature() {
  return (
    <div>
      <div className="-mt-14">
        <BannerCard />
      </div>
      <div className="container mt-20 h-full py-14">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <figure>
            <img src={herobanner2} alt="Team Work" className="w-full lg:w-[60vw] rounded-2xl shadow-xl shadow-gray-400" />
          </figure>
          <div className="leading-loose px-10">
            <h2 className="text-3xl my-5 font-bold">
              We Provide Good Coffee <br /> and Healthy Meals
            </h2>
            <p className="my-5">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
            <ul>
              <li className="flex">
                <img src={checklist} alt="" className="mr-4" />
                <p>High quality beans</p>
              </li>
              <li className="flex">
                <img src={checklist} alt="" className="mr-4" />
                <p>Healthy meals, you can request the ingredients</p>
              </li>
              <li className="flex">
                <img src={checklist} alt="" className="mr-4" />
                <p>Chat with our staff to get better experience for ordering</p>
              </li>
              <li className="flex">
                <img src={checklist} alt="" className="mr-4" />
                <p>Free member card with a minimum purchase of IDR 200.000.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
