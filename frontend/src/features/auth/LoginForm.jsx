import React, { useState } from "react";
import { loginAPI } from "./authAPI";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const login = async (e) => {
    e.preventDefault();

    try {
      const res = await loginAPI({ email, password });
      setMessage(res.data.message);
    } catch (error) {
      console.error("Error", error);
      setMessage("Error logging in. Please try again!");
    }
  };

  return (
    <form onSubmit={login} className="space-y-2">
      {/* Email */}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="name@example.com"
        className="border border-gray-300 w-full px-3 py-1 rounded-md focus:outline-none font-light focus:ring-1 focus:ring-black"
      />

      {/* Password */}
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="border border-gray-300 w-full px-3 py-1 rounded-md font-light focus:outline-none focus:ring-1 focus:ring-black"
      />

      <button type="submit" className="w-full bg-black text-white px-3 py-1 h-8 rounded-md text-sm cursor-pointer">Submit</button>
      {message && <p className="text-center text-red-700 text-sm">{message}</p>}
    </form>
  );
};

export default LoginForm;
