import React, { Fragment, lazy, Suspense } from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect"

import "./pokemon-display-header.css"

import { selectCurrentUser } from "../../redux/user/user-selectors.js"
import { selectIndividualPokemonData, selectDisplayButton } from "../../redux/pokemon/pokemon-selectors.js"
import { setPokemonStart, removePokemonStart } from "../../redux/user/user-actions.js"
import { getIndividualPokemonStart } from "../../redux/pokemon/pokemon-actions.js"

const Type = lazy(() => import("./type/type.jsx"))
const RemovePokemonButton = lazy(() => import("./remove-pokemon-button/remove-pokemon-button.jsx"))
const AddPokemonButton = lazy(() => import("./add-pokemon-button/add-pokemon-button.jsx"))


const PokemonDisplayHeader = ({ individualPokemon, user, individualPokemonData, setPokemonStart, removePokemonStart, displayButton, getIndividualPokemonStart }) => {

    const onAddFunction = () => {
        setPokemonStart({ user, individualPokemonData })
    }

    const onRemoveFunction = () => {
        removePokemonStart({ user, individualPokemonData })
    }

    const getPokemon = (url) => {
        let name = null
        fetch(url)
            .then(response => response.json())
            .then(pokemon => name = pokemon.name)
            .then(() => getIndividualPokemonStart({ url, name, user }))
    }

    const nextPokemon = () => {
        const url = `https://pokeapi.co/api/v2/pokemon/${individualPokemon.id + 1}`
        getPokemon(url)
    }

    const previousPokemon = () => {
        const url = `https://pokeapi.co/api/v2/pokemon/${individualPokemon.id - 1}`
        getPokemon(url)
    }

    return (
        <Fragment>

            <div className="num-next-previous">
                <span onClick={previousPokemon} className="previous-arrow">⥊ previous</span>
                <span className="id-num">
                    num. {individualPokemon.id}
                </span>
                <span onClick={nextPokemon} className="next-arrow">next ⥋</span>
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
    removePokemonStart: (pokemon) => dispatch(removePokemonStart(pokemon)),
    getIndividualPokemonStart: (url) => dispatch(getIndividualPokemonStart(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDisplayHeader);