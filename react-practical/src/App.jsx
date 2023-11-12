import { useState } from "react";
import "./App.css";
import {BgButton,CurrencyCovertor,InputBox} from "./Components/component"
import UserContextProvider from "./context/UserContextProvider";
import Login from "./Components/Login";
import User from "./Components/User";
// <div className="w-full min-h-[100vh] flex flex-col gap-5" style={{backgroundColor:bgColor}}>
    //   {/* <h1 className="text-center text-[3rem]">Store</h1> */}
    //   {/* <ShowProducts/> */}
    //   <BgButton setBgColor={setBgColor}/>
    //   {/* <PasswordGenerator/> */}
    //   <CurrencyCovertor/>
    // </div>
function App() {
  // const [bgColor,setBgColor] = useState('black');

  return (
    <UserContextProvider >
      <Login/>
      <User/>
    </UserContextProvider>
  );
}

export default App;
