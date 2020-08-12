import React, { Fragment, useState } from "react"
import { withRouter } from "react-router-dom"
import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect"

import "./search.css"

import { getIndividualPokemonStart } from "../../redux/pokemon/pokemon-actions.js"
import { selectCurrentUser } from "../../redux/user/user-selectors.js"


const Search = ({ getIndividualPokemonStart, history, user }) => {
    let [inputData, setInputData] = useState("1")

    const onClickFunction = () => {
        const url = `https://pokeapi.co/api/v2/pokemon/${inputData.toLowerCase()}/`
        const name = inputData.toLowerCase()

        getIndividualPokemonStart({ url, name, user })
        history.push("/display")
    }

    const onChangeFunction = (event) => {
        const value = event.target.value
        setInputData(value)
    }

    return (
        <Fragment>
            <div className="mobile-display">
                <div className="form">
                    <span className="arrow">❱</span>
                    <input
                        onChange={onChangeFunction}
                        className="search-bar"
                        type="text"
                    />
                    <button
                        onClick={onClickFunction}
                        className="submit-button"
                    >
                        Go!
                    </button>
                </div>
            </div>

        </Fragment>
    )
}

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser,
})

const mapDispatchToProps = (dispatch) => ({
    getIndividualPokemonStart: (url) => dispatch(getIndividualPokemonStart(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Search));