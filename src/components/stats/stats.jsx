import React, { Fragment, lazy, Suspense } from "react"

import "./stats.css"

const StatsEmote = lazy(() => import("./stats-emote/stats-emote.jsx"))

const Stats = ({ stat }) => {
    return (
        <Fragment>
            <div className="stat-border">
                <div className="individual-stat">
                    <Suspense>
                        <StatsEmote name={stat.stat.name} />
                    </Suspense>
                    <span>{stat.stat.name}:  {stat.base_stat}</span>
                </div>
            </div>
        </Fragment>
    )
}

export default Stats;