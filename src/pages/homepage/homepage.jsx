import React, { Fragment } from 'react';

import "./homepage.css"


const HomePage = () => {
    return (
        <Fragment>
            <div>
                <div className="homepage-header">
                    <img alt="pokeball" className="pokemon-image" src="pokemon.png" height="50px" />
                    <span className="welcome">Welcome to the Pokédex</span>
                    <img alt="pokeball" className="pokemon-image" src="pokemon.png" height="50px" />
                </div>
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
            </div>
        </Fragment>
    )
}



export default HomePage;