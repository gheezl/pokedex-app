import React, { Fragment, Component } from 'react';

import "./sign-up.css"

import { auth, createUserProfileDocument } from "../../firebase/firebase.js"

import { signUpStart } from "../../redux/user/user-actions.js"
import { connect } from 'react-redux';


class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            verifyPassword: '',
        }
    }

    render() {
        const { displayName, email, password, verifyPassword } = this.state
        const { signUpStart } = this.props

        const onSubmit = async (event) => {
            event.preventDefault()

            if (password !== verifyPassword) {
                alert("Your passwords do not match. Please try again.")
                return
            }
            else {
                try {
                    // const { user } = await auth.createUserWithEmailAndPassword(email, password)
                    // createUserProfileDocument(user, { displayName })
                    signUpStart({ displayName, email, password })
                    this.setState({
                        displayName: '',
                        email: '',
                        password: '',
                        verifyPassword: '',
                    })
                }
                catch (error) {
                    alert(error.message)
                }
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
                    Sign up
            </span>
                <div className="sign-in-form-border">
                    <form className="sign-in-form" onSubmit={onSubmit}>
                        <input onChange={onChange} className="input-field" type="text" placeholder="username" name="displayName" required />
                        <input onChange={onChange} className="input-field" type="email" placeholder="email" name="email" required />
                        <input onChange={onChange} className="input-field" type="password" placeholder="password" name="password" required />
                        <input onChange={onChange} className="input-field" type="password" placeholder="verify password" name="verifyPassword" required />
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
    signUpStart: (data) => dispatch(signUpStart(data))
})

export default connect(null, mapDispatchToProps)(SignUp);