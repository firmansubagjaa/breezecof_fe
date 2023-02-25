import React from 'react'
import NonAuth from '../../components/nonAuth'
import coupon1 from '../../assets/svg/product/coupon1.svg'
import Footer from '../../components/footer'

export default function Product() {
  return (
    <>
      {/* navbar */}
      <NonAuth />

      <div className="flex flex-row">
        <div className='flex flex-col justify-center items-center border-r border-solid border-black'>
          <div className="px-5 mt-10">
            <div className="text-center mb-14">
              <h2 className='text-3xl font-bold m'>Promo today</h2>
              <p className='py-5'>Coupons will be updated every weeks. <br /> Check them out! </p>
            </div>
            <div>
              {[1, 3, 4].map(() => {
                return (
                  <>
                    <div className='bg-[#88B788] rounded-3xl flex justify-center  p-4 items-center mb-4'>
                      <div>
                        <img src={coupon1} alt="coupon" className='mr-14' />
                      </div>
                      <div>
                        <h3 className='text-sm font-bold'>HAPPY MOTHER’S DAY!
                          Get one of our favorite menu for free!</h3>
                        <p className='text-sm'>HAPPY MOTHER’S DAY!
                          Get one of our favorite menu for free!</p>
                      </div>
                    </div>
                  </>
                )
              })}
            </div>
            {/* button coupon */}
            <button className='btn btn-secondary btn-block rounded-2xl'>Apply Coupon</button>

            {/* terms section */}
            <div className='my-20'>
              <h3 className='font-bold'>Terms and Condition</h3>
              <ol className='list-decimal ml-4'>
                <li>You can only apply 1 coupon per day</li>
                <li>It only for dine in</li>
                <li>Buy 1 get 1 only for new user</li>
                <li>Should make member card to apply coupon</li>
              </ol>
            </div>
          </div>

        </div>
        <div className="container flex justify-between mt-10">
          <button className='btn btn-secondary'>Favorite & promo</button>
          <button className='btn btn-secondary'>Coffee</button>
          <button className='btn btn-secondary'>Non-Coffee</button>
          <button className='btn btn-secondary'>Food</button>
          <button className='btn btn-secondary'>Add-on</button>
        </div>
      </div>
      <Footer />
    </>
  )
}
