import { useEffect, useState } from "react";
async function fetchCurrencyInfo(currency) {
  const response = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`);
  const data = await response.json();
  return data[currency];
}
export default function useCurrency(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchCurrencyInfo(currency);
        setData(result);
      } catch (error) {
        console.error('Error fetching currency info:', error);
      }
    };

    fetchData();
  }, [currency]);

  console.log(data);
  return data;
}
