// src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import HomePage from './components/HomePage';
import QuestionForm from './components/QuestionForm';
import ResultsSection from './components/ResultsSection';
import './App.css';

const App = () => {
  // Single state object for form inputs
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    difficulty: ''
  });

  // State for quiz data
  const [question, setQuestion] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [userAnswer, setUserAnswer] = useState('');
  const [apiError, setApiError] = useState('');
  const [currentPage, setCurrentPage] = useState('home'); // 'home', 'question', 'results'

  // Decode HTML entities
  const decodeHtml = (html) => {
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  };

  // Fetch a question from the API
  const fetchQuestion = async () => {
    try {
      const response = await axios.get('https://opentdb.com/api.php', {
        params: {
          amount: 1,
          category: formData.category,
          difficulty: formData.difficulty,
          type: 'multiple'
        }
      });

      if (response.data.response_code === 0) {
        const q = response.data.results[0];
        setQuestion({
          text: decodeHtml(q.question),
          answers: [...q.incorrect_answers, q.correct_answer].map(decodeHtml).sort(() => Math.random() - 0.5)
        });
        setCorrectAnswer(decodeHtml(q.correct_answer));
        setApiError('');
        setCurrentPage('question');
      } else {
        setApiError('Failed to fetch a question. Please try again.');
        setCurrentPage('question');
      }
    } catch (error) {
      setApiError('Error connecting to the API. Please try again.');
      setCurrentPage('question');
    }
  };

  // Handle form submission from HomePage
  const handleHomeSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.category || !formData.difficulty) {
      alert('Please fill out all fields.');
      return;
    }
    fetchQuestion();
  };

  // Handle answer submission from QuestionForm
  const handleAnswerSubmit = (selectedAnswer) => {
    setUserAnswer(selectedAnswer);
    setCurrentPage('results');
  };

  // Reset to home page
  const handleRestart = () => {
    setQuestion(null);
    setUserAnswer('');
    setCurrentPage('home');
  };

  return (
    <div className="app">
      {currentPage === 'home' && (
        <HomePage
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleHomeSubmit}
        />
      )}
      {currentPage === 'question' && (
        <QuestionForm
          question={question}
          apiError={apiError}
          handleSubmit={handleAnswerSubmit}
        />
      )}
      {currentPage === 'results' && (
        <ResultsSection
          name={formData.name}
          userAnswer={userAnswer}
          correctAnswer={correctAnswer}
          handleRestart={handleRestart}
        />
      )}
    </div>
  );
};

export default App;