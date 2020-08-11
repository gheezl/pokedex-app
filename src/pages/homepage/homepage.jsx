import React, { Fragment, lazy, Suspense } from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect"

import "./homepage.css"

import { selectCurrentUser } from "../../redux/user/user-selectors.js"

import Loading from '../../components/loading/loading';
import WithFooter from "../../components/footer/with-footer/with-footer.jsx"

const Introduction = lazy(() => import("./introduction/introduction.jsx"))
const Links = lazy(() => import("./links/links.jsx"))
const ViewCode = lazy(() => import("./view-code/view-code.jsx"))
const ViewProfile = lazy(() => import("./view-profile/view-profile.jsx"))



const HomePage = ({ user }) => {
    console.log(user)

    return (
        <Fragment>
            {
                user
                    ? (
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
                    : (
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
                    )
            }
        </Fragment>
    )
}

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser
})

export default WithFooter(connect(mapStateToProps)(HomePage));