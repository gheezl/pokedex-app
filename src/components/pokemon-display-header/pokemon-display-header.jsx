import React, { Fragment, lazy, Suspense } from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect"

import "./pokemon-display-header.css"

import { selectCurrentUser } from "../../redux/user/user-selectors.js"
import { selectIndividualPokemonData } from "../../redux/pokemon/pokemon-selectors.js"
import { setPokemonStart } from "../../redux/user/user-actions.js"

const Type = lazy(() => import("./type/type.jsx"))


const PokemonDisplayHeader = ({ individualPokemon, user, individualPokemonData, setPokemonStart }) => {
    console.log(individualPokemonData)

    const onClickFunction = () => {
        setPokemonStart({ user, individualPokemonData })
    }

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
                            <button onClick={onClickFunction} className="add-pokemon-button">
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

const mapDispatchToProps = (dispatch) => ({
    setPokemonStart: (pokemon) => dispatch(setPokemonStart(pokemon))
})

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDisplayHeader);