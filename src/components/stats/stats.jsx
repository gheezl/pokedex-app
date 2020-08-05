import React, { Fragment } from "react"

import "./stats.css"


const Stats = ({ stat }) => {
    return (
        <Fragment>
            <div className="stat-border">
                <div className="individual-stat">
                    <span>{stat.stat.name}:  {stat.base_stat}</span>
                </div>
            </div>
        </Fragment>
    )
}

export default Stats;