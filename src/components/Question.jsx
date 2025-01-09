import React from 'react';

const Question = ({ question, handleAnswer }) => {
  const shuffledAnswers = [...question.incorrect_answers, question.correct_answer].sort(() => Math.random() - 0.5);

  return (
    <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold text-gray-800 mb-6">{question.question}</h2>
      <div className="flex flex-col space-y-4">
        {shuffledAnswers.map((answer, index) => (
          <button
            key={index}
            className="px-4 py-2 bg-blue-500 text-white font-medium rounded hover:bg-blue-600 transition duration-200"
            onClick={() => handleAnswer(answer === question.correct_answer)}
          >
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
