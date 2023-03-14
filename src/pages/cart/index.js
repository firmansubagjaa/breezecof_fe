import React from 'react'
import Footer from '../../components/footer'
import Navbar from '../../components/navbar'
import DefaultTemp from '../../templates/DefaultTemp'
import backgroundCart from '../../assets/png/ProfileBackground.png'
import { Link } from 'react-router-dom'

export default function Cart() {
  const orderResult = JSON.parse(localStorage.getItem("@cart")) || [];

  console.log(orderResult)
  // const userID = JSON.paser(localStorage.getItem('@userlogin')).user.id

  const numberWithCommas = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  return (
    <DefaultTemp title="Your Cart">
      <Navbar />
      <div className='bg-cover flex' style={{ backgroundImage: `url(${backgroundCart})` }}>
        <div className="container">
          {/* flex */}
          <div className='flex items-end h-40 w-52 my-10'>
            <h1 className='font-extrabold text-white text-2xl'>Checkout your item now!</h1>
          </div>

          {/* card */}
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="card w-full lg:w-[40vw] bg-white p-5 shadow-2xl shadow-gray-500">
              <div className='border-b-2 border-solid border-gray-200'>
                <h1 className='flex justify-center items-center font-bold text-xl py-14'>Order Summary</h1>
                <h1 className='font-bold'>{JSON.parse(localStorage.getItem("@cart")).titleCart}</h1>
                <div clasName="flex items-center">
                  {[1, 2].map(() => {
                    return (
                      <>
                        <div className='flex py-5'>
                          <img src={require('../../assets/png/orderProduct.png')} alt="" className='rounded-xl' />
                          <div className='px-5'>
                            <h3>Hazelnut Latte</h3>
                            <p>1x</p>
                            <p>Regular</p>
                          </div>
                          <div className='flex items-center ml-10'>
                            <p>IDR 24.0</p>
                          </div>
                        </div>
                      </>
                    )
                  })}
                  {/* {orderResult.map((item) => {
                return (
                  <div key={item.product.id}>
                  <img src={item.imageCart} alt="" />
                  <p>{numberWithCommas(item.priceCart)}</p>
                  </div>
                  )
                })} */}
                </div>
              </div>
              <div>
                <div className="flex justify-between py-5">
                  <p className='uppercase'>subtotal</p>
                  <p>Rp. 50.000</p>
                </div>
                <div className="flex justify-between">
                  <p className='uppercase'>tax & fees</p>
                  <p>Rp. 50.000</p>
                </div>
                <div className="flex justify-between py-5">
                  <p className='uppercase'>shipping</p>
                  <p>Rp. 50.000</p>
                </div>
                <div className="flex justify-between py-5 font-bold text-xl">
                  <p className='uppercase'>total</p>
                  <p>Rp. 50.000</p>
                </div>
              </div>
            </div>
            <div className='flex flex-col items-start h-40 mb-96'>
              <div className='flex justify-between w-full font-extrabold text-white'>
                <h1 className=' text-2xl'>Address Detail</h1>
                <Link to="/edit-profile" className='text-xl'>
                  <p>Edit</p>
                </Link>
              </div>
              <div className="card bg-white p-5 w-96">
                <p className='border-b-2 border-solid border-gray-400'><span className='font-bold'>Delivery</span> to Iskandar</p>
                <p className='border-b-2 border-solid border-gray-400'>Km 5 refinery road oppsite re
                  public road, effurun, Jakarta</p>
                <p className='border-b-2 border-solid border-gray-400'>+6289999999</p>
              </div>

              <div className="my-10">
                <div className='flex font-extrabold text-white'>
                  <h1 className=' text-2xl'>Payment Method</h1>
                </div>
                <div className="card bg-white p-5 w-96">
                  <p className='border-b-2 border-solid border-gray-400'><span className='font-bold'>Delivery</span> to Iskandar</p>
                  <p className='border-b-2 border-solid border-gray-400'>Km 5 refinery road oppsite re
                    public road, effurun, Jakarta</p>
                  <p className='border-b-2 border-solid border-gray-400'>+6289999999</p>
                </div>
                <div className='w-full my-10'>
                  <button className='btn btn-secondary btn-block'>Confirmation and Pay</button>
                </div>
              </div>
            </div>


          </div>
          {/* end */}
        </div>
      </div>
      <Footer />
    </DefaultTemp>
  )
}
