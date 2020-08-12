import React, { Fragment } from 'react';



const AddPokemonButton = ({ onClickFunction }) => {
    return (
        <Fragment>
            <div className="add-pokemon-border">
                <button onClick={onClickFunction} className="add-pokemon-button">
                    Add pokemon to collection
                </button>
            </div>
        </Fragment>
    )
}

export default AddPokemonButton;