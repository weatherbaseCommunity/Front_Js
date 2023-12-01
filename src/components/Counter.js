<<<<<<< Updated upstream
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../redux/counterSlice'

export function Counter() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
=======
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { plus, minus } from "../redux/counterSlice";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  console.log(count);
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => dispatch(plus())}>plus</button>
      <button onClick={() => dispatch(minus())}>minus</button>
>>>>>>> Stashed changes
    </div>
  )
}