import React, { Fragment, Suspense, lazy, Component } from 'react';

import "./view-all.css"

const Card = lazy(() => import("../../components/card/card.jsx"))


class ViewAll extends Component {
    componentDidMount() {

    }

    render() {
        return (
            <Fragment>
                <div>
                    <Card />
                </div>
            </Fragment>
        )
    }
}

export default ViewAll;