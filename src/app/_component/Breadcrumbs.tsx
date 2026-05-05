"use client";
import Link from "next/link";
// import { usePathname } from "next/navigation";
import React from "react";

export default function Breadcrumbs({ customName,linkColor='text-[#FFFFFFB2]', pageColor ='text-white',linkColorHover= 'hover:text-white' }: { customName: string[],linkColor?:string , pageColor?:string ,linkColorHover?:string }) {
  // const pathname = usePathname();
  // console.log("pathname  : ", pathname);
  // let segments = pathname.split("/").filter((seg) => seg !== "");
  // if(segments.length > 1 ){
  //   segments.pop()
  // }
  // if (customName) {
  //     if(isBrand)
  //      segments = ["brands", customName];
  //     else
  //      segments = ["categories", customName]; 
  // }
const segments = customName ;
  return (
    <nav className="flex items-center gap-2 text-sm leading-5 font-medium">
      <Link
        href={"/"}
        className={`${linkColor}${linkColorHover} transition-colors duration-100`}
      >
        Home
      </Link>

      {segments.map((seg, idx) => {
        const isLast = idx === segments.length - 1;

        const href =
          seg === "brands"
            ? "/brands"
            : `/${segments.slice(0, idx + 1).join("/")}`;

        return (
          <React.Fragment key={idx}>
            <span className={`${linkColor}`}>/</span>
            {isLast ? (
              <span className={`${pageColor} capitalize`}>
                {seg === "products" ? "All Products" : seg}
              </span>
            ) : (
              <Link
                href={href}
                className={`${linkColor} ${linkColorHover} transition-colors duration-100 capitalize`}
              >
                {seg}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
