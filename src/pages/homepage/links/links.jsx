import React, { Fragment } from 'react';
import { Link } from "react-router-dom";

import "./links.css"

const Links = () => {
    return (
        <Fragment>
            <div className="links-border">
                <Link className="to-location" to="/profile" >
                    <span>↽  Create an account</span>
                </Link>
                <Link className="to-location" to="/view-all">
                    <span>View all Pokémon  ⇁</span>
                </Link>
            </div>
        </Fragment>
    )
}

export default Links;