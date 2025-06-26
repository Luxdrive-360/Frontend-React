import React from 'react'
import './Signup.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { USER_SERVICE } from '../../utils/config';
import axios from 'axios';

export default function Signup({ closeModal }) {

   const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
    role: 'CLIENT',
  });


  const [alert, setAlert] = useState({ type: '', message: '' }); 

    const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

   const validateForm = () => {
    const { name, email, mobile, password, confirmPassword } = formData;
    if (!name || !email || !mobile || !password || !confirmPassword) {
      setAlert({ type: 'danger', message: 'All fields are required.' });
      return false;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setAlert({ type: 'danger', message: 'Enter a valid email address.' });
      return false;
    }
    if (!/^\d{10}$/.test(mobile)) {
      setAlert({ type: 'danger', message: 'Mobile number must be 10 digits.' });
      return false;
    }
    if (password.length < 6) {
      setAlert({ type: 'danger', message: 'Password must be at least 6 characters.' });
      return false;
    }
    if (password !== confirmPassword) {
      setAlert({ type: 'danger', message: 'Passwords do not match.' });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  // 1️⃣ Validate before API call
  if (!validateForm()) return;

  try {

    await axios.get(  `${USER_SERVICE}/users/save`);
    // 2️⃣ API call to backend via API Gateway
    const response = await axios.post(
      `${USER_SERVICE}/users/sign-up`,
      formData
    );

    // 3️⃣ Show success alert
    setAlert({ type: 'success', message: 'Signup successful!' });

    // 4️⃣ Optionally reset the form
    setFormData({
      name: '',
      email: '',
      mobile: '',
      password: '',
      confirmPassword: '',
      role: 'CLIENT',
    });

    console.log('User registered:', response.data);
  } catch (err) {
    // 5️⃣ Error alert
    setAlert({
      type: 'danger',
      message: err.response?.data?.message || 'Signup failed. Please try again.',
    });

    console.error('Registration error:', err);
  }
};


  return (
    <div>
    <div className="signup-container">
      <h3 className="text-center text-white mb-4">Sign Up to LuxDrive</h3>
      {alert.message && (
        <div className={`alert alert-${alert.type}`} role="alert">
          {alert.message}
        </div>
      )}
      <form onSubmit={handleSubmit} className="p-4 rounded bg-white shadow-sm">
        <div className="mb-3">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="mobile"
            className="form-control"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            name="confirmPassword"
            className="form-control"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <select
            name="role"
            className="form-select"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="CLIENT">Client</option>
            <option value="DRIVER">Driver</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary w-30mx-5">Sign Up</button>
         <button type="button" className="btn btn-danger w-30 mx-5"   onClick={closeModal}>Cancel</button>
   
      </form>
      </div>
    </div>
  )
}
