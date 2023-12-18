import React from "react";
import { Link,Outlet } from "react-router-dom";

function Admin() {
  return (
    
    <div className="grid grid-cols-3 place-items-center w-screen h-[70vh] bg-slate-800">
      {/* <div className="max-w-md grid p-2 rounded-md shadow-md  shadow-gray-700 bg-slate-700/50">
        <Outlet />
      </div> */}

      <div className="max-w-md grid p-2 rounded-md shadow-md  shadow-gray-700 bg-slate-700/50">
        <img className="p-4 rounded-3xl" src="https://img.freepik.com/free-vector/flat-design-reseller-illustration_23-2149498647.jpg" alt="sell" />
        <Link to="add">
        <button className="w-full font-bold bg-orange-500 p-1 rounded-lg">Add To Sell!</button>
        </Link>
      </div>
      <div className="max-w-md rounded-md shadow-md  shadow-gray-700 bg-slate-700/50 grid p-2">
        <img className="p-4 rounded-3xl" src="https://img.freepik.com/free-vector/flat-design-reseller-illustration_23-2149498647.jpg" alt="sell" />
        <Link to="delete">
        <button className="w-full font-bold bg-orange-500 p-1 rounded-lg">Remove from  Sell!</button>
        </Link>
      </div>
      <div className="max-w-md grid p-2 rounded-md shadow-md  shadow-gray-700 bg-slate-700/50">
        <img className="p-4 rounded-3xl" src="https://img.freepik.com/free-vector/flat-design-reseller-illustration_23-2149498647.jpg" alt="sell" />
        <Link  to="update">
        <button className="w-full font-bold bg-orange-500 p-1 rounded-lg">Update Item!</button>
        </Link>
      </div>
    </div>
  );
}

export default Admin;
