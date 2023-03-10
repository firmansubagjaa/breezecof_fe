import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../../components/footer'
import Navbar from '../../components/navbar'
import DefaultTemp from '../../templates/DefaultTemp'

export default function ProductDetail() {
  const { id } = useParams()
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:5000/api/v1/products/${id}`)
      .then((res) => setData(res.data.data))
      .catch((error) => console.log(error.response))
  }, [id])

  // const img = `http://localhost:5000/uploads/images/${data.images[0].filename}`

  return (
    <>
      {/* <DefaultTemp title="Product Detail"> */}
      <div>
        <Navbar />
      </div>
      <div className="container">
        <form action="">

          <div className="flex flex-col md:flex-row">
            <div className='mt-32 flex flex-col w-screen justify-center items-center'>
              <figure className='my-10'>
                {/* <img src={`http://localhost:5000/uploads/images/${data.images[0].filename}`} alt /> */}
                <img src={require('../../assets/png/chicken.png')} alt="product" className='rounded-full h-96' />
              </figure>
              <h1 className='font-extrabold text-4xl'>{data.title}</h1>
              <div className='my-3'>
                <button className='btn btn-secondary btn-wide'>Add to Cart</button>
              </div>
              <div className=''>
                <button className='btn btn-primary btn-wide'>Add to Cart</button>
              </div>
            </div>
            <div className="mt-32">
              <div className="card bg-primary p-14">
                <div className='font-bold w-56'>
                  <p>Delivery only on Monday to friday at  1 - 7 pm</p>
                </div>
                <div className="my-14">
                  <p>{data.description}</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                  <h3 className='font-bold text-2xl my-5'>Choose a size</h3>
                  <div>
                    <button className='btn btn-secondary rounded-full'>R</button>
                    <button className='btn btn-secondary rounded-full mx-5'>L</button>
                    <button className='btn btn-secondary rounded-full'>XL</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      {/* </DefaultTemp> */}
      <div className='mt-32'>
        <Footer />
      </div>
    </>
  )
}
