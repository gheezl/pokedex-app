import React, { Fragment } from 'react';

import "./sign-in.css"


const SignIn = () => {
    return (
        <Fragment>
            <span className="sign-in-header">
                Sign in
        </span>
            <div className="sign-in-form-border">
                <form className="sign-in-form">
                    <input className="input-field" type="email" placeholder="email" />
                    <input className="input-field" type="password" placeholder="password" />
                    <button type="submit" className="custom-button">
                        submit
                    </button>
                </form>
            </div>
        </Fragment>
    )
}

export default SignIn;