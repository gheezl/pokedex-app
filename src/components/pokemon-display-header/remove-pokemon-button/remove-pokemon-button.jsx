import React, { Fragment } from 'react';



const RemovePokemonButton = ({ displayRemove }) => {
    return (
        displayRemove
            ? (
                <div className="add-pokemon-border">
                    <button className="add-pokemon-button">
                        remove pokemon from collection
                            </button>
                </div>
            )
            : (
                null
            )
    )
}

export default RemovePokemonButton;