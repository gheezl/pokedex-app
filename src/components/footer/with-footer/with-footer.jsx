import React, { Fragment, lazy, Suspense } from 'react';

const Footer = lazy(() => import("../footer.jsx"))


const WithFooter = (WrappedComponent) => {
    const completeFooter = () => {
        return (
            <Fragment>
                <WrappedComponent />
                <Suspense>
                    <Footer />
                </Suspense>
            </Fragment>
        )
    }
    return completeFooter
}

export default WithFooter;