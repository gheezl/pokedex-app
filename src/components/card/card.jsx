import React, { Fragment, Component } from 'react';
import { withRouter } from "react-router-dom"
import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect"

import { getIndividualPokemonStart } from "../../redux/pokemon/pokemon-actions.js"

import "./card.css"


class Card extends Component {
    constructor() {
        super();
        this.state = {
            pokemonImg: 1,
        }
    }

    componentDidMount() {
        fetch(this.props.pokemon.url)
            .then(response => response.json())
            .then(pokemon => this.setState({ pokemonImg: pokemon.sprites.front_default }))
    }

    componentWillUnmount() {
        this.props.getIndividualPokemonStart(this.props.pokemon.url)
        this.props.history.push("/display")
        this.setState = (state, callback) => {
            return;
        }
    }

    // onClickFunction() {
    //     this.props.history.push("/")
    // }

    render() {
        return (
            <Fragment>
                <div onClick={this.onClickFunction} className="card-border">
                    <div className="image">
                        <img alt="" src={this.state.pokemonImg} />
                    </div>
                    <div className="name">
                        <span>{this.props.pokemon.name}</span>
                    </div>
                </div>
            </Fragment>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    getIndividualPokemonStart: (url) => dispatch(getIndividualPokemonStart(url))
})

export default connect(null, mapDispatchToProps)(withRouter(Card));