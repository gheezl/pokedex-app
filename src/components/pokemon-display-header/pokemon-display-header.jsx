import React, { Fragment, lazy, Suspense } from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect"

import "./pokemon-display-header.css"

import { selectCurrentUser } from "../../redux/user/user-selectors.js"
import { selectIndividualPokemonData, selectDisplayButton } from "../../redux/pokemon/pokemon-selectors.js"
import { setPokemonStart, removePokemonStart } from "../../redux/user/user-actions.js"

const Type = lazy(() => import("./type/type.jsx"))
const RemovePokemonButton = lazy(() => import("./remove-pokemon-button/remove-pokemon-button.jsx"))
const AddPokemonButton = lazy(() => import("./add-pokemon-button/add-pokemon-button.jsx"))


const PokemonDisplayHeader = ({ individualPokemon, user, individualPokemonData, setPokemonStart, removePokemonStart, displayButton }) => {

    const onAddFunction = () => {
        setPokemonStart({ user, individualPokemonData })
    }

    const onRemoveFunction = () => {
        removePokemonStart({ user, individualPokemonData })
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
                        <Fragment>
                            {
                                displayButton
                                    ? (<RemovePokemonButton onClickFunction={onRemoveFunction} />)
                                    : (<AddPokemonButton onClickFunction={onAddFunction} />)
                            }
                        </Fragment>
                    )
                    : (null)
            }
        </Fragment>
    )


}

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser,
    individualPokemonData: selectIndividualPokemonData,
    displayButton: selectDisplayButton
})

const mapDispatchToProps = (dispatch) => ({
    setPokemonStart: (pokemon) => dispatch(setPokemonStart(pokemon)),
    removePokemonStart: (pokemon) => dispatch(removePokemonStart(pokemon))
})

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDisplayHeader);