import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase'; // Adjust the import path as necessary
import '../styles/Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login Successful!");
      navigate('/');
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div className='login-container'>
      <div className='login-section'>
        <div className='login-header'>
          <h1>Log In</h1>
        </div>
        <form method='POST'>
          <label htmlFor="email">Email</label>
          <input type="email" name='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor="password">Password</label>
          <input type="password" name='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type='submit' value="Log In" onClick={loginUser}>Log In</button>
        </form>
        <div className='login-bottom'>
          <span>Don't have an account? <span><Link to='/signup' className='signup'>Sign Up</Link></span></span>
          <span>Forgot Password</span>
        </div>
      </div>
    </div>
  );
}

export default Login;
