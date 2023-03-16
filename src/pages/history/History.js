import React from 'react'
import { Link } from 'react-router-dom'
import DefaultTemp from '../../templates/DefaultTemp'
import backgroundHistory from '../../assets/webp/historyBackground.webp'


export default function HistorySection() {
  return (
    <DefaultTemp title="History">
      <div className='bg-cover flex mb-20 h-screen' style={{ backgroundImage: `url(${backgroundHistory})` }}>
        <div className="container">
          {/* flex */}
          <div className='flex flex-col items-center justify-end text-center h-40 w-full my-10'>
            <h1 className='font-extrabold text-white text-2xl'>Let’s see what you have bought!</h1>
            <p className='font-bold text-white text-xl'>Long press to delete item</p>
          </div>

          {/* card */}
          <div className="flex flex-wrap">
            .{[1, 2, 3, 4, 5, 6].map(() => {
              return (
                <>
                  <div className="card mr-2 mt-2 w-64 bg-slate-300 p-3">
                    <div className="flex jus justify-center items-center">
                      <div>
                        <img src={require('../../assets/png/chicken.png')} alt="history" className='rounded-full h-24 w-24' />
                      </div>
                      <div className='ml-3'>
                        <h4 className='font-bold text-xl'>Chicken</h4>
                        <p>Rp.24.000</p>
                        <p>Delivered</p>
                      </div>
                    </div>
                  </div>
                </>
              )
            })}
          </div>
          {/* end */}
        </div>
      </div>
    </DefaultTemp>
  )
}
