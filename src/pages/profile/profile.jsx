import React, { Fragment, useState } from 'react';
import { Link } from "react-router-dom";

import "./profile.css"



const Profile = () => {
    const toggle = false
    return (
        <Fragment>
            {
                toggle
                    ? (
                        <span>This is the profile</span>
                    )
                    : (
                        <div className="to-profile-locations">
                            <Link className="to-create-account" to="/create-account">
                                ↽ Create account
                                </Link>

                            <span className="equal-arrow">⇌</span>

                            <Link className="to-sign-in" to="/sign-in">
                                Sign in ⇁
                                </Link>

                        </div>
                    )
            }
        </Fragment>
    )
}

export default Profile;