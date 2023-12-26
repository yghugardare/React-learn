import { Outlet } from "react-router-dom";
import "./App.css";
import Admin from "./components/Admin";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";

import ShowProducts from "./components/ShowProducts";
import { WatchContextProvider } from "./context/WatchContext";
import { useState } from "react";

function App() {
  const [watchList, setWatchList] = useState([]);
  const [cartList, setCartList] = useState([]);
  
  function addToCart(watchObj, quantity) {
    quantity;
    setCartList((prevList) => [
      { quantity: quantity, ...watchObj },
      ...prevList,
    ]);
  }

  function addToWatchlist(watchObj) {
    setWatchList((prevList) => [{ id: Date.now(), ...watchObj }, ...prevList]);
  }
  function updateWatchList(watchObj) {
    const selectedWatcObj = watchList.filter(
      (watch) => watch.id == watchObj.id
    );

    let index = null;
    if (selectedWatcObj.length > 0) {
      index = watchList.indexOf(selectedWatcObj[0]);
    } else {
      index = -1;
    }
    console.log("In function- ", index);
    if (index !== -1) {
      watchList.splice(index, 1, watchObj);
      setWatchList(
        // replace value
        watchList
      );
    } else {
      setWatchList(watchList);
    }
  }
  function removeFromWatchlist(id) {
    setWatchList(watchList.filter((watchObj) => watchObj.id != id));
  }
  function removeFromCart(id){
    setCartList(cartList.filter((cartObj)=> cartObj.id !==id))
  }
  return (
    <>
      <Header />
      <WatchContextProvider
        value={{
          watchList,
          addToWatchlist,
          updateWatchList,
          removeFromWatchlist,
          cartList,
          addToCart,
          removeFromCart,
        }}
      >
        <Outlet />
      </WatchContextProvider>

      <Footer />
    </>
  );
}

export default App;
