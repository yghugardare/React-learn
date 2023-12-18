import React from 'react'

function Contact() {
  return (
    <div className="grid place-items-center w-screen h-[70vh] bg-slate-800">
    <form className=" py-7 flex flex-col gap-y-11 px-7 min-h-[70%] rounded-md shadow-md  shadow-gray-700 bg-slate-700/50">
      <div className="flex items-center gap-x-5">
        <label htmlFor="name">Full Name: </label>
        <input
        id="name"
          className="p-3 text-black text-lg outline-none border-none rounded-xl"
          type="text"
          placeholder="Enter your name"
        />
      </div>
      <div className="flex items-center gap-x-5">
        <label htmlFor="img">Email : </label>
        <input
          id="img"
          className="p-3 text-black text-lg outline-none border-none rounded-xl"
          type="email"
          placeholder="Enter your email"
        />
      </div>
      <div className="flex items-center gap-x-5">
        <label htmlFor="query">Query: </label>
        <textarea className='text-black text-lg p-2' id="query" cols="30" rows="3" placeholder='Enter you queries'></textarea>
      </div>
      <button className=" bg-blue-600 rounded-md p-3 text-md">Submit Contact Form</button>
    </form>
  </div>
  )
}

export default Contact