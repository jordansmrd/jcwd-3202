/** @format */
"use client";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [firstNumber, setFirstNumber] = useState<number>(0);
  const [secondNumber, setSecondNumber] = useState<number>(0);
  const [result, setResult] = useState<number>(0);
  useEffect(() => {
    setResult(firstNumber + secondNumber); //setiap firstnumber atau second number berubah, maka result akan berubah
  }, [firstNumber, secondNumber]);
  return (
    <div className="m-4">
      <input
        type="number"
        name=""
        id=""
        className="border rounded-md"
        onChange={(e) => setFirstNumber(Number(e.target.value))}
      />{" "}
      +{" "}
      <input
        type="number"
        name=""
        id=""
        className="border rounded-md"
        onChange={(e) => setSecondNumber(Number(e.target.value))}
      />{" "}
      = {result}
    </div>
  );
}
