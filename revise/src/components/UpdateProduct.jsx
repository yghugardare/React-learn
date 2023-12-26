import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useWatchContext } from '../context/WatchContext';
function UpdateProduct() {
  const [id, setid] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [imgurl, setImgurl] = useState("");
  const {updateWatchList,watchList}=useWatchContext();
  const changeProduct = (e)=>{
    e.preventDefault();
    updateWatchList({id,name,price,imageUrl :  imgurl});
    
    setImgurl("");
    setName("");
    setPrice("");
    setid("");
    alert("Product Updated ✅")
  }
  return (
    <div className="grid place-items-center w-screen h-[70vh] bg-slate-800">
        <div className='absolute top-[12vh] left-10 p-1 bg-gray-300 text-black font-bold rounded-lg'> <Link to='admin/'>Back</Link></div>
      <form 
      onSubmit={(e)=>changeProduct(e)}
      className=" py-7 flex flex-col gap-y-11 px-7 h-[90%] rounded-md shadow-md  shadow-gray-700 bg-slate-700/50">
        <div className="flex items-center gap-x-5">
          <label htmlFor="id">Watch Product ID: </label>
          <input
          id="id"
            className="p-3 text-black text-lg outline-none border-none rounded-xl"
            type="number"
            placeholder="Enter Product ID"
            required
            value={id}
            onChange={(e)=>setid(Number(e.target.value))}
          />
        </div>
        <div className="flex items-center gap-x-5">
          <label htmlFor="name">New Watch Name: </label>
          <input
          id="name"
            className="p-3 text-black text-lg outline-none border-none rounded-xl"
            type="text"
            placeholder="Change Watch Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required


          />
        </div>
        <div className="flex items-center gap-x-5">
          <label htmlFor="img">New Image URL: </label>
          <input
            id="img"
            className="p-3 text-black text-lg outline-none border-none rounded-xl"
            type="text"
            placeholder="Update image url"
            value={imgurl}
            onChange={(e) => setImgurl(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center gap-x-5">
          <label htmlFor="price">New Watch Price: </label>
          <input
            className="p-3 text-black text-lg outline-none border-none rounded-xl"
            type="number"
            placeholder="Change watch price"
            value={price}
            onChange={(e)=>setPrice(e.target.value)}
            required
          />
        </div>
        <button className=" bg-green-600 rounded-md p-3 text-md hover:bg-green-500">Update Product</button>
      </form>
    </div>
  )
}

export default UpdateProduct