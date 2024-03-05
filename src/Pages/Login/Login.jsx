import React from 'react'
import './Login.css'

export const Login = () => {
  return (
    <div className='loginSignup'>
      <div className='loginSignup-container'>
        <h2>Sign up</h2>
        <div className='signup-fields'>
          <input type='text' placeholder='First Name'></input>
          <input type='email' placeholder='Email Address'></input>
          <input type='password' placeholder='Password'></input>
        </div>
        <button>Continue</button>
        <h5 className='login'>Already have an account? <span>Login here</span></h5>
        <div>
        </div>
      </div>
    </div>
  )
}
