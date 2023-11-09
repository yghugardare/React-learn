import React from "react";

function BgButton({ setBgColor }) {
  const colors = [
    { id: 1, color: "red" },
    { id: 2, color: "olive" },
    { id: 3, color: "grey" },
    { id: 4, color: "indigo" },
    { id: 5, color: "orange" },
  ];
  function hoverColor() {}
  return (
    <div className="grid lg:grid-cols-5 grid-cols-2 gap-x-2 gap-y-3 place-items-center lg:mx-auto lg:rounded-xl  lg:h-[60px]  bg-slate-300">
      {colors.map((clr) => (
        <button
          onClick={() => setBgColor(`${clr.color}`)}
          key={clr.id}
          style={{ backgroundColor: clr.color }}
          className={`rounded-lg w-[100px] h-[40px]`}
        >
          {clr.color}
        </button>
      ))}
    </div>
  );
}

export default BgButton;
