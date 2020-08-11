import React, { Fragment, lazy, Suspense } from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect"

import "./homepage.css"

import { selectCurrentUser } from "../../redux/user/user-selectors.js"

import WithFooter from "../../components/footer/with-footer/with-footer.jsx"

const HomepageWithUser = lazy(() => import("./homepage-with-user/homepage-with-user.jsx"))
const HomepageWithoutUser = lazy(() => import("./homepage-without-user/homepage-without-user.jsx"))


const HomePage = ({ user }) => {
    return (
        <Fragment>
            {
                user
                    ? (
                        <HomepageWithUser user={user} />
                    )
                    : (
                        <HomepageWithoutUser />
                    )
            }
        </Fragment>
    )
}

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser
})

export default WithFooter(connect(mapStateToProps)(HomePage));