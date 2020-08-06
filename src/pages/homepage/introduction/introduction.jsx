import React, { Fragment, useState } from 'react';

import "./introduction.css"

const Introduction = () => {
    return (
        <Fragment>
            <div className="introduction">
                <span className="introduction-message">Introduction</span>
                <div className="introduction-content">
                    <span className="introduction-paragraph">
                        Hi! Welcome to your Pokédex, here you will find access to more than 900 pokemon and all of their relevant information. You can view all Pokémon by clicking on the View all tab
                        on your top right, or you can use the Search bar to look up a specific Pokémon. Have fun!
                                </span>
                    <img alt="" className="intoduction-image" src="https://wallpapercave.com/wp/uk90alx.jpg" height="249px" width="398px" />
                </div>
            </div>
        </Fragment>
    )
}


export default Introduction;