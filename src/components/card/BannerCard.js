import React from "react";
import userIcon from '../../assets/svg/Icon/user.svg'

export default function BannerCard() {
  return (
    <>
      <div className="container">
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex justify-around">
              <div className="mr-3 flex">
                <img src={userIcon} alt="user" className="mr-3" />
                <div>
                  <h2 className="font-bold">90+</h2>
                  <p>Staff</p>
                </div>
              </div>
              <div className="mr-3 flex">
                <img src={userIcon} alt="user" className="mr-3" />
                <div>
                  <h2 className="font-bold">90+</h2>
                  <p>Staff</p>
                </div>
              </div>
              <div className="mr-3 flex">
                <img src={userIcon} alt="user" className="mr-3" />
                <div>
                  <h2 className="font-bold">90+</h2>
                  <p>Staff</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
