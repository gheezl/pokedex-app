import React, { Fragment } from 'react';
import { connect } from 'react-redux'
import { Link } from "react-router-dom";


import "./your-profile.css"

import { signOutStart } from "../../redux/user/user-actions.js"


const YourProfile = ({ user, signOutStart }) => {

    const onClickFunction = () => {
        signOutStart()
    }


    return (
        <Fragment>
            <div className="your-profile-border">

                <div className="username-and-email">
                    <span className="username-and-email-title">Username:</span>
                    <span className="username-and-email-display">{user.displayName}</span>

                    <span className="username-and-email-title">Email:</span>
                    <span className="username-and-email-display">{user.email}</span>
                </div>

                <div className="your-profile-actions">
                    <Link className="your-profile-view" to="/pokemon-collection">↽ View your Pokémon collection</Link>

                    <span className="middle-arrow">⇌</span>

                    <span onClick={onClickFunction} className="your-profile-sign-out">Sign out of account⇁</span>
                </div>
            </div>
        </Fragment>
    )
}

const mapDispatchToProps = (dispatch) => ({
    signOutStart: () => dispatch(signOutStart())
})

export default connect(null, mapDispatchToProps)(YourProfile);