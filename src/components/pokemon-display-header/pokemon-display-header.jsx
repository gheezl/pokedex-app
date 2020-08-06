import React, { Fragment, lazy, Suspense } from 'react';

import "./pokemon-display-header.css"

const Type = lazy(() => import("./type/type.jsx"))

const PokemonDisplayHeader = ({ individualPokemon }) => {
    return (
        <Fragment>
            <div className="num">
                <span>
                    num. {individualPokemon.id}
                </span>
            </div>
            <Suspense fallback="Loading...">
                <Type type={individualPokemon.types} />
            </Suspense>
            <div className="name">
                <h2>
                    {individualPokemon.name}
                </h2>
            </div>
            {
                individualPokemon.sprites.front_default
                    ? (
                        <div className="sprite">
                            <img alt="sprite" src={individualPokemon.sprites.front_default} height="200px" width="200px" />
                        </div>
                    )
                    : (
                        <span className="no-image">No Image available</span>
                    )
            }

        </Fragment>
    )
}

export default PokemonDisplayHeader;