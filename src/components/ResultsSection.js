// src/components/ResultsSection.js
import React from 'react';

const ResultsSection = ({ name, userAnswer, correctAnswer, handleRestart }) => {
  const isCorrect = userAnswer === correctAnswer;

  return (
    <div className="results-section">
      <h2>Results</h2>
      <p>
        {name}, you answered {isCorrect ? 'correctly!' : 'incorrectly.'}
      </p>
      {!isCorrect && (
        <p>The correct answer was: {correctAnswer}</p>
      )}
      <button onClick={handleRestart}>Try Another Question</button>
    </div>
  );
};

export default ResultsSection;