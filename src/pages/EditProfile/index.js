import React, { useState } from 'react'
import Navbar from '../../components/navbar'
import ProfileBackground from '../../assets/png/ProfileBackground.png'
import Footer from '../../components/footer'
import DefaultTemp from '../../templates/DefaultTemp'

export default function EditProfile() {
  const [image, setImage] = useState(require('../../assets/png/blank-photo.png'));

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]))
    }
  }

  const handleDelete = () => {
    setImage(require('../../assets/png/blank-photo.png'))
  }

  return (
    <>
      <DefaultTemp title="Edit Profile">

        <div>
          <Navbar />
        </div>
        <div className='w-full h-full lg:h-[200vh] bg-cover' style={{ backgroundImage: `url(${ProfileBackground})` }}>
          <div className='container'>
            <div>
              <h1 className='text-2xl font-bold h-40 flex items-end text-white'>User Profile</h1>
            </div>

            {/* card */}
            <div className="card bg-[#f8f8f8] w-full h-full">
              <div className="flex flex-col md:flex-row">
                <div className="flex flex-col justify-center items-center border p-16">
                  <figure>
                    {/* <img src={require('../../assets/png/user.png')} alt="user" className='rounded-full' /> */}
                    <img src={image} alt="user" className='rounded-full w-56' />
                  </figure>
                  <div className='text-center'>
                    <h1 className='font-bold text-xl'>Firman Subagja</h1>
                    <h3 className='font-semibold text-sm'>subagja.firman33@gmailcom</h3>
                  </div>
                  <div className='my-10 flex flex-col'>
                    {/* <input type="file" className='btn btn-primary' onChange={handleChange} /> */}
                    <input type="file" className="file-input file-input-bordered file-input-warning w-full max-w-xs" onChange={handleChange} />
                    {/* <input type="file" className='btn btn-primary'>Choose Photo</input> */}
                    <button className='btn btn-secondary my-5' onClick={handleDelete}>Remove Photo</button>
                    <button className='btn btn-accent shadow-xl my-5'>Remove Photo</button>
                  </div>
                  <div className='text-center'>
                    <h2 className='font-bold text-md text-secondary'>Do you want to save <br /> the change?</h2>
                  </div>
                  <div className='my-10 flex flex-col'>
                    <button className='btn btn-primary'>Save Change</button>
                    <button className='btn btn-secondary my-5'>Cancel</button>
                    <button className='btn btn-accent shadow-xl my-5'>Log Out</button>
                  </div>
                </div>

                {/* card in card */}
                <div className="flex flex-col w-full lg:w-screen h-screen p-5 lg:p-10">
                  <div className="card bg-white p-7">
                    <form action="">
                      <h2 className='text-2xl font-bold'>Contact</h2>
                      <div className="flex flex-wrap">
                        <div className="form-control w-full max-w-xs">
                          <label className="label">
                            <span className="label-text font-bold text-gray-500">Email Address: </span>
                          </label>
                          <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-[19rem]" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                          <label className="label">
                            <span className="label-text font-bold text-gray-500">Phone Number: </span>
                          </label>
                          <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-[19rem]" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                          <label className="label">
                            <span className="label-text font-bold text-gray-500">Phone Number: </span>
                          </label>
                          <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-[19rem]" />
                        </div>
                      </div>

                      <h2 className='text-2xl font-bold my-7'>Contact</h2>
                      <div className="flex flex-col">
                        <div className="form-control w-full max-w-xs">
                          <label className="label">
                            <span className="label-text font-bold text-gray-500">Display Name: </span>
                          </label>
                          <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-[19rem]" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                          <label className="label">
                            <span className="label-text font-bold text-gray-500">Firstname: </span>
                          </label>
                          <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-[19rem]" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                          <label className="label">
                            <span className="label-text font-bold text-gray-500">Lastname: </span>
                          </label>
                          <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-[19rem]" />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* end */}

          </div>
        </div>
        <Footer />
      </DefaultTemp>
    </>
  )
}
