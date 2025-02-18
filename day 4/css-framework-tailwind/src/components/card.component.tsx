/** @format */

import { TCard } from "@/interfaces/card.interface";
import Image from "next/image";
import React from "react";
import Option from "@/../public/instagram/Three dots.svg";
import Bookmark from "@/../public/instagram/Bookmark.svg";
import Heart from "@/../public/instagram/Heart.svg";
import Comment from "@/../public/instagram/Comment.svg";
import Share from "@/../public/instagram/Share.svg";

export default function CardComponent(props: TCard) {
  return (
    <div className="pt-8">
      {/* section header post */}
      <div className="flex justify-between px-2">
        <div className="flex items-center text-left gap-[7px]">
          <img
            src={props.avatar_url}
            alt="avatar"
            className="w-8 h-8 rounded-full m-[3px]"
          />
          <div className="py-[6px]">
            <h4 className=" font-bold">{props.name}</h4>
            <div className=" text-xs">{props.location}</div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <Image src={Option} alt="option" />
        </div>
      </div>
      {/* section image post */}
      <img src={props.image_url} alt="post-image" className=" w-full h-80" />

      {/* section info post */}
      <div className="p-2">
        {/* like section */}
        <div className="flex justify-between">
          <div className="flex gap-3">
            <Image src={Heart} alt="heart" className="w-5 h-5" />
            <Image src={Comment} alt="comment" className="w-5 h-5" />
            <Image src={Share} alt="share" className="w-5 h-5" />
          </div>

          {/* image post section */}
          <div>
            <Image src={Bookmark} alt="bookmark" className="w-5 h-5" />
          </div>
        </div>

        {/* caption section */}
        <div className="flex pt-2">
          <span className="text-left">
            <b>{props.username}</b> {props.caption}
          </span>
        </div>
      </div>
    </div>
  );
}
