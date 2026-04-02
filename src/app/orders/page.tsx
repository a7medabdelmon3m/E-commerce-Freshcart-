import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaBoxOpen,
  FaCalendar,
  FaClock,
  FaHashtag,
  FaLocationArrow,
  FaMoneyBill,
  FaPhone,
  FaReceipt,
  FaShoppingBag,
} from "react-icons/fa";
import { FaLocationDot, FaLocationPin } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { IoIosArrowUp } from "react-icons/io";
import OrderItem from "./OrderItem";
import { getUserOrders } from "@/api/services/route.services";

export default async function Orders() {
   const resp =  await getUserOrders()
   const shipingDetails = resp?.[0].shippingAddress ;
  return (
    <section>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex gap-4 flex-col">
          <ul className="flex gap-2">
            <li className="flex items-center text-text-color text-sm font-medium leading-5">
              <Link className="flex items-center gap-1.5 " href={"/"}>
                <span>Home</span>
              </Link>
            </li>
            <span>/</span>
            <li className="flex items-center text-[#101828] text-sm font-medium leading-5">
              <span>My Orders</span>
            </li>
          </ul>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <div className="flex gap-3 items-center">
                <div className="flex items-center  justify-center h-14 w-14 rounded-xl bg-linear-to-r from-main-color to-main-color-hover">
                  <FaBoxOpen color="white" size={30} />
                </div>
                <div>
                  <h1 className="text-3xl font-bold leading-9 text-[#101828]">
                    My Orders
                  </h1>
                  <p className="text-text-color text-sm leading-5 font-medium">
                    Track and manage your 8 orders
                  </p>
                </div>
              </div>
              <Link
                href={"/"}
                className="flex gap-2 py-2 px-4 rounded-xl font-medium text-sm leading-5 text-main-color hover:text-main-color-hover items-center"
              >
                <FaShoppingBag />
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
        <div className="space-y-4">
            {
                resp?.map(item =>  <OrderItem key={item.id} orderDetails= {item}  shipingDetails={shipingDetails} />)
            }
           
        </div>
      </div>
    </section>
  );
}
