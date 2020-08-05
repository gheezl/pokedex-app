import React, { Fragment, useState } from 'react';

import "./moves.css"

const Moves = ({ move }) => {

    const onClickFunction = async () => {
        console.log(move.move.url)
        try {
            const response = await fetch(move.move.url)
            const data = await response.json()
            console.log(data)
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <Fragment>
            <div onClick={onClickFunction} className="move-border">
                <span>{move.move.name}</span>
            </div>
        </Fragment>
    )
}

export default Moves;