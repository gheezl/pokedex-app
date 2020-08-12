import React, { Fragment, Component } from 'react';
import { withRouter } from "react-router-dom"
import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect"

import { getIndividualPokemonStart } from "../../redux/pokemon/pokemon-actions.js"

import "./card.css"

import { selectCurrentUser } from "../../redux/user/user-selectors.js"


class Card extends Component {
    constructor() {
        super();
        this.state = {
            url: 1,
            spriteUrl: 1,
            toggle: true
        }
    }

    static getDerivedStateFromProps(props, state) {
        if (props.url !== state.url) {
            return {
                url: props.url,
                toggle: false
            }
        }
        return null;
    }

    componentDidMount() {
        const { url } = this.props
        this.setState({ url: url })
        fetch(url)
            .then(response => response.json())
            .then(pokemon => this.setState({ spriteUrl: pokemon.sprites.front_default, toggle: true })
            )
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.url !== this.state.url) {
            fetch(this.state.url)
                .then(response => response.json())
                .then(pokemon => this.setState({ spriteUrl: pokemon.sprites.front_default, toggle: true })
                )
        }
    }

    componentWillUnmount() {
        this.setState = (state, callback) => {
            return;
        };
    }


    render() {
        const { getIndividualPokemonStart, name, url, history, user } = this.props
        const { spriteUrl, toggle } = this.state

        const onClickFunction = () => {
            getIndividualPokemonStart({ url, name, user })
            history.push("/display")
        }

        return (
            <Fragment>
                <div onClick={onClickFunction} className="card-border">
                    <div className="image">
                        {
                            toggle
                                ? (
                                    <img alt="" src={spriteUrl} />
                                )
                                : (
                                    <div className="card-sprite">
                                        <img height="75px" width="75px" alt="" src="4016440_170x100.gif" />
                                    </div>

                                )
                        }
                    </div>
                    <div className="name">
                        <span>{name}</span>
                    </div>

                </div>
            </Fragment>
        )
    }

}

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser,
})

const mapDispatchToProps = (dispatch) => ({
    getIndividualPokemonStart: (url) => dispatch(getIndividualPokemonStart(url)),
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Card));