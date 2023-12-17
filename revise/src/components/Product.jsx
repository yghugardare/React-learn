import React, { useState } from "react";

function Product({name ="Rolex",price=10}) {
    const [qty,setQty] = useState(1);
    function addValue(){
      if(qty < 10){
        setQty(qty+1);
        
      }
    }
    function removeValue(){
      if(qty>1){
        setQty(qty-1);
      }
    }
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
            <button 
            onClick={removeValue}
            className="bg-sky-500 px-2 font-bold rounded-md outline-none">-</button>
            <span>Qty: {qty}</span>
            <button
            onClick={addValue}
            className=" bg-sky-500  px-2 font-bold rounded-md outline-none">+</button>
        </div>
        <button className="bg-blue-600 rounded-sm my-2">Add to cart</button>
      </div>
    </div>
  );
}

export default Product;
