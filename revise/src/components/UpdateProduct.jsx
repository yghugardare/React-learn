import React from 'react'
import { Link } from 'react-router-dom'
function UpdateProduct() {
  return (
    <div className="grid place-items-center w-screen h-[70vh] bg-slate-800">
        <div className='absolute top-[12vh] left-10 p-1 bg-gray-300 text-black font-bold rounded-lg'> <Link to='admin/'>Back</Link></div>
      <form className=" py-7 flex flex-col gap-y-11 px-7 h-[90%] rounded-md shadow-md  shadow-gray-700 bg-slate-700/50">
        <div className="flex items-center gap-x-5">
          <label htmlFor="name">Watch Product ID: </label>
          <input
          id="name"
            className="p-3 text-black text-lg outline-none border-none rounded-xl"
            type="text"
            placeholder="Enter Product ID"
            required
          />
        </div>
        <div className="flex items-center gap-x-5">
          <label htmlFor="name">New Watch Name: </label>
          <input
          id="name"
            className="p-3 text-black text-lg outline-none border-none rounded-xl"
            type="text"
            placeholder="Change Watch Name"
          />
        </div>
        <div className="flex items-center gap-x-5">
          <label htmlFor="img">New Image URL: </label>
          <input
            id="img"
            className="p-3 text-black text-lg outline-none border-none rounded-xl"
            type="text"
            placeholder="Update image url"
          />
        </div>
        <div className="flex items-center gap-x-5">
          <label htmlFor="price">New Watch Price: </label>
          <input
            className="p-3 text-black text-lg outline-none border-none rounded-xl"
            type="number"
            placeholder="Change watch price"
          />
        </div>
        <button className=" bg-green-600 rounded-md p-3 text-md hover:bg-green-500">Update Product</button>
      </form>
    </div>
  )
}

export default UpdateProduct