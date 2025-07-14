import React, { useState } from 'react';
import './ResumeUpload.css';
import { FaCloudUploadAlt } from 'react-icons/fa';

const ResumeUpload = () => {
  const [file, setFile] = useState(null);
  const [role, setRole] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [showToast, setShowToast] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setShowToast(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setFile(e.dataTransfer.files[0]);
    setShowToast(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleUpload = () => {
    if (!file || !role || !jobDescription.trim()) {
      setShowToast(true);
      return;
    }

    alert(`Uploading resume for ${role}:\n${file.name}`);
    console.log({ file, role, jobDescription });
  };

  return (
    <div className="resume-wrapper">
      <div className="resume-card">
        <h2 className="resume-title">SmartMatch AI</h2>
        <p className="resume-subtitle">Upload Resume & Job Description</p>

        {/* Role Select */}
        <div className="resume-role">
          <label>Select Role</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="resume-role-select"
          >
            <option value="">Select a role</option>
            <option value="Web Developer">Web Developer</option>
            <option value="App Developer">App Developer</option>
            <option value="Data Analyst">Data Analyst</option>
            <option value="AI Engineer">AI Engineer</option>
          </select>
        </div>

        {/* Job Description */}
        <div className="resume-role">
          <label>Job Description</label>
          <textarea
            rows={4}
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            placeholder="Paste the job description here..."
            className="resume-role-select"
          />
        </div>

        {/* File Upload */}
        <div
          className="resume-dropzone"
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

        <p className="resume-file-info">Allowed types: PDF, DOCX (Max: 5MB)</p>
        <p className="resume-note">🔒 Your file is scanned securely. No data is stored.</p>

        <button className="resume-start-button" onClick={handleUpload}>
          Start Screening
        </button>

        {showToast && (
          <div className="resume-toast">
            ⚠️ Please select a role, enter a job description, and upload a file.
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeUpload;
