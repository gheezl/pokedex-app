import React, { Fragment } from "react";

import "./loading.css"


const Loading = () => {
    return (
        <Fragment>
            <div className="loader-border">
                <span class="loader"></span>
            </div>
        </Fragment>
    )
}

export default Loading;