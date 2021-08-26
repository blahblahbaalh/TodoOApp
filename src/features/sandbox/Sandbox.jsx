import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./testAction";

export default function Sandbox(){
    const data = useSelector(state => state.test.data);
    const dispatch = useDispatch();
    return(
        <>
        <h1> This is a Sandbox test for React-redux</h1>
        <p> Current data value: {data}</p>
        <button onClick={() => dispatch(increment(2))}> +2 </button>
        <button onClick={() => dispatch(decrement(5))}> -5 </button>
        </>
    )
}