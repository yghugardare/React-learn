import React, { useContext } from 'react'
import UserContext from '../context/userContext'

function User() {
    let {user} = useContext(UserContext);
  return (
    <div className='bg-slate-900 text-white  h-[70vh] p-4'>
        <h1 className='text-2xl text-center'>User Details</h1>
        <p className='text-lg my-5 p-2 mx-auto text-center'>UserName: {`None`&&user?.userName}</p>
        <p className='text-lg my-5 p-2 mx-auto text-center'>Password: {`None`&&user?.password}</p>   
    </div>
  )
}

export default User