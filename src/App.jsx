import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupForm from './Components/SignupForm';
import LoginForm from './Components/LoginForm';
import ResumeUpload from './Components/ResumeUpload';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/upload" element={<ResumeUpload />} />
        <Route path="*" element={<SignupForm />} />
      </Routes>
    </Router>
  );
};

export default App;
