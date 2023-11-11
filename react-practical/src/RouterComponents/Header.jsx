import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  let style =
    "p-2  rounded-lg hover:text-black duration-500 hover:bg-orange-400 ";
  return (
    <div className="bg-slate-700 text-white p-5 text-center text-xl w-full grid h-[20%]">
      Header
      <nav className="flex items-center justify-evenly">
        <Link
          to="/"
          className="text-2xl p-3 duration-1000 outline-none border-none rounded-md bg-black hover:bg-red-400 hover:text-black "
        >
          Logo
        </Link>
        <div className="flex gap-10">
          <NavLink
            to=""
            className={({ isActive }) =>
              `${style} ${isActive ? " bg-indigo-800" : "bg-orange-600"}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="about"
            className={({ isActive }) =>
              `${style} ${isActive ? " bg-indigo-800" : "bg-orange-600"}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="users/"
            className={({ isActive }) =>
              `${style} ${isActive ? " bg-indigo-800" : "bg-orange-600"}`
            }
          >
            Users
          </NavLink>
          <NavLink
            to="contact"
            className={({ isActive }) =>
              `${style} ${isActive ? " bg-indigo-800" : "bg-orange-600"}`
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="github"
            className={({ isActive }) =>
              `${style} ${isActive ? " bg-indigo-800" : "bg-orange-600"}`
            }
          >
            Github
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Header;
