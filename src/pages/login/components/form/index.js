import React from 'react'
import googleLogo from '../../../../assets/svg/googleLogo.svg'


export default function Form() {
  return (
    <>
      <form action="">
        <div className="flex justify-center my-10">
          <h1 className='font-bold text-2xl text-secondary'>Login</h1>
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
            <input type="text" placeholder="Enter your email address" className="input input-bordered w-full" />

            {/* forgot password */}
            <a className="link link-secondary no-underline font-bold my-5">Forgot your password?</a>

            {/* button */}
            <button className='btn btn-primary btn-block my-5'>Login</button>
            <button className='btn btn-secondary btn-block'>
              <img src={googleLogo} alt="" className='mr-3' />
              Login with Google</button>
          </div>
        </div>
      </form>
    </>
  )
}
