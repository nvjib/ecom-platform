import React, { useState } from 'react'
import { signup } from './authAPI'

const SignupForm = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState("")
  const [message, setMessage] = useState("")

  const signUp = async (e) => {
    e.preventDefault()
    try {
        const res = await signup({ name, email, password, role })
        setMessage(res.data.message)
        console.log(res.data.message)
    } catch (error) {
        console.error("Error", error)
        setMessage("Error signing up. Please try again!")
    }
  }

  return (
    <form onSubmit={signUp}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name'/>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email'/>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password'/>
        
        <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="" disabled>Choose a role</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
        </select>

        <button type='submit'>Submit</button>

        {message && <p>{message}</p>}
    </form>
  )
}

export default SignupForm