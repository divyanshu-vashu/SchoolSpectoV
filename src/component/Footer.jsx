import React from 'react';
import '../styles/Footer.css'; // Import your custom CSS file for Footer styling

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo-address">
          <img src="/logo.svg" alt="Prakash Play School logo" className="footer-logo" />
          <p>Prakash Play School</p>
          <p>123 Main Street, Hometown, Country</p>
        </div>
        <div className="footer-links">
          <a href="/contact" className="footer-link">Contact Us</a>
          <a href="/gallery" className="footer-link">Gallery</a>
          <a href="/faq" className="footer-link">FAQs</a>
          <a href="/rules" className="footer-link">School Rules and Guidelines</a>
          <a href="/careers" className="footer-link">Careers</a>
          <a href="/blog" className="footer-link">Blog</a>
          <a href="/news" className="footer-link">Latest News</a>
          <a href="/privacy" className="footer-link">Privacy Policy</a>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Prakash Play School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
