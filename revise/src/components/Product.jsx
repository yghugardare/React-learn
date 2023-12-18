import React, { useState } from "react";
import { FaRegCopy } from "react-icons/fa";
function Product({name ="Rolex",price=10,imageUrl,id}) {
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
    function handleCopy(){
      window.navigator.clipboard.writeText(id);
      alert(id)
    }
  return (
    <div>
      <div className="relative w-[250px] border-2 border-white bg-black/70 grid  py-2 px-1">
        <div onClick={handleCopy} className=" absolute top-3 left-1 cursor-pointer"><FaRegCopy size={15}/></div>
        <img
        className="mx-auto object-cover w-[200px] h-[250px] "
          src={String(imageUrl)}
          alt="watch"
        />
        <h2 className="text-lg mx-auto">{name}</h2>
        <p className="text-center">${price}</p>
        <div className="flex justify-around">
            <button 
            onClick={removeValue}
            className="bg-sky-500 w-7 h-7 px-2 font-bold rounded-md outline-none">-</button>
            <span>Qty: {qty}</span>
            <button
            onClick={addValue}
            className=" bg-sky-500 w-7 h-7 px-2 font-bold rounded-md outline-none">+</button>
        </div>
        <button className="bg-blue-600 hover:bg-blue-500 rounded-sm my-2 p-2 mx-2">Add to cart</button>
      </div>

    </div>
  );
}

export default Product;
