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
  function addToWatchlist(watchObj) {
    setWatchList((prevWatchObjs) => [
      { id: Date.now(), ...watchObj },
      ...prevWatchObjs,
    ]);
  }
  function updateWatchList(id, watchObj) {
    const selectedWatcObj = watchList.filter((watch) => watch.id === id);

    let index = null;
    selectedWatcObj
      ? (index = watchList.indexOf(selectedWatcObj))
      : (index = -1);
    if (index !== -1) {
      setWatchList(
        // replace value
        (watchList) => watchList.splice(index, 1, watchObj)
      );
    } else {
      setWatchList(watchList);
    }
  }
  function removeFromWatchlist(id) {
    setWatchList(watchList.filter((watchObj) => watchObj.id !== id));
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
        }}
      >
        <Outlet />
      </WatchContextProvider>

      <Footer />
    </>
  );
}

export default App;
