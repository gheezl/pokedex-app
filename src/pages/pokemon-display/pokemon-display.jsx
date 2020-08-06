import React, { Fragment, lazy, Suspense } from 'react';
import { connect } from 'react-redux'

import { createStructuredSelector } from "reselect"

import { selectIndividualPokemon } from "../../redux/pokemon/pokemon-selectors.js"

import "./pokemon-display.css"
import Loading from '../../components/loading/loading.jsx';

const PokemonDisplayHeader = lazy(() => import("../../components/pokemon-display-header/pokemon-display-header.jsx"))

const StatsBorder = lazy(() => import("../../components/stats/stats-border/stats-border.jsx"))
const AbilitiesBorder = lazy(() => import("../../components/abilities/abilities-border/abilities-border.jsx"))
const GameAppearancesBorder = lazy(() => import("../../components/game-appearances/game-appearances-border/game-appearances-border.jsx"))
const MovesBorder = lazy(() => import("../../components/moves/moves-border/moves-border.jsx"))
const Warning = lazy(() => import("./warning/warning.jsx"))


const PokemonDisplay = ({ individualPokemon }) => {
    // const { abilities, forms, game_indices, height, held_items, id, location_area_encounters, moves, name, species, sprites, stats, types, weight } = individualPokemon

    return (individualPokemon
        ?
        (
            <Fragment>
                <Suspense fallback={<Loading />}>
                    <PokemonDisplayHeader individualPokemon={individualPokemon} />
                    <StatsBorder individualPokemon={individualPokemon} />
                    <AbilitiesBorder individualPokemon={individualPokemon} />
                    <GameAppearancesBorder individualPokemon={individualPokemon} />
                    <MovesBorder individualPokemon={individualPokemon} />
                </Suspense>
            </Fragment>
        )
        : (
            <Warning />
        )
    );
}

const mapStateToProps = createStructuredSelector({
    individualPokemon: selectIndividualPokemon
})


export default connect(mapStateToProps)(PokemonDisplay);