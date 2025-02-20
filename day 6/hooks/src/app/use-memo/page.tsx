/** @format */
"use client";
import React, { useEffect, useMemo, useState } from "react";

export default function Page() {
  const [count, setCount] = useState<number>(0);
  const [number, setNumber] = useState<number>(0);
  const incrementNumber = () => setNumber(number + 1);
  const incrementCount = () => setCount(count + 1);

  //cara 1
  const [isNumberEven, setIsNumberEven] = useState<boolean>(true);
  useEffect(() => {
    setIsNumberEven(number % 2 === 0);
  }, [number]);

  //cara 2
  const isNumberEven2 = useMemo(() => {
    return number % 2 === 0;
  }, [number]);

  return (
    <div>
      <button
        className="border bg-black text-white rounded-md py-1 px-2"
        onClick={incrementNumber}
      >
        number : {number}
      </button>
      <div>{isNumberEven ? "even" : "odd"}</div>
      <div>{isNumberEven2 ? "even" : "odd"}</div>

      <button onClick={incrementCount}> count : {count}</button>
    </div>
  );
}
