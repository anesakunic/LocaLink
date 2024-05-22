import React, { useState } from "react";
import { Link } from "react-router-dom";
import eyeIcon from "../assets/eye.png";
import crossIcon from "../assets/eyecross.png";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Username:", username);
    console.log("Password:", password);
    setEmail("");
    setUsername("");
    setPassword("");
  };

  return (
    <div className="bg-blue min-h-screen flex flex-col items-center justify-center text-center font-urbanist">
      <div className="flex flex-col items-center justify-center"> {/* Adjusted margin-top from mt-10 to mt-6 */}
        <h1 className="text-pink text-3xl mb-8">Sign Up</h1>
        <form className="space-y-6 w-full max-w-lg" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter Email"
            className="block w-full p-3 rounded-md text-center text-blue border-blue"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "300px" }}
          />
          <input
            type="text"
            placeholder="Create Username"
            className="block w-full p-3 rounded-md text-center text-blue border-blue"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ width: "300px" }}
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="block w-full p-3 rounded-md text-center text-blue border-blue"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: "300px" }}
            />
            <button type="button" onClick={togglePasswordVisibility} className="absolute right-3 top-3">
              <img src={showPassword ? eyeIcon : crossIcon} alt="Show/Hide Password" width="24" height="24" className="fill-current text-pink"/>
            </button>
          </div>
          <button type="submit" className="w-full py-3 rounded-md bg-pink text-font font-bold" style={{ width: "300px" }}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
