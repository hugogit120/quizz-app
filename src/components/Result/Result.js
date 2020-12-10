import React from "react"
import "../QuestionBox.css"

const Result = ({ numberOfCorrectAnswers }) => {
    return (
        <div className="container">
            <h1> you get {numberOfCorrectAnswers} of 5 correct answers </h1>
        </div>
    )
}

export default Result