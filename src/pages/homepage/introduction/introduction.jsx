import React, { Fragment } from 'react';

import "./introduction.css"

const Introduction = () => {
    return (
        <Fragment>
            <div className="introduction">
                <span className="introduction-message">Introduction</span>
                <div className="introduction-content">
                    <span className="introduction-paragraph">
                        Hi! Welcome to your Pokédex, here you will find access to more than 900 pokemon and all of their relevant information. You can view all Pokémon by clicking on the View all tab
                        on your top right, or you can use the Search bar to look up a specific Pokémon.
                    </span>
                    <span className="introduction-paragraph">
                        If you create an account and sign in, you can also add pokemon to your own personal Pokémon collection for you to view.
                    </span>
                    <span className="fun">
                        Have fun!
                    </span>
                </div>
            </div>
        </Fragment>
    )
}


export default Introduction;