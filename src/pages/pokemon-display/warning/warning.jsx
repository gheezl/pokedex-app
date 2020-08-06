import React, { Fragment } from "react";

import "./warning.css"


const Warning = () => {
    return (
        <Fragment>
            <div className="warning">
                <img
                    className="warning-image"
                    width="250"
                    height="334"
                    src="confused-pikachu.jpg"
                />
            </div>
            <div className="warning-message">
                <span>Hmmmm? It appears there is no Pokémon here. Try looking for one in the View all tab in your top right corner.</span>
            </div>
        </Fragment>
    )
}

export default Warning;