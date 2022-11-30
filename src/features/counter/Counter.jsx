import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {increment, decrement,incrementByAmount} from './counterSlice'
export default function Counter() {

    const count = useSelector(state=>state.counter.value)
    const dispatch = useDispatch()
  return (
    <div>
        <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="Decrement value by amount"
          onClick={() => dispatch(incrementByAmount(1))}
        >
          IncrementByAmount
        </button>
      </div>
    </div>
  )
}
