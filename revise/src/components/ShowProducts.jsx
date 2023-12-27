import React from 'react'
import NoProduct from './NoProduct'
import Product from './Product'
import { useSelector } from 'react-redux'

function ShowProducts() {
  const watchList = useSelector(state=>state.watchList);
  

  return (
    <div className='bg-slate-900 overflow-auto h-[70vh]'>
       <h1 className='text-2xl font-semibold text-center m-2'>Products</h1>
       {
        watchList.length === 0 ? <NoProduct/>
        :
        <div className='p-2 flex flex-wrap gap-x-14 gap-y-4 justify-center '>
            {
                
                watchList.map(watch=>(
                    <Product
                    key={watch.id}
                    name ={watch.name}
                    price={watch.price}
                    imageUrl = {watch.imageUrl}
                    id = {watch.id}
                    />
                ))
            }
        </div> 
       }
    </div>
  )
}

export default ShowProducts