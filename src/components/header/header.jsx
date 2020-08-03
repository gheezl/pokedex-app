import React, { Fragment } from 'react';

import "./header.css"


const Header = () => {
    return (
        <Fragment>
            <div className="header-border">
                <div className="title">
                    <h1>Pokedex</h1>
                </div>
                <div className="links">
                    <div className="Search">
                        <span>Search</span>
                    </div>
                    <div className="View-All">
                        <span>View All</span>
                    </div>
                    <div className="Profile">
                        <span>Profile</span>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}


export default Header;