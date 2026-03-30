"use client";
import { productType } from "@/api/types";
import AddToCartButton from "@/app/_component/productCard/AddToCartButton";
import QuantitySelector from "@/app/_component/quantitySelector/QuantitySelector";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState } from "react";
import {
  FaRegHeart,
  FaShareAlt,
  FaShoppingCart,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";
import {
  FaArrowRotateLeft,
  FaShieldHalved,
  FaTruckFast,
} from "react-icons/fa6";
import { MdElectricBolt } from "react-icons/md";

export default function ProductDetailsCard({
  productDetails,
}: {
  productDetails: productType;
}) {
  const [quantity, setQuantity] = useState(1);
  const realPrice = productDetails?.priceAfterDiscount || productDetails?.price;

  return (
    <div>
      <div className="rounded-xl p-6 shadow-[0px_1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A]">
        <div className="flex gap-2 mb-4">
          <Link
            href={"/"}
            className="py-1.5 px-2.5 rounded-full bg-[#F0FDF4] text-main-color leading-4 text-[12px] font-medium "
          >
            {productDetails?.category.name}
          </Link>
          <span className="py-1.5 px-2.5 rounded-full bg-[#F3F4F6] text-[#364153] leading-4 text-[12px] font-medium ">
            {productDetails?.brand.name}
          </span>
        </div>
        <h1 className="text-2xl leading-9 font-bold">
          {productDetails?.title}
        </h1>
        <div className="flex gap-3 items-center mb-4">
          <div className="flex text-yellow-400 pt-0.75 pb-1.25">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
          </div>
          <span className="text-sm font-medium text-[#4A5565]">
            {productDetails?.ratingsAverage} ({productDetails?.ratingsQuantity}{" "}
            reviews)
          </span>
        </div>
        <div className="text-[#101828] font-bold text-3xl leading-9 mb-6">
          <span>{realPrice} EGP</span>
        </div>
        <div className="flex mb-6">
          <span className="flex py-1.5 px-2.5 items-center rounded-full gap-1.5 bg-[#F0FDF4] font-medium leading-4 text-[14px] text-[#008236]">
            <span className="w-2 h-2 rounded-full bg-[#00C950]"></span>
            In Stock
          </span>
        </div>
        <div className="border-t pt-5 border-[#F3F4F6] text-[#4A5565] leading-6.5 font-medium mb-6">
          <p>{productDetails?.description}</p>
        </div>
        <div className="mb-6 gap-2 flex-col">
          <label
            className="text-[#364153] font-medium text-sm leading-5"
            htmlFor=""
          >
            Quantity
          </label>
          <div className="flex gap-4 items-center">
            <QuantitySelector
              quantity={quantity}
              setQuantity={setQuantity}
              stock={productDetails?.quantity}
            />
            <span className="text-sm leading-5 font-medium text-text-color">
              {productDetails?.quantity} available
            </span>
          </div>
        </div>
        <div className="rounded-lg p-4 bg-[#F9FAFB] mb-6">
          <div className="flex justify-between items-center">
            <span className="text-[#4A5565] font-medium">Total Price:</span>
            <span className="text-2xl font-bold leading-8 text-main-color">
              {realPrice * quantity} EGP
            </span>
          </div>
        </div>
        <div className="flex gap-3 mb-6">
          {/* <Button className=" rounded-xl h-auto flex gap-2 py-3.5 px-6 items-center flex-1 text-white font-medium bg-main-color shadow-[0px_4px_6px_-3px_#16A34A40,0px_10px_15px_-3px_#16A34A40] hover:bg-main-color-hover">
           
          </Button> */}
          <AddToCartButton id={productDetails.id} successState="Add to Cart" className="rounded-xl h-auto flex gap-2 py-3.5 px-6 items-center flex-1 text-white font-medium bg-main-color shadow-[0px_4px_6px_-3px_#16A34A40,0px_10px_15px_-3px_#16A34A40] hover:bg-main-color-hover">
            <FaShoppingCart />
            Add to Cart
          </AddToCartButton>
          <Button className=" rounded-xl h-auto flex gap-2 py-3.5 px-6 items-center flex-1 text-white font-medium bg-[#101828] hover:bg-[#1E2939]">
            <MdElectricBolt />
            Buy Now
          </Button>
        </div>
        <div className="flex gap-3 mb-6">
          <Button className=" rounded-xl h-auto flex gap-2 py-3 px-4 items-center justify-center flex-1 text-[#364153] font-medium border-2 border-[#E5E7EB] hover:text-main-color-hover hover:border-[#9DF2BB]">
            <FaRegHeart />
            Add to Wishlist
          </Button>

          <Button className="rounded-xl h-auto flex gap-2 p-4! items-center justify-center text-[#364153] font-medium border-2 border-[#E5E7EB] hover:text-main-color-hover hover:border-[#9DF2BB]">
            <FaShareAlt />
          </Button>
        </div>
        <div className="border-t border-[#F3F4F6] pt-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex gap-3">
              <div className="w-10 h-10 bg-main-color-subtle flex items-center justify-center text-main-color rounded-full">
                <FaTruckFast />
              </div>
              <div className="">
                <h4 className="text-[#101828] text-[14px] leading-5 font-medium">
                  Free Delivery
                </h4>
                <p className="text-xs text-text-color font-medium leading-4">
                  Orders over $50
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-10 h-10 bg-main-color-subtle flex items-center justify-center text-main-color rounded-full">
                <FaArrowRotateLeft />
              </div>
              <div className="">
                <h4 className="text-[#101828] text-[14px] leading-5 font-medium">
                  30 Days Return
                </h4>
                <p className="text-xs text-text-color font-medium leading-4">
                  Money back
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-10 h-10 bg-main-color-subtle flex items-center justify-center text-main-color rounded-full">
                <FaShieldHalved />
              </div>
              <div className="">
                <h4 className="text-[#101828] text-[14px] leading-5 font-medium">
                  Secure Payment
                </h4>
                <p className="text-xs text-text-color font-medium leading-4">
                  100% Protected
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
