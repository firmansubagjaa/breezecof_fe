import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import Footer from '../../components/footer'
import Navbar from '../../components/navbar'
import DefaultTemp from '../../templates/DefaultTemp'

export default function ProductDetail() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [data, setData] = useState({
    id: "",
    title: "",
    price: "",
    image: null,
    category: "",
    description: "",
    images: [
      {
        product_id: "",
        name: "",
        filename: ""
      }
    ]
  })
  const [size, setSize] = useState('Insert Size Cup')
  const [order, setOrder] = useState(1)


  const fetchProductDetails = async () => {
    try {
      const response = await axios.get(`https://alive-fashion-cow.cyclic.app/api/v1/products/${id}`)
      setData(response.data.data)
    }
    catch (err) {
      console.log(err)
    }
  }


  useEffect(() => {
    fetchProductDetails()
    setSize(size)
  }, [])

  const cart =
  {
    titleCart: data.title,
    priceCart: data.price * order,
    imageCart: `https://alive-fashion-cow.cyclic.app/uploads/images/${data.images ? data.images[0].filename : ""}`,
    orderCart: order,
    sizeCart: size,
    product_id: data.id,
  }


  const carts = JSON.parse(localStorage.getItem("@cart"));

  const numberWithCommas = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleAddCart = (e) => {
    alert("Yeayy! One step closer to enjoy your meal!");
    if (carts == null) {
      // null disini  adalah array kosong di data localStorage untuk carts
      localStorage.setItem("@cart", JSON.stringify([cart]));
      navigate('/cart')
    } else {
      localStorage.setItem("@cart", JSON.stringify([...carts, cart]));
      // loca
    }
    // debugging untuk cek carts
    console.log(carts);
  };

  return (
    <>
      <DefaultTemp title="Product Detail">
        <Navbar />
        <div className="container">
          <form action="">
            <div className="flex flex-col md:flex-row justify-center items-center">
              <div className='mt-32 flex flex-col w-screen justify-center items-center'>
                <figure className='my-10'>
                  <img src={`https://alive-fashion-cow.cyclic.app/uploads/images/${data.images ? data.images[0].filename : ""}`} alt="products" className='rounded-full h-96 w-96 object-fill shadow-2xl shadow-gray-400' />
                  {/* <img src={`http://localhost:5000/uploads/images/${data?.images[0]?.filename}`} alt /> */}
                  {/* <img src={require('../../assets/png/chicken.png')} alt="product" className='rounded-full h-96' /> */}
                </figure>
                <h1 className='font-extrabold text-4xl'>{data.title}</h1>
                <h3 className='font-bold text-2xl'>{numberWithCommas(data.price)}</h3>
                <div className='hidden md:grid'>
                  <div className='my-3'>
                    <Link to='/cart' className='btn btn-secondary btn-wide shadow-2xl shadow-secondary' onClick={(e) => {
                      e.preventDefault()
                      handleAddCart()
                    }}>Add to Cart</Link>
                  </div>
                  <div className=''>
                    <button className='btn btn-primary btn-wide shadow-2xl shadow-primary'>Ask to Staff</button>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <div className="card bg-gray-100 p-14 shadow-2xl">
                  <div className='font-bold w-56'>
                    <p>Delivery only on Monday to friday at  1 - 7 pm</p>
                  </div>
                  <div className="my-14">
                    <p>{data.description}</p>
                  </div>
                  <div className='flex flex-col justify-center items-center'>
                    <h3 className='font-bold text-2xl my-5'>Choose a size</h3>
                    <div>
                      <button className='btn btn-secondary w-12 rounded-full' onClick={(e) => {
                        e.preventDefault()
                        setSize('R (Regular)')
                      }}
                      >R</button>

                      <button className='btn btn-secondary w-12 rounded-full mx-5' onClick={(e) => {
                        e.preventDefault()
                        setSize('L (Large)')
                      }}>L</button>

                      <button className='btn btn-secondary rounded-full' onClick={(e) => {
                        e.preventDefault()
                        setSize('XL (Extra Large)')
                      }}>XL</button>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col mt-10 items-center md:hidden'>
                  <div className='my-3 w-full'>
                    <Link to='/cart' className='btn btn-secondary btn-block shadow-2xl shadow-secondary' onClick={(e) => {
                      e.preventDefault()
                      handleAddCart()
                    }}>Add to Cart</Link>
                  </div>
                  <div className='w-full'>
                    <button className='btn btn-primary btn-block shadow-2xl'>Checkout</button>
                  </div>
                </div>
              </div>
            </div>
          </form>

          <div className='flex flex-col md:flex-row justify-center mt-20 mb-5'>
            <div className="card bg-gray-200 w-full p-5 shadow-2xl">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className='flex items-center'>
                  <div>
                    <img src={`https://alive-fashion-cow.cyclic.app/uploads/images/${data.images ? data.images[0].filename : ""}`} alt="products" className='rounded-full h-20 w-20 object-fill' />
                  </div>
                  <div className='ml-5'>
                    <h3 className='font-bold text-2xl'>{data.title}</h3>
                    <p>{size}</p>
                  </div>
                </div>

                <div className='flex mt-5 md:mt-0 items-center'>
                  <button className='btn btn-secondary' onClick={(e) => {
                    e.preventDefault()
                    setOrder(order - 1)
                  }}>-</button>
                  <div className="border-2 border-solid border-white rounded-lg flex justify-center items-center bg-white w-12 h-12 mx-3">
                    <p>{order}</p>
                  </div>
                  <button className='btn btn-secondary' onClick={(e) => {
                    e.preventDefault()
                    setOrder(order + 1)
                  }}>+</button>
                </div>
              </div>
            </div>
            <Link to='/payment' className='flex items-center ml-0 md:ml-5'>
              <button className="btn btn-secondary h-full mt-5 md:mt-0 md:w-48 rounded-xl btn-block shadow-2xl shadow-secondary">Checkout</button>
            </Link>
          </div>
        </div>
        <Footer />
      </DefaultTemp>
    </>
  )
}
