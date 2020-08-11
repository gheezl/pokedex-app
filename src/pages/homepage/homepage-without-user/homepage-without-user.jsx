import React, { Fragment, lazy, Suspense } from 'react';

import Loading from "../../../components/loading/loading.jsx";

const Introduction = lazy(() => import("../introduction/introduction.jsx"))
const ViewCode = lazy(() => import("../view-code/view-code.jsx"))
const Links = lazy(() => import("../links/links.jsx"))


const HomepageWithoutUser = () => {
    return (
        <Fragment>
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
        </Fragment>
    )
}

export default HomepageWithoutUser;