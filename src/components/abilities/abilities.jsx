import React, { Fragment } from 'react';

import "./abilities.css"

const Abilities = ({ ability }) => {
    return (
        <Fragment>
            <div className="ability-border">
                <div className="individual-ability">
                    <span>{ability.ability.name}</span>
                </div>
            </div>
        </Fragment>
    )
}

export default Abilities;