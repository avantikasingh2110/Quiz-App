import React from 'react';
import Quiz from './components/Quiz';

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b text-blue-700 overflow-hidden">
      <h1 className="text-4xl font-bold mb-10">Quiz App</h1>
      <Quiz />
    </div>
  );
}

export default App;
