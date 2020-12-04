import React, { useEffect, useState } from 'react';
import './App.css';
import QuestionBox from './components/QuestionBox';
import { quizData } from './Questions';

function App() {
  const [questionNumber, setQuestionNumber] = useState(0)
  console.log(" numero de la pregunta fuera de la funcion", questionNumber);

  const setQuestionHandler = (event) => {
    event.preventDefault()
    setQuestionNumber(questionNumber + 1)
  }

  console.log(quizData);

  return (
    <div className="App">
      {questionNumber <= 4 ? <QuestionBox setQuestionHandler={setQuestionHandler} quizData={quizData[questionNumber]} /> : <div>
        end of the questions
      </div>}
    </div>
  );
}

export default App;
