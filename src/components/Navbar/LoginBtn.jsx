import React from 'react'
import { Link } from 'react-router-dom'

const LoginBtn = () => {
  return (
    <div className='flex items-center gap-3 text-[0.9rem] font-medium'>
        <Link to="/auth/signin">Sign In</Link>
        <Link to="/auth/signup" className='border-zinc-500 border rounded-md px-3 py-1'>Sign Up</Link>
    </div>
  )
}

export default LoginBtn