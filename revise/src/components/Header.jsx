import React from 'react'

function Header() {
  return (
    <div className='h-[10vh] flex items-center justify-around'>
        <h1 className='text-2xl'>Time View</h1>
        <div className='flex items-center gap-x-10 even:cursor-pointer odd:cursor-pointer'>
            <p className=' transition-all ease-linear hover:border-b-2 hover:border-emerald-500' >Home</p>
            <p className=' transition-all ease-linear hover:border-b-2 hover:border-emerald-500' >Shop</p>
            <p className=' transition-all ease-linear hover:border-b-2 hover:border-emerald-500' >Admin</p>
            <p className=' transition-all ease-linear hover:border-b-2 hover:border-emerald-500' >Cart</p>
            <p className=' transition-all ease-linear hover:border-b-2 hover:border-emerald-500'>Contact</p>
        </div>
    </div>
  )
}

export default Header