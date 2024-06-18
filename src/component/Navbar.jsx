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
            <Link to="/admission" className="navbar-link">Admission</Link>
          </li>
          <li className="navbar-item">
            <Link to="/blog" className="navbar-link">Blog</Link>
          </li>
          <li className="navbar-item">
            <Link to="/gallery" className="navbar-link">Gallery</Link>
          </li>
          <li className="navbar-item dropdown">
            <span className="navbar-link">About</span>
            <ul className="dropdown-menu">
              <li><Link to="#" className="dropdown-item">Action</Link></li>
              <li><Link to="#" className="dropdown-item">Fee</Link></li>
            </ul>
          </li>
          {currentUser ? (
            <li className="navbar-item dropdown">
              <span className="navbar-link">
                {currentUser.email} {/* Display the username */}
              </span>
              <ul className="dropdown-menu">
                <li><Link to="/account" className="dropdown-item">Account Details</Link></li>
                <li><button onClick={logout} className="dropdown-item signout_btn">Sign Out</button></li>
              </ul>
            </li>
          ) : (
            <li className="navbar-item">
              <Link to="/login" className="navbar-link">Login</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default CustomNavbar;
