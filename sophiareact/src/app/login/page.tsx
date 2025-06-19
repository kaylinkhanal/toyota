import React from "react";

const Login = () => {
  return (
    <div className="bg-blue-200 flex flex-col justify-center mx-30 mt-10 -mb-10 px-20">
      <div className="bg-gray-100 flex flex-col justify-center m-50 p-20 rounded-md shadow-md">
        <h2 className=" flex justify-center mb-12 text-3xl font-bold">Login</h2>
        <input
          className="border 2xl:border-b-gray-400  m-2 p-2 "
          placeholder="Enter username"
        ></input>
        <input
          className="border border-gray-400 m-2 mb-5 p-2 "
          placeholder="Enter password"
        ></input>
        <button className="bg-blue-200 mx-25 p-2 shadow-md">Login</button>
        <text className="mt-5 flex justify-center">
          Don't have an account?
          <a
            className="text-blue-400 hover:underline"
            href="http://localhost:3000/register"
          >
            Sign Up
          </a>
        </text>
      </div>
    </div>
  );
};

export default Login;
