/** @format */
"use client";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface IColor {
  color: string;
  setColor: Dispatch<SetStateAction<string>>;
}

const ColorContext = createContext<IColor | null>(null); //create context

export default function Home() {
  const [color, setColor] = useState<string>("text-red-500");

  return (
    <div>
      <ColorContext.Provider
        value={{
          color,
          setColor,
        }}
      >
        <Form />
        <button
          className="bg-black text-white px-2 py-1 rounded-md"
          onClick={() => setColor("text-black")}
        >
          Set Color
        </button>
      </ColorContext.Provider>
    </div>
  );
}
function Form() {
  const { setColor } = useContext<IColor | null>(ColorContext) as IColor;
  return (
    <form>
      <div>
        <input type="text" name="name" className="border text-black " />
        <CustomButton />
        <button
          type="button"
          className={`" bg-blue-600 ml-1 px-2 py-1 rounded-md text-white`}
          onClick={() => setColor("text-yellow-500")}
        >
          set color to yellow
        </button>{" "}
      </div>
    </form>
  );
}

function CustomButton() {
  const { color } = useContext<IColor | null>(ColorContext) as IColor;
  return (
    <button
      type="submit"
      className={`" bg-green-600 ml-1 px-2 py-1 rounded-md  ${color}`}
    >
      Submit
    </button>
  );
}
