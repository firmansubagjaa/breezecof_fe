import React from 'react'
import Footer from '../../components/footer'
import Navbar from '../../components/navbar'
import DefaultTemp from '../../templates/DefaultTemp'
import backgroundCart from '../../assets/jpg/checkout.jpg'
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
          <div className='flex items-end h-40 w-64 my-10'>
            <h1 className='font-extrabold text-white text-3xl'>Checkout your item now!</h1>
          </div>

          {/* card */}
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="card w-full lg:w-[40vw] bg-white p-5 shadow-2xl shadow-gray-500">
              <div className='border-b-2 border-solid border-gray-200'>
                <h1 className='flex justify-center items-center font-bold text-xl py-14'>Order Summary</h1>
                {/* <h1 className='font-bold'>{JSON.parse(localStorage.getItem("@cart")).titleCart}</h1> */}
                <div clasName="flex items-center">
                  {[1].map(() => {
                    return (
                      <>
                        {localStorage.getItem('@cart') ? (
                          <div>
                            {JSON.parse(localStorage.getItem('@cart')).map((items) => {
                              return (
                                <>
                                  <div className='flex flex-row justify-between py-5'>
                                    <div className='flex'>
                                      <img src={items.imageCart} alt="" className='h-full w-36 object-cover rounded-xl' />
                                      <div className='px-5'>
                                        <h3>{items.titleCart}</h3>
                                        <p>{items.orderCart}</p>
                                        <p>{items.sizeCart}</p>
                                      </div>
                                    </div>
                                    <div className='flex flex-col justify-center items-center'>
                                      <p>{items.priceCart.toFixed(3)}</p>
                                      <p></p>
                                      {/* <p>{items.priceCart}</p> */}
                                      <button className="btn btn-primary rounded-full px-5" onClick={() => localStorage.removeItem("@cart").id}>X</button>
                                    </div>
                                  </div>
                                </>
                              )
                            })}
                          </div>
                        ) : "not found"}
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
