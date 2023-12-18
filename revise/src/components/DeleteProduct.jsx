import React from 'react'
import { Link } from 'react-router-dom'
function DeleteProduct() {
  return (
    <div className="grid place-items-center w-screen h-[70vh] bg-slate-800">
        <div className='absolute top-[12vh] left-10 p-1  bg-gray-300 text-black font-bold  rounded-lg'> <Link to='admin/'>Back</Link></div>
      <form className=" py-7 flex flex-col gap-y-11 px-7 h-[70%] rounded-md shadow-md  shadow-gray-700 bg-slate-700/50">
        <div className="flex items-center gap-x-5">
          <label htmlFor="name">Enter Watch ID: </label>
          <input
          id="name"
            className="p-3 text-black text-lg outline-none border-none rounded-xl"
            type="text"
            placeholder="Enter watch ID"
          />
        </div>
        <div className='flex justify-between'>
            <button className=" bg-blue-600 rounded-md p-3 text-md hover:bg-blue-500">Show Product</button>
            <button className=" bg-red-600 rounded-md p-3 text-md hover:bg-red-500">Delete Product</button>
        </div>
       
      </form>
    </div>
  )
}

export default DeleteProduct