import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
// import me from '../../assets/image/01207179348.png'
import { productBrand } from "@/api/types";
export default function BrandCard({ brand }: { brand: productBrand }) {
  return (
    <Link
      href={`/products?brand=${brand._id}`}
      className="bg-[#FFFFFF] p-4 sm:p-6 rounded-2xl border border-[#F3F4F6] hover:-translate-y-1 hover:border-violet-200-200 shadow-[0px_1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A] hover:shadow-[0px_8px_10px_-6px_#0000001A,0px_20px_25px_-5px_#0000001A] transition-all duration-300  group"
    >
      <div className="relative aspect-square rounded-xl p-4 flex justify-center items-center bg-[#F9FAFB] overflow-hidden mb-4">
        <div className="absolute inset-4">
          <Image
            fill
            className=" object-contain group-hover:scale-110 transition-transform duration-500"
            src={brand.image}
            alt={brand.name}
          ></Image>
        </div>
      </div>
      <h3 className="font-semibold text-sm leading-5 text-center text-[#101828] mb-2 group-hover:text-violet-600 transition-colors ">
        {brand.name}
      </h3>
      <div className="flex justify-center opacity-0 group-hover:opacity-100 transition-all ">
        <span className="text-xs flex items-center gap-1 font-medium leading-4 text-violet-600">
          View Subcategories <FaLongArrowAltRight />
        </span>
      </div>
    </Link>
  );
}
