import React, { Fragment, lazy, Suspense } from 'react';

import "./game-appearances-border.css"

import Loading from "../../loading/loading.jsx"

const GameAppearances = lazy(() => import("../game-appearances.jsx"))


const GameAppearancesBorder = ({ individualPokemon }) => {
    console.log(individualPokemon)
    return (
        <Fragment>
            <div className="map-header">
                <h3>game appearances</h3>
            </div>
            {
                individualPokemon.game_indices.length
                    ? (
                        <Fragment>
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
                    : (
                        <Fragment>
                            <div className="no-game-appearances">
                                <span>No game appearances documented</span>
                            </div>
                        </Fragment>
                    )
            }

        </Fragment>
    )
}

export default GameAppearancesBorder;