import React, { Fragment, lazy, Component } from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect"

import "./view-all.css"

import { getPokemonStart } from "../../redux/pokemon/pokemon-actions.js"
import { selectAllPokemon, selectDisplayCard, selectNext, selectPrevious } from "../../redux/pokemon/pokemon-selectors.js"

import Loading from '../../components/loading/loading.jsx';
import WithFooter from "../../components/footer/with-footer/with-footer.jsx"

const Card = lazy(() => import("../../components/card/card.jsx"))



class ViewAll extends Component {
    constructor() {
        super();
        this.state = {
            counter: 1
        }
    }


    componentDidMount() {
        this.props.getPokemonStart("https://pokeapi.co/api/v2/pokemon?limit=28")
    }

    render() {
        const { counter } = this.state
        const { getPokemonStart, allPokemon, next, previous, displayCard } = this.props


        const NextPage = () => {
            getPokemonStart(next)

            if (counter < 34) {
                this.setState({ counter: counter + 1 })
            }
        }

        const PreviousPage = () => {
            getPokemonStart(previous)

            if (counter > 1) {
                this.setState({ counter: counter - 1 })
            }
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
                        displayCard
                            ?
                            allPokemon.map(pokemon => {
                                return (
                                    <Card name={pokemon.name} url={pokemon.url} sprite={"hi"} key={pokemon.name} />
                                )
                            }
                            )
                            : (
                                <Loading />
                            )
                    }
                </div>
                <span className="counter">
                    Page {counter}/ 34
                    </span>
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

export default WithFooter(connect(mapStateToProps, mapDispatchToProps)(ViewAll));