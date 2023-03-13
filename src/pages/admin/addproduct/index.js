import React from 'react'
import Footer from '../../../components/footer'
import Navbar from '../../../components/navbar'

export default function AddProduct() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="container">
        <div className='flex justify-between'>
          <div className="flex flex-col items-center">
            <figure className='bg-[#BABABA59] mt-32 p-24 rounded-full'>
              <img src={require('../../../assets/png/default-photo.png')} alt="" />
            </figure>
            <div className='my-10'>
              <button className="btn btn-primary">Choose from galery</button>
            </div>
          </div>
          <form action="" className='mt-32 flex flex-col items-center border'>
            <div className="form-control w-96 max-w-screen">
              <label className="label">
                <span className="label-text font-bold text-gray-500">Email Address: </span>
              </label>
              <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </div>
          </form>
        </div>

      </div>
      <Footer />
    </div>
  )
}
