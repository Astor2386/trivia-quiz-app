// src/components/HomePage.js
import React from 'react';

const HomePage = ({ formData, setFormData, handleSubmit }) => {
  const categories = [
    { id: '', name: 'Any Category' },
    { id: 9, name: 'General Knowledge' },
    { id: 17, name: 'Science & Nature' },
    { id: 23, name: 'History' },
    { id: 27, name: 'Animals' }
  ];

  const difficulties = [
    { value: '', label: 'Select Difficulty' },
    { value: 'easy', label: 'Easy' },
    { value: 'medium', label: 'Medium' },
    { value: 'hard', label: 'Hard' }
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="home-page">
      <h1>Trivia Quiz App</h1>
      <p>Welcome to the Trivia Quiz! Test your knowledge with fun questions.</p>
      <div className="instructions">
        <h3>Instructions</h3>
        <p>
          Enter your first name, select a category and difficulty, then click Start Quiz.
          You'll get a multiple-choice question. Choose an answer and submit to see if you're right!
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">First Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="difficulty">Difficulty:</label>
          <select
            id="difficulty"
            name="difficulty"
            value={formData.difficulty}
            onChange={handleChange}
            required
          >
            {difficulties.map((diff) => (
              <option key={diff.value} value={diff.value}>
                {diff.label}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Start Quiz</button>
      </form>
    </div>
  );
};

export default HomePage;