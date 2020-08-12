import React, { Fragment, lazy, Suspense } from 'react';

import "./stats-border.css"

import Loading from "../../loading/loading.jsx"

const Stats = lazy(() => import("../stats.jsx"))


const StatsBorder = ({ individualPokemon }) => {
    return (
        <Fragment>
            <div className="map-header">
                <h3>stats</h3>
            </div>
            <div className="stats-border">
                {
                    individualPokemon.stats.map(stat => (
                        <Suspense key={stat.stat.name} fallback={<Loading />}>
                            <Stats stat={stat} />
                        </Suspense>)
                    )
                }
            </div>
        </Fragment>
    )
}

export default StatsBorder;