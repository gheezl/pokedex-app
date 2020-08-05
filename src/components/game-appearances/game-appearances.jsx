import React, { Fragment } from 'react';

import "./game-appearances.css"

const GameAppearances = ({ appearance }) => {
    return (
        <Fragment>
            <div className="appearances-border">
                <div className="appearances">
                    <span> pokemon {appearance.version.name}</span>
                </div>
            </div>
        </Fragment>
    )
}

export default GameAppearances;