import Link from "next/link";
import React, { ReactNode } from "react";
import { FaFilter, FaTags } from "react-icons/fa";
import { FaX, FaXmark } from "react-icons/fa6";
export type prop = {
  filterItems: string[];
  icon?:ReactNode ;
  color?:string
};
export default function Filter({ filterItems,icon =<FaTags /> ,color = 'bg-violet-100 text-violet-700 hover:bg-violet-200' }: prop) {
  return (
    <div className="flex gap-3 flex-wrap mb-6 items-center">
      <span className="flex gap-2 items-center text-sm text-gray-600">
        <FaFilter />
        Active Filters:
      </span>
      {filterItems.map((item,idx) => (
        <Link
          key={idx}
          href={"/products"}
          className={`flex gap-2 items-center px-3 py-1.5 rounded-full  text-sm font-medium  transition-colors duration-100 ${color}`}
        >
          {icon}
          {item}
          <FaXmark />
        </Link>
      ))}

      <Link
        href={"/products"}
        className="text-sm text-gray-500 hover:text-gray-700 underline"
      >
        Clear all
      </Link>
    </div>
  );
}
