import React, { Fragment, useState, lazy, Suspense } from 'react';

import "./type.css"



const Type = ({ type }) => {
    console.log(type)
    return (
        <Fragment>
            <div className="type">
                {
                    type.map(type => (
                        <span className="individual-type">{type.type.name} type</span>
                    ))
                }
            </div>
        </Fragment>
    )
}

export default Type;