import React, { Fragment, Suspense, lazy, Component } from 'react';
import { connect } from 'react-redux'

import "./view-all.css"

import { getPokemonStart } from "../../redux/pokemon/pokemon-actions.js"

import Loading from '../../components/loading/loading.jsx';

const Card = lazy(() => import("../../components/card/card.jsx"))


class ViewAll extends Component {
    constructor() {
        super();
        this.state = {
            displayCard: false,
            allPokemon: [1, 2],
            count: 1
        }
    }

    componentDidMount() {
        getPokemonStart()
        fetch("https://pokeapi.co/api/v2/pokemon?limit=964")
            .then(response => response.json())
            .then(pokemon => this.setState({ allPokemon: pokemon.results, count: pokemon.count, displayCard: true }))
    }

    componentWillUnmount() {
        this.setState = (state, callback) => {
            return;
        };
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
                        this.state.displayCard
                            ?
                            this.state.allPokemon.map(pokemon =>
                                (
                                    <Card pokemon={pokemon} />
                                )
                            )
                            : (
                                <Loading />
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