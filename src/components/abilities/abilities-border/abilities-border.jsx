import React, { Fragment, lazy, Suspense } from 'react';

import "./abilities-border.css"

import Loading from "../../loading/loading.jsx"

const Abilities = lazy(() => import("../abilities.jsx"))


const AbilitiesBorder = ({ individualPokemon }) => {
    return (
        <Fragment>
            <div className="map-header">
                <h3>abilities</h3>
            </div>
            <div className="abilites-border">
                {
                    individualPokemon.abilities.map(ability => (
                        <Suspense key={ability.ability.name} fallback={<Loading />} >
                            <Abilities ability={ability} />
                        </Suspense>
                    ))
                }
            </div>
        </Fragment>
    )
}

export default AbilitiesBorder;