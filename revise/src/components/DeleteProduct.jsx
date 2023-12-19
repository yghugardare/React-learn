import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useWatchContext } from "../context/WatchContext";
function DeleteProduct() {
  const [id, setid] = useState(null);
  const [flag, setFlag] = useState(false);
  
  let { watchList, removeFromWatchlist } = useWatchContext();
  
  function handleDel(){
   
    removeFromWatchlist(id);
    setFlag(flag=>!flag);
    setid("")
    alert("The product has been deleted successfully 🗑️");
  }

  return (
    <div className="grid place-items-center w-screen h-[70vh] bg-slate-800">
      <div className="absolute top-[12vh] left-10 p-1  bg-gray-300 text-black font-bold  rounded-lg">
        
        <Link to="admin/">Back</Link>
      </div>
      <form 
      onSubmit={(e)=>e.preventDefault()}
      className=" py-7 flex flex-col gap-y-11 px-7 h-[70%] rounded-md shadow-md  shadow-gray-700 bg-slate-700/50">
        <div className="flex items-center gap-x-5">
          <label htmlFor="name">Enter Watch ID: </label>
          <input
            id="name"
            className="p-3 text-black text-lg outline-none border-none rounded-xl"
            type="number"
            placeholder="Enter watch ID"
            value={id}
            onChange={(e) => setid(e.target.value)}
          />
        </div>
        <div className="flex justify-between">
          <button
            onClick={()=>setFlag(flag => !flag)}
            className=" bg-blue-600 rounded-md p-3 text-md hover:bg-blue-500"
          >
            {!flag?"Show ":"Cancel "} Product
          </button>
          <button
            onClick={handleDel}
            disabled={!flag}
            className={`${
              !flag
                ? "bg-red-900 cursor-not-allowed"
                : "bg-red-600 hover:bg-red-500"
            }  rounded-md p-3 text-md `}
          >
            Delete Product
          </button>
        </div>
        { flag?
          watchList.map(watch=>(
            watch.id == id)?
            <div className="flex items-center justify-evenly">
              <img src={watch.imageUrl} alt="" className="w-10 h-15"/>
              <p>Watch Name - {watch.name}</p>
              <p>Watch Price - ${watch.price}</p>
            </div>
            :
            null
          )
          :
          <div>No Product Selected</div>
        }
      </form>
    </div>
  );
}

export default DeleteProduct;
