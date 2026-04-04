import Image from "next/image";
import React from "react";
import me from "../../../assets/image/01207179348.png";
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
import { Button } from "@/components/ui/button";
import Link from "next/link";
import AddToCartButton from "./AddToCartButton";
type Props = {
  product: productType;
};
export default function ProductCard({ product }: Props) {
  const discountPercent: number = Math.round(
    ((product.price - (product.priceAfterDiscount ?? product.price)) /
      product.price) *
      100,
  );
  return (
    <div className="bg-[#FFFFFF] rounded-lg overflow-hidden  border border-[#E5E7EB] col-span-1 transition-all duration-500 hover:-translate-y-1.5 shadow-black/20 hover:shadow-lg ">
      <div className="overflow-hidden relative h-63">
        <Image
          className="object-contain"
          src={product.imageCover}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-3 right-3">
          <div className="w-8 h-8 mb-2 rounded-full bg-[#FFFFFF] shadow-[0_1px_2px_-1px_rgba(0,0,0,0.1),0_1px_3px_0_rgba(0,0,0,0.1)] flex items-center justify-center cursor-pointer transition-all duration-500 hover:text-[#E7000B]  ">
            <CiHeart />
          </div>
          <div className="w-8 h-8 mb-2 rounded-full bg-[#FFFFFF] shadow-[0_1px_2px_-1px_rgba(0,0,0,0.1),0_1px_3px_0_rgba(0,0,0,0.1)] flex items-center justify-center cursor-pointer transition-all duration-500 hover:text-main-color  ">
            <BsArrowRepeat />
          </div>
          <Link
            href={`/products/${product.id}`}
            className="w-8 h-8  rounded-full bg-[#FFFFFF] shadow-[0_1px_2px_-1px_rgba(0,0,0,0.1),0_1px_3px_0_rgba(0,0,0,0.1)] flex items-center justify-center cursor-pointer transition-all duration-500 hover:text-main-color "
          >
            <FaRegEye />
          </Link>
        </div>
        {product.priceAfterDiscount && (
          <div className="top-3 left-3 absolute py-1 px-2 bg-[#FB2C36] rounded-sm text-[12px] font-medium lead-4 text-white">
            {-discountPercent}%
          </div>
        )}
      </div>
      <div className="flex flex-col gap-1 p-4">
        <p className="text-text-color font-medium text-[12px] leading-4">
          {product.category.name}
        </p>
        <Link
          href={`/products/${product.id}`}
          className="text-[#364153] font-medium leading-6 text-[16px] line-clamp-1 "
        >
          {product.title}
        </Link>
        <div className="flex gap-2">
          <div className="flex pt-0.75 pb-1 text-[#FCC800]">
            {Array.from({ length: 5 }).map((_, i) =>
              Math.floor(product.ratingsAverage) >= i + 1 ? (
                <span key={i}>
                  <FaStar />
                </span>
              ) : product.ratingsAverage % 1 >= 0.5 &&
                Math.floor(product.ratingsAverage) === i ? (
                <FaStarHalfAlt />
              ) : (
                <FaRegStar />
              ),
            )}
          </div>
          <span className="text-text-color font-medium text-[12px] leading-4">
            {product.ratingsAverage} ({product.ratingsQuantity})
          </span>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <p className="text-main-color font-bold text-[18px] leading-7.25">
              {product.priceAfterDiscount
                ? product.priceAfterDiscount
                : product.price}{" "}
              EGP
            </p>
            {product.priceAfterDiscount && (
              <p className="text-text-color font-medium text-[14px] leading-5 line-through">
                {product.price} EGP
              </p>
            )}
          </div>
          <AddToCartButton
            id={product.id}
            className="w-10 h-10 text-white rounded-full bg-main-color flex items-center justify-center transition-all duration-500 hover:bg-main-color-hover cursor-pointer"
          >
            <FaPlus color="white" />
          </AddToCartButton>
        </div>
      </div>
    </div>
  );
}
