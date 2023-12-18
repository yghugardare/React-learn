import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useWatchContext } from "../context/WatchContext";
function DeleteProduct() {
  const [id, setid] = useState(null);
  const [flag, setFlag] = useState(true);
  const [prod,setProd] = useState({});
  let { watchList, removeFromWatchlist } = useWatchContext();
  function showProd() {
    let prod = watchList.filter((watch) => watch.id == id);
    if (prod) {
      setFlag(false);
    }
  }

  return (
    <div className="grid place-items-center w-screen h-[70vh] bg-slate-800">
      <div className="absolute top-[12vh] left-10 p-1  bg-gray-300 text-black font-bold  rounded-lg">
        {" "}
        <Link to="admin/">Back</Link>
      </div>
      <form className=" py-7 flex flex-col gap-y-11 px-7 h-[70%] rounded-md shadow-md  shadow-gray-700 bg-slate-700/50">
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
            onClick={showProd}
            className=" bg-blue-600 rounded-md p-3 text-md hover:bg-blue-500"
          >
            Show Product
          </button>
          <button
            type="submit"
            onClick={() => removeFromWatchlist(id)}
            disabled={flag}
            className={`${
              flag
                ? "bg-red-900 cursor-not-allowed"
                : "bg-red-600 hover:bg-red-500"
            }  rounded-md p-3 text-md `}
          >
            Delete Product
          </button>
        </div>
        
      </form>
    </div>
  );
}

export default DeleteProduct;
