import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className='h-[10vh] flex items-center justify-around'>
        <h1 className='text-2xl'>Time View</h1>
        <div className='flex items-center gap-x-10 even:cursor-pointer odd:cursor-pointer'>
            <NavLink
            to='/'
            className={({isActive})=>` ${"transition-all ease-linear hover:border-b-2 hover:border-emerald-500"} ${isActive?"bg-emerald-500 p-2":"p-2"}`}
            >Home</NavLink>
            <NavLink
            to='/shop'
            className={({isActive})=>` ${"transition-all ease-linear hover:border-b-2 hover:border-emerald-500"} ${isActive?"bg-emerald-500 p-2":" bg-transparent p-2"}`}
            >Shop</NavLink>
            <NavLink
            to='/cart'
            className={({isActive})=>` ${"transition-all ease-linear hover:border-b-2 hover:border-emerald-500"} ${isActive?"bg-emerald-500 p-2":"p-2"}`}
            >Cart</NavLink>
            <NavLink
            to='/admin'
            className={({isActive})=>` ${"transition-all ease-linear hover:border-b-2 hover:border-emerald-500"} ${isActive?"bg-emerald-500 p-2":"p-2"}`}
            >Admin</NavLink>
            <NavLink
            to='/contact'
            className={({isActive})=>` ${"transition-all ease-linear hover:border-b-2 hover:border-emerald-500"} ${isActive?"bg-emerald-500 p-2":"p-2"}`}
            >Contact</NavLink>
        </div>
    </div>
  )
}

export default Header