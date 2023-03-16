import React, { useState } from "react";
import logo from "../../assets/png/coffee-cup.png";
import { LoginForm } from "../../components/form";
import { Link } from "react-router-dom";
import DefaultTemp from "../../templates/DefaultTemp";
import Footer from "../../components/footer";
import { ProductCard } from "../../components/card";
import AuthBackground from "../../assets/webp/Auth2.webp"


export default function Login() {
  return (
    <>
      <DefaultTemp title="Login">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="hidden md:grid h-[150vh] bg-no-repeat bg-cover" style={{ backgroundImage: `url(${AuthBackground})` }}></div>
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
                <Link to={"/register"}>
                  <button className="btn btn-primary rounded-full px-10 shadow-2xl shadow-primary">Sign Up</button>
                </Link>
              </div>
            </div>
            <LoginForm />
          </div>
        </div>
        {/* <CardOffer /> */}
        <ProductCard />
        <Footer />
      </DefaultTemp>
    </>
  );
}
