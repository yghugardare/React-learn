import React from "react";
import { Link, useParams } from "react-router-dom";
import { gitHubInfo } from "./Github";

function User() {
  let { userId } = useParams();
  return (
    <div className="bg-indigo-600 text-center text-xl h-[50%] w-full ">
      {userId ? userId : "Just"} User
      {userId ? (
        <Link className="mx-auto p-2 bg-slate-700 hover:bg-slate-500 cursor-pointer w-36 my-2 block">
          Go to Users
        </Link>
      ) : (
        <div>
          <Link
            
            to="Hitesh"
            className="mx-auto p-2 bg-slate-700 hover:bg-slate-500 cursor-pointer w-36 my-2 block"
          >
            Hitesh
          </Link>
          <Link
            to="yash"
            
            className="mx-auto p-2 bg-slate-700 hover:bg-slate-500 cursor-pointer w-36 my-2 block"
          >
            Yash
          </Link>
          <Link
            to="Sarthak"
            
            className="mx-auto p-2 bg-slate-700 hover:bg-slate-500 cursor-pointer w-36 my-2 block"
          >
            Sarthak
          </Link>
        </div>
      )}
    </div>
  );
}

export default User;
