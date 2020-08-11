import React, { Fragment } from 'react';

import "./your-profile.css"


const YourProfile = ({ user }) => {
    return (
        <Fragment>
            <div className="your-profile">
                <h1>Your profile</h1>
            </div>
            <div className="your-profile">
                <h2>Username: {user.displayName}</h2>
            </div>
            <div className="your-profile">
                <h2>Email: {user.email}</h2>
            </div>
            <div className="your-profile">
                <button className="your-profile-button">Your Pokémon collection</button>
            </div>
        </Fragment>
    )
}

export default YourProfile;