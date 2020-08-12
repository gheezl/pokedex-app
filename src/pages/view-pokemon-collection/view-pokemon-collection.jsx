import React, { Fragment, lazy } from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect"

import "./view-pokemon-collection.css"

import { selectCurrentUser } from "../../redux/user/user-selectors.js"

const Card = lazy(() => import("../../components/card/card.jsx"))


const ViewPokemonCollection = ({ user }) => {
    return (
        <Fragment>
            {
                user
                    ? (
                        <Fragment>
                            <div className="view-pokemon-collection-header">
                                <span>{user.displayName}'s collection</span>
                            </div>
                            <div className="card">
                                {user.pokemon.map(pokemon => (
                                    <Card key={pokemon.name} name={pokemon.name} url={pokemon.url} />
                                ))}
                            </div>
                        </Fragment>
                    )
                    : (
                        null
                    )
            }

        </Fragment>
    )
}

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser
})

export default connect(mapStateToProps)(ViewPokemonCollection);