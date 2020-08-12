import React, { Component, Fragment } from "react"

import ErrorDisplay from "./error-display/error-display.jsx"


class ErrorBoundary extends Component {
    constructor() {
        super();

        this.state = {
            hasErrored: false,
        }
    }

    static getDerivedStateFromError(error) {

        return { hasErrored: true }
    }

    componentDidCatch(error, info) {
        console.log(error);
    }


    render() {
        const { hasErrored } = this.state
        const { children } = this.props

        return (
            <Fragment>
                {
                    hasErrored
                        ? (
                            <ErrorDisplay />
                        )
                        : (
                            children
                        )
                }
            </Fragment>
        )
    }
}

export default ErrorBoundary;