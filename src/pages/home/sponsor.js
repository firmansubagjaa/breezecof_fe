import React from 'react'
import Netflix from '../../assets/svg/brand-partner/netflix.svg'
import Reddit from '../../assets/svg/brand-partner/reddit.svg'
import Amazon from '../../assets/svg/brand-partner/amazon.svg'
import Discord from '../../assets/svg/brand-partner/discord.svg'
import Spotify from '../../assets/svg/brand-partner/spotify.svg'

export default function Sponsor() {
  return (
    <div className="bg-[#fbfbfb]">
      <div className='container'>
        <div className="text-center">
          <h2 className='text-3xl pt-10 font-bold'>Our Partner</h2>
          <div className="flex flex-wrap justify-between items-center">
            <div className='my-10 md:my-0'>
              <img src={Netflix} alt="Netflix" />
            </div>
            <div className="">
              <img src={Reddit} alt="Reddit" />
            </div>
            <div className="">
              <img src={Amazon} alt="Amazon" />
            </div>
            <div className="mb-7">
              <img src={Discord} alt="Discord" />
            </div>
            <div className="mb-7">
              <img src={Spotify} alt="Spotify" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
