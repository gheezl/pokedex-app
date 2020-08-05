import React, { Fragment, lazy, Suspense } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'

import { createStructuredSelector } from "reselect"

import { selectIndividualPokemon } from "../../redux/pokemon/pokemon-selectors.js"

import Loading from "../../components/loading/loading.jsx"

import "./pokemon-display.css"

const Stats = lazy(() => import("../../components/stats/stats.jsx"))
const Abilities = lazy(() => import("../../components/abilities/abilities.jsx"))
const GameAppearances = lazy(() => import("../../components/game-appearances/game-appearances.jsx"))
const MovesBorder = lazy(() => import("../../components/moves/moves-border/moves-border.jsx"))


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
                <div className="map-header">
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
                <div className="map-header">
                    <h3>abilities</h3>
                </div>
                <div className="abilites">
                    {
                        individualPokemon.abilities.map(ability => (
                            <Suspense fallback={<Loading />} >
                                <Abilities ability={ability} />
                            </Suspense>
                        ))
                    }
                </div>
                <div className="map-header">
                    <h3>game appearances</h3>
                </div>
                <div className="game-appearances">
                    {
                        individualPokemon.game_indices.map(appearance => (
                            <Suspense fallback={<Loading />} >
                                <GameAppearances appearance={appearance} />
                            </Suspense>
                        ))
                    }
                </div>
                <MovesBorder individualPokemon={individualPokemon} />
            </Fragment>
        )
        : (
            <div className="warning">
                <span>I am sorry, but there is no pokemon here.<br />
                You can search for pokemon <Link to="/search"> Here </Link><br />
                Or you can pick one <Link to="/view-all"> Here </Link>
                </span>

            </div>
        )
    );
}

const mapStateToProps = createStructuredSelector({
    individualPokemon: selectIndividualPokemon
})


export default connect(mapStateToProps)(PokemonDisplay);