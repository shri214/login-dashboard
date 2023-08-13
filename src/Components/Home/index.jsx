import React from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom';

export function Home() {
  const navigation=useNavigate();
  return (
    <div className='container-box'>
        <h2>Welcome to PopX</h2>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <button className='createAcc' onClick={()=>navigation('/signup')}>Create Account</button>
        <button className='loginBtn' onClick={()=>navigation('./login')}>Already Register?Login</button>
    </div>
  )
}

