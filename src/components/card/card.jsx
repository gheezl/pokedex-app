import React, { Fragment, Component } from 'react';

import "./card.css"


class Card extends Component {
    constructor() {
        super();
        this.state = {
            pokemonImg: 1
        }
    }



    componentDidMount() {
        fetch(this.props.pokemon.url)
            .then(response => response.json())
            .then(pokemon => this.setState({ pokemonImg: pokemon.sprites.front_default }))
    }

    componentWillUnmount() {
        this.setState = (state, callback) => {
            return;
        }
    }

    render() {
        return (
            <Fragment>
                <div className="card-border">
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

export default Card;