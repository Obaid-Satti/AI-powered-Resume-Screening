import React, { useState } from 'react';
import './SignupForm.css'; 
import Logo from '../assets/Logo.jpg';

const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login successful!");
    console.log("Login Data:", loginData);
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-container">
        {/* Left Side (About Section) — Hidden on Mobile */}
        <div className="signup-left">
          <h1>Welcome Back!</h1>
          <p>
            AI Resume Screening helps you discover top talent faster.
            Sign in to manage job applications, view analytics, and more.
          </p>
        </div>

        {/* Right Side (Login Form) */}
        <div className="signup-right">
          <div className="signup-card">
            <div className="card-header text-center">
              <img src={Logo} alt="Logo" className="signup-logo" />
              <h3 className="form-title">Log In</h3>
              <p className="form-subtitle">Enter your credentials below</p>
            </div>

            <form onSubmit={handleSubmit} className="form-body">
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={loginData.email}
                  onChange={handleChange}
                  
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={loginData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Log In
              </button>
            </form>

            <p className="mt-3 text-center text-muted">
              Don't have an account? <a href="#">Sign up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
