import React, { Fragment, useState } from 'react';
import { Link } from "react-router-dom";

import "./header.css"

import Search from "../search/search.jsx"


const Header = () => {
    let [toggle, setToggle] = useState(false)

    const onCLickFunction = () => {
        setToggle(!toggle)
    }

    return (
        <Fragment>
            <div className="header-border">

                <Link to="/" className="title">
                    <h1>Pokédex</h1>
                </Link>


                <div className="search-border">
                    <span className="search-icon" onClick={onCLickFunction} >Search</span>
                    {
                        toggle
                            ? (
                                <Search />
                            )
                            : (
                                null
                            )
                    }
                </div>

                <div className="links">
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