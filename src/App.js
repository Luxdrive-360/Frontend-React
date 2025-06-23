import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get('http://localhost:8081/users/save')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        setError("Could not fetch data. Check CORS or server.");
      });
  }, []);
  return (
    <div className="container mt-5">
      <h1 className="text-primary">LuxDrive User Dashboard</h1>
      <p>Welcome to your frontend powered by React and Bootstrap.</p>

      <div className="card p-3 mt-4 shadow">
        <h4>User Info</h4>
        <p>Name: Shivani</p>
        <p>Status: Active</p>
      </div>
    </div>
  );
}

export default App;
