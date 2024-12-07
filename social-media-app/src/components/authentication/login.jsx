import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./firebase";
// import SignInwithGoogle from "./signInWIthGoogle";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in Successfully");
      window.location.href = "/home";
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center ">
      <form
        onSubmit={handleSubmit}
        className="border-2 w-80 flex flex-col m-20 align-middle justify-center rounded-[10px] p-5 shadow-lg shadow-[#88c2bb]"
      >
        <h3 className="text-2xl text-center font-semibold">Login</h3>

        <div className="mb-3 p-2">
          <label>Email address</label>
          <input
            type="email"
            className="form-control border py-1 px-2"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control border py-1 px-2"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="d-grid text-center">
          <button
            type="submit "
            className="bg-[#88c2bb]  font-gilroy px-2 py-1 rounded-[10px] hover:bg-transparent hover:border-2 hover:border-[#88c2bb]"
          >
            Submit
          </button>
        </div>
        <p className="forgot-password text-right m-2">
          New user{" "}
          <a href="/register" className="text-blue-500">
            Register Here
          </a>
        </p>
      </form>
    </div>
  );
}

export default Login;
