import React, { useEffect } from "react";

function Counter({ quantity, price,id,handleChange }) {
    const [qty, setQty] = React.useState(quantity);
    const [pr, setPr] = React.useState(Number(price)*Number(quantity));
  function addValue() {
    if (qty < 10) {
      setQty(qty + 1);
      setPr(pr => pr += Number(price));
    }
  }
  function removeValue() {
    if (qty > 1) {
      setQty(qty - 1);
      setPr(pr => pr -= Number(price));
    }
  }
  useEffect(()=>{
    handleChange(id,pr);
  },[pr,qty])
  
  return (
    <>
      <div className="flex gap-x-2 items-center">
        <span
          onClick={removeValue}
          className="w-9 h-9 flex items-center justify-center bg-blue-500 rounded-md cursor-pointer hover:bg-blue-400 font-semibold text-lg"
        >
          {" "}
          -
        </span>
        <span className="w-9 h-9 flex items-center justify-center  rounded-md cursor-pointer  font-semibold text-lg">
          {qty}
        </span>

        <span
          onClick={addValue}
          className="w-9 h-9 flex items-center justify-center bg-blue-500 rounded-md cursor-pointer hover:bg-blue-400 font-semibold text-lg"
        >
          +
        </span>
      </div>
      <p className=" font-semibold text-md text-green-400">${`${pr}`}</p>
    </>
  );
}

export default Counter;
