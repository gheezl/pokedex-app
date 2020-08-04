import React, { Fragment } from "react";

import "./loading.css"


const Loading = () => {
    return (
        <Fragment>
            <div className="loader-border">
                <span className="loader"></span>
            </div>
        </Fragment>
    )
}

export default Loading;