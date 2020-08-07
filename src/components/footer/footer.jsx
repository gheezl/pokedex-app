import React, { Fragment, lazy, Suspense } from 'react';

import './footer.css';


const Footer = () => {
    return (
        <Fragment>
            <div className="footer">
                <div className="footer-links">
                    <a className="github-link" href="https://github.com/gheezl/pokedex-app">
                        <img src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" height="25" width="25" />
                    </a>
                </div>
                <div className="made-with">
                    <span>Made with react and redux</span>
                </div>
            </div>
        </Fragment>
    )
}


export default Footer;