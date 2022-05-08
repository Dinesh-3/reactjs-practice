import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

/*
    Docs:
        https://reactjs.org/docs/react-component.html

    CLASS COMPONENT:

    Lifecycle Hooks Phases:
        MOUNT:  These methods are called in the following order when an instance of a component is being created and inserted into the DOM
         1. constructor
            static getDerivedStateFromProps(props, state)
         2. render
         3. componentDidMount
        UPDATE:
                static getDerivedStateFromProps(props, state)
                shouldComponentUpdate(nextProps, nextState)
            1. render
                getSnapshotBeforeUpdate(prevProps, prevState)
            2. componentDidUpdate(prevProps, prevState, snapshot)
        UNMOUNT:
         1. componentWillUnmount

    ERROR HANDLING
        These methods are called when there is an error during rendering, in a lifecycle method, or in the constructor of any child component.

        static getDerivedStateFromError()
        componentDidCatch()
*/

/*

    StrictMode is a tool for highlighting potential problems in an application. 
    Like Fragment, StrictMode does not render any visible UI. 
    It activates additional checks and warnings for its descendants.

    import React from 'react';

    function ExampleApplication() {
    return (
        <div>
        <Header />
        <React.StrictMode>
            <div>
            <ComponentOne />
            <ComponentTwo />
            </div>
        </React.StrictMode>
        <Footer />
        </div>
    );
    }
    StrictMode currently helps with:

    Identifying components with unsafe lifecycles
    Warning about legacy string ref API usage
    Warning about deprecated findDOMNode usage
    Detecting unexpected side effects
    Detecting legacy context API
    Ensuring reusable state111

    Strict mode can’t automatically detect side effects for you, but it can help you spot them by making them a little more deterministic. This is done by intentionally double-invoking the following functions:

    Class component constructor, render, and shouldComponentUpdate methods
    Class component static getDerivedStateFromProps method
    Function component bodies
    State updater functions (the first argument to setState)
    Functions passed to useState, useMemo, or useReducer

    This only applies to development mode. Lifecycles will not be double-invoked in production mode.


*/

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*
    // Note: this structure is simplified
    const element = {
    type: 'h1',
    props: {
        className: 'greeting',
        children: 'Hello, world!'
    }
    };

    Elements are the smallest building blocks of React apps.

    These objects are called “React elements”. You can think of them as descriptions of what you want to see on the screen. 
    React reads these objects and uses them to construct the DOM and keep it up to date.

    Unlike browser DOM elements, React elements are plain objects, and are cheap to create. 
    React DOM takes care of updating the DOM to match the React elements.

    React elements are immutable. Once you create an element, you can’t change its children or attributes. 
    An element is like a single frame in a movie: it represents the UI at a certain point in time.

    === Component ===

    Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. This page provides an introduction to the idea of components. You can find a detailed component API reference here.

    Client-side rendering manages the routing dynamically without refreshing the page every time a user requests a different route. 
    But server-side rendering is able to display a fully populated page on the first load for any route of the website,
    whereas client-side rendering displays a blank page first

*/
