import React, { Fragment } from "react"

import "./stats-emote.css"

const StatsEmote = ({ name }) => {
    return (
        <Fragment>
            {
                name === "hp"
                    ? (
                        <span>💗</span>
                    )
                    : (
                        null
                    )
            }
            {
                name === "attack"
                    ? (
                        <span>🗡️</span>
                    )
                    : (
                        null
                    )
            }
            {
                name === "defense"
                    ? (
                        <span>🛡️</span>
                    )
                    : (
                        null
                    )
            }
            {
                name === "special-attack"
                    ? (
                        <span>💥</span>
                    )
                    : (
                        null
                    )
            }
            {
                name === "special-defense"
                    ? (
                        <span>🛡️</span>
                    )
                    : (
                        null
                    )
            }
            {
                name === "speed"
                    ? (
                        <span>🏃</span>
                    )
                    : (
                        null
                    )
            }
        </Fragment>
    )
}

export default StatsEmote;