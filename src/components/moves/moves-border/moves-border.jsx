import React, { Fragment, lazy, Suspense } from 'react';

import "./moves-border.css"

import Loading from "../../loading/loading.jsx"

const Moves = lazy(() => import("../moves.jsx"))

const MovesBorder = ({ individualPokemon }) => {
    return (
        <Fragment>
            <div className="map-header">
                <h3>moves</h3>
            </div>
            {
                individualPokemon.moves.length
                    ? (
                        <div className="moves-border">
                            {
                                individualPokemon.moves.map(move => (
                                    <Suspense fallback={<Loading />}>
                                        <Moves move={move} />
                                    </Suspense>
                                ))
                            }
                        </div>
                    )
                    : (
                        <span>No moves on document</span>
                    )
            }

        </Fragment>
    )
}

export default MovesBorder;