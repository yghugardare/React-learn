import React, { useState } from "react";
import SlideShow from "./SlideShow";
import { Link } from "react-router-dom";

const slides = [
    {
      id: 1,
      src: "https://media.istockphoto.com/id/184980206/photo/wristwatch.jpg?s=612x612&w=0&k=20&c=pNHLImTLMY2bBcclaZ8LuSp9cXVmPS11JwchYzd0rnY=",
    },
    {
      id: 2,
      src:"https://images.lifestyleasia.com/wp-content/uploads/2019/10/03152745/astron_brand_index_12042256226758.jpg",
    },
    {
      id: 3,
      src: "https://media.istockphoto.com/id/458727719/photo/rolex-deepsea-wristwatch.jpg?s=612x612&w=0&k=20&c=9hv7ESwsaurJuqlMU0vnVzIVtq8CXNGe0j_Hs3ldb4Y=",
    },
    {
      id: 4,
      src: "https://www.limecreative.com/wp-content/uploads/2023/06/HO2022_0039_RGB-scaled-1.jpg",
    },
    {
      id: 5,
      src: "https://nextluxury.com/wp-content/uploads/Best-Mens-Luxury-Watches-Brands-Guide.jpg",
    },
  ];


function Home() {
  
  return (
    <div className="h-[70vh] w-full flex justify-around bg-slate-800">
      <div className="w-[45%] h-full flex flex-col justify-center items-center ml-7 gap-y-4">
        <h1 className="text-[75px] leading-tight">
          Discover Luxury with TimeView
        </h1>
        <p className="text-[18px]">
          Welcome to TimeView, the ultimate destination for luxury watches.
          Experience exclusive designs and impeccable craftsmanship, all in one
          place.{" "}
        </p>
        <Link 
        to='/shop'
        className="rounded-xl outline-none p-3 bg-purple-600 self-start hover:bg-purple-500">
          Shop Now
        </Link>
      </div>
      <div className="w-[50%] h-full bg-black">
        <SlideShow slides={slides} autoSlide={true} slideDuration={4000} />
      </div>
      </div>
    
    
  );
}

export default Home;
