import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
} from "react-router-dom";
import Home from "./components/Home.jsx";
import ShowProducts from "./components/ShowProducts.jsx";
import Cart from "./components/Cart.jsx";
import Admin from "./components/Admin.jsx";
import Contact from "./components/Contact.jsx";
import AddProduct from "./components/AddProduct.jsx";
import DeleteProduct from "./components/DeleteProduct.jsx";
import UpdateProduct from "./components/UpdateProduct.jsx";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="shop" element={<ShowProducts />} />
      <Route path="cart" element={<Cart />} />
      <Route path="admin/*" element={<Admin />} />
      <Route path="admin/add" element={<AddProduct />} />
      <Route path="admin/delete" element={<DeleteProduct />} />
      <Route path="admin/update" element={<UpdateProduct />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
