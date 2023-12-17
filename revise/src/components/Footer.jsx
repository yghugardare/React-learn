import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutubeSquare } from "react-icons/fa";
function Footer() {
  return (
    <div className="my-1 h-20vh flex flex-col gap-y-2">
      <div className="flex items-center justify-center gap-x-10 even:cursor-pointer odd:cursor-pointer ">
        <FaInstagramSquare size={30} />
        <FaFacebook size={30} />
        <FaSquareXTwitter size={30} />
        <FaYoutubeSquare size={30} />
      </div>
      <div className="flex items-center justify-center gap-x-12 even:cursor-pointer odd:cursor-pointer ">
        <p className=" transition-all ease-linear hover:border-b-2 hover:border-emerald-500">
          Home
        </p>
        <p className=" transition-all ease-linear hover:border-b-2 hover:border-emerald-500">
          Shop
        </p>
        <p className=" transition-all ease-linear hover:border-b-2 hover:border-emerald-500">
          Admin
        </p>
        <p className=" transition-all ease-linear hover:border-b-2 hover:border-emerald-500">
          Cart
        </p>
        <p className=" transition-all ease-linear hover:border-b-2 hover:border-emerald-500">
          Contact
        </p>
      </div>
      <p className="text-center font-bold">Copyright &copy; 2023 Designed by <span className=" font-normal text-gray-300">Yash</span></p>
    </div>
  );
}

export default Footer;
