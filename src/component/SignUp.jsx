import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase'; // Adjust the import path as necessary
import '../styles/Signup.css';

const SignUp = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "", email: "", password: "", repwd: ""
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  const validate = (e) => {
    e.preventDefault();
    if (user.password === user.repwd) {
      postData();
    } else {
      window.alert("Re-entered password does not match!");
    }
  }

  const postData = async () => {
    try {
      await createUserWithEmailAndPassword(auth, user.email, user.password);
      alert("Signed Up Successfully!");
      navigate('/login');
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div className='signin-container'>
      <div className='signin-section'>
        <div className='signin-header'>
          <h1>Sign Up</h1>
        </div>
        <form method='POST'>
          <label htmlFor="name">Name</label>
          <input type='text' name='name' placeholder='Name' value={user.name} onChange={handleInputs} />
          <label htmlFor="email">Email</label>
          <input type="email" name='email' placeholder='Email' value={user.email} onChange={handleInputs} />
          <label htmlFor="password">Password</label>
          <input type="password" name='password' placeholder='Password' value={user.password} onChange={handleInputs} />
          <label htmlFor="repwd">Re-Enter Password</label>
          <input type="password" name='repwd' placeholder='Re-type Password' value={user.repwd} onChange={handleInputs} />
          <button type='submit' name='signup' value="register" onClick={validate} className='signup-btn'>Sign Up</button>
        </form>
        <div className='signin-bottom'>
          <span>Already have an account? <span><Link to='/login' className='login'>Log In</Link></span></span>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
