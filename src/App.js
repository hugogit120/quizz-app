import React, { useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import './App.css';
import QuestionBox from './components/QuestionBox';
import Result from './components/Result/Result';
import { quizData } from './Questions';

function App() {
  const [questionNumber, setQuestionNumber] = useState(0)
  const [numberOfCorrectAnswers, setNumberOfCorrectAnswers] = useState(0)
  const [theAnswer, setTheAnswer] = useState("")

  const submitHandler = (event, correctAnswer) => {
    event.preventDefault();
    event.target.reset()
    setQuestionNumber(questionNumber + 1)

    theAnswer === correctAnswer && setNumberOfCorrectAnswers(numberOfCorrectAnswers + 1)
  }

  const theAnswerHandler = (event, correctAnswer) => {
    const { value } = event.target
    value === correctAnswer && setTheAnswer(value)
  }

  return (
    <div className="App">
      {questionNumber <= 4 ?
        <QuestionBox
          theAnswerHandler={theAnswerHandler}
          quizDataNumber={quizData[questionNumber]}
          questionNumber={questionNumber}
          quizData={quizData}
          submitHandler={submitHandler}
        />
        :
        <Result
          numberOfCorrectAnswers={numberOfCorrectAnswers}
        />
      }
    </div>
  );
}

export default App;
