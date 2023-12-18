import { Outlet } from "react-router-dom";
import "./App.css";
import Admin from "./components/Admin";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";

import ShowProducts from "./components/ShowProducts";

function App() {
  return (
    <>
    <Header/>
    {/* <Home/> */}
    {/* <Admin/> */}
    {/* <Contact/>
     */}
     <Outlet/>
    <Footer/>
    </>
  );
}

export default App;
