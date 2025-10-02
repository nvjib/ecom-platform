import React from 'react'
import SignupForm from '../features/auth/SignupForm'

const Signup = () => {
  return (
    <div className="flex items-start justify-center px-4 py-14">
      <div className="w-full max-w-lg p-6">

        {/* Heading */}
        <div className="mb-6 space-y-1">
          <h3 className="font-medium tracking-tight text-2xl">Create an account</h3>
          <p className="text-md sm:text-sm text-gray-500">Enter your details to sign up</p>
        </div>

        {/* The actual form */}
        <SignupForm />

        {/* Redirect */}
        <p className="mt-6 text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-black font-medium hover:underline">
            Sign in
          </a>
        </p>

      </div>
    </div>
  )
}

export default Signup
