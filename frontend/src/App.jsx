import React from 'react'
import Signup from './pages/Signup'
import Login from './pages/Login'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
      <Routes>
          <Route path='/sign-up' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
      </Routes>
  )
}

export default App