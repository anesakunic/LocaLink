import axios from 'axios';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import eyeIcon from "../assets/eye.png";
import crossIcon from "../assets/eyecross.png";

const SignIn = () => {
  const [username, setUsername] = useState(""); // Changed state variable name
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/auth/signin', {
        username, // Send username only
        password
      });
      console.log(response.data);
      navigate('/feed');
    } catch (error) {
      console.error(error);
      // Handle error response
    }
    setUsername(""); // Clear username field
    setPassword("");
  };

  return (
    <div className="bg-blue min-h-screen flex flex-col items-center justify-center text-center font-urbanist">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-pink text-3xl mb-8">Sign In</h1>
        <form className="space-y-6 w-full max-w-lg" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Username" // Changed placeholder text
            className="block w-full p-3 rounded-md text-center text-blue border-blue mb-4"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ width: "300px" }}
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="block w-full p-3 rounded-md text-center text-blue border-blue mb-4"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: "300px" }}
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
