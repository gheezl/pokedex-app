import React, { Fragment, Component } from 'react';
import { withRouter } from "react-router-dom"
import { connect } from 'react-redux'

import { getIndividualPokemonStart } from "../../redux/pokemon/pokemon-actions.js"

import "./card.css"


class Card extends Component {
    constructor() {
        super();
        this.state = {
            url: 1,
            spriteUrl: 1
        }
    }

    static getDerivedStateFromProps(props, state) {
        if (props.url !== state.url) {
            return {
                url: props.url
            }

        }
    }

    componentDidMount() {
        const { url } = this.props
        this.setState({ url: url })
        fetch(url)
            .then(response => response.json())
            .then(pokemon => this.setState({ spriteUrl: pokemon.sprites.front_default })
            )
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.url !== this.state.url) {
            fetch(this.state.url)
                .then(response => response.json())
                .then(pokemon => this.setState({ spriteUrl: pokemon.sprites.front_default })
                )
        }
    }


    render() {
        const { getIndividualPokemonStart, name, url, sprite, history } = this.props
        const { spriteUrl } = this.state


        const onClickFunction = () => {
            getIndividualPokemonStart(url)
            history.push("/display")
        }

        return (
            <Fragment>
                <div onClick={onClickFunction} className="card-border">
                    <div className="image">
                        <img alt="" src={spriteUrl} />
                    </div>
                    <div className="name">
                        <span>{name}</span>
                    </div>
                </div>
            </Fragment>
        )
    }

}

const mapDispatchToProps = (dispatch) => ({
    getIndividualPokemonStart: (url) => dispatch(getIndividualPokemonStart(url)),
})

export default connect(null, mapDispatchToProps)(withRouter(Card));