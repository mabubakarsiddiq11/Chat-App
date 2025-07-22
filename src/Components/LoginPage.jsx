import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addUser, setSelectedUser, } from "../Redux/Features/userSlice";
import { nanoid } from "@reduxjs/toolkit";

const LoginPage = () => {
  const navigate = useNavigate();
  const [value, setvalue] = useState({});
  // const [password, setPassword] = useState("");
  const {users, currentUser} = useSelector((state) => state.users);
  const dispatch = useDispatch();
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      toast.success(`Welcome ${value.username}!`);
      dispatch(addUser(value));
      setTimeout(() => {
        navigate(`/chat/${currentUser.userId}`);
      }, 1000);
      console.log("Login:", users,  );
      console.log("Check UserID:", currentUser.userId);
    } 
     else {
      toast.error("Please Login Name!");
    }
  };


  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   if (!value.username || !value.username.trim()) {
  //     alert("Username required");
  //     return;
  //   }

  //   const usersArr = Object.values(users);
  //   const existingUser = usersArr.find((u) => u.username === value.username);

  //   if (existingUser) {
  //     dispatch(setSelectedUser(existingUser));
  //   } else {
  //     const newUser = { ...value, userId: nanoid() };
  //     dispatch(addUser(newUser));
  //     dispatch(setSelectedUser(newUser));
  //   }

  //   navigate("/chat");
  // };


  const handleChange = (e)=>{
    setvalue({...value,[e.target.name]:e.target.value})
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <ToastContainer position="top-right" autoClose={1000} />
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-xl">
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              required
              name="username"
              value={value.username}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your Name"
            />
          </div>

          {/* <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div> */}

          {/*        <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span className="text-sm text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-sm text-blue-500 hover:underline">
              Forgot password?
            </a>
          </div> */}

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        {/* <p className="text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Sign Up
          </a>
        </p> */}
      </div>
    </div>
  );
};

export default LoginPage;
