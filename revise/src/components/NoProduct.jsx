import React from "react";
import { Link } from "react-router-dom";

function NoProduct() {
  return (
    <div className="flex items-center justify-evenly">
      <div className="m-2 bg-gray-600 rounded-lg">
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/sorry-item-not-found-3328225-2809510.png"
          alt="no-img"
        />
      </div>
      <div className=" grid gap-y-10">
      <h1 className=" text-5xl font-semibold">NO PRODUCT FOUND!</h1>
      <Link to='/admin/add' className=" text-center font-semibold p-2 border-yellow-500 border-2 hover:bg-yellow-500 hover:text-gray-700">Add Product</Link>
      </div>

      
    </div>
  );
}

export default NoProduct;