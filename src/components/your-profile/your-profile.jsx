import React, { Fragment } from 'react';

import "./your-profile.css"

import { signOutStart } from "../../redux/user/user-actions.js"


const YourProfile = ({ user }) => {

    const onClickFunction = () => {
        signOutStart()
    }


    return (
        <Fragment>
            <div className="your-profile-border">
                <span className="your-profile">Username: {user.displayName}</span>

                <span className="your-profile">Email: {user.email}</span>

                <div className="your-profile-actions">
                    <span className="your-profile-view">View your Pokémon collection</span>

                    <span onClick={onClickFunction} className="your-profile-sign-out">Sign out</span>
                </div>
            </div>
        </Fragment>
    )
}

const mapDispatchToProps = (dispatch) => ({
    signOutStart: () => dispatch(signOutStart)
})

export default YourProfile;