import React from "react";

export default function ProductCard() {
  return (
    <>
      <div className="-mt-20">
        <div className="container">
          <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="">
                  <h2 className="font-bold text-3xl">Check our promo <br /> today!</h2>
                  <p className="my-5">Let's see the deals and pick yours!</p>
                </div>
                <div>
                  <button className="btn btn-primary btn-wide shadow-2xl shadow-primary">See Promo</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
