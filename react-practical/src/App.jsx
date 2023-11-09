import { useState } from "react";
import "./App.css";
import ShowProducts from "./Components/ShowProducts";
import BgButton from "./Components/BgButton";
function App() {
  const [bgColor,setBgColor] = useState('black');

  return (
    <div className="w-full min-h-[100vh]" style={{backgroundColor:bgColor}}>
      <h1 className="text-center text-[3rem]">Store</h1>
      <ShowProducts/>
      <BgButton setBgColor={setBgColor}/>
    </div>
  );
}

export default App;
