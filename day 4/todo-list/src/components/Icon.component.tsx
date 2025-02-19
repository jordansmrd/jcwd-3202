/** @format */

import Image from "next/image";
import React from "react";
import Check from "@/../public/checked.svg";
type Props = {};

export function CheckComponent({}: Props) {
  return (
    <div className="border border-[#E3E4F1] rounded-full w-6 h-6 cursor-pointer"></div>
  );
}

export function CheckedComponent({}: Props) {
  return (
    <div
      className="border border-[#E3E4F1] rounded-full  py-[9px] px-[8px] w-6 h-6  cursor-pointer flex justify-center"
      style={{
        background:
          "linear-gradient(225deg, rgba(85, 150, 255, 0.6) 0%, rgba(172, 45, 235, 0.6) 100%)",
      }}
    >
      <Image alt="" src={Check}></Image>
    </div>
  );
}
