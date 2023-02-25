import React from "react";
// herobanner4
import map from "../../assets/svg/map.svg";

export default function Herobanner4() {
  return (
    <>
      <div className="bg-[#fbfbfb]">
        <div className="container py-36">
          <div className="flex flex-col justify-center items-center text-center">
            <div className="py-24">
              <h2 className="text-3xl my-5 font-bold">
                Visit Our Store in the <br /> Spot on the Map Below
              </h2>
              <p>
                See our store in every city on the spot and spen your good day there. See <br /> you soon!
              </p>
            </div>
          </div>
          <div className="">
            <img src={map} alt="maps" />
            {/* <div className="bg-map-banner h-full my-32 w-full bg-no-repeat bg-cover"></div> */}
          </div>
        </div>
      </div>
      {/* end */}
    </>
  );
}
