import React, { Fragment, lazy, Suspense } from 'react';

import "./type.css"

const Type = ({ type }) => {
    return (
        <Fragment>
            <div className="type">
                {
                    type.map(type =>
                        <span className="individual-type">{type.type.name} type</span>
                    )
                }
            </div>
        </Fragment>
    )
}

export default Type;