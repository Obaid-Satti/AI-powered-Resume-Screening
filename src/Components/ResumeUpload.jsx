import React, { useState } from 'react';
import './ResumeUpload.css';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ResumeUpload = () => {
  const [file, setFile] = useState(null);
  const [role, setRole] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setErrors((prev) => ({ ...prev, file: '' }));
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setFile(e.dataTransfer.files[0]);
    setErrors((prev) => ({ ...prev, file: '' }));
  };

  const handleDragOver = (e) => e.preventDefault();

  const handleUpload = () => {
    const newErrors = {};
    if (!role) newErrors.role = 'Please select a role.';
    if (!file) newErrors.file = 'Please upload a resume file.';
    if (!jobDescription.trim()) newErrors.desc = 'Please enter job description.';

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    navigate('/result', {
      state: {
        category: role,
        score: 82,
        summary: 'Strong in React and JavaScript. Basic understanding of backend.',
        recommendation: 'Consider for technical interview.',
      },
    });
  };

  return (
    <div className="resume-wrapper">
      <div className="resume-card">
        <h2 className="resume-title">SmartMatch AI</h2>
        <p className="resume-subtitle">Upload Resume & Job Description</p>

        <div className="resume-role">
          <label>Select Role</label>
          <select
            value={role}
            onChange={(e) => {
              setRole(e.target.value);
              if (e.target.value) {
                setErrors((prev) => ({ ...prev, role: '' }));
              }
            }}
            className={`resume-role-select ${errors.role ? 'input-error' : ''}`}
          >
            <option value="">Select a role</option>
            <option value="Web Developer">Web Developer</option>
            <option value="App Developer">App Developer</option>
            <option value="Data Analyst">Data Analyst</option>
            <option value="AI Engineer">AI Engineer</option>
          </select>
          {errors.role && <p className="resume-error">{errors.role}</p>}
        </div>

        <div className="resume-role">
          <label>Job Description</label>
          <textarea
            rows={4}
            value={jobDescription}
            onChange={(e) => {
              setJobDescription(e.target.value);
              if (e.target.value.trim()) {
                setErrors((prev) => ({ ...prev, desc: '' }));
              }
            }}
            placeholder="Paste the job description here..."
            className={`resume-role-select ${errors.desc ? 'input-error' : ''}`}
          />
          {errors.desc && <p className="resume-error">{errors.desc}</p>}
        </div>

        <div
          className={`resume-dropzone ${errors.file ? 'input-error' : ''}`}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <div className="upload-icon"><FaCloudUploadAlt size={36} /></div>
          <p>Drag and drop your resume here</p>
        </div>

        <input
          type="file"
          id="upload-btn"
          accept=".pdf,.docx"
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
        <label htmlFor="upload-btn" className="resume-select-button">
          Select File
        </label>

        {file && <p className="resume-file-name">📎 {file.name}</p>}
        {errors.file && <p className="resume-error">{errors.file}</p>}

        <p className="resume-file-info">Allowed types: PDF, DOCX (Max: 5MB)</p>
        <p className="resume-note">🔒 Your file is scanned securely. No data is stored.</p>

        <button className="resume-start-button" onClick={handleUpload}>
          Start Screening
        </button>
      </div>
    </div>
  );
};

export default ResumeUpload;
