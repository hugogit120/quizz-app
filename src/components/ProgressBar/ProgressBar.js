import React from "react"

const ProgressBar = ({ percentage }) => {
    return (
        <div class="progress w-75 ">
            <div class="progress-bar progress-bar-striped progress-bar-animated"
                role="progressbar"
                style={{ width: `${percentage}%` }}
                aria-valuemin="0"
                aria-valuemax="100">
            </div>
        </div>
    )
}
export default ProgressBar