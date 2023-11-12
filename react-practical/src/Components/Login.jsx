import React, { useContext, useState } from "react";
import UserContext from "../context/userContext";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  let { setUser } = useContext(UserContext);
  function handleSubmit(e) {
    e.preventDefault();

    if (userName === "" || password === "") {
      alert("Please fill all fields");
    } else {
      setUser({ userName, password });
    }
  }

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="bg-slate-700 text-white grid gap-5 place-content-center p-4"
    >
      <h1 className="text-center text-xl">Login</h1>
      <div>
        <label htmlFor="user">Enter Username: </label>
        <input
          onChange={(e) => setUserName(e.target.value)}
          id="user"
          type="text"
          className="p-2 bg-slate-300 text-black"
          placeholder="enter user name"
          value={userName}
        />
      </div>
      <div>
        <label htmlFor="Pass">Enter Password: </label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          id="Pass"
          type="pasword"
          className="p-2 bg-slate-300 text-black"
          placeholder="enter Password"
        />
      </div>
      <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2">
        Submit
      </button>
    </form>
  );
}

export default Login;
