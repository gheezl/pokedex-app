import React, { Fragment, useState, lazy, Suspense } from 'react';

import "./homepage.css"
import Loading from '../../components/loading/loading';

const Introduction = lazy(() => import("./introduction/introduction.jsx"))

const HomePage = () => {
    return (
        <Fragment>
            <div>
                <div className="homepage-header">
                    <img alt="pokeball" className="pokemon-image" src="pokemon.png" height="50px" />
                    <span className="welcome">Welcome to the Pokédex</span>
                    <img alt="pokeball" className="pokemon-image" src="pokemon.png" height="50px" />
                </div>
                <Suspense fallback={<Loading />}>
                    <Introduction />
                </Suspense>
            </div>
        </Fragment>
    )
}



export default HomePage;