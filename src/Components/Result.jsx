import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import './Result.css';

const Result = () => {
  const location = useLocation();
  const { category, score, summary, recommendation } = location.state || {};

  const [animatedScore, setAnimatedScore] = useState(0);

  useEffect(() => {
    let start = 0;
    const interval = setInterval(() => {
      if (start <= score) {
        setAnimatedScore(start);
        start += 1;
      } else {
        clearInterval(interval);
      }
    }, 15);
    return () => clearInterval(interval);
  }, [score]);

  const getScoreColor = (val) => {
    if (val >= 80) return 'green';
    if (val >= 60) return 'orange';
    return 'red';
  };

  return (
    <div className="result-wrapper">
      <motion.div
        className="result-card"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        whileHover={{ scale: 1.02 }}
      >
        <h2 className="result-title">🎯 Resume Screening Result</h2>

        <div className="result-field">
          <strong>📂 Resume Category:</strong> {category}
        </div>

        <div className="result-field">
          <strong>✅ Match Score:</strong>{' '}
          <span className={`score ${getScoreColor(score)}`}>
            {animatedScore}%
          </span>
        </div>

        <div className="result-field">
          <strong>📝 Summary:</strong>
          <p>{summary}</p>
        </div>

        <div className="result-field">
          <strong>🔍 Suggested Action:</strong>
          <p>{recommendation}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Result;
