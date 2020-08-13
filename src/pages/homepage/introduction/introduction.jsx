import React, { Fragment } from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect"

import "./introduction.css"

import { selectCurrentUser } from "../../../redux/user/user-selectors.js"


const Introduction = ({ user }) => {
    return (
        <Fragment>
            <div className="introduction">
                <span className="introduction-message">Introduction</span>
                <div className="introduction-content">

                    {
                        user
                            ? (
                                <Fragment>
                                    <span className="introduction-paragraph">
                                        Hi {user.displayName}! Welcome to your Pokédex! If you want to add a Pokémon to your personal Pokémon collection just use either the
                                        search bar or the view all tab in the top right corner to find a Pokémon.
                                    </span>
                                    <span className="introduction-paragraph">
                                        You can view your collection in the profile tab on your top right.
                                        Enjoy yourself {user.displayName}!
                                    </span>
                                </Fragment>
                            )
                            : (
                                <Fragment>
                                    <span className="introduction-paragraph">
                                        Hi! Welcome to the Pokédex, here you will find access to more than 900 Pokémon and all of their relevant information.
                                        You can view all Pokémon by clicking on the View all tab
                                        on your top right, or you can use the Search bar to look up a specific Pokémon.
                                    </span>
                                    <span className="introduction-paragraph">
                                        If you create an account and sign in, you can also add Pokémon to your own personal Pokémon collection.
                                    </span>
                                </Fragment>
                            )
                    }


                    <span className="fun">
                        Have fun!
                    </span>
                </div>
            </div>
        </Fragment>
    )
}

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser
})


export default connect(mapStateToProps)(Introduction);