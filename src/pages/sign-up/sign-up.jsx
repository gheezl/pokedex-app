import React, { Fragment, Component } from 'react';

import "./sign-up.css"

import { auth, createUserProfileDocument } from "../../firebase/firebase.js"

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

        const onSubmit = async (event) => {
            event.preventDefault()

            if (password !== verifyPassword) {
                alert("Your passwords do not match. Please try again.")
                return
            }


            try {
                const { user } = await auth.createUserWithEmailAndPassword(email, password)
                console.log(user)
                createUserProfileDocument(user, { displayName })
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
                        <input onChange={onChange} className="input-field" type="text" placeholder="username" name="displayName" />
                        <input onChange={onChange} className="input-field" type="email" placeholder="email" name="email" />
                        <input onChange={onChange} className="input-field" type="password" placeholder="password" name="password" />
                        <input onChange={onChange} className="input-field" type="password" placeholder="verify password" name="verifyPassword" />
                        <button type="submit" className="custom-button">
                            submit
                    </button>
                    </form>
                </div>
            </Fragment>

        )
    }
}

export default SignUp;