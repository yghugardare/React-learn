import React, { useCallback, useEffect, useState } from "react";
import { useWatchContext } from "../context/WatchContext";
import Counter from "./Counter";

function Cart() {
  const { cartList, removeFromCart } = useWatchContext();
  const [subtotal, setSubtotal] = useState(0);
  const [obj, setobj] = useState({});
  const [total, setTotal] = useState(0)
  function handleChange(id, pr) {
    setobj((prevObj) => ({ ...prevObj, [id]: pr }));
  }
  function changeSubtotal(){
    let sum = 0;
    for(let key in obj){
      sum += obj[key];
    }
    setSubtotal(sum)
  }
  function removeKey(id){
    const newObj = {...obj};
    delete newObj[id];
    setobj(newObj);
  
  }
  useEffect(()=>{
    changeSubtotal()
    setTotal(subtotal+10)
  },[obj])
  return (
    <div className="h-[70vh] w-full">
      <h1 className="text-center text-2xl p-2">My Shopping Cart 🛒</h1>
      <div className="flex h-[90%] justify-between">
        <div className="grid w-[60%] place-items-center bg-slate-800 px-6 rounded-lg  overflow-auto">
          {cartList.length === 0 ? (
            <div className="text-3xl ">No item present in the cart ‼️</div>
          ) : (
            cartList.map((cartObj) => (
              <div
                key={cartObj.id}
                className="flex items-center w-full justify-around rounded-xl bg-slate-600/40 p-3 my-1"
              >
                <img
                  className="w-20 rounded-lg"
                  src={String(cartObj.imageUrl)}
                  alt="cart Image"
                />
                <h1 className="text-lg font-semibold ">{cartObj.name}</h1>
                <Counter
                  quantity={cartObj.quantity}
                  price={cartObj.price}
                  id={cartObj.id}
                  handleChange={handleChange}
                />

                <button
                  onClick={() => {removeKey(cartObj.id);removeFromCart(cartObj.id)}}
                  className=" p-1 bg-red-600 font-semibold px-2 rounded-lg"
                >
                  X
                </button>
              </div>
            ))
          )}
        </div>
        {/* Subtotal */}
        <div className="flex bg-slate-800 mx-4 rounded-lg flex-col justify-start gap-y-10 p-6 w-[35%]">
          <div className="flex justify-between">
            <p className="text-white/90">Subtotal</p>
            <p>${subtotal}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-white/90">Shipping</p>
            <p>$10</p>
          </div>
          <hr />
          <div className="flex justify-between">
            <p className="text-white/90 text-xl font-semibold">Total</p>
            <div>
              <p className="text-white/90 text-end text-xl font-semibold">
                ${total}
              </p>
              <p className=" text-white/70">Including VAT</p>
            </div>
          </div>
          <button className="bg-blue-600 hover:bg-blue-500 p-2 text-center rounded-lg">
            Check out
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
