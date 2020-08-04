import React, { Fragment, Component } from 'react';
import { withRouter } from "react-router-dom"
import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect"

import { getIndividualPokemonStart } from "../../redux/pokemon/pokemon-actions.js"

import "./card.css"


const Card = ({ getIndividualPokemonStart, name, url, sprite, history }) => {
    const onClickFunction = () => {
        getIndividualPokemonStart(url)
        history.push("/display")
    }

    return (
        <Fragment>
            <div onClick={onClickFunction} className="card-border">
                <div className="image">
                    <img alt="" src={sprite} />
                </div>
                <div className="name">
                    <span>{name}</span>
                </div>
            </div>
        </Fragment>
    )
}

const mapDispatchToProps = (dispatch) => ({
    getIndividualPokemonStart: (url) => dispatch(getIndividualPokemonStart(url)),
})

export default connect(null, mapDispatchToProps)(withRouter(Card));