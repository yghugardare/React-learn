import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    let data = useLoaderData();
    // const [data,setData] = useState({});
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/yghugardare')
    // .then(res => res.json())
    // .then(data => setData(data))
    // },[])
  return (
    <div className=" bg-purple-900  p-2 text-xl h-[50%] w-full grid place-content-center">
      <img src={data?.avatar_url}
      className='w-[250px] rounded-lg mx-auto'
      alt="" />
      <h1 className=' text-2xl my-2'>{data.name} - <span className='text-bold'>{data?.bio}</span></h1>
      <p>Followers {data.followers}</p>
    </div>
  )
}

export default Github

export const gitHubInfo = async()=>{
    let response  = await fetch(`https://api.github.com/users/yghugardare`);
    return response.json();
}