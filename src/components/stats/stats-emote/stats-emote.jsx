import React, { Fragment } from "react"

import "./stats-emote.css"

const StatsEmote = ({ name }) => {
    return (
        <Fragment>
            {
                name === "hp"
                    ? (
                        <span role="img" aria-label="emote">💗</span>
                    )
                    : (
                        null
                    )
            }
            {
                name === "attack"
                    ? (
                        <span role="img" aria-label="emote">🗡️</span>
                    )
                    : (
                        null
                    )
            }
            {
                name === "defense"
                    ? (
                        <span role="img" aria-label="emote">🛡️</span>
                    )
                    : (
                        null
                    )
            }
            {
                name === "special-attack"
                    ? (
                        <span role="img" aria-label="emote">💥</span>
                    )
                    : (
                        null
                    )
            }
            {
                name === "special-defense"
                    ? (
                        <span role="img" aria-label="emote">🛡️</span>
                    )
                    : (
                        null
                    )
            }
            {
                name === "speed"
                    ? (
                        <span role="img" aria-label="emote">🏃</span>
                    )
                    : (
                        null
                    )
            }
        </Fragment>
    )
}

export default StatsEmote;