import React, { Fragment } from 'react';

import "./sign-in.css"

import CustomButton from "../../components/custom-button/custom-button.jsx"


const SignIn = () => {
    return (
        <Fragment>
            <span className="sign-in-header">
                Sign in
        </span>
            <div>
                <form className="sign-in-form">
                    <input className="input-field" type="text" placeholder="username" />
                    <input className="input-field" type="text" placeholder="email" />
                    <input className="input-field" type="password" placeholder="password" />
                    <CustomButton label="Sign In" type="submit" />
                </form>
            </div>
        </Fragment>
    )
}

export default SignIn;