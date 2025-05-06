// src/components/QuestionForm.js
import React, { useState } from 'react';

const QuestionForm = ({ question, apiError, handleSubmit }) => {
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!selectedAnswer) {
      alert('Please select an answer.');
      return;
    }
    handleSubmit(selectedAnswer);
  };

  return (
    <div className="question-form">
      {apiError ? (
        <p className="error">{apiError}</p>
      ) : (
        <>
          <h2>Question</h2>
          <p>{question.text}</p>
          <form onSubmit={handleFormSubmit}>
            <div className="radio-group">
              {question.answers.map((answer, index) => (
                <label key={index}>
                  <input
                    type="radio"
                    name="answer"
                    value={answer}
                    checked={selectedAnswer === answer}
                    onChange={(e) => setSelectedAnswer(e.target.value)}
                  />
                  {answer}
                </label>
              ))}
            </div>
            <button type="submit">Submit Answer</button>
          </form>
        </>
      )}
    </div>
  );
};

export default QuestionForm;