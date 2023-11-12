import { useEffect, useState } from "react";
import "./App.css";
import {
  BgButton,
  CurrencyCovertor,
  InputBox,
  ShopingCart,
} from "./Components/component";
import UserContextProvider from "./context/UserContextProvider";
import Login from "./Components/Login";
import User from "./Components/User";
import ThemeBtn from "./Components/ThemeBtn";
import { ThemeContextProvider } from "./context/theme";
// <div className="w-full min-h-[100vh] flex flex-col gap-5" style={{backgroundColor:bgColor}}>
//   {/* <h1 className="text-center text-[3rem]">Store</h1> */}
//   {/* <ShowProducts/> */}
//   <BgButton setBgColor={setBgColor}/>
//   {/* <PasswordGenerator/> */}
//   <CurrencyCovertor/>
// </div>
function App() {
  // const [bgColor,setBgColor] = useState('black');
  const [themeMode, setThemeMode] = useState("light");
  function lightTheme() { 
    setThemeMode("light");
  }
  function darkTheme() {
    setThemeMode("dark");
  }
  useEffect(()=>{
    document.querySelector('html').classList.remove('light','dark');
    if(themeMode === 'light'){
      document.querySelector('html').classList.add('light');
    }else{
      document.querySelector('html').classList.add('dark');
    
    }
  },[themeMode])

  return (
    <ThemeContextProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="w-full h-screen bg-sky-600 p-4 mx-auto dark:bg-slate-700">
        <ThemeBtn className="left-[50%] my-2" />
        <ShopingCart
          price={599}
          productName="Nike Air Jordan"
          actualPrice={699}
          discount={12}
          className="mx-auto dark:bg-black dark:text-white"
        />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
