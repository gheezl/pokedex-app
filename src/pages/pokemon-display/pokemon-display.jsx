import React, { Fragment, lazy, Suspense } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'

import { createStructuredSelector } from "reselect"

import { selectIndividualPokemon } from "../../redux/pokemon/pokemon-selectors.js"

import "./pokemon-display.css"

const MovesBorder = lazy(() => import("../../components/moves/moves-border/moves-border.jsx"))
const StatsBorder = lazy(() => import("../../components/stats/stats-border/stats-border.jsx"))
const AbilitiesBorder = lazy(() => import("../../components/abilities/abilities-border/abilities-border.jsx"))
const GameAppearancesBorder = lazy(() => import("../../components/game-appearances/game-appearances-border/game-appearances-border.jsx"))


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
                <StatsBorder individualPokemon={individualPokemon} />
                <AbilitiesBorder individualPokemon={individualPokemon} />
                <GameAppearancesBorder individualPokemon={individualPokemon} />
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