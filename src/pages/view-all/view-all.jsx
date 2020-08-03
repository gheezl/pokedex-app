import React, { Fragment, Suspense, lazy, Component, useCallback } from 'react';
import { connect } from 'react-redux'

import "./view-all.css"

import { getPokemonStart } from "../../redux/pokemon/pokemon-actions.js"

const Card = lazy(() => import("../../components/card/card.jsx"))


class ViewAll extends Component {
    constructor() {
        super();
        this.state = {
            allPokemon: [1, 2, 3],
            count: 1
        }
    }

    // dispatch = useDispatch()
    // getPokemon = useCallback(
    //     () => this.dispatch({ getPokemonStart }),
    //     [this.dispatch]
    // )


    componentDidMount() {
        getPokemonStart()
        fetch("https://pokeapi.co/api/v2/pokemon?limit=964")
            .then(response => response.json())
            .then(pokemon => this.setState({ allPokemon: pokemon.results, count: pokemon.count }))
    }


    render() {
        return (
            <Fragment>
                <div className="page-header">
                    <h2>
                        ⥊ all pokemon ⥋
                    </h2>
                </div>
                <div className="card">
                    {
                        this.state.allPokemon.map(pokemon =>
                            (
                                <Card pokemon={pokemon} />
                            )
                        )
                    }
                </div>
            </Fragment>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    getPokemonStart: () => dispatch(getPokemonStart())
})

export default connect(null, mapDispatchToProps)(ViewAll);