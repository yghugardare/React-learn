import { Outlet } from "react-router-dom";
import "./App.css";
import Admin from "./components/Admin";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";

import ShowProducts from "./components/ShowProducts";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  
  return (
    <>
      <Provider store={store}>
        <Header />
        {/* <Home/> */}
        {/* <Admin/> */}
        {/* <Contact/>
         */}
        <Outlet />
        <Footer />
      </Provider>
    </>
  );
}

export default App;
