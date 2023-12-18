import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutubeSquare } from "react-icons/fa";

function Footer() {
  return (
    <div className="my-5 h-20vh flex flex-col gap-y-2">
      <div className="flex items-center justify-center gap-x-10 even:cursor-pointer odd:cursor-pointer ">
        <FaInstagramSquare size={30} />
        <FaFacebook size={30} />
        <FaSquareXTwitter size={30} />
        <FaYoutubeSquare size={30} />
      </div>
      <div className="flex items-center justify-center gap-x-12 even:cursor-pointer odd:cursor-pointer ">
        <NavLink
          to="/"
          className={({ isActive }) =>
            ` ${"transition-all ease-linear border-b-2 hover:border-emerald-500"} ${
              isActive ? "border-emerald-500 " : "border-transparent"
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/shop"
          className={({ isActive }) =>
            ` ${"transition-all ease-linear border-b-2 hover:border-emerald-500"} ${
              isActive ? "border-emerald-500 " : " bg-transparent border-transparent"
            }`
          }
        >
          Shop
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            ` ${"transition-all ease-linear border-b-2 hover:border-emerald-500"} ${
              isActive ? "border-emerald-500 " : "border-transparent"
            }`
          }
        >
          Cart
        </NavLink>
        <NavLink
          to="/admin"
          className={({ isActive }) =>
            ` ${"transition-all ease-linear border-b-2 hover:border-emerald-500"} ${
              isActive ? "border-emerald-500 " : "border-transparent"
            }`
          }
        >
          Admin
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            ` ${"transition-all ease-linear border-b-2 hover:border-emerald-500"} ${
              isActive ? "border-emerald-500 " : "border-transparent"
            }`
          }
        >
          Contact
        </NavLink>
      </div>
      <p className="text-center font-bold">
        Copyright &copy; 2023 Designed by{" "}
        <span className=" font-normal text-gray-300">Yash</span>
      </p>
    </div>
  );
}

export default Footer;
