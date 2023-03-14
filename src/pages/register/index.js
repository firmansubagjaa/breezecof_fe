import React from "react";

import Footer from "../../components/footer";
import logo from "../../assets/png/coffee-cup.png";
import { Link } from "react-router-dom";
import RegisterForm from "../../components/form/RegisterForm";

export default function Login() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="hidden md:grid bg-auth-banner h-[150vh] bg-no-repeat"></div>
        <div>
          <div className="navbar bg-base-100">
            <div className="navbar-start">
              <Link to={"/"}>
                <button className="btn btn-ghost normal-case text-xl font-bold">
                  <img src={logo} alt="logo" className="mr-3 h-10" />
                  BreezeCof
                </button>
              </Link>
            </div>
            <div className="navbar-end">
              <Link to={"/login"}>
                <button className="btn btn-primary rounded-full px-10 shadow-2xl shadow-primary">Login</button>
              </Link>
            </div>
          </div>
          <RegisterForm />
        </div>
      </div>

      <Footer />
    </>
  );
}
