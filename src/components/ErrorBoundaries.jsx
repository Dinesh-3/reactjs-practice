import { Component } from "react";

class ErrorBoundaries extends Component {
    state = {
        hasError: false
    };

    constructor(props) {
        super(props);
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        console.log("Logging Error in static getDerivedStateFromError(error): " + error);
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        // Example "componentStack":
        //   in ComponentThatThrows (created by App)
        //   in ErrorBoundary (created by App)
        //   in div (created by App)
        //   in App

        console.log(`componentDidCatch(error, info): `, { error, info });

        // logComponentStackToMyService(info.componentStack);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children;
    }
}

export default ErrorBoundaries;
/*
ERROR BOUNDARIES
In the past, JavaScript errors inside components used to corrupt React’s internal state and cause it to emit cryptic errors on next renders. 
These errors were always caused by an earlier error in the application code, but React did not provide a way to handle them gracefully in components, and could not recover from them

A JavaScript error in a part of the UI shouldn’t break the whole app. To solve this problem for React users, React 16 introduces a new concept of an “error boundary”.

Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed. Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them.

Error boundaries do not catch errors for:

Event handlers (learn more)
Asynchronous code (e.g. setTimeout or requestAnimationFrame callbacks)
Server side rendering
Errors thrown in the error boundary itself (rather than its children)

getDerivedStateFromError() is called during the “render” phase, so side-effects are not permitted. For those use cases, use componentDidCatch() instead.

*/
