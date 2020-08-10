import React, { Fragment, useState } from 'react';
import { Link } from "react-router-dom";

import "./profile.css"



const Profile = () => {
    let [toggle, setToggle] = useState(true)


    const onClickFunction = () => {
        setToggle(!toggle)
    }

    return (
        <Fragment>
            <div onClick={onClickFunction}>
                {
                    toggle
                        ? (
                            <span>This is the profile</span>
                        )
                        : (
                            <div className="to-profile-locations">
                                <Link className="to-create-account">
                                    ↽ Create account
                                </Link>

                                <span className="equal-arrow">⇌</span>

                                <Link className="to-sign-in">
                                    Sign in ⇁
                                </Link>

                            </div>
                        )
                }
            </div>
        </Fragment>
    )
}

export default Profile;