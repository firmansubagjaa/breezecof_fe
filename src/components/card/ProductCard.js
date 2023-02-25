import React from "react";

export default function ProductCard() {
  return (
    <>
      <div className="bg-[#f8f8f8]">
        <div className="container">
          <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="font-bold text-3xl">Check our promo <br /> today!</h2>
                  <p>Let's see the deals and pick yours!</p>
                </div>
                <div>
                  <button className="btn btn-primary btn-wide">See Promo</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
