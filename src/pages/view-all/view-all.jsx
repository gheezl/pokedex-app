import React, { Fragment, Suspense, lazy, Component } from 'react';

import "./view-all.css"

const Card = lazy(() => import("../../components/card/card.jsx"))


class ViewAll extends Component {
    constructor() {
        super();
        this.state = {
            allPokemon: [1, 2],
            count: 1,
            next: 1,
            previous: 1,
        }
    }


    componentDidMount() {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=50")
            .then(response => response.json())
            .then(pokemon => this.setState({ allPokemon: pokemon.results, count: pokemon.count, next: pokemon.next, previous: pokemon.previous }))
    }


    previousPage = () => {
        fetch(this.state.previous)
            .then(response => response.json())
            .then(pokemon => this.setState({ allPokemon: pokemon.results, count: pokemon.count, next: pokemon.next, previous: pokemon.previous }))
    }


    nextPage = () => {
        fetch(this.state.next)
            .then(response => response.json())
            .then(pokemon => this.setState({ allPokemon: pokemon.results, count: pokemon.count, next: pokemon.next, previous: pokemon.previous }))
    }


    render() {
        console.log(this.state)
        return (
            <Fragment>
                <div className="number">
                    <span onClick={this.previousPage} className="previous" >
                        previous
                    </span>
                    <h2>
                        all pokemon
                    </h2>
                    <span onClick={this.nextPage} className="next">
                        next
                    </span>
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

export default ViewAll;