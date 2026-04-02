"use client";
import Image from "next/image";
import React, { useState } from "react";
import me from "../../assets/image/01207179348.png";
import {
  FaBoxOpen,
  FaCalendar,
  FaCheckCircle,
  FaClock,
  FaCreditCard,
  FaHashtag,
  FaMoneyBill,
  FaPhone,
  FaReceipt,
  FaTruck,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { orderType, productItemType } from "@/api/types";
import { CheckoutValues } from "../checkout/checkout.schema";
export type prop = {
  orderDetails: orderType;
  shipingDetails?: CheckoutValues;
};
function getOrderStatus(order: orderType) {
  if (order.isDelivered) return "Delivered";
  if (order.isPaid) return "On The Way";
  return "Processing";
}
function getStatusColor(order: orderType) {
  if (order.isDelivered) return "text-green-500 bg-green-100";
  if (order.isPaid) return "text-blue-500 bg-blue-100";
  return "text-yellow-500 bg-yellow-100";
}
function getOrderIcon(order: { isPaid: boolean; isDelivered: boolean }) {
  if (order.isDelivered) return <FaCheckCircle className="text-green-500" />;
  if (order.isPaid) return <FaTruck className="text-blue-500" />;
  return <FaClock className="text-yellow-500" />;
}
function formatWebDate(webDate: string) {
  const date = new Date(webDate);

  const day = date.getDate();
  const year = date.getFullYear();

  const monthName = date
    .toLocaleString("en-US", { month: "short" })
    .toUpperCase();

  return {
    day: day,
    month: monthName,
    year: year,
    formatted: `${day} ${monthName} ${year}`,
  };
}
function getTotalItems(productList: productItemType[]) {
  const total = productList.reduce((acc, current) => {
    return acc + current.count;
  }, 0);

  return total;
}
export default function OrderItem({ orderDetails, shipingDetails }: prop) {
  const [orderIsOpen, setorderIsOpen] = useState(false);
  return (
    <div
      className={`bg-white space-y-6 rounded-2xl border border-[#BBF7D0]  hover:shadow-md hover:border-gray-200 ${orderIsOpen ? "shadow-[0px_4px_6px_-4px_#DCFCE780,0px_10px_15px_-3px_#DCFCE780]" : "shadow-sm"}`}
    >
      <div className="flex gap-5 p-6">
        <div className="relative">
          <div className="relative w-24 h-24 p-2.5 rounded-2xl border border-[#F3F4F6] bg-linear-to-br from-[#F9FAFB] to-[#FFFFFF]">
            <Image
              fill
              src={orderDetails.cartItems?.[0].product.imageCover}
              alt={orderDetails.cartItems?.[0].product.title}
              className="object-contain"
            ></Image>
          </div>
          {orderDetails.cartItems?.[0].count > 1 && (
            <div className="absolute -top-2 -right-2 flex items-center justify-center w-7 h-7 rounded-full bg-[#101828] text-white shadow-[0px_4px_6px_-4px_#0000001A,0px_10px_15px_-3px_#0000001A] text-xs font-bold leading-4">
              +{orderDetails.cartItems?.[0].count - 1}
            </div>
          )}
        </div>
        <div className="flex flex-col gap-3 flex-1">
          <div className="flex gap-3 items-start justify-between w-full">
            <div className="flex flex-col gap-2">
              <div
                className={`inline-flex  rounded-lg py-1 px-2.5 gap-1.5 ${getStatusColor(orderDetails)}`}
              >
                {getOrderIcon(orderDetails)}
                <span className="text-xs font-semibold leading-4">
                  {getOrderStatus(orderDetails)}
                </span>
              </div>
              <h1 className="flex gap-2 font-bold text-[#101828]">
                <FaHashtag color="#99A1AF" />
                {orderDetails.id}
              </h1>
            </div>
            <div className={`flex items-center justify-center shrink-0 rounded-xl w-10 h-10 ${orderDetails.paymentMethodType === 'cash'  ? 'bg-[#F3F4F6] text-[#4A5565]':'bg-[#F3E8FF] text-[#9810FA]'}`}>
                {
                    orderDetails.paymentMethodType === 'cash' ? <FaMoneyBill /> :<FaCreditCard />
                }
              
            </div>
          </div>
          <div className="flex gap-3 flex-wrap items-center">
            <span className="flex gap-1.5 text-sm font-medium lead5 text-text-color">
              <FaCalendar />
              {formatWebDate(orderDetails.createdAt).formatted}
            </span>
            <span className="w-1 h-1 bg-[#D1D5DC]"></span>
            <span className="flex gap-1.5 text-sm font-medium lead5 text-text-color">
              <FaBoxOpen />
              {getTotalItems(orderDetails.cartItems)} item
            </span>
            <span className="w-1 h-1 bg-[#D1D5DC]"></span>
            <span className="flex gap-1.5 text-sm font-medium lead5 text-text-color">
              <FaLocationDot />
              {orderDetails?.shippingAddress?.city || shipingDetails?.city} 
            </span>
          </div>
          <div className="flex gap-3 justify-between items-center w-full pt-[4.5px]">
            <div>
              <span className="font-bold text-[#101828] text-2xl leading-8">
                {orderDetails.totalOrderPrice}
              </span>
              <span className="font-medium text-sm text-[#99A1AF] leading-5">
                EGP
              </span>
            </div>
            <Button
              onClick={() => setorderIsOpen(!orderIsOpen)}
              className={`flex gap-2 rounded-xl py-2.5 px-4 h-auto  text-sm font-bold leading-5  transition-all duration-100 ${orderIsOpen ? "bg-main-color shadow-[0px_4px_6px_-4px_#16A34A40,0px_10px_15px_-3px_#16A34A40] text-white hover:bg-main-color-hover" : "bg-[#F3F4F6] text-[#364153] hover:bg-gray-200"}  `}
            >
              {orderIsOpen ? (
                <>
                  Hide
                  <IoIosArrowUp />
                </>
              ) : (
                <>
                  Details
                  <IoIosArrowDown />
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
      {orderIsOpen && (
        <div className="bg-[#F9FAFB80] border-t border-[#F3F4F6]">
          <div className=" flex gap-4 flex-col p-6">
            <h4 className="flex gap-2 items-center font-semibold text-sm leading-5 ">
              <div className="w-6 h-6 flex justify-center items-center rounded-lg bg-main-color-subtle text-[#101828]">
                <FaReceipt color="#16A34A" />
              </div>
              Order Items
            </h4>
            {orderDetails.cartItems.map((item) => (
              <div
                key={item._id}
                className="flex gap-4 items-center p-4 rounded-xl border border-[#F3F4F6] bg-white"
              >
                <div className="relative w-16 h-16 rounded-xl p-2 shrink-0 bg-[#F9FAFB]">
                  <Image
                    fill
                    className="object-contain "
                    src={item.product.imageCover}
                    alt={item.product.imageCover}
                  ></Image>
                </div>
                <div className="flex flex-col gap-1 flex-1 min-w-0 ">
                  <p className="font-medium text-[#101828] truncate w-full">{item.product.title}</p>
                  <p className="text-sm font-medium leading-5 text-text-color shrink-0">
                    {item.count} × {item.price} EGP
                  </p>
                </div>
                <div>
                  <p className="text-lg text-[#101828] font-bold leading-7">
                    {item.count * item.price}
                  </p>
                  <p className="text-xs leading-4 font-medium text-[#99A1AF]">
                    EGP
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="px-6 pb-6 flex flex-col lg:flex-row gap-4 ">
            <div className="flex flex-col flex-1 gap-3 p-4 rounded-xl border border-[#F3F4F6] bg-white">
              <div className="flex gap-2 items-center">
                <div className="flex items-center justify-center rounded-lg w-6 h-6  bg-main-color-subtle">
                  <FaLocationDot color="#155DFC" />
                </div>
                <span className="text-sm font-semibold leading-5 text-[#101828]">
                  Delivery Address
                </span>
              </div>
              <div className="space-y-2">
                <p className="font-medium text-[#101828]">{orderDetails?.shippingAddress?.city || shipingDetails?.city} City</p>
                <p className="text-sm leading-5 text-[#4A5565] font-medium">
                  {orderDetails?.shippingAddress?.details || shipingDetails?.details}
                </p>
                <p className="flex gap-2 pt-1.25 text-[#4A5565] text-sm font-medium leading-5">
                  <FaPhone color="#99A1AF" />
                  {orderDetails?.shippingAddress?.phone || shipingDetails?.phone}
                </p>
              </div>
            </div>
            <div className="flex flex-col flex-1 gap-3 p-4 rounded-xl border border-[#FEE685] bg-[#FEF3C6]">
              <h4 className="flex gap-2 font-semibold items-center text-sm leading-5 text-[#101828]">
                <div className="flex items-center justify-center w-6 h-6 rounded-lg bg-[#FE9A00]">
                  <FaClock color="white" />
                </div>
                Order Summary
              </h4>
              <div className="space-y-2">
                <div className="flex gap-3 justify-between items-center text-[#4A5565] text-sm leading-5 font-medium">
                  <span>Subtotal</span>
                  <span>{orderDetails.totalOrderPrice} EGP</span>
                </div>
                <div className="flex gap-3 justify-between items-center text-[#4A5565] text-sm leading-5 font-medium">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <hr className="border-t border-[#E5E7EB80]" />
                <div className="flex gap-3 justify-between items-center text-[#101828] text-sm leading-5 font-semibold">
                  <span>Total</span>
                  <span className="text-lg leading-7 font-bold">{orderDetails.totalOrderPrice} EGP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
