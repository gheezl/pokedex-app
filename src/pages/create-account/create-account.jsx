import React, { Fragment } from 'react';

import "./create-account.css"

const CreateAccount = () => {
    return (
        <Fragment>
            <span className="sign-in-header">
                Sign up
            </span>
            <div className="sign-in-form-border">
                <form className="sign-in-form">
                    <input className="input-field" type="text" placeholder="username" />
                    <input className="input-field" type="email" placeholder="email" />
                    <input className="input-field" type="password" placeholder="password" />
                    <input className="input-field" type="password" placeholder="verify password" />
                    <button type="submit" className="custom-button">
                        submit
                    </button>
                </form>
            </div>
        </Fragment>

    )
}

export default CreateAccount;