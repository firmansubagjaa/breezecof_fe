import React from 'react'

export default function CardOffer() {
  return (
    <>
      {/* card-offer */}
      <div className="container -mt-28">
        <div className="card card-side bg-base-100 shadow-xl h-56 py-10 container">
          <div className="flex flex-col md:flex-row justify-between items-center w-full">
            <div className='flex flex-col'>
              <h2 className='text-3xl font-bold'>Check our promo <br /> today!</h2>
              <p>Check our promo today!</p>
            </div>
            <div className="card-actions justify-end items-center mt-3 md:mt-0">
              <button className="btn btn-primary btn-wide">See Promo</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
