import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Question from './Question';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await axios.get('https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple');
      setQuestions(response.data.results);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching quiz data:', error);
    }
  };

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  if (loading) {
    return <p className="text-center text-lg font-medium text-gray-600 mt-10">Loading questions...</p>;
  }

  if (currentQuestionIndex >= questions.length) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white-100 overflow-hidden">
        <p className="text-2xl font-semibold text-green-600">Your score: {score} / {questions.length}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <Question
        question={questions[currentQuestionIndex]}
        handleAnswer={handleAnswer}
      />
    </div>
  );
};

export default Quiz;
