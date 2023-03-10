import axios from "axios";
import React, { useState } from "react";
// import  from "../../../../assets/svg/.svg";
import { Link, useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [loginForm, setLoginForm] = useState({
    username: '',
    password: ''
  })

  const [validate, setValidate] = useState({
    error: false,
    message: "",
  })

  const navigate = useNavigate()

  const handleLogin = (event) => {
    event.preventDefault()
    axios({
      url: 'http://localhost:5000/api/v1/auth/login',
      method: 'POST',
      data: loginForm
    }).then((res) => {
      localStorage.setItem("@userLogin", JSON.stringify(res.data.data))
      navigate('/')
    }).catch((error) => {
      setValidate({ error: true, message: error.response.data.message })
    })
  }
  return (
    <>
      <form onSubmit={handleLogin}>
        <div className="flex justify-center my-10">
          <h1 className="font-bold text-2xl text-secondary">Login</h1>
        </div>
        <div className="container">
          <div className="form-control w-full">
            {validate.error && (
              <div className="alert alert-error shadow-lg">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span>{validate.message}</span>
                </div>
              </div>
            )}
            {/* email */}
            <label className="label mt-5">
              <span className="label-text font-bold text-secondary">Username : </span>
            </label>
            <input type="text" placeholder="Enter your email address" className="input input-bordered w-full"
              onChange={(e) => {
                setLoginForm({
                  ...setLoginForm,
                  username: e.target.value
                })
              }} />

            {/* password */}
            <label className="label mt-5">
              <span className="label-text font-bold text-secondary">Password : </span>
            </label>
            <input type="password" placeholder="Enter your password" className="input input-bordered w-full"
              onChange={(e) => {
                setLoginForm({
                  ...loginForm,
                  password: e.target.value
                })
              }}
            />

            {/* forgot password */}
            <Link to="/" className="link link-secondary no-underline font-bold my-5">
              Forgot your password?
            </Link>

            {/* button */}
            <button className="btn btn-primary btn-block my-5">Login</button>
            {/* <button className="btn btn-secondary btn-block">
              <img src={} alt="" className="mr-3" />
              Login with Google
            </button> */}
          </div>
        </div>
      </form>
    </>
  );
}
