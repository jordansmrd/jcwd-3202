/** @format */
"use client";
import { actionType, reducer } from "@/reducers/count.reducer";
import React, { useReducer } from "react";

type Props = {};

//state, useeffect

//useMemo, useCallback

//useReducer

export default function Page({}: Props) {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  //dispatch digunakan untuk memanggil action
  const increment = () =>
    dispatch({
      type: actionType.INCREMENT,
      payload: 1,
    });

  const decrement = () =>
    dispatch({
      type: actionType.DECREMENT,
      payload: 1,
    });
  return (
    <div>
      <div>
        <button
          className="mr-2 bg-black text-white px-2 py-1 rounded-md"
          onClick={decrement}
        >
          Decrement
        </button>
        <b className="">
          <span className="text-red-500">{state.count}</span>
        </b>
        <button
          className="ml-2 bg-black text-white px-2 py-1 rounded-md"
          onClick={increment}
        >
          Increment
        </button>
      </div>
    </div>
  );
}
