import React, { Fragment, lazy, Suspense } from 'react';

import "./homepage.css"
import Loading from '../../components/loading/loading';

const Introduction = lazy(() => import("./introduction/introduction.jsx"))
const Links = lazy(() => import("./links/links.jsx"))
const Footer = lazy(() => import("../../components/footer/footer.jsx"))

const HomePage = () => {
    return (
        <Fragment>
            <div>
                <div className="homepage-header">
                    <img alt="pokeball" className="pokemon-image" src="https://gifimage.net/wp-content/uploads/2018/04/pokeball-opening-gif-8.gif" />
                    <span className="welcome">Welcome to the Pokédex</span>
                    {/* <img alt="pokeball" className="pokemon-image" src="https://gifimage.net/wp-content/uploads/2018/04/pokeball-opening-gif-8.gif" /> */}
                </div>
                <Suspense fallback={<Loading />}>
                    <Introduction />
                    <Links />
                    <Footer />
                </Suspense>
            </div>
        </Fragment>
    )
}

export default HomePage;