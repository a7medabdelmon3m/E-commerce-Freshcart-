"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import me from "../../../assets/image/01207179348.png";
import { FaCheck, FaMinus, FaPlus } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { MdDelete } from "react-icons/md";
import { productItemType } from "@/api/types";
import DeleteItemBtn from "./DeleteItemBtn";
import UpdateItemCount from "./UpdateItemCount";
import { ImSpinner8 } from "react-icons/im";
type prop = {
  product: productItemType;
};
export default function CartItem({ product }: prop) {
  const [isLoading, setisLoading] = useState(false);
  return (
    <div>
      <div className="space-y-4 ">
        <div className="relative overflow-hidden p-4 sm:p-5 rounded-2xl bg-[#FFFFFF]  shadow-[0px_1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A] border border-[#F3F4F6] hover:shadow-md duration-300 transition-all">
          {isLoading && (
            <div className="absolute inset-0 bg-main-color/10 backdrop-blur-sm transition-all duration-100 z-10 flex gap-40 items-center justify-center ">
              <div className="shadow-lg flex gap-2 items-center justify-center py-3 px-6 bg-white text-text-color rounded-full font-medium">
                <ImSpinner8 className="text-main-color animate-spin " />
                Updateing...
              </div>
            </div>
          )}
          <div className="flex gap-4 sm:gap-6">
            <Link href={"/"} className="relative shrink-0 group">
              <div className="relative h-28 w-28 sm:h-32 sm:w-32 p-3 border border-[#F3F4F6] rounded-xl bg-linear-to-br from-[#F9FAFB] via-[#FFFFFF] to-[#F3F4F6] overflow-hidden">
                <Image
                  fill
                  src={product.product.imageCover}
                  className="w-full! h-full object-contain group-hover:scale-110 transition-all duration-300"
                  alt={product.product.title}
                />
              </div>
              <div className="absolute -bottom-1 -right-1  py-0.5 px-2 flex items-center gap-1 rounded-full bg-[#00C950] text-white text-[10px] leading-4 ">
                <FaCheck />
                In Stock
              </div>
            </Link>
            <div className="flex flex-col flex-1">
              <div className="mb-3 flex flex-col gap-2">
                <Link href="/" className="group/title">
                  <h3 className="text-[#101828] text-base sm:text-lg leading-7.25 font-semibold group-hover/title:text-main-color">
                    {product.product.title}
                  </h3>
                </Link>
                <div className="flex items-center gap-2 text-[12px] font-medium leading-4">
                  <span className="inline-block bg-linear-to-r from-[#F0FDF4] to-[#F3F4F6] rounded-full px-2.5 py-1 text-main-color-hover">
                    {product.product.category.name}
                  </span>
                  <span className="text-[#99A1AF] flex items-center">•</span>
                  <span className="text-text-color">
                    SKU: {product.product.id.slice(-6).toUpperCase()}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[18px] leading-7 font-bold text-main-color">
                  {product.price} EGP
                </span>
                <span className="font-medium text-[12px] leading-4 text-[#99A1AF]">
                  per unit
                </span>
              </div>
              <div className="flex flex-wrap gap-4 justify-between items-center">
                <div className="flex items-center p-1 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB]">
                  <UpdateItemCount
                    isPlus={false}
                    newCount={product.count - 1}
                    id={product.product.id}
                    setIsLoading={setisLoading}
                  />
                  <span className="w-12 text-center text-[#101828] font-bold">
                    {product.count}
                  </span>
                  <UpdateItemCount
                    newCount={product.count + 1}
                    id={product.product.id}
                    setIsLoading={setisLoading}
                  />
                </div>
                <div className="flex gap-4 items-center ">
                  <div className="flex flex-col gap-0.5 min-w-17]">
                    <p className="text-xs text-[#99A1AF] leading-4">Total</p>
                    <p className="text-xl">
                      <span className="text-[#101828] font-bold leading-7 text-5 text-right">
                        {product.count * product.price}
                      </span>
                      <span className="text-sm leading-5 font-medium text-[#99A1AF]">
                        EGP
                      </span>
                    </p>
                  </div>
                  <DeleteItemBtn
                    id={product.product.id}
                    title={product.product.title}
                  ></DeleteItemBtn>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
