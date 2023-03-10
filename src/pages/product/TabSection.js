import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function TabSection() {
  const [data, setData] = useState([])
  const [openTab, setOpenTab] = useState(1)
  const [keyword, setKeyword] = useState("")
  const [category, setCategory] = useState("")

  useEffect(() => {
    axios.get(`http://localhost:5000/api/v1/products?search=${keyword}`)
      .then((res) => { setData(res.data.data) })
      .catch((err) => console.log(err.response))
  }, [keyword, category])

  useEffect(() => {
    axios.get(`http://localhost:5000/api/v1/products?cat=${category}`)
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err.response))
  }, [category])

  return (
    <>
      <div className="container flex flex-col mt-32">
        <div className="flex flex-row justify-between mb-10">
          <div className="carousel">
            <div className="carousel-item">
              <Link className="link link-secondary font-bold no-underline" to='#' onClick={() => {
                setOpenTab(1)
                setCategory("")
              }}>Favorite & promo</Link>
            </div>
            <div className="carousel-item">
              <Link className="link link-secondary font-bold no-underline mx-10" to='#' onClick={() => {
                setOpenTab(2)
                setCategory("Coffee")
              }}>Coffee</Link>
            </div>
            <div className="carousel-item">
              <Link className="link link-secondary font-bold no-underline" to='#' onClick={() => {
                setOpenTab(3)
                setCategory("Non-Coffee")
              }}>Non-Coffee</Link>
            </div>
            <div className="carousel-item">
              <Link className="link link-secondary font-bold no-underline mx-10" to='#' onClick={() => {
                setOpenTab(4)
                setCategory("Food")
              }}>Food</Link>
            </div>
            <div className="carousel-item">
              <Link className="link link-secondary font-bold no-underline" to='#' onClick={() => {
                setOpenTab(5)
                setCategory("Add-on")
              }}>Add-on</Link>
            </div>
          </div>
        </div>
        <input type="text" placeholder="Search" className="input input-bordered input-secondary w-full md:w-64 rounded-full mt-5 lg:mt-0" onChange={(e) => setKeyword(e.target.value)} />
        <div className="flex flex-wrap">
          <div className={openTab === 1 ? "flex flex-wrap justify-center items-center" : "hidden"}>
            {" "}
            {data.map((items) => {
              return (
                <>
                  <Link to={`/product/${items.id}`}>
                    <div className="card card-compact w-72 md:w-[10rem] h-56 p-3 mr-0 mb-10 md:0 md:mr-4 mt-4 bg-base-100 shadow-xl">
                      <figure className="h-full">
                        <img src={`http://localhost:5000/uploads/images/${items.images[0].filename}`} alt="Product" className="h-full w-36 object-cover rounded-full" />
                      </figure>
                      <div className="flex flex-col justify-center items-center">
                        <h2 className="card-title">{items.title}</h2>
                        <p>{items.price}</p>
                      </div>
                    </div>
                  </Link>
                </>
              )
            })}
          </div>
          <div className={openTab === 2 ? "flex flex-wrap justify-center items-center" : "hidden"}>
            {data.map((items) => {
              return (
                <>
                  <Link to={`/product/${items.id}`}>
                    <div className="card card-compact w-72 md:w-[10rem] h-56 p-3 mr-0 mb-10 md:0 md:mr-4 mt-4 bg-base-100 shadow-xl">
                      <figure className="h-full">
                        <img src={`http://localhost:5000/uploads/images/${items.images[0].filename}`} alt="Product" className="h-full w-36 object-cover rounded-full" />
                      </figure>
                      <div className="flex flex-col justify-center items-center">
                        <h2 className="card-title">{items.title}</h2>
                        <p>{items.price}</p>
                      </div>
                    </div>
                  </Link>
                </>
              )
            })}
          </div>
          <div className={openTab === 3 ? "flex flex-wrap justify-center items-center" : "hidden"}>
            {data.map((items) => {
              return (
                <>
                  <Link to={`/product/${items.id}`}>
                    <div className="card card-compact w-72 md:w-[10rem] h-56 p-3 mr-0 mb-10 md:0 md:mr-4 mt-4 bg-base-100 shadow-xl">
                      <figure className="h-full">
                        <img src={`http://localhost:5000/uploads/images/${items.images[0].filename}`} alt="Product" className="h-full w-36 object-cover rounded-full" />
                      </figure>
                      <div className="flex flex-col justify-center items-center">
                        <h2 className="card-title">{items.title}</h2>
                        <p>{items.price}</p>
                      </div>
                    </div>
                  </Link>
                </>
              )
            })}
          </div>
          <div className={openTab === 4 ? "flex flex-wrap justify-center items-center" : "hidden"}>
            {data.map((items) => {
              return (
                <>
                  <Link to={`/product/${items.id}`}>
                    <div className="card card-compact w-72 md:w-[10rem] h-56 p-3 mr-0 mb-10 md:0 md:mr-4 mt-4 bg-base-100 shadow-xl">
                      <figure className="h-full">
                        <img src={`http://localhost:5000/uploads/images/${items.images[0].filename}`} alt="Product" className="h-full w-36 object-cover rounded-full" />
                      </figure>
                      <div className="flex flex-col justify-center items-center">
                        <h2 className="card-title">{items.title}</h2>
                        <p>{items.price}</p>
                      </div>
                    </div>
                  </Link>
                </>
              )
            })}
          </div>
          <div className={openTab === 5 ? "flex flex-wrap justify-center items-center" : "hidden"}>
            {data.map((items) => {
              return (
                <>
                  <Link to={`/product/${items.id}`}>
                    <div className="card card-compact w-72 md:w-[10rem] h-56 p-3 mr-0 mb-10 md:0 md:mr-4 mt-4 bg-base-100 shadow-xl">
                      <figure className="h-full">
                        <img src={`http://localhost:5000/uploads/images/${items.images[0].filename}`} alt="Product" className="h-full w-36 object-cover rounded-full" />
                      </figure>
                      <div className="flex flex-col justify-center items-center">
                        <h2 className="card-title">{items.title}</h2>
                        <p>{items.price}</p>
                      </div>
                    </div>
                  </Link>
                </>
              )
            })}
          </div>

          {/* {data.map((items) => {
                return (
                  <>
                    <Link to={`/product/${items.id}`}>
                      <div className="card card-compact w-[10rem] mr-4 mt-4 bg-base-100 shadow-xl">
                        <figure><img src={`http://localhost:5000/uploads/images/${items.images[0].filename}`} alt="Shoes" /></figure>
                        <div className="flex flex-col justify-center items-center">
                          <h2 className="card-title">{items.title}</h2>
                          <p>{items.price}</p>
                        </div>
                      </div>
                    </Link>
                  </>
                )
              })} */}
        </div>
      </div>
    </>
  )
}
