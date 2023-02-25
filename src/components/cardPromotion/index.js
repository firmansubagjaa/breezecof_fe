import React from 'react'
// card
import user from '../../assets/svg/Icon/user.svg'
import location from '../../assets/svg/Icon/location.svg'

export default function CardPromotion() {
  return (
    <>
      {/* card promotion */}
      <div className="container -mt-24">
        <div className="card card-side bg-base-100 shadow-xl h-44">
          <div className="flex justify-around items-center w-full">
            <div className='flex'>
              <figure><img src={user} alt="user" /></figure>
              <div className="card-body">
                <h2 className="text-xl font-bold">90+</h2>
                <p>Staff</p>
              </div>
            </div>
            <div className='flex'>
              <figure><img src={location} alt="Movie" /></figure>
              <div className="card-body">
                <h2 className="text-xl font-bold">30+</h2>
                <p>Stories</p>
              </div>
            </div>
            <div className='flex'>
              <figure><img src={location} alt="Movie" /></figure>
              <div className="card-body">
                <h2 className="text-xl font-bold">80+</h2>
                <p>Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
