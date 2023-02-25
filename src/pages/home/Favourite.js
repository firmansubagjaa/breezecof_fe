import React from "react";
// herobanner3
import checklist2 from "../../assets/svg/checklist2.svg";
import package1 from "../../assets/png/hazelnut.png";

export default function Herobanner3() {
  return (
    <>
      <div className="container py-16">
        <div className="text-center">
          <h2 className="text-3xl mt-10 font-bold">Here is People’s Favorite</h2>
          <p>Let’s choose and have a bit taste of poeple’s favorite. It might be yours too!</p>
        </div>
        <div className="flex flex-col md:flex-row mt-20">
          {[1, 2, 3].map(() => {
            return (
              <>
                <div className="card w-full mx-0 mt-10 md:mx-5 bg-base-100 shadow-xl">
                  <figure className="px-10 py-10 pt-10">
                    <img src={package1} alt="Hazelnut Latte" className="rounded-full shadow-xl" />
                  </figure>
                  <div className="card-body">
                    <div className="flex flex-col">
                      <div className="flex justify-center ">
                        <h2 className="card-title">Hazelnut Latte</h2>
                      </div>
                      <div className="ml-10 py-10 leading-loose">
                        <ul>
                          <li className="flex">
                            <img src={checklist2} alt="" className="mr-3" />
                            <p>Hazelnut Syrup</p>
                          </li>
                        </ul>
                        <ul>
                          <li className="flex">
                            <img src={checklist2} alt="" className="mr-3" />
                            <p>Wanilla Whipped Cream</p>
                          </li>
                        </ul>
                        <ul>
                          <li className="flex">
                            <img src={checklist2} alt="" className="mr-3" />
                            <p>Ice / Hot</p>
                          </li>
                        </ul>
                        <ul>
                          <li className="flex">
                            <img src={checklist2} alt="" className="mr-3" />
                            <p>Sliced Banana on Top</p>
                          </li>
                        </ul>
                      </div>
                      <div className="card-actions justify-center">
                        <button className="btn btn-primary">Buy Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
