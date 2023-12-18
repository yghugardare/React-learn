import React from 'react'
import watchData from '../assets/data'
import Product from './Product'
function ShowProducts() {
  return (
    <div className='bg-slate-900 overflow-auto h-[70vh]'>
       <h1 className='text-2xl font-semibold text-center m-2'>Products</h1>
       <div className='p-2 flex flex-wrap gap-x-14 justify-center '>
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