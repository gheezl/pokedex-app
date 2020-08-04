import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect"

import { selectIndividualPokemon } from "../../redux/pokemon/pokemon-selectors.js"

import "./pokemon-display.css"


const PokemonDisplay = ({ individualPokemon }) => {
    // const { abilities, forms, game_indices, height, held_items, id, location_area_encounters, moves, name, species, sprites, stats, types, weight } = individualPokemon

    return (individualPokemon
        ?
        (
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
                <div className="sprite">
                    <img alt="sprite" src={individualPokemon.sprites.front_default} height="200px" width="200px" />
                </div>
                <div className="stats-header">
                    <h3>
                        stats
                </h3>
                </div>
                <div className="stats">


                </div>

            </Fragment>
        )
        : (
            <div className="warning">
                <span>I am sorry, but there is no pokemon here.</span>
            </div>
        ));
}

const mapStateToProps = createStructuredSelector({
    individualPokemon: selectIndividualPokemon
})


export default connect(mapStateToProps)(PokemonDisplay);