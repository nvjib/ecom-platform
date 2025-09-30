import React, { useState } from 'react'
import { loginAPI } from './authAPI'

const LoginForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")

  const login = async (e) => {
    e.preventDefault()

    try {
        const res = await loginAPI({ email, password })
        setMessage(res.data.message)
    } catch (error) {
        console.error("Error", error)
        setMessage("Error logging in. Please try again!")
    }
  }

  return (
    <form onSubmit={login}> 
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email'/>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password'/>
        <button type='submit'>Sumbit</button>
        {message && <p>{message}</p>}
    </form>
  )
}

export default LoginForm