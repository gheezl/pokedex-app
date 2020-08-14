import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux'

import "./sign-in.css"

import { signInStart } from "../../redux/user/user-actions.js"


class SignIn extends Component {
    constructor() {
        super();
        this.state = {
            password: '',
            email: ''
        }
    }

    render() {
        const { password, email } = this.state
        const { signInStart } = this.props

        const onSubmit = async (event) => {
            event.preventDefault()

            try {
                signInStart({ email, password })
            }
            catch (error) {
                alert(error.message)
            }
        }

        const onChange = (event) => {
            const name = event.target.name
            const value = event.target.value

            this.setState({ [name]: value })
        }

        return (
            <Fragment>
                <span className="sign-in-header">
                    Sign in
                </span>
                <div className="sign-in-form-border">
                    <form className="sign-in-form" onSubmit={onSubmit}>
                        <input onChange={onChange} className="input-field" type="email" placeholder="email" name="email" />
                        <input onChange={onChange} className="input-field" type="password" placeholder="password" name="password" />
                        <button type="submit" className="custom-button">
                            submit
                        </button>
                    </form>
                </div>
            </Fragment>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    signInStart: (emailAndPassword) => dispatch(signInStart(emailAndPassword))
})

export default connect(null, mapDispatchToProps)(SignIn);