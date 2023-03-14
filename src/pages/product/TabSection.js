import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminSection from "./adminEditProductSection";
import UserSection from "./userSection";

export default function TabSection(props) {
  // const { products } = props
  const [data, setData] = useState([])
  const [openTab, setOpenTab] = useState(1)
  const [keyword, setKeyword] = useState("")
  const [category, setCategory] = useState("")
  const [sortBy, setSortBy] = useState("")
  const [refetch, setRefetch] = useState(false)

  useEffect(() => {
    axios.get(`https://alive-fashion-cow.cyclic.app/api/v1/products?search=${keyword}`)
      .then((res) => { setData(res.data.data) })
      .catch((err) => console.log(err.response))
  }, [keyword, category])

  useEffect(() => {
    axios.get(`https://alive-fashion-cow.cyclic.app/api/v1/products?cat=${category}`)
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err.response))
  }, [refetch, category])

  useEffect(() => {
    axios.get(`https://alive-fashion-cow.cyclic.app/api/v1/products?sortBy=${sortBy}`)
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err.response))
  }, [sortBy])

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`https://alive-fashion-cow.cyclic.app/api/v1/products/:${id}`)
      setData(res.data.data)
      setRefetch(true)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    handleDelete()
  })

  const EditAndAddButton = () => {
    return (
      <>
        <div className='flex flex-col items-start'>
          <button className='Link link-hover font-bold text-secondary'>Edit Product</button>
          <Link to="/add-product">
            <button className='Link link-hover font-bold text-secondary'>Add New Product</button>
          </Link>
        </div>
      </>
    )
  }

  const EditAndDeleteButton = () => {
    return (
      <>
        <button className="btn btn-primary btn-block rounded-full">Edit Product</button>
        <button className="btn btn-secondary btn-block rounded-full" onClick={(id) => handleDelete(id)}>Delete</button>
      </>
    )
  }

  console.log(JSON.parse(localStorage.getItem("@userLogin")).user.role)
  // console.log("apa isi product", products)
  // console.log("apa isi data", data)

  return (
    <>
      <div className="container flex flex-col mt-32">
        <div className="flex flex-row justify-between mb-10">
          <div className="carousel">
            <div className="carousel-item">
              <Link className={`${openTab === 1 ? "border-b-2 border-solid border-secondary" : ""} link link-secondary font-bold no-underline`} to='#' onClick={() => {
                setOpenTab(1)
                setCategory("")
                setSortBy(sortBy)
              }}>Favorite & promo</Link>
            </div>
            <div className="carousel-item">
              <Link className={`${openTab === 2 ? "border-b-2 border-solid border-secondary" : ""} link link-secondary font-bold no-underline mx-10`} to='#' onClick={() => {
                setOpenTab(2)
                setCategory("Coffee")
              }}>Coffee</Link>
            </div>
            <div className="carousel-item">
              <Link className={`${openTab === 3 ? "border-b-2 border-solid border-secondary" : ""} link link-secondary font-bold no-underline`} to='#' onClick={() => {
                setOpenTab(3)
                setCategory("Non-Coffee")
              }}>Non-Coffee</Link>
            </div>
            <div className="carousel-item">
              <Link className={`${openTab === 4 ? "border-b-2 border-solid border-secondary" : ""} link link-secondary font-bold no-underline mx-10`} to='#' onClick={() => {
                setOpenTab(4)
                setCategory("Food")
              }}>Food</Link>
            </div>
            <div className="carousel-item">
              <Link className={`${openTab === 5 ? "border-b-2 border-solid border-secondary" : ""} link link-secondary font-bold no-underline`} to='#' onClick={() => {
                setOpenTab(5)
                setCategory("Add-on")
              }}>Add-on</Link>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <input type="text" placeholder="Search" className="input input-bordered input-secondary w-full md:w-96 rounded-full mt-5 lg:mt-0" onChange={(e) => setKeyword(e.target.value)} />
          {/* <select className="select select-primary w-64 max-w-xs rounded-full">
            <option disabled selected>Sort By</option>
            <option onClick={() => setSortBy("ASC")}>A to Z</option>
            <option onClick={() => setSortBy("DESC")}>Z to A</option>
          </select> */}
        </div>
        <div className="flex flex-wrap">
          <div className={openTab === 1 ? "flex flex-wrap justify-center items-center" : "hidden"}>
            {" "}
            {data.map((items) => {
              return (
                <>
                  <Link to={`/product/${items.id}`}>
                    <div className="card card-compact w-72 md:w-[10rem] h-56 p-3 mr-0 mb-10 md:0 md:mr-4 mt-4 bg-base-100 shadow-xl">
                      <figure className="h-full">
                        <img src={`https://alive-fashion-cow.cyclic.app/uploads/images/${items.images[0].filename}`} alt="Product" className="h-full w-36 object-cover rounded-full" />
                      </figure>
                      <div className="flex flex-col justify-center items-center">
                        <h2 className="card-title">{items.title}</h2>
                        <p>{items.price}</p>
                      </div>
                      <div>
                        {JSON.parse(localStorage.getItem("@userLogin")).user.role === 'admin' ? (<EditAndDeleteButton />) : (<p className="hidden">user</p>)}
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
                        <img src={`https://alive-fashion-cow.cyclic.app/uploads/images/${items.images[0].filename}`} alt="Product" className="h-full w-36 object-cover rounded-full" />
                      </figure>
                      <div className="flex flex-col justify-center items-center">
                        <h2 className="card-title">{items.title}</h2>
                        <p>{items.price}</p>
                      </div>
                      <div>
                        {JSON.parse(localStorage.getItem("@userLogin")).user.role === 'admin' ? (<EditAndDeleteButton />) : (<p className="hidden">user</p>)}
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
                        <img src={`https://alive-fashion-cow.cyclic.app/uploads/images/${items.images[0].filename}`} alt="Product" className="h-full w-36 object-cover rounded-full" />
                      </figure>
                      <div className="flex flex-col justify-center items-center">
                        <h2 className="card-title">{items.title}</h2>
                        <p>{items.price}</p>
                      </div>
                      <div>
                        {JSON.parse(localStorage.getItem("@userLogin")).user.role === 'admin' ? (<EditAndDeleteButton />) : (<p className="hidden"></p>)}
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
                        <img src={`https://alive-fashion-cow.cyclic.app/uploads/images/${items.images[0].filename}`} alt="Product" className="h-full w-36 object-cover rounded-full" />
                      </figure>
                      <div className="flex flex-col justify-center items-center">
                        <h2 className="card-title">{items.title}</h2>
                        <p>{items.price}</p>
                      </div>
                      <div>
                        {JSON.parse(localStorage.getItem("@userLogin")).user.role === 'admin' ? (<EditAndDeleteButton />) : (<p className="hidden">user</p>)}
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
                        <img src={`https://alive-fashion-cow.cyclic.app/uploads/images/${items.images[0].filename}`} alt="Product" className="h-full w-36 object-cover rounded-full" />
                      </figure>
                      <div className="flex flex-col justify-center items-center">
                        <h2 className="card-title">{items.title}</h2>
                        <p>{items.price}</p>
                      </div>
                      <div>
                        {JSON.parse(localStorage.getItem("@userLogin")).user.role === 'admin' ? (<EditAndDeleteButton />) : (<p className="hidden">user</p>)}
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
                        <figure><img src={`https://alive-fashion-cow.cyclic.app/uploads/images/${items.images[0].filename}`} alt="Shoes" /></figure>
                        <div className="flex flex-col justify-center items-center">
                          <h2 className="card-title">{items.title}</h2>
                          <p>{items.price}</p>
                        </div>
                      </div>
                    </Link>
                  </>
                )
              })} */}
          {/* <AdminSection /> */}
        </div>
        {JSON.parse(localStorage.getItem("@userLogin")).user.role === 'admin' ? (<EditAndAddButton />) : (<p className="hidden">user</p>)}
      </div>
    </>
  )
}
