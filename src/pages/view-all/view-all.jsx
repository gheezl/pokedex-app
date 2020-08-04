import React, { Fragment, lazy, Component, useEffect } from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect"

import "./view-all.css"

import { getPokemonStart } from "../../redux/pokemon/pokemon-actions.js"
import { selectAllPokemon, SelectDisplayCard } from "../../redux/pokemon/pokemon-selectors.js"

import Loading from '../../components/loading/loading.jsx';

const Card = lazy(() => import("../../components/card/card.jsx"))


class ViewAll extends Component {
    componentDidMount() {
        this.props.getPokemonStart()
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
                        this.props.displayCard
                            ?
                            this.props.allPokemon.map(pokemon =>
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

const mapStateToProps = createStructuredSelector({
    allPokemon: selectAllPokemon,
    displayCard: SelectDisplayCard
})

const mapDispatchToProps = (dispatch) => ({
    getPokemonStart: () => dispatch(getPokemonStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(ViewAll);