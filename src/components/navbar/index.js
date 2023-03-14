import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/png/coffee-cup.png";
// import Auth from "../../constant/auth.json";

export default function Navbar() {
  // console.log(Auth)
  // const isLogin = localStorage.getItem(Auth)
  // const [login, setLogin] = useState([])

  // useEffect(() => {
  //   setLogin(Auth)
  //   localStorage.getItem(login, JSON.stringify(login))
  // }, [])

  const nonAuth = () => {
    return (
      <>
        <Link to={"/login"}>
          <button className="btn hidden md:grid btn-link no-underline text-black px-8 font-bold">Login</button>
        </Link>
        <Link to={"/register"}>
          <button className="btn btn-primary rounded-full px-8 font-bold shadow-2xl shadow-primary">Sign Up</button>
        </Link>
      </>
    )
  }

  const auth = () => {
    return (
      <>
        <div className="indicator mr-5 mt-2">
          <span className="indicator-item badge badge-secondary">*</span>
          <Link to='' className="link link-hover hover:shadow-2xl hover:shadow-gray-300">
            <img src={require('../../assets/png/chat.png')} alt="chat" />
          </Link>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={require("../../assets/png/user.png")} alt='user' />
            </div>
          </label>
          <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
            {/* <li>
              <Link className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li> */}
            <li><Link to="/editprofile">Edit Profile</Link></li>
            <li><Link to='/login' onClick={() => localStorage.removeItem('@userLogin')} >Logout</Link></li>
          </ul>
        </div>
      </>
    )
  }


  return (
    <>
      {/* navbar */}
      <div div className="bg-base-100 fixed w-full z-[99]">
        <div className="navbar py-5 shadow-md">
          <div className="container">
            <div className="navbar-start flex">
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                  </svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/product">Product</Link>
                  </li>
                  <li>
                    <Link to="/cart">Your Cart</Link>
                  </li>
                  <li>
                    <Link to="/">History</Link>
                  </li>
                </ul>
              </div>
              <Link className="font-bold flex normal-case items-center text-xl">
                <img src={logo} alt="BreezeCof" className="mr-2 h-10" />
                BreezeCof
              </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <Link to={"/"} className="font-bold">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to={"/product"} className="font-bold">
                    Product
                  </Link>
                </li>
                <li>
                  <Link to={"/cart"} className="font-bold">Your Cart</Link>
                </li>
                <li>
                  <Link className="font-bold">History</Link>
                </li>
              </ul>
            </div>
            <div className="navbar-end flex">
              {localStorage.getItem('@userLogin') ? auth() : nonAuth()}

              {/* <Link to={"/login"}>
                <button className="btn hidden md:grid btn-link no-underline text-black px-8">Login</button>
              </Link>
              <Link to={"/register"}>
                <button className="btn btn-primary rounded-full px-8">Sign Up</button>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
