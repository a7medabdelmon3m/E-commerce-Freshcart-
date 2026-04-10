import Link from "next/link";
import React, { ReactNode } from "react";
import { FaBoxOpen } from "react-icons/fa";
import Breadcrumbs from "./Breadcrumbs";
import { productBrand, productCategory } from "@/api/types";
import Image from "next/image";
export type prop = {
  grediantColors?: string;
  title: string;
  desc: string;
  icon?: ReactNode;
  brand?: productBrand | productCategory ;
  customName?:string;
  isBrand?:boolean
};
export default function PageHeader({
  grediantColors = 'from-main-color  via-[#22C55E] to-[#4ADE80]',
  title,
  desc,
  icon = "",
  brand,
  customName,
  isBrand
}: prop) {
  return (
    <div className={`bg-linear-to-br ${grediantColors} `}>
      <div className="container mx-auto px-4 py-8 space-y-6 text-white">
        <Breadcrumbs isBrand={isBrand} customName={customName as string} />
        <div className="flex gap-5">
          <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-[#FFFFFF33] backdrop-blur-sm shadow-[0px_8px_10px_-6px_#0000001A,0px_20px_25px_-5px_#0000001A] text-white text-3xl">
            {icon ? (
              icon
            ) : brand?.image ? (
              <div className="relative w-10 h-10">
                <Image
                  fill
                  className="object-contain"
                  src={brand.image}
                  alt={brand.name || "brand logo"}
                />
              </div>
            ) : (
              <FaBoxOpen /> 
            )}
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl leading-10 font-bold">{title}</h1>
            <p className="text-[#FFFFFFCC] font-medium">
              {desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
