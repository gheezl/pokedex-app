import React, { Fragment, lazy, Component } from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect"

import "./view-all.css"

import { getPokemonStart } from "../../redux/pokemon/pokemon-actions.js"
import { selectAllPokemon, selectDisplayCard, selectNext, selectPrevious } from "../../redux/pokemon/pokemon-selectors.js"

import Loading from '../../components/loading/loading.jsx';
import pokemonDisplay from '../pokemon-display/pokemon-display';

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

        const getSprite = async (url) => {
            const response = await fetch(url);
            const pokemon = await response.json();
            return pokemon.sprites.front_default;
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
                                const spriteUrl = getSprite(pokemon.url)
                                return (<Card name={pokemon.name} url={pokemon.url} sprite={spriteUrl} />)
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