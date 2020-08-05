import React, { Fragment } from 'react';
import { Link } from "react-router-dom";

import "./header.css"


const Header = () => {
    return (
        <Fragment>
            <div className="header-border">
                <Link to="/" className="title">
                    <h1>Pokédex</h1>
                </Link>
                <div className="links">
                    <Link to="/search" className="link">
                        <span>Search</span>
                    </Link>
                    <Link to="/view-all" className="link">
                        <span>View All</span>
                    </Link>
                    <Link to="/profile" className="link">
                        <span>Profile</span>
                    </Link>
                </div>
            </div>
        </Fragment>
    )
}


export default Header;