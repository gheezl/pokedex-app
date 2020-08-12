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
                <span className="your-profile">Username: {user.displayName}</span>

                <span className="your-profile">Email: {user.email}</span>

                <div className="your-profile-actions">
                    <Link className="your-profile-view" to="/pokemon-collection">View your Pokémon collection</Link>

                    <span onClick={onClickFunction} className="your-profile-sign-out">Sign out</span>
                </div>
            </div>
        </Fragment>
    )
}

const mapDispatchToProps = (dispatch) => ({
    signOutStart: () => dispatch(signOutStart())
})

export default connect(null, mapDispatchToProps)(YourProfile);