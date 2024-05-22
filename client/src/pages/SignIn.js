import React, { useState } from "react";
import { Link } from "react-router-dom";
import eyeIcon from "../assets/eye.png";
import crossIcon from "../assets/eyecross.png";

const SignIn = () => {
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle the current state
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email or Username:", emailOrUsername);
    console.log("Password:", password);
    setEmailOrUsername("");
    setPassword("");
  };

  return (
    <div className="bg-blue min-h-screen flex flex-col items-center justify-center text-center font-urbanist">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-pink text-3xl mb-8">Sign In</h1>
        <form className="space-y-6 w-full max-w-lg" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Email or Username"
            className="block w-full p-3 rounded-md text-center text-blue border-blue mb-4"
            value={emailOrUsername}
            onChange={(e) => setEmailOrUsername(e.target.value)}
            style={{ width: "300px" }} // Adjusting width to make it wider
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="block w-full p-3 rounded-md text-center text-blue border-blue mb-4"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: "300px" }} // Adjusting width to make it wider
            />
            <button type="button" onClick={togglePasswordVisibility} className="absolute right-3 top-3">
              <img src={showPassword ? eyeIcon : crossIcon} alt="Show/Hide Password" width="24" height="24" className="fill-current text-pink"/>
            </button>
          </div>
          <div className="text-right">
            <button type="button" className="text-font text-sm underline hover:text-pink">
              Forgot password?
            </button>
          </div>
          <button type="submit" className="w-full py-3 rounded-md bg-pink text-font font-bold" style={{ width: "300px" }}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
