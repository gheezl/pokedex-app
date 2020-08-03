import React, { Fragment } from 'react';
import { Link } from "react-router-dom";

import "./header.css"


const Header = () => {
    return (
        <Fragment>
            <div className="header-border">
                <Link to="/" className="title">
                    <h1>Pokedex</h1>
                </Link>
                <div className="links">
                    <Link to="/search" className="Search">
                        <span>Search</span>
                    </Link>
                    <Link to="/view-all" className="View-All">
                        <span>View All</span>
                    </Link>
                    <Link to="/profile" className="Profile">
                        <span>Profile</span>
                    </Link>
                </div>
            </div>
        </Fragment>
    )
}


export default Header;