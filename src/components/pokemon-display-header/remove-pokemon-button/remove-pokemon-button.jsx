import React, { Fragment } from 'react';



const RemovePokemonButton = ({ onClickFunction }) => {
    return (
        <Fragment>
            <div className="add-pokemon-border">
                <button onClick={onClickFunction} className="add-pokemon-button">
                    remove pokemon from collection
                </button>
            </div>
        </Fragment>
    )
}

export default RemovePokemonButton;