import React from "react";

function Product({name ="Rolex",price=10}) {
    let num = 1;
  return (
    <div>
      <div className="w-[150px] border-2 border-white bg-black grid py-2 px-1">
        <img
          src="https://images.lifestyleasia.com/wp-content/uploads/sites/7/2020/08/06134710/Rolex-JPS-HERO-1600x873-1.jpg?tr=w-1200,h-900"
          alt="rolex"
        />
        <h2 className="text-lg mx-auto">{name}</h2>
        <p className="text-center">${price}</p>
        <div className="flex justify-around">
            <button className="bg-sky-500 px-2 font-bold rounded-md outline-none">-</button>
            <span>Qty: {num}</span>
            <button className=" bg-sky-500  px-2 font-bold rounded-md outline-none">+</button>
        </div>
        <button className="bg-blue-600 rounded-sm my-2">Add to cart</button>
      </div>
    </div>
  );
}

export default Product;
