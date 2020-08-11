import React, { Fragment, lazy, Suspense } from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect"

import "./pokemon-display-header.css"

import { selectCurrentUser } from "../../redux/user/user-selectors.js"
import { selectIndividualPokemonData } from "../../redux/pokemon/pokemon-selectors.js"

const Type = lazy(() => import("./type/type.jsx"))


const PokemonDisplayHeader = ({ individualPokemon, user, individualPokemonData }) => {
    console.log(individualPokemonData)
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
            {
                user
                    ? (
                        <div className="add-pokemon-border">
                            <button className="add-pokemon-button">
                                Add pokemon to collection
                        </button>
                        </div>
                    )
                    : (
                        null
                    )
            }

        </Fragment>
    )
}

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser,
    individualPokemonData: selectIndividualPokemonData
})

// const mapDispatchToProps = (dispatch) => ({

// })

export default connect(mapStateToProps)(PokemonDisplayHeader);