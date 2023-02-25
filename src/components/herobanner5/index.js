import React from 'react'
// sponsored
import netflix from '../../assets/svg/brand-partner/netflix.svg'
import reddit from '../../assets/svg/brand-partner/reddit.svg'
import amazon from '../../assets/svg/brand-partner/amazon.svg'
import discord from '../../assets/svg/brand-partner/discord.svg'
import spotify from '../../assets/svg/brand-partner/spotify.svg'

export default function HeroBanner5() {
  return (
    <>
      {/* herobanner5 */}
      <div className="container">
        <h2 className='text-3xl mt-10 font-bold text-center'>Our Partner</h2>
        <div className="text-center flex flex-col md:flex-wrap md:flex-row lg:flex-row justify-center items-center">
          <div>
          </div>
          <div className="my-10 lg:my-0">
            <img src={netflix} alt="Sponsored" />
          </div>
          <div className="my-10 lg:my-0">
            <img src={reddit} alt="Sponsored" />
          </div>
          <div className="">
            <img src={amazon} alt="Sponsored" />
          </div>
          <div className="my-10 lg:my-0">
            <img src={discord} alt="Sponsored" />
          </div>
          <div className="my-10 lg:my-0">
            <img src={spotify} alt="Sponsored" />
          </div>
        </div>
      </div>
      {/* end */}
    </>
  )
}
