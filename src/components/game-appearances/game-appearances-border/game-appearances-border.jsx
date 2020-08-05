import React, { Fragment, lazy, Suspense } from 'react';

import "./game-appearances-border.css"

import Loading from "../../loading/loading.jsx"

const GameAppearances = lazy(() => import("../game-appearances.jsx"))

const GameAppearancesBorder = ({ individualPokemon }) => {
    return (
        <Fragment>
            <div className="map-header">
                <h3>game appearances</h3>
            </div>
            <div className="game-appearances-border">
                {
                    individualPokemon.game_indices.map(appearance => (
                        <Suspense fallback={<Loading />} >
                            <GameAppearances appearance={appearance} />
                        </Suspense>
                    ))
                }
            </div>
        </Fragment>
    )
}

export default GameAppearancesBorder;