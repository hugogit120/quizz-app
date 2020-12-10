import React from "react"
import ProgressBar from "./ProgressBar/ProgressBar"
import "./QuestionBox.css"


const QuestionBox = ({ quizDataNumber, questionNumber, quizData, submitHandler, theAnswerHandler }) => {

    let percentage = ((questionNumber + 1) / quizData.length) * 100

    return (
        <div className="container">
            <ProgressBar percentage={percentage} />
            <form onSubmit={e => submitHandler(e, quizDataNumber.correct)}>
                <p className="question-name">{quizDataNumber.question}</p>
                <ul>
                    {Object.keys(quizDataNumber.answers).map((key, index) => (
                        <li className="list-item-one">
                            <input className="select-radio"
                                type="radio"
                                name="question"
                                value={key}
                                onClick={e => theAnswerHandler(e, quizDataNumber.correct)}
                            />
                            <label>{quizDataNumber.answers[key]}</label>
                        </li>
                    ))}
                </ul>
                <div className="submit-button">
                    <input type="submit" value="submit" />
                </div>
            </form>
        </div>
    )
}

export default QuestionBox