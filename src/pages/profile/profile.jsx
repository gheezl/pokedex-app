import React, { Fragment, lazy, Suspense } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect"
import { auth } from '../../firebase/firebase';

import "./profile.css"

import { selectCurrentUser } from "../../redux/user/user-selectors.js"

const YourProfile = lazy(() => import("../../components/your-profile/your-profile.jsx"))


const Profile = ({ user }) => {
    console.log(user)

    const SignOut = () => {
        auth.signOut()
            .then(() => {
                console.log("Signed out")
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <Fragment>
            {
                user
                    ? (
                        <YourProfile user={user} />
                    )
                    : (
                        <Fragment>
                            <div className="to-profile-locations">
                                <Link className="to-create-account" to="/sign-up">
                                    ↽ Sign up
                                </Link>

                                <span className="equal-arrow">⇌</span>

                                <Link className="to-sign-in" to="/sign-in">
                                    Sign in ⇁
                                </Link>
                            </div>
                        </Fragment>
                    )
            }
        </Fragment>
    )
}

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser
})

export default connect(mapStateToProps)(Profile);