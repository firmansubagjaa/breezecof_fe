import React from "react";
import userIcon from '../../assets/svg/Icon/user.svg'
import locationIcon from '../../assets/svg/Icon/location.svg'
import costumerIcon from '../../assets/svg/Icon/love.svg'

export default function BannerCard() {
  return (
    <>
      <div className="container">
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex flex-col md:flex-row justify-around items-center">
              <div className="mr-3 flex">
                <img src={userIcon} alt="user" className="mr-3" />
                <div>
                  <h2 className="font-bold">90+</h2>
                  <p>Staff</p>
                </div>
              </div>
              <div className="mr-3 my-5 lg:my-0 flex lg:border-x-2 lg:border-solid lg:border-gray-200 px-0 lg:px-36">
                <img src={locationIcon} alt="user" className="mr-3" />
                <div>
                  <h2 className="font-bold">30+</h2>
                  <p>Store</p>
                </div>
              </div>
              <div className="mr-3 flex">
                <img src={costumerIcon} alt="user" className="mr-3 p-4 bg-primary rounded-full" />
                <div>
                  <h2 className="font-bold">800+</h2>
                  <p>Customer</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
