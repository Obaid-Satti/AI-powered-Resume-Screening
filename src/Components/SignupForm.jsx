// SignupForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './SignupForm.css';
import Logo from '../assets/Logo.jpg';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/api/auth/signup', formData);
      alert('Signup successful!');
      navigate('/upload');
    } catch (err) {
      alert('Signup failed!');
      console.error(err.response?.data || err.message);
    }
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-container">
        <div className="signup-left">
          <h1>AI Resume Screening</h1>
          <p>
            Our platform uses cutting-edge AI to screen and rank resumes intelligently.
            Recruiters save time, reduce bias, and focus on top talent.
          </p>
        </div>

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
              Already have an account? <a href="/login">Login here</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
