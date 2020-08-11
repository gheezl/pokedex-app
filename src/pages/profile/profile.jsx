import React, { Fragment } from 'react';
import { Link } from "react-router-dom";

import "./profile.css"
import { auth } from '../../firebase/firebase';



const Profile = () => {
    const toggle = false

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

                            <button onClick={SignOut} >Sign out</button>
                        </div>
                    )
            }
        </Fragment>
    )
}

export default Profile;