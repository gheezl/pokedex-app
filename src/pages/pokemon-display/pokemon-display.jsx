import React, { Fragment } from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect"

import { selectIndividualPokemon } from "../../redux/pokemon/pokemon-selectors.js"

import "./pokemon-display.css"


const PokemonDisplay = ({ individualPokemon }) => {
    console.log(individualPokemon)
    const { abilities, forms, game_indices, height, held_items, id, location_area_encounters, moves, name, species, sprites, stats, types, weight } = individualPokemon
    return (
        <Fragment>
            <div className="name">
                <span>
                    {name}:
                </span>
                <span className="num">
                    num. {id}
                </span>
            </div>
            <div className="sprite">
                <img alt="sprite" src={sprites.front_default} height="200px" width="200px" />
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
}

const mapStateToProps = createStructuredSelector({
    individualPokemon: selectIndividualPokemon
})


export default connect(mapStateToProps)(PokemonDisplay);