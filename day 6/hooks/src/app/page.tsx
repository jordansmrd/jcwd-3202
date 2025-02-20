/** @format */
"use client";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState<number>(0);

  let angka: number = 1;
  const increment = (newNumber: number) => {
    angka = newNumber;
    console.log(angka);
  };

  return (
    <div className="flex flex-col">
      <div>
        <b>
          ini angka <span className="text-red-500">{angka}</span>
        </b>
        <button
          className="ml-2 bg-black text-white px-2 py-1 rounded-md"
          onClick={() => increment(angka + 1)}
        >
          Click Me
        </button>
      </div>

      <div>
        <b className="">
          You clicked <span className="text-red-500">{count}</span> times
        </b>
        <button
          className="ml-2 bg-black text-white px-2 py-1 rounded-md"
          onClick={() => setCount(count + 1)}
        >
          Click Me
        </button>
      </div>

      <div>
        <button
          className="mr-2 bg-black text-white px-2 py-1 rounded-md"
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
        <b className="">
          <span className="text-red-500">{count}</span>
        </b>
        <button
          className="ml-2 bg-black text-white px-2 py-1 rounded-md"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
      </div>
    </div>
  );
}
