import React, { Fragment } from 'react';
import { Link } from "react-router-dom";

import "./profile.css"
import { auth } from '../../firebase/firebase';



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
                                ↽ Sign up
                            </Link>

                            <span className="equal-arrow">⇌</span>

                            <Link className="to-sign-in" to="/sign-in">
                                Sign in ⇁
                            </Link>

                            <button onClick={() => auth.signOut()} >Sign out</button>
                        </div>
                    )
            }
        </Fragment>
    )
}

export default Profile;