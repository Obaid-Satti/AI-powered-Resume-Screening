import React, { useState } from 'react';
import './SignupForm.css';
import Logo from '../assets/Logo.jpg';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    alert("Signup successful!");
    console.log("Form Data:", formData);
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-container">
        {/* Left Side: About Section (Hidden on Mobile) */}
        <div className="signup-left">
          <h1>AI Resume Screening</h1>
          <p>
            Our platform uses cutting-edge AI to screen and rank resumes intelligently.
            Recruiters save time, reduce bias, and focus on top talent.
          </p>
        </div>

        {/* Right Side: Signup Form */}
        <div className="signup-right">
          <div className="signup-card">
            <div className="card-header text-center">
              <img src={Logo} alt="Logo" className="signup-logo" />
              <h3 className="form-title">Create an Account</h3>
              <p className="form-subtitle">It’s quick and easy</p>
            </div>

            <form onSubmit={handleSubmit} className="form-body">
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
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
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              

              <button type="submit" className="btn btn-primary w-100">
                Sign Up
              </button>
            </form>

            <p className="mt-3 text-center text-muted">
              Already have an account? <a href="#">Login here</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
