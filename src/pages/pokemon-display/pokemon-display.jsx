import React, { Fragment } from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect"

import "./pokemon-display.css"


const PokemonDisplay = () => {
    return (
        <Fragment>
            <div className="name">
                <span>
                    pikachu:
                </span>
                <span className="num">
                    num. 35
                </span>
            </div>
            <div className="sprite">
                <img alt="sprite" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" height="200px" width="200px" />
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



export default PokemonDisplay;