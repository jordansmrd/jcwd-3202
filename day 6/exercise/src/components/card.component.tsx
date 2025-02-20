/** @format */

import React, { memo, useState } from "react";
import Close from "@/../public/close.svg";
import Image from "next/image";
import { CheckComponent, CheckedComponent } from "./Icon.component";
import { ITodo } from "@/app/interfaces/todo.interface";
interface ICard extends ITodo {
  delete: (id: number) => void;
}
export default function CardComponent(data: ICard) {
  const [checked, setChecked] = useState<boolean>(false);
  return (
    <div className="w-full rounded-[5px] bg-white flex h-16 items-center gap-3 lg:mt-6 py-5 px-6 border-b border-[#E3E4F1]">
      <button onClick={() => setChecked(!checked)}>
        {checked ? <CheckedComponent /> : <CheckComponent />}
      </button>
      <p
        className={`w-full rounded-[5px] outline-none text-left ${
          checked && "line-through"
        }`}
      >
        {data.todo}
      </p>
      <Image
        alt=""
        src={Close}
        className=" cursor-pointer "
        onClick={() => data.delete(data.id)}
      ></Image>
    </div>
  );
}

const a = () => {}; //void
const b = () => 1; // return number

console.log(a(), "ini function a");
console.log(b(), "ini function b");
