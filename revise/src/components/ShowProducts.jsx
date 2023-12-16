import React from 'react'
import watchData from '../assets/data'
import Product from './Product'
function ShowProducts() {
  return (
    <div className='bg-slate-600 overflow-auto max-h-[75vh]'>
       <h1 className='text-3xl font-bold m-2'>Products</h1>
       <div className='p-2 flex flex-wrap justify-evenly gap-x-40 gap-y-5 '>
            {
                watchData.map(watch=>(
                    <Product
                    key={watch.id}
                    name ={watch.name}
                    price={watch.price}
                    />
                ))
            }
        </div> 
    </div>
  )
}

export default ShowProducts