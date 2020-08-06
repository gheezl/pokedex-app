import React, { Fragment, useState } from "react"
import { withRouter } from "react-router-dom"
import { connect } from 'react-redux'

import "./search.css"

import { getIndividualPokemonStart } from "../../redux/pokemon/pokemon-actions.js"

const Search = ({ getIndividualPokemonStart, history }) => {
    let [inputData, setInputData] = useState("1")

    const onClickFunction = () => {
        getIndividualPokemonStart(`https://pokeapi.co/api/v2/pokemon/${inputData.toLowerCase()}/`)
        history.push("/display")
    }

    const onChangeFunction = (event) => {
        const value = event.target.value
        setInputData(value)
    }

    return (
        <Fragment>
            <div className="form">
                <span className="arrow">❱</span>
                <input
                    onChange={onChangeFunction}
                    className="search-bar"
                    type="text"
                // placeholder="""
                />
                <button
                    onClick={onClickFunction}
                    className="submit-button"
                >
                    Go!
                    </button>
            </div>
        </Fragment>
    )
}

const mapDispatchToProps = (dispatch) => ({
    getIndividualPokemonStart: (url) => dispatch(getIndividualPokemonStart(url))
})

export default connect(null, mapDispatchToProps)(withRouter(Search));