/** @format */
import React from "react";
import InstagramLogo from "@/../public/instagram/instagram-logo.svg";
import Heart from "@/../public/instagram/Heart.svg";
import Add from "@/../public/instagram/Add Icon Filled.svg";
import Share from "@/../public/instagram/Share.svg";
import Image from "next/image";

export default function NavbarComponent() {
  return (
    <div className="flex justify-between border-b-2">
      <div className=" pt-[6px] pb-1 px-[3px] m-[5px]">
        <Image src={InstagramLogo} alt="instagram-logo" />
      </div>
      <div className="flex gap-4 items-center">
        <Image src={Add} alt="add-icon" className="w-5 h-5" />
        <Image src={Heart} alt="heart-icon" className="w-5 h-5" />
        <Image src={Share} alt="share-icon" className="w-5 h-5" />
      </div>
    </div>
  );
}
