import React, { Fragment, useState } from 'react';

import "./moves.css"

const Moves = ({ move }) => {
    let [moveData, setMoveData] = useState("Loading...")
    let [toggle, setToggle] = useState(true)

    const onClickFunction = async () => {
        setToggle(!toggle)
        try {
            const response = await fetch(move.move.url)
            const data = await response.json()
            setMoveData(data.effect_entries[0].short_effect)
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <Fragment>
            <div onClick={onClickFunction} className="move-border">
                <span>{move.move.name} {
                    toggle
                        ? (
                            <span>❱</span>
                        )
                        : (
                            null
                        )
                }</span>
                {
                    toggle
                        ? (
                            null
                        )
                        :
                        (
                            <div className="data">
                                <span className="data-span">{moveData}</span>
                            </div>
                        )
                }
            </div>

        </Fragment>
    )
}

export default Moves;