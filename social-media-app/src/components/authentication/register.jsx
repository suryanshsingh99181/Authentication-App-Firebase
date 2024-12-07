import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./firebase";
// import { setDoc, doc } from "firebase/firestore";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);

      console.log("User Registered Successfully!!");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center ">
      <form
        onSubmit={handleRegister}
        className="border-2 w-80 flex flex-col m-20 align-middle justify-center rounded-[10px] p-5 shadow-lg shadow-[#88c2bb]"
      >
        <h3 className="text-2xl text-center font-semibold">Sign Up</h3>

        <div className="mb-3 p-2">
          <label className="p-1">First name</label>
          <input
            type="text"
            className="form-control border border-gray-400 p-1 rounded-[10px]"
            placeholder="First name"
            onChange={(e) => setFname(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label>Last name</label>
          <input
            type="text"
            className="form-control border border-gray-400 p-1 rounded-[10px]"
            placeholder="Last name"
            onChange={(e) => setLname(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control border border-gray-400 p-1 rounded-[10px]"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3 p-1">
          <label>Password</label>
          <input
            type="password"
            className="form-control border border-gray-400 p-1 rounded-[10px]"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="d-grid">
          <button
            type="submit"
            className="bg-[#88c2bb]  font-gilroy px-2 py-1 rounded-[10px] hover:bg-transparent hover:border-2 hover:border-[#88c2bb]"
          >
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered{" "}
          <a href="/login" className="text-blue-500">
            Login
          </a>
        </p>
      </form>
    </div>
  );
}
export default Register;
