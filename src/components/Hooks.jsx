import React, { useState, useEffect, useCallback } from "react";
import { useReducer } from "react";
import { useMemo } from "react";

const PrintMemoizedCallbackFunctionResult = (props) => {
    props.useEffect((value) => {
        // value === undefined
        console.log("PrintMemoizedCallbackFunctionResult ", { value });
    }, []);

    return (
        <h5>
            Result:{" "}
            {
                // props.memoizedCallbackFunction()
            }
        </h5>
    );
};

// in userReducer we can use {  } as an state and action
const initialCounterState = 0;
const countReducer = (state, action) => {
    switch (action) {
        case "+":
            return state + 1;
        case "-":
            return state - 1;
        case "o":
            return 0;
        default:
            return state;
    }
};

const Hooks = (props) => {
    const [isOnline, setIsOnline] = useState(null);

    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const [count, setReducer] = useReducer(countReducer, initialCounterState);

    function handleStatusChange(status) {
        setIsOnline(status.isOnline);
    }

    useEffect(() => {
        console.log("useEffect body Second Called");
        // ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
        return () => {
            console.log("useEffect cleanup... First called");
            // ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
        };
    }, []);

    /*
        useMemo will only recompute the memoized value when one of the dependencies has changed. 
        This optimization helps to avoid expensive calculations on every render.

    */
    const getOddOrEven = useMemo(() => {
        console.log("useMemo wrapped get odd or even");

        let i = 0;
        while (i < 10) i++;

        return counterOne % 2 == 0 ? "Even" : "Odd";
    }, [counterOne]);

    /*
    For each rerender react will create new function because of this reason if we passed this to child component even though react.
    Memo is mentioned child component will rerender. 
    In order to prevent this we are creating the function only if dependency array value changes
    */
    const memoizedCallbackFunction = useCallback(() => {
        let sum = 0;
        while (sum < 10) sum += counterOne + counterTwo;
        return sum;
    }, [counterOne, counterTwo]);

    return (
        <>
            {/* {isOnline ? "Online" : "Offline"} <button onClick={() => setIsOnline(!isOnline)}>Toggle</button> */}
            <button onClick={() => setCounterOne(counterOne + 1)}>
                {counterOne} = {getOddOrEven}
            </button>
            <button onClick={() => setCounterTwo(counterTwo + 1)}>{counterTwo}</button>
            <PrintMemoizedCallbackFunctionResult
                memoizedCallbackFunction={memoizedCallbackFunction}
                useEffect={useEffect}
            />
            <div className="counter" style={{ display: "flex", gap: "1rem" }}>
                <button style={{ fontSize: "1rem", padding: "0.5rem" }}>
                    <h4>{count}</h4>
                </button>
                <button style={{ fontSize: "1rem", padding: "0.5rem" }} onClick={() => setReducer("+")}>
                    +
                </button>
                <button style={{ fontSize: "1rem", padding: "0.5rem" }} onClick={() => setReducer("-")}>
                    -
                </button>
                <button style={{ fontSize: "1rem", padding: "0.5rem" }} onClick={() => setReducer("o")}>
                    Reset
                </button>
            </div>
        </>
    );
};

export default Hooks;
