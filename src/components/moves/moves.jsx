import React, { Fragment } from 'react';

import "./moves.css"

const Moves = ({ move }) => {
    return (
        <Fragment>
            <div className="move">
                <span>{move.move.name}</span>
            </div>
        </Fragment>
    )
}

export default Moves;