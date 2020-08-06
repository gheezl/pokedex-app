import React, { Fragment, lazy, Component } from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect"

import "./view-all.css"

import { getPokemonStart } from "../../redux/pokemon/pokemon-actions.js"
import { selectAllPokemon, selectDisplayCard, selectNext, selectPrevious } from "../../redux/pokemon/pokemon-selectors.js"

import Loading from '../../components/loading/loading.jsx';

const Card = lazy(() => import("../../components/card/card.jsx"))



class ViewAll extends Component {
    componentDidMount() {
        this.props.getPokemonStart("https://pokeapi.co/api/v2/pokemon?limit=28")
    }

    render() {
        const NextPage = () => {
            this.props.getPokemonStart(this.props.next)
        }

        const PreviousPage = () => {
            this.props.getPokemonStart(this.props.previous)
        }

        return (
            <Fragment>
                <div className="page-header">
                    <span onClick={PreviousPage} className="previous" >⥊ previous</span>
                    <h2>
                        all pokemon
                    </h2>
                    <span onClick={NextPage} className="next">next ⥋</span>
                </div>
                <div className="card">
                    {
                        this.props.displayCard
                            ?
                            this.props.allPokemon.map(pokemon => {
                                return (<Card name={pokemon.name} url={pokemon.url} sprite={"hi"} />)
                            }
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
    displayCard: selectDisplayCard,
    next: selectNext,
    previous: selectPrevious
})

const mapDispatchToProps = (dispatch) => ({
    getPokemonStart: (url) => dispatch(getPokemonStart(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(ViewAll);