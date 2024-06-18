import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from '../contexts/AuthContext'; // Adjust the import path as necessary
import "../styles/Navbar.css";

function CustomNavbar() {
  const { currentUser, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to={'/'} className="navbar-brand">
          <img
            src="/logo.svg"
            width="50"
            height="50"
            className="navbar-logo"
            alt="Prakash Play School logo"
          />
          Prakash Play School
        </Link>
        
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="/admission" className="navbar-link">Admission</a>
          </li>
          <li className="navbar-item">
            <a href="/blog" className="navbar-link">Blog</a>
          </li>
          <li className="navbar-item">
            <a href="/gallery" className="navbar-link">Gallery</a>
          </li>
          <li className="navbar-item dropdown">
            <label htmlFor="navbarDropdown" className="navbar-link">About</label>
            
            <ul className="dropdown-menu">
              <li><a href="#" className="dropdown-item">Action</a></li>
              <li><a href="#" className="dropdown-item">Fee</a></li>
            </ul>
          </li>
          {currentUser ? (
            <li className="navbar-item dropdown">
              <label htmlFor="userDropdown" className="navbar-link">
                {currentUser.email} {/* Display the username */}
              </label>
              <ul className="dropdown-menu">
                <li><a href="/account" className="dropdown-item">Account Details</a></li>
                <li><button onClick={logout} className="dropdown-item signout_btn">Sign Out</button></li>
              </ul>
            </li>
          ) : (
            <li className="navbar-item">
              <a href="/login" className="navbar-link">Login</a>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default CustomNavbar;
