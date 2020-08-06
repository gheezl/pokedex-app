import React, { Fragment, lazy, Suspense, useState } from 'react';
import { Link } from "react-router-dom";

import "./header.css"

const Search = lazy(() => import("../search/search.jsx"))


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

                <div className="links">
                    <div className="search-border">
                        <span onClick={onCLickFunction} >Search</span>
                        {
                            toggle
                                ? (
                                    <Suspense fallback="loading...">
                                        <Search />
                                    </Suspense>
                                )
                                : (
                                    null
                                )
                        }
                    </div>


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