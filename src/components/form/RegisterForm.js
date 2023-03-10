import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import googleLogo from '../../assets/svg/googleLogo.svg'


export default function RegisterForm() {
  const [registerForm, setRegisterForm] = useState({
    username: '',
    password: '',
    phoneNumber: '',
  })

  const navigate = useNavigate()

  const handleRegister = (event) => {
    event.preventDefault()
    axios({
      url: 'http://localhost:5000/api/v1/auth/register',
      methos: 'POST',
      data: registerForm,
    }).then((res) => {
      console.log(res.data.data)
      navigate('/login')
    }).catch((err) => console.log(err.response))
  }

  return (
    <>
      <form onSubmit={handleRegister}>
        <div className="flex justify-center my-10">
          <h1 className='font-bold text-2xl text-secondary'>Sign Up</h1>
        </div>
        <div className='container'>
          <div className="form-control w-full">
            {/* email */}
            <label className="label mt-5">
              <span className="label-text font-bold text-secondary">Username : </span>
            </label>
            <input type="text" placeholder="Enter your email address" className="input input-bordered w-full"
              onChange={(e) => {
                setRegisterForm({
                  ...registerForm,
                  username: e.target.value
                })
              }}
            />

            {/* password */}
            <label className="label mt-5">
              <span className="label-text font-bold text-secondary">Password : </span>
            </label>
            <input type="password" placeholder="Enter your password" className="input input-bordered w-full"
              onChange={(e) => {
                setRegisterForm({
                  ...registerForm,
                  password: e.target.value
                })
              }}
            />

            {/* phone number */}
            <label className="label mt-5">
              <span className="label-text font-bold text-secondary">Phone Number : </span>
            </label>
            <input type="text" placeholder="Enter your phone number" className="input input-bordered w-full"
              onChange={(e) => {
                setRegisterForm({
                  ...registerForm,
                  phoneNumber: e.target.value
                })
              }}
            />

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
