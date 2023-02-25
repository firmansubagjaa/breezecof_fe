import React from 'react'
import googleLogo from '../../../../assets/svg/googleLogo.svg'


export default function Form() {
  return (
    <>
      <form action="">
        <div className="flex justify-center my-10">
          <h1 className='font-bold text-2xl text-secondary'>Sign Up</h1>
        </div>
        <div className='container'>
          <div className="form-control w-full">
            {/* email */}
            <label className="label mt-5">
              <span className="label-text font-bold text-secondary">Email Address : </span>
            </label>
            <input type="text" placeholder="Enter your email address" className="input input-bordered w-full" />

            {/* password */}
            <label className="label mt-5">
              <span className="label-text font-bold text-secondary">Password : </span>
            </label>
            <input type="text" placeholder="Enter your password" className="input input-bordered w-full" />

            {/* phone number */}
            <label className="label mt-5">
              <span className="label-text font-bold text-secondary">Phone Number : </span>
            </label>
            <input type="text" placeholder="Enter your phone number" className="input input-bordered w-full" />

            {/* button */}
            <button className='btn btn-primary btn-block my-5'>Sign Up</button>
            <button className='btn btn-secondary btn-block'>
              <img src={googleLogo} alt="" className='mr-3' />
              Login with Google</button>

            <div className='border-2 border-solid border-gray-400 my-10'></div>
            <p className='mx-auto -my-14 bg-white px-5'>have account?</p>
            <button className='btn btn-secondary btn-block mt-20'>Login</button>
          </div>
        </div>
      </form>
    </>
  )
}
