import React, { useState } from 'react'
import { signupAPI } from './authAPI'

const SignupForm = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState("")
  const [message, setMessage] = useState("")

  const signUp = async (e) => {
    e.preventDefault()
    try {
      const res = await signupAPI({ name, email, password, role })
      setMessage(res.data.message)
    } catch (error) {
      console.error("Error", error)
      setMessage("Error signing up. Please try again!")
    }
  }

  return (
    <form onSubmit={signUp} className="space-y-2">
      {/* Name */}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        className="w-full rounded-lg border border-gray-300 px-3 py-1 font-light focus:outline-none focus:ring-1 focus:ring-black"
      />

      {/* Email */}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="name@example.com"
        className="w-full rounded-lg border border-gray-300 px-3 py-1 font-light focus:outline-none focus:ring-1 focus:ring-black"
      />

      {/* Password */}
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="w-full rounded-lg border border-gray-300 px-3 py-1 font-light focus:outline-none focus:ring-1 focus:ring-black"
      />

      {/* Role */}
      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="w-full rounded-lg border border-gray-300 px-3 py-1 bg-white focus:outline-none focus:ring-1 focus:ring-black"
      >
        <option value="" disabled>Choose a role</option>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>

      {/* Button */}
      <button
        type="submit"
        className="w-full bg-black text-white rounded-md px-3 py-1 h-8 text-sm cursor-pointer"
      >
        Sign Up
      </button>

      {/* Message */}
      {message && (
        <p className="text-center text-sm text-red-700">{message}</p>
      )}
    </form>
  )
}

export default SignupForm
