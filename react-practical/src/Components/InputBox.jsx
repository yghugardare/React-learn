import React from "react";

function InputBox({
  label,
  selectCurrency = "usd",
  price = 0,
  onAmountChange,
  onCurrencyChange,
  isAmountDisabled = false,
  currencyOptions = [],
}) {
  return (
    <div className="flex items-center gap-x-10">
      <div className="grid">
        <label htmlFor="priceInput">{label}</label>
        <input
          value={price}
          className="text-black p-2 outline-none cursor-pointer rounded-md bg-white"
          type="text"
          id="priceInput"
          disabled={isAmountDisabled}
          onChange={(e)=>onAmountChange&&onAmountChange(Number(e.target.value))}

        />
      </div>
      <div>
        <p>Currency Type</p>
        <select
          onChange={(e)=>onCurrencyChange&&onCurrencyChange(e.target.value)}
          value={selectCurrency}

          className="p-2 outline-none text-black rounded-lg bg-gray-100/75 cursor-pointer"
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
