import Link from "next/link";
import React, { ReactNode } from "react";
import { FaBoxOpen } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { IconType } from "react-icons/lib";
export type prop = {
  icon?: ReactNode;
  title?: string;
  desc?: ReactNode;
  iconStylings?: string;
  buttonName?: ReactNode;
};
export default function EmptyMsg({
  buttonName = ((
    <>
      Start Shopping <FaArrowRightLong className="text-sm inline-block ml-2" />
    </>
  )),
  icon,
  title,
  desc,
  iconStylings = "w-32 h-32 rounded-full flex items-center justify-center bg-linear-to-br from-gray-200 to-gray-100 mx-auto text-5xl text-gray-300",
}: prop) {
  return (
    <div>
      <div className="relative mb-8">
        <div className={iconStylings}>{icon}</div>
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-4 bg-gray-100 rounded-full blur-md"></div>
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-3 ">{title}</h2>
      <p className="text-gray-500 mb-8 leading-relaxed">{desc}</p>
      <Link
        className="inline-flex  items-center gap-2 bg-linear-to-r from-main-color to-main-color-hover text-white py-3.5 px-8 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg shadow-green-600/20 active:scale-[0.98]"
        href={"/"}
      >
        {buttonName}
      </Link>
    </div>
  );
}
