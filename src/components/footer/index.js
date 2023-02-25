import React from 'react'
// footer
import logo from '../../assets/svg/logo.svg'
import facebook from "../../assets/svg/social-media/Socmed/Facebook.svg"
import twitter from "../../assets/svg/social-media/Socmed/Twitter.svg"
import instagram from "../../assets/svg/social-media/Socmed/Instagram.svg"

export default function Footer() {
  return (
    <>
      {/* footer */}
      <footer className="footer p-10 text-base-content bg-zinc-50">
        <div className="container pt-14">
          <div className="flex justify-between w-full">
            <div className='flex flex-col items-start'>
              <a className="font-bold flex normal-case items-center text-xl">
                <img src={logo} alt="BreezeCof" className='mr-2' />
                BreezeCof
              </a>
              <div className='font-semibold my-2'>
                <p>Coffee Shop is a store that sells some good <br /> meals, and especially coffee. We provide <br /> high quality beans</p>
              </div>
              <div className='flex -ml-5'>
                <img src={facebook} alt="facebook" />
                <img src={twitter} alt="twitter" />
                <img src={instagram} alt="instagram" />
              </div>
              <div>
                <p className='text-gray-400'>©2020CoffeeStore</p>
              </div>
            </div>
            <div className='flex'>
              <div className="flex flex-col mx-10 leading-loose">
                <span className="footer-title">Product</span>
                <a className="link link-hover">Download</a>
                <a className="link link-hover">Pricing</a>
                <a className="link link-hover">Location</a>
                <a className="link link-hover">Countries</a>
                <a className="link link-hover">Blog</a>
              </div>
              <div className="flex flex-col mx-10 leading-loose">
                <span className="footer-title">Engage</span>
                <a className="link link-hover">BreezeCof</a>
                <a className="link link-hover">FAQ</a>
                <a className="link link-hover">About Us</a>
                <a className="link link-hover">Privacy Policy</a>
                <a className="link link-hover">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
