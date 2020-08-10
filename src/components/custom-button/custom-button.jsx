import React, { Fragment } from 'react';

import "./custom-button.css"


const CustomButton = ({ label, type }) => {
    return (
        <Fragment>
            <button type={type} className="custom-button">
                {label}
            </button>
        </Fragment>
    )
}

export default CustomButton;