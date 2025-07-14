import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupForm from './Components/SignupForm';
import LoginForm from './Components/LoginForm';
import ResumeUpload from './Components/ResumeUpload';
import Result from './Components/Result'; // ✅ Import Result component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/upload" element={<ResumeUpload />} />
        <Route path="/result" element={<Result />} /> {/* ✅ Add this line */}
        <Route path="*" element={<SignupForm />} />
      </Routes>
    </Router>
  );
};

export default App;
