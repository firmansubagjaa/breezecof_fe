import React from "react";
// rating
import customer from "../../assets/png/customer1.png";
import rating from "../../assets/svg/rating.svg";

export default function Herobanner6() {
  return (
    <>
      {/* herrobaner6 */}
      <div className="container">
        <div className="text-center leading-loose">
          <h2 className="text-3xl my-5 font-bold leading-normal">
            Loved by Thousands of <br /> Happy Customer
          </h2>
          <p>
            These are the stories of our customers who have visited us with great <br /> pleasure.
          </p>
        </div>
        <div className="flex flex-col md:flex-row mt-20">
          {[1, 2, 3].map(() => {
            return (
              <>
                <div className="card w-full mt-5 mx-0 md:mx-5 mb-56 bg-base-100 shadow-xl">
                  <div className="card-body">
                    <div className="flex justify-between">
                      <img src={customer} alt="profile" className="mr-3" />
                      <div>
                        <h2 className="card-title">Firman</h2>
                        <p>Bandung, Indonesia</p>
                      </div>
                      <div className="flex flex-row items-center">
                        <p>4.5</p>
                        <img src={rating} alt="rating" />
                      </div>
                    </div>

                    <div className="my-5">
                      <p>“Wow... I am very happy to spend my whole day here. the Wi-fi is good, and the coffee and meals tho. I like it here!! Very recommended!</p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
          <div className=""></div>
        </div>
      </div>
    </>
  );
}
