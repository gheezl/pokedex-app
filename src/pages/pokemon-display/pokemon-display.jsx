import React, { Fragment, lazy, Suspense } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'

import { createStructuredSelector } from "reselect"

import { selectIndividualPokemon } from "../../redux/pokemon/pokemon-selectors.js"

import Loading from "../../components/loading/loading.jsx"

import "./pokemon-display.css"

const Stats = lazy(() => import("../../components/stats/stats.jsx"))


const PokemonDisplay = ({ individualPokemon }) => {
    // const { abilities, forms, game_indices, height, held_items, id, location_area_encounters, moves, name, species, sprites, stats, types, weight } = individualPokemon

    return (individualPokemon
        ?
        (
            <Fragment>
                <div className="num">
                    <span>
                        num. {individualPokemon.id}
                    </span>
                </div>
                <div className="name">
                    <span>
                        {individualPokemon.name}
                    </span>
                </div>
                <div className="sprite">
                    <img alt="sprite" src={individualPokemon.sprites.front_default} height="200px" width="200px" />
                </div>
                <div className="stats-header">
                    <h3>stats</h3>
                </div>
                <div className="stats">
                    {
                        individualPokemon.stats.map(stat => (
                            <Suspense fallback={<Loading />}>
                                <Stats stat={stat} />
                            </Suspense>
                        ))
                    }
                </div>

            </Fragment>
        )
        : (
            <div className="warning">
                <span>I am sorry, but there is no pokemon here.<br />
                You can search for pokemon <Link to="/search"> Here </Link><br />
                Or you can pick one <Link to="/view-all"> Here </Link>
                </span>

            </div>
        ));
}

const mapStateToProps = createStructuredSelector({
    individualPokemon: selectIndividualPokemon
})


export default connect(mapStateToProps)(PokemonDisplay);