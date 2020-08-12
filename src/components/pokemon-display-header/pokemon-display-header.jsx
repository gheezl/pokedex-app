import React, { Fragment, lazy, Suspense, Component } from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect"

import "./pokemon-display-header.css"

import { selectCurrentUser } from "../../redux/user/user-selectors.js"
import { selectIndividualPokemonData } from "../../redux/pokemon/pokemon-selectors.js"
import { setPokemonStart } from "../../redux/user/user-actions.js"

const Type = lazy(() => import("./type/type.jsx"))
const RemovePokemonButton = lazy(() => import("./remove-pokemon-button/remove-pokemon-button.jsx"))
const AddPokemonButton = lazy(() => import("./add-pokemon-button/add-pokemon-button.jsx"))


class PokemonDisplayHeader extends Component {
    constructor() {
        super();
        this.state = {
            displayRemove: false
        }
    }

    componentDidMount() {
        const { individualPokemon, user, individualPokemonData } = this.props
        if (!user) return;
        console.log(individualPokemonData.name)

        user.pokemon.map(pokemon => {
            console.log(pokemon.name, individualPokemon.name)
            if (pokemon.name === individualPokemon.name) {
                this.setState({ displayRemove: true })
            }
        })

    }

    render() {
        const { individualPokemon, user, individualPokemonData, setPokemonStart } = this.props
        const { displayRemove } = this.state

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
                            <Fragment>
                                {
                                    displayRemove
                                        ? (<RemovePokemonButton displayRemove={displayRemove} />)
                                        : (<AddPokemonButton onClickFunction={onClickFunction} />)
                                }
                            </Fragment>
                        )
                        : (null)
                }
            </Fragment>
        )
    }

}

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser,
    individualPokemonData: selectIndividualPokemonData
})

const mapDispatchToProps = (dispatch) => ({
    setPokemonStart: (pokemon) => dispatch(setPokemonStart(pokemon))
})

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDisplayHeader);