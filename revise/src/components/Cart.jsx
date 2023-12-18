import React from "react";

function Cart() {
  const [qty, setQty] = React.useState(1);
  return (
    <div className="h-[70vh] w-full">
      <h1 className="text-center text-2xl p-2">My Shopping Cart 🛒</h1>
      <div className="flex h-[90%] justify-between">
        <div className="grid w-[60%] place-items-center bg-slate-800 px-6 rounded-lg  overflow-auto">
          <div className="flex items-center w-full justify-around rounded-xl bg-slate-600/40 p-3 my-1">
            <img
            className="w-20 rounded-lg"
            src="https://rukminim1.flixcart.com/image/850/1000/xif0q/watch/p/e/q/-original-imagrdzfjy92rbgg.jpeg?q=90" />
            <h1 className="text-lg font-semibold ">Titan Watch</h1>
            <div className="flex gap-x-2 items-center">
              <span className="w-9 h-9 flex items-center justify-center bg-blue-500 rounded-md cursor-pointer hover:bg-blue-400 font-semibold text-lg"> -</span>
              <span className="w-9 h-9 flex items-center justify-center  rounded-md cursor-pointer  font-semibold text-lg">{qty}</span>
              
              <span className="w-9 h-9 flex items-center justify-center bg-blue-500 rounded-md cursor-pointer hover:bg-blue-400 font-semibold text-lg">+</span>
            </div>
          </div>
        </div>
        {/* Subtotal */}
        <div className="flex bg-slate-800 mx-4 rounded-lg flex-col justify-start gap-y-10 p-6 w-[35%]">
            <div className="flex justify-between">
              <p className="text-white/90">Subtotal</p>
              <p>$1500</p>
            </div>
            <div className="flex justify-between">
              <p className="text-white/90">Shipping</p>
              <p>$10</p>
            </div>
            <hr />
            <div className="flex justify-between">
            <p className="text-white/90 text-xl font-semibold">Total</p>
              <div><p className="text-white/90 text-end text-xl font-semibold">$1600</p><p className=" text-white/70">Including VAT</p></div>
            </div>
            <button className="bg-blue-600 hover:bg-blue-500 p-2 text-center rounded-lg">Check out</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
