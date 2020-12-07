import React from "react"
import ProgressBar from "./ProgressBar/ProgressBar"
import "./QuestionBox.css"


const QuestionBox = ({ setQuestionHandler, quizDataNumber, questionNumber, quizData }) => {

    let percentage = ((questionNumber + 1) / quizData.length) * 100
    console.log(percentage)

    return (
        <div className="container">
            <ProgressBar percentage={percentage} />
            <form onSubmit={setQuestionHandler}>
                <p className="question-name">{quizDataNumber.question}</p>
                <ul>
                    <li className="list-item-one">
                        <input className="select-radio" type="radio" name="question" />
                        <label>{quizDataNumber.a}</label>
                    </li>
                    <li className="list-item-two">
                        <input className="select-radio" type="radio" name="question" />
                        <label>{quizDataNumber.b}</label>
                    </li>
                    <li className="list-item-three">
                        <input className="select-radio" type="radio" name="question" />
                        <label>{quizDataNumber.c}</label>
                    </li>
                    <li className="list-item-four">
                        <input className="select-radio" type="radio" name="question" />
                        <label>{quizDataNumber.d}</label>
                    </li>
                </ul>
                <div className="submit-button">
                    <input type="submit" value="submit" />
                </div>
            </form>
        </div>
    )
}

export default QuestionBox