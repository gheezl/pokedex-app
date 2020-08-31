import React, { Fragment } from 'react';

import './view-code.css';


const ViewCode = () => {
    return (
        <Fragment>
            <div className="view-code">
                <h2>View code</h2>
            </div>
            <a className="link-image" href="https://github.com/gheezl/pokedex-app">
                <span className="repository">
                    View github repository
                </span>
            </a>
        </Fragment>
    )
}

export default ViewCode;