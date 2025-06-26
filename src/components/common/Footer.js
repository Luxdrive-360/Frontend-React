import React from 'react';
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {
  return (
    <footer className="luxdrive-footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>LuxDrive</h4>
          <p>Drive smarter, safer, and luxuriously with LuxDrive.</p>
        </div>

        <div className="footer-section">
          <h5>Quick Links</h5>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/drivers">For Drivers</a></li>
            <li><a href="/clients">For Clients</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h5>Follow Us</h5>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} LuxDrive. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
