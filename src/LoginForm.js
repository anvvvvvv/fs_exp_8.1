import React, { useState } from "react";
import "./LoginForm.css"; // optional styling

function LoginForm() {
  // State variables for username and password
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    if (username === "admin" && password === "1234") {
      setMessage("✅ Login successful!");
    } else {
      setMessage("❌ Invalid username or password.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            required
          />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>

        <button type="submit">Login</button>
      </form>

      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default LoginForm;
