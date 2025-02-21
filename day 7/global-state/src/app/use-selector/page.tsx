/** @format */
"use client";
import { decrement, incrementByAmount } from "@/redux/slices/counter.slice";
import { store, useAppDispatch, useAppSelector } from "@/redux/store";
import React from "react";
import { Provider } from "react-redux";

export default function Page() {
  // const counter = useSelector((state) => state.)
  return (
    <Provider store={store}>
      <DecrementButton />
      <ShowCounter />
      <IncrementButton></IncrementButton>
    </Provider>
  );
}

function ShowCounter() {
  const counter = useAppSelector((state) => state.counter);
  return <b>{counter.value}</b>;
}

function IncrementButton() {
  const dispatch = useAppDispatch();
  return (
    <button
      className="bg-black text-white px-2 py-1 rounded-md"
      onClick={() => dispatch(incrementByAmount(10))}
      // onClick={() => dispatch(increment(10))}
    >
      increment
    </button>
  );
}

function DecrementButton() {
  const dispatch = useAppDispatch();

  return (
    <button
      className="bg-black text-white px-2 py-1 rounded-md"
      onClick={() => dispatch(decrement())}
    >
      decrement
    </button>
  );
}
