import React, { useCallback, useState } from "react";

import InputBox from "./InputBox";
import useCurrency from "../Hooks/useCurrency";

function CurrencyCovertor() {
  const [amount, setAmount] = useState(0);
  const [to, setTo] = useState("usd");
  const [from, setFrom] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = useCurrency(from);
  const currencyArray = Object.keys(currencyInfo);
  function convert() {
    setConvertedAmount(amount * currencyInfo[to]);
  }
  const swap=()=> {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }
    
  return (
    <div className="bg-white/25  mx-auto p-5 rounded-lg">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          convert();
        }}
      >
        <InputBox
          price={amount}
          selectCurrency={from}
          isAmountDisabled={false}
          currencyOptions={currencyArray}
          label={from}
          onAmountChange={(amount) => setAmount(amount)}
          onCurrencyChange={(from) => setFrom(from)}
        />
        <button
          className="rounded-md p-2 bg-sky-500 hover:bg-blue-700 my-2 w-full"
          onClick={swap}
        >
          Swap
        </button>
        <InputBox
          price={convertedAmount}
          selectCurrency={to}
          isAmountDisabled={true}  
          currencyOptions={currencyArray}
          label={to}
          onCurrencyChange={(to) => setTo(to)}
          
        />
        <button className="w-full p-2 bg-blue-700 rounded-md my-2 hover:bg-sky-500">
          Convert {from.toUpperCase()} to {to.toUpperCase()}
        </button>
      </form>
    </div>
  );
}

export default CurrencyCovertor;
