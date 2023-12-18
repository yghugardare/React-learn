import React from 'react'

function NoProduct() {
  return (
    <div
    className='flex items-center justify-evenly'
    >
        <div className='m-2 bg-gray-600 rounded-lg'><img src="https://cdni.iconscout.com/illustration/premium/thumb/sorry-item-not-found-3328225-2809510.png" alt="no-img" /></div>
        <h1 className=' text-5xl font-semibold'>NO PRODUCT FOUND!</h1>
    </div>
  )
}

export default NoProduct