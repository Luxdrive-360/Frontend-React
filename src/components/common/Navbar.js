import React from 'react';
import './Navbar.css';
// import logo from '../../assets/logo.png'; // Uncomment if logo is available

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <a className="navbar-brand mx-2 text-white" href="/">Luxdrive-360</a>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">For Business</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">About Us</a>
          </li>
        </ul>
        <form className="d-flex">
          <button type="button" className="btn btn-outline-light me-2">Login</button>
          <button type="button" className="btn btn-outline-light">Sign Up</button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
