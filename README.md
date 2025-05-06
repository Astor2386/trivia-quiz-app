# Trivia Quiz App

A simple trivia quiz application built with React, utilizing the Open Trivia Database API to fetch multiple-choice questions. Users can select a category and difficulty, answer a question, and see their results. This project was created as part of a beginner course assignment (Module 7) to practice interacting with APIs and building React components.

## Features

- **Home Page**: Enter your name, select a category and difficulty, and start the quiz.
- **Question Form**: Displays a multiple-choice question with radio buttons for answers.
- **Results Section**: Shows whether you answered correctly, displays the correct answer if wrong, and allows you to try another question.
- **Error Handling**: Validates form inputs and handles API errors gracefully.

## Techh Used

- **React**: Front-end JavaScript library for building the user interface.
- **Axios**: For making HTTP requests to the Open Trivia Database API.
- **CSS**: Custom styles for a clean design.
- **Open Trivia Database API**: Provides trivia questions (https://opentdb.com/).

## Setup Instructions

1. **Clone the Repository**:
   git clone https://github.com/Astor2386/trivia-quiz-app.git
   cd trivia-quiz-app

2. **Install Dependencies**:
   npm install

3. **Start the Development Server**:
   npm start
   The app should open in the browser

   ## How To Use
   On the home page, enter your first name, select a category (e.g., General Knowledge, Science & Nature), and choose a difficulty level (Easy, Medium, Hard).

   Click "Start Quiz" to fetch a question from the Open Trivia Database API.

   Select an answer from the multiple-choice options and click "Submit Answer".

   View your results, which will show if you answered correctly and provide the correct answer if you were wrong.

   Click "Try Another Question" to return to the home page and start over.

## Project Structure
   src/App.js: Main app component that manages state and navigation.

   src/components/HomePage.js: Home page with the form for user input.

   src/components/QuestionForm.js: Displays the trivia question and answer options.

   src/components/ResultsSection.js: Shows the quiz results and restart option.

   src/App.css: Custom styles for the app.

   ## Special notes and thanks
   Axios was used in this app as taught by Jeremy Alkire in early April from Coding Temple. Special thanks to his video on React Bootstrap, API Calls & axios() Came in clutch lol




