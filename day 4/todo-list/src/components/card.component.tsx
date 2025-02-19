/** @format */

import React from "react";
import Close from "@/../public/close.svg";
import Image from "next/image";
import { CheckComponent, CheckedComponent } from "./Icon.component";

type Props = { checked?: boolean };

export default function CardComponent({ checked }: Props) {
  return (
    <div className="w-full rounded-[5px] bg-white flex h-16 items-center gap-3 lg:mt-6 py-5 px-6 border-b border-[#E3E4F1]">
      {checked ? <CheckedComponent /> : <CheckComponent />}
      <p className="w-full rounded-[5px] outline-none text-left ">
        Jog around the park 3x{" "}
      </p>
      <Image alt="" src={Close} className=" cursor-pointer "></Image>
    </div>
  );
}
