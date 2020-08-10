import React, { Fragment, lazy, Suspense } from 'react';

import "./homepage.css"

import Loading from '../../components/loading/loading';
import WithFooter from "../../components/footer/with-footer/with-footer.jsx"

const Introduction = lazy(() => import("./introduction/introduction.jsx"))
const Links = lazy(() => import("./links/links.jsx"))
const ViewCode = lazy(() => import("./view-code/view-code.jsx"))
// const Footer = lazy(() => import("../../components/footer/footer.jsx"))

const HomePage = () => {
    return (
        <Fragment>
            <div>
                <div className="homepage-header">
                    <img alt="pokeball" className="pokemon-image" src="pokeball-opening-gif-8.gif" />
                    <span className="welcome">Welcome to the Pokédex</span>
                </div>
                <Suspense fallback={<Loading />}>
                    <Introduction />
                    <div className="homepage-footer">
                        <div className="homepage-links">
                            <Links />
                        </div>
                        <div className="homepage-view-code">
                            <ViewCode />
                        </div>
                    </div>
                </Suspense>
            </div>
        </Fragment>
    )
}

export default WithFooter(HomePage);