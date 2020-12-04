import React from "react"
import ProgressBar from "./ProgressBar/ProgressBar"
import "./QuestionBox.css"


const QuestionBox = ({ setQuestionHandler, quizData }) => {

    return (
        <div className="container">
            <ProgressBar />
            <form className="question-name" onSubmit={setQuestionHandler}>
                <h1>{quizData.question}</h1>
                <ul>
                    <li className="list-item-one">
                        <input className="select-radio" type="radio" name="question" />
                        <label>{quizData.a}</label>
                    </li>
                    <li className="list-item-two">
                        <input className="select-radio" type="radio" name="question" />
                        <label>{quizData.b}</label>
                    </li>
                    <li className="list-item-three">
                        <input className="select-radio" type="radio" name="question" />
                        <label>{quizData.c}</label>
                    </li>
                    <li className="list-item-four">
                        <input className="select-radio" type="radio" name="question" />
                        <label>{quizData.d}</label>
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