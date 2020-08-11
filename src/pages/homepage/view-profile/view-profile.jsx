import React, { Fragment } from 'react';
import { Link } from "react-router-dom";

import "./view-profile.css"


const ViewProfile = () => {
    return (
        <Fragment>
            <div className="view-profile">
                <h2>View profile</h2>
            </div>
            <div className="to-profile-border">
                <Link className="to-profile" to="/profile">↽ Your profile ⇁</Link>
            </div>
        </Fragment>
    )
}

export default ViewProfile;