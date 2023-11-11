
import { useRouteError } from 'react-router-dom'

function NotFound() {
    const error = useRouteError();
    let msg = "Not Found";
    let code = 101;
    console.log(error)
  return (
    <div 
    className=" bg-red-400 tex-black text-center text-xl h-[50%] w-full">
    OOPS!
    <p
    className=' bg-red-800 text-center my-4'
    >Error Message- {error?.statusText || code}  || Error Status- {error?.status || msg} </p>
    </div>
  )
}

export default NotFound