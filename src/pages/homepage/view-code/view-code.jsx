import React, { Fragment, lazy, Suspense } from 'react';

import './view-code.css';


const ViewCode = () => {
    return (
        <Fragment>
            <div className="view-code">
                <h2>View code</h2>
            </div>
            <a className="link-image" href="https://github.com/gheezl/pokedex-app">
                <img className="github-link" alt="" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" height="25px" />
                <span className="repository">
                    View github respository
                </span>
            </a>
        </Fragment>
    )
}


export default ViewCode;