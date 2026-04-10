"use client";

import Image from "next/image";
import React from "react";
import { CiHeart } from "react-icons/ci";
import { BsArrowRepeat } from "react-icons/bs";
import {
  FaPlus,
  FaRegEye,
  FaRegStar,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";
import { productType } from "@/api/types";
import Link from "next/link";
import AddToCartButton from "./AddToCartButton";

type Props = {
  product: productType;
};

export default function ProductCard({ product }: Props) {
  const discountPercent: number = product.priceAfterDiscount
    ? Math.round(
        ((product.price - product.priceAfterDiscount) / product.price) * 100,
      )
    : 0;

  return (
    <div className="group bg-[#FFFFFF] rounded-lg overflow-hidden border border-[#E5E7EB] col-span-1 transition-all duration-500 hover:-translate-y-1.5 shadow-black/20 hover:shadow-lg ">
      <div className="overflow-hidden relative h-63">
        <Image
          className="object-contain p-2"
          src={product.imageCover}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        <div className="absolute top-3 right-3 z-10">
          <div className="w-8 h-8 mb-2 rounded-full bg-[#FFFFFF] shadow-sm flex items-center justify-center cursor-pointer transition-all duration-500 hover:text-[#E7000B]">
            <CiHeart size={20} />
          </div>
          <div className="w-8 h-8 mb-2 rounded-full bg-[#FFFFFF] shadow-sm flex items-center justify-center cursor-pointer transition-all duration-500 hover:text-main-color">
            <BsArrowRepeat size={18} />
          </div>
          <Link
            href={`/products/${product.id}`}
            className="w-8 h-8 rounded-full bg-[#FFFFFF] shadow-sm flex items-center justify-center cursor-pointer transition-all duration-500 hover:text-main-color"
          >
            <FaRegEye size={18} />
          </Link>
        </div>

        {discountPercent > 0 && (
          <div className="top-3 left-3 absolute py-1 px-2 bg-[#FB2C36] rounded-sm text-[12px] font-medium leading-4 text-white z-10">
            -{discountPercent}%
          </div>
        )}
      </div>

      <div className="flex flex-col gap-1 p-4">
        <p className="text-text-color font-medium text-[12px] leading-4">
          {product.category?.name}
        </p>

        <Link
          href={`/products/${product.id}`}
          className="text-[#364153] font-medium leading-6 text-[16px] line-clamp-1 hover:text-main-color transition-colors"
        >
          {product.title}
        </Link>

        <div className="flex items-center gap-2">
          <div className="flex text-[#FCC800]">
            {Array.from({ length: 5 }).map((_, i) => {
              const rating = product.ratingsAverage || 0;
              if (rating >= i + 1) return <FaStar key={i} />;
              if (rating > i && rating < i + 1)
                return <FaStarHalfAlt key={i} />;
              return <FaRegStar key={i} />;
            })}
          </div>
          <span className="text-text-color font-medium text-[12px] leading-4">
            {product.ratingsAverage} ({product.ratingsQuantity})
          </span>
        </div>

        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center gap-2">
            <p className="text-main-color font-bold text-[18px] leading-none">
              {product.priceAfterDiscount || product.price} EGP
            </p>
            {discountPercent > 0 && (
              <p className="text-gray-400 font-medium text-[14px] line-through">
                {product.price} EGP
              </p>
            )}
          </div>

          <AddToCartButton
            id={product.id}
            className="w-10 h-10 text-white rounded-full bg-main-color flex items-center justify-center transition-all duration-300 hover:bg-green-600 cursor-pointer shadow-md"
          >
            <FaPlus color="white" />
          </AddToCartButton>
        </div>
      </div>
    </div>
  );
}
