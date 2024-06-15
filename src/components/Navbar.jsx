import React from "react";
import "../styles/Navbar.css"; // Import your custom CSS file for Navbar styling

function CustomNavbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-brand">
          <img
            src="/logo.svg"
            width="50"
            height="50"
            className="navbar-logo"
            alt="Prakash Play School logo"
          />
          Prakash Play School
        </a>
        
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
        </ul>
      </div>
    </nav>
  );
}

export default CustomNavbar;
