import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Result.css';

const Result = () => {
  const dummyCategory = 'Web Developer';
  const dummyScore = 82;
  const dummySummary = 'Strong in React and JavaScript. Basic understanding of backend. Resume is well-structured.';
  const dummyRecommendation = 'Consider for technical interview.';

  const [animatedScore, setAnimatedScore] = useState(0);

  useEffect(() => {
    let start = 0;
    const interval = setInterval(() => {
      start += 1;
      if (start <= dummyScore) {
        setAnimatedScore(start);
      } else {
        clearInterval(interval);
      }
    }, 15);
    return () => clearInterval(interval);
  }, [dummyScore]);

  const getScoreColor = (value) => {
    if (value >= 80) return 'green';
    if (value >= 60) return 'orange';
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
          <strong>📂 Resume Category:</strong> {dummyCategory}
        </div>

        <div className="result-field">
          <strong>✅ Match Score:</strong>{' '}
          <span className={`score ${getScoreColor(dummyScore)}`}>
            {animatedScore}%
          </span>
        </div>

        <div className="result-field">
          <strong>📝 Summary:</strong>
          <p>{dummySummary}</p>
        </div>

        <div className="result-field">
          <strong>🔍 Suggested Action:</strong>
          <p>{dummyRecommendation}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Result;
