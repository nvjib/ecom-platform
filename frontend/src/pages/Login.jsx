import React from 'react'
import LoginForm from '../features/auth/LoginForm'

const Login = () => {
  return (
    <div className='flex justify-center items-start px-4 py-14'>
      <div className='max-w-lg w-full p-6'>

        {/* header */}
        <div className='mb-6 space-y-1'>
          <h3 className='font-medium tracking-tight text-2xl'>Login to your account</h3>
          <p className='text-md sm:text-sm text-gray-500'>Enter your email and password</p>
        </div>

        {/* login form */}
        <LoginForm/>

        <p className='text-sm mt-5 text-gray-600'>Don't have an account? <a href="" className='font-medium text-black hover:underline'>Sign Up</a></p>
      </div>
        
    </div>
  )
}

export default Login