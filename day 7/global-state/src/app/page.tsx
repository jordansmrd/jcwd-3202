/** @format */
"use client";
import { useState } from "react";

interface Props {
  color: string;
}

export default function Home() {
  const [color, setColor] = useState<string>("text-red-500");

  return (
    <div>
      <Form color={color}></Form>
      <button
        className="bg-black text-white px-2 py-1 rounded-md"
        onClick={() => setColor("text-black")}
      >
        Set Color
      </button>
    </div>
  );
}
function Form(props: Props) {
  return (
    <form>
      <div>
        <input type="text" name="name" className="border text-black " />
        <CustomButton {...props} />
      </div>
    </form>
  );
}

function CustomButton(props: Props) {
  return (
    <button
      type="submit"
      className={`" bg-green-600 ml-1 px-2 py-1 rounded-md  ${props.color}`}
    >
      Submit
    </button>
  );
}
