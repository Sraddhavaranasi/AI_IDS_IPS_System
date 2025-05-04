import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    if (authStatus) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem('isAuthenticated'); // Clear authentication data
    setIsAuthenticated(false); // Update state to reflect logged-out status
  };

  return (
    <Router>
      <Routes>
        {/* Default Route, redirecting based on authentication */}
        <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/login" />} />
        
        {/* Login Route */}
        <Route path="/login" element={<Login />} />
        
        {/* Dashboard Route, protected by authentication */}
        <Route
          path="/dashboard"
          element={isAuthenticated ? <Dashboard onSignOut={handleSignOut} /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
