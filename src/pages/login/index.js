import React from "react";
// import CardOffer from "../../components/cardOffer";
// import Footer from "../../components/footer";
import logo from "../../assets/svg/logo.svg";
import { LoginForm } from "../../components/form";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <div className="grid grid-cols-2">
        <div className="bg-auth-banner h-[150vh] bg-no-repeat"></div>
        <div>
          <div className="navbar bg-base-100">
            <div className="navbar-start">
              <Link to={"/"}>
                <button className="btn btn-ghost normal-case text-xl font-bold">
                  <img src={logo} alt="logo" className="mr-3" />
                  BreezeCof
                </button>
              </Link>
            </div>
            <div className="navbar-end">
              <Link to={"/register"}>
                <button className="btn btn-primary rounded-full px-10">Sign Up</button>
              </Link>
            </div>
          </div>
          <LoginForm />
        </div>
      </div>
      {/* <CardOffer /> */}
      {/* <Footer /> */}
    </>
  );
}