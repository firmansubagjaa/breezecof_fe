import React from 'react'
import Footer from '../../components/footer'
import Navbar from '../../components/navbar'
import DefaultTemp from '../../templates/DefaultTemp'
import backgroundCart from '../../assets/png/ProfileBackground.png'

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
      <div className='h-screen bg-cover flex' style={{ backgroundImage: `url(${backgroundCart})` }}>
        <div className="container">
          <div className='flex items-end h-40 w-52'>
            <h1 className='font-extrabold text-white text-2xl'>Checkout your item now!</h1>
          </div>
          <div className="card bg-white">
            <h1 className='flex justify-center items-center font-bold text-xl py-14'>Order Summary</h1>
            <h1 className='font-bold'>{JSON.parse(localStorage.getItem("@cart")).titleCart}</h1>
          </div>
          <div clasName="flex">
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
      </div>
      <Footer />
    </DefaultTemp>
  )
}
