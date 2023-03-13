import axios from 'axios';
import React, { useEffect, useState } from 'react'
import coupon1 from "../../assets/svg/product/coupon1.svg";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import TabSection from './TabSection';



export default function ProductSection() {
  const [data, setData] = useState([])
  const [refetch, setRefetch] = useState(false)

  const fetchProduct = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/v1/products/`)
      setData(res.data.data)
    } catch (err) {
      console.log(err)
    }
  }


  useEffect(() => {
    fetchProduct()
  }, [])

  // fetch products from API
  // res data 
  // masukin res data lewat props ke tab section
  return (
    <div>
      <Navbar />
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col justify-center items-center border-r border-solid border-black">
          <div className="px-5 mt-32">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold m">Promo today</h2>
              <p className="py-5">
                Coupons will be updated every weeks. <br /> Check them out!{" "}
              </p>
            </div>
            <div>
              {[1, 3, 4].map(() => {
                return (
                  <>
                    <div className="bg-[#88B788] rounded-3xl flex justify-center  p-4 items-center mb-4">
                      <div>
                        <img src={coupon1} alt="coupon" className="mr-14" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold">HAPPY MOTHER’S DAY! Get one of our favorite menu for free!</h3>
                        <p className="text-sm">HAPPY MOTHER’S DAY! Get one of our favorite menu for free!</p>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            {/* button coupon */}
            <button className="btn btn-secondary btn-block rounded-2xl">Apply Coupon</button>
            {/* {JSON.parse(localStorage.setItem(login))} */}

            {/* terms section */}
            <div className="mt-20 h-52">
              <h3 className="font-bold">Terms and Condition</h3>
              <ol className="list-decimal ml-4">
                <li>You can only apply 1 coupon per day</li>
                <li>It only for dine in</li>
                <li>Buy 1 get 1 only for new user</li>
                <li>Should make member card to apply coupon</li>
              </ol>
            </div>
          </div>
        </div>
        <TabSection products={data} />
        <div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
