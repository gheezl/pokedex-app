import React, { Fragment } from "react"

import "./error-display.css"


const ErrorDisplay = () => {
    return (
        <Fragment>
            <div className="error-image">
                <img alt="" src="error-pikachu.gif" />
            </div>
            <h1 className="ERROR">ERROR</h1>
            <span className="something-wrong">Something is wrong, please come back later</span>
        </Fragment>
    )
}

export default ErrorDisplay;