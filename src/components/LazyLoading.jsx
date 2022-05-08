import React, { Component, Suspense } from "react";

const LoadedLazily = React.lazy(() => import("./LoadMeLazily"));

class LazyLoading extends Component {
    state = {};
    render() {
        return (
            <>
                <p>Load below component lazily</p>
                <Suspense fallback={<div>Loading...</div>}>
                    <LoadedLazily />
                </Suspense>
            </>
        );
    }
}

export default LazyLoading;
