import Link from "next/link";
import React from "react";

export default function FooterList({
  listHeader,
  listItems,
}: {
  listHeader: string;
  listItems: string[];
}) {
  return (
    <div className="flex flex-col gap-5">
      <h3 className="text-[18px] font-medium text-white leading-7">
        {listHeader}
      </h3>
      <ul className=" flex flex-col gap-3 text-[14px] text-[#99A1AF] leading-5 font-medium ">
        {listItems.map((item,idx) => (
          <li key={idx} className="pt-0.75 pb-px  ">
            <Link className="hover:text-main-color" href="#">
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
