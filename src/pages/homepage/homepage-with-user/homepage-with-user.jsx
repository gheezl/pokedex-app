import React, { Fragment, lazy, Suspense } from 'react';

import Loading from "../../../components/loading/loading.jsx";

const Introduction = lazy(() => import("../introduction/introduction.jsx"))
const ViewCode = lazy(() => import("../view-code/view-code.jsx"))
const ViewProfile = lazy(() => import("../view-profile/view-profile.jsx"))


const HomepageWithUser = ({ user }) => {
    return (
        <Fragment>
            <div>
                <div className="homepage-header">
                    <img alt="pokeball" className="pokemon-image" src="pokeball-opening-gif-8.gif" />
                    <span className="welcome">Welcome to your Pokédex {user.displayName}</span>
                </div>
            </div>
            <Suspense fallback={<Loading />}>
                <Introduction />
                <div className="homepage-footer">
                    <div className="homepage-links">
                        <ViewProfile />
                    </div>
                    <div className="homepage-view-code">
                        <ViewCode />
                    </div>
                </div>
            </Suspense>
        </Fragment>
    )
}

export default HomepageWithUser;