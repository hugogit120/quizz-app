import React, { useEffect, useState } from 'react';
import './App.css';
import QuestionBox from './components/QuestionBox';
import { quizData } from './Questions';

function App() {
  const [questionNumber, setQuestionNumber] = useState(0)

  const setQuestionHandler = (event) => {
    event.preventDefault()
    setQuestionNumber(questionNumber + 1)
  }


  return (
    <div className="App">
      {questionNumber <= 4 ? <QuestionBox setQuestionHandler={setQuestionHandler}
        quizDataNumber={quizData[questionNumber]}
        questionNumber={questionNumber}
        quizData={quizData} />
        :
        <div>
          end of the questions
      </div>}
    </div>
  );
}

export default App;
