import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // Hardcoded username and password for testing
  const validUsername = "admin";
  const validPassword = "password123";

  const handleLogin = (e) => {
    e.preventDefault();

    // Check if the entered username and password match the hardcoded ones
    if (username === validUsername && password === validPassword) {
      localStorage.setItem("isAuthenticated", "true"); // Set authentication flag in localStorage
      navigate("/dashboard"); // Redirect to the dashboard after login
    } else {
      alert("Invalid credentials, please try again.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login to Vijaya Enterprises IDS/IPS</h2>
      <form onSubmit={handleLogin}>
        <div className="input-group">
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Password</label>
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
