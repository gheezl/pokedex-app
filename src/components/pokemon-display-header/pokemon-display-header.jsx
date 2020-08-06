import React, { Fragment, lazy, Suspense } from 'react';

import "./pokemon-display-header.css"

const PokemonDisplayHeader = ({ individualPokemon }) => {
    return (
        <Fragment>
            <div className="num">
                <span>
                    num. {individualPokemon.id}
                </span>
            </div>
            <div className="name">
                <span>
                    {individualPokemon.name}
                </span>
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