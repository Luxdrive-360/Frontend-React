import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../components/dashboard/Dashboard';
// import Login from '../components/login/Login';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      {/* <Route path="/login" element={<Login />} /> */}
    </Routes>
  );
}

export default AppRoutes;
