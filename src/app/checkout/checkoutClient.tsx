"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsCreditCardFill } from "react-icons/bs";
import {
  FaBookmark,
  FaBox,
  FaCheck,
  FaCity,
  FaCreditCard,
  FaHashtag,
  FaLocationArrow,
  FaMoneyBill,
  FaPhone,
  FaPlus,
  FaReceipt,
  FaShoppingBag,
  FaTag,
} from "react-icons/fa";
import {
  FaCircleInfo,
  FaHouse,
  FaLocationDot,
  FaShieldHalved,
  FaTruckFast,
} from "react-icons/fa6";
import visa from "../../assets/image/Visa.png";
import amex from "../../assets/image/Amex.png";
import mastercard from "../../assets/image/Mastercard.png";
import me from "../../assets/image/01207179348.png";
import { useForm } from "react-hook-form";
import { checkoutSchema, CheckoutValues } from "./checkout.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { createCashOrder, createOnlneOrder } from "./checkout.actions";
import { getCartItems } from "@/api/services/route.services";
import CartItem from "../cart/cartItem/CartItem";
import { cartItemType } from "@/api/types";
import { LuLoaderCircle } from "react-icons/lu";
import { toast } from "react-toastify";
import { string } from "zod";
import { useRouter } from "next/navigation";
import { cartContextType, useCartContext } from "../_context/CartContext";
export type prop = {
  cartItems: cartItemType | undefined;
};
export default function CheckoutClient({ cartItems }: prop) {
  const [isLoading, setisLoading] = useState(false);
  const [paymentMethod, setpaymentMethod] = useState("cash");
  const router = useRouter();
const {updateNumOfCartItems} = useCartContext() as cartContextType
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutValues>({
    defaultValues: {
      city: "",
      details: "",
      phone: "",
      postalCode: "",
    },
    resolver: zodResolver(checkoutSchema),
  });
  // const id = "69c98f77ac2041b612a0b21f";
  async function MySubmit(data: CheckoutValues) {
    // const body = {
    //   shippingAddress: {
    //     details: data.details,
    //     phone: data.phone,
    //     city: data.city,
    //     postalCode: data.postalCode,
    //   },
    // };
    setisLoading(true);
    try {
      setisLoading(true);
      const res =
        paymentMethod === "cash"
          ? await createCashOrder(cartItems?._id || "", data)
          : await createOnlneOrder(cartItems?._id || "", data);

      if (paymentMethod === "cash") {
        if (res.success) {
          
          toast.success("Order Placed Successfully");
          updateNumOfCartItems(0)
          router.push("/orders");
        } else {
         
          throw new Error(res.message);
        }
      } else {
        
        if (typeof res === "string") {
          window.open(res, "_self");
        } else {
          throw new Error("Payment link not found");
        }
      }
    } catch (error) {
      console.error("Order Error:", error);
      
      toast.error('failed to place order');
    } finally {
      setisLoading(false);
    }
  }
  return (
    <section className="bg-linear-to-b from-[#F9FAFB] to-[#FFFFFF] py-8">
      <div className="container mx-auto px-4 flex flex-col gap-8 ">
        <div className="flex flex-col gap-6">
          <div className="mb-8 flex gap-4 flex-col">
            <ul className="flex gap-2">
              <li className="flex items-center text-text-color text-[14px] font-medium leading-5">
                <Link className="flex items-center gap-1.5 " href={"/"}>
                  <span>Home</span>
                </Link>
              </li>
              <span>/</span>
              <li className="flex items-center text-text-color text-[14px] font-medium leading-5">
                <Link className="flex items-center gap-1.5 " href={"/cart"}>
                  <span>Shopping Cart</span>
                </Link>
              </li>
              <span>/</span>

              <li className="flex items-center text-[#101828] text-[14px] font-medium leading-5">
                <Link className="flex items-center gap-1.5 " href={"/"}>
                  CheckOut
                </Link>
              </li>
            </ul>
            <div className="flex flex-col gap-2">
              <div className="flex gap-3 items-center text-3xl font-bold leading-9 text-[#101828]">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-linear-to-r from-main-color to-main-color-hover">
                  <FaReceipt color="white" />
                </div>
                <h1>Complete Your Order</h1>
              </div>
              <p className="text-text-color font-medium">
                Review your items and complete your purchase
              </p>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div className="rounded-2xl border border-[#F3F4F6] bg-white  overflow-hidden shadow-[0px_1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A]">
                  <div className="flex flex-col  gap-1 px-4 py-6 bg-linear-to-r from-main-color to-main-color-hover">
                    <h2 className="text-lg flex items-center gap-2 text-white font-bold leading-7 ">
                      <FaHouse />
                      Shipping Address
                    </h2>
                    <p className="text-main-color-subtle leading-5 font-medium text-sm">
                      Where should we deliver your order?
                    </p>
                  </div>
                  <form id="checkoutForm" onSubmit={handleSubmit(MySubmit)}>
                    <div className="p-6 space-y-5">
                      <div className="pb-3 sapcey-3">
                        <div className="flex gap-2 text-[#1E2939] font-semibold ">
                          <FaBookmark className="text-main-color" />
                          Saved Addresses
                        </div>

                        <div className="space-y-3">
                          <p className="text-sm leading-5 font-medium text-[#4A5565]">
                            Select a saved address or enter a new one below
                          </p>
                          <Button className="flex flex-col items-start! gap-0.5 p-4 rounded-xl border-2 border-[#E5E7EB] h-auto! w-full">
                            <div className="flex gap-3">
                              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#F3F4F6] text-text-color">
                                <FaLocationDot />
                              </div>
                              <div className="flex flex-col flex-1 gap-0.5 text-start">
                                <p className="font-semibold text-[#101828]">
                                  Sadat City
                                </p>
                                <p className="text-sm leading-5 font-medium text-[#4A5565]">
                                  Sadat City
                                </p>
                                <div className="flex gap-4 pt-1.5 text-text-color text-[12px] leading-4 font-medium">
                                  <span className="flex gap-1 ">
                                    <FaPhone />
                                    01097514862
                                  </span>
                                  <span className="flex gap-1 ">
                                    <FaCity />
                                    Sadat City
                                  </span>
                                </div>
                              </div>
                            </div>
                          </Button>
                          <Button className=" justify-start text-start p-4 rounded-xl bg-[#F0FDF4] border border-dashed border-[#22C55E] h-auto w-full ">
                            <div className="flex gap-3">
                              <div className="flex items-center justify-center bg-[#22C55E] w-10 h-10 rounded-lg text-white">
                                <FaPlus />
                              </div>
                              <div className="flex flex-col gap-0.5">
                                <p className="text-main-color font-semibold">
                                  Use a different address
                                </p>
                                <p className="text-xs text-text-color leading-4 font-medium">
                                  Enter a new shipping address manually
                                </p>
                              </div>
                            </div>
                          </Button>
                        </div>
                      </div>
                      <div className="flex gap-3 rounded-xl p-4 border border-main-color-subtle bg-[#F0FDF4]">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-main-color-subtle text-[#155DFC]">
                          <FaCircleInfo />
                        </div>
                        <div className="flex flex-col gap-0.5">
                          <p className="text-sm font-medium leading-5 text-[#193CB8] ">
                            Delivery Information
                          </p>
                          <p className=" text-xs font-medium text-[#155DFC] leading-4">
                            Please ensure your address is accurate for smooth
                            delivery
                          </p>
                        </div>
                      </div>

                      <div className=" space-y-2">
                        <label
                          htmlFor="city"
                          className="text-sm font-semibold leading-5"
                        >
                          City <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Input
                            {...register("city")}
                            placeholder="e.g. Cairo, Alexandria, Giza"
                            className="p-4 pl-14 border-2 border-[#E5E7EB] rounded-xl bg-transparent placeholder:font-medium placeholder:text-[#36415380] h-auto focus:outline-none focus:border-main-color focus:ring-2 focus:ring-green-100 transition-all duration-100"
                            id="city"
                          ></Input>
                          <div className="flex items-center justify-center absolute left-4 top-1/2 -translate-y-1/2 z-10  w-8 h-8 rounded-lg bg-[#F3F4F6] text-text-color">
                            <FaCity />
                          </div>
                        </div>
                        {errors.city && (
                          <p className="text-red-500">{errors.city.message}</p>
                        )}
                      </div>
                      <div className=" space-y-2">
                        <label
                          htmlFor="address"
                          className="text-sm font-semibold leading-5"
                        >
                          Street Address <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <textarea
                            {...register("details")}
                            placeholder="Street name, building number, floor, apartment..."
                            className="p-4 pl-14 pb-15.5 border-2 border-[#E5E7EB] rounded-xl bg-transparent placeholder:font-medium placeholder:text-[#36415380] h-auto w-full focus:outline-none focus:border-main-color focus:ring-2 focus:ring-green-100 transition-all duration-100"
                            id="address"
                          ></textarea>
                          <div className="flex items-center justify-center absolute left-4 top-4 z-10  w-8 h-8 rounded-lg bg-[#F3F4F6] text-text-color">
                            <FaLocationDot />
                          </div>
                        </div>
                        {errors.details && (
                          <p className="text-red-500">
                            {errors.details.message}
                          </p>
                        )}
                      </div>
                      <div className=" space-y-2">
                        <label
                          htmlFor="phone"
                          className="text-sm font-semibold leading-5"
                        >
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Input
                            {...register("phone")}
                            type="tel"
                            placeholder="01xxxxxxxxx"
                            className="p-4 pl-14 border-2 border-[#E5E7EB] rounded-xl bg-transparent placeholder:font-medium placeholder:text-[#36415380] h-auto focus:outline-none focus:border-main-color focus:ring-2 focus:ring-green-100 transition-all duration-100"
                            id="phone"
                          ></Input>
                          <div className="flex items-center justify-center absolute left-4 top-1/2 -translate-y-1/2 z-10  w-8 h-8 rounded-lg bg-[#F3F4F6] text-text-color">
                            <FaCity />
                          </div>
                          <span className="absolute  right-4 top-1/2 -translate-y-1/2 z-10 text-[#99A1AF] text-xs font-medium leading-4">
                            Egyptian numbers only
                          </span>
                        </div>
                        {errors.phone && (
                          <p className="text-red-500">{errors.phone.message}</p>
                        )}
                      </div>
                      <div className=" space-y-2">
                        <label
                          htmlFor="postCode"
                          className="text-sm font-semibold leading-5"
                        >
                          postalCode <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Input
                            {...register("postalCode")}
                            maxLength={5}
                            placeholder="e.g. 32866"
                            className="p-4 pl-14 border-2 border-[#E5E7EB] rounded-xl bg-transparent placeholder:font-medium placeholder:text-[#36415380] h-auto focus:outline-none focus:border-main-color focus:ring-2 focus:ring-green-100 transition-all duration-100"
                            id="postCode"
                          ></Input>
                          <div className="flex items-center justify-center absolute left-4 top-1/2 -translate-y-1/2 z-10  w-8 h-8 rounded-lg bg-[#F3F4F6] text-text-color">
                            <FaHashtag />
                          </div>
                          <span className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-[#99A1AF] text-[10px] font-medium leading-4 hidden sm:block">
                            5 digits
                          </span>
                        </div>
                        {errors.postalCode && (
                          <p className="text-red-500">
                            {errors.postalCode.message}
                          </p>
                        )}
                      </div>
                    </div>
                  </form>
                </div>
                <div className="rounded-2xl border border-[#F3F4F6] bg-white  overflow-hidden shadow-[0px_1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A]">
                  <div className="flex flex-col  gap-1 px-4 py-6 bg-linear-to-r from-main-color to-main-color-hover">
                    <h2 className="text-lg flex items-center gap-2 text-white font-bold leading-7 ">
                      <BsCreditCardFill />
                      Payment Method
                    </h2>
                    <p className="text-main-color-subtle leading-5 font-medium text-sm">
                      Choose how you&apos;d like to pay
                    </p>
                  </div>
                  <div className="p-6 space-y-4">
                    <Button
                      onClick={() => setpaymentMethod("cash")}
                      className={`h-auto! whitespace-normal text-start flex gap-4 justify-start p-5 rounded-xl border-2 w-full shadow-[0px_1px_2px_-px_#0000001A,0px_1px_3px_0px_#0000001A] ${paymentMethod === "cash" ? "bg-gradient-to-r from-green-50 to-blue-50 border-main-color" : "bg-transparent border-[#E5E7EB]"}`}
                    >
                      <div
                        className={`w-14 h-14 shrink-0 flex items-center justify-center rounded-xl text-xl ${paymentMethod === "cash" ? "bg-linear-to-br from-[#22C55E] to-main-color text-white" : "bg-[#F3F4F6] text-[#99A1AF]"} `}
                      >
                        <FaMoneyBill />
                      </div>
                      <div className="flex flex-col flex-wrap gap-0.5 flex-1 ">
                        <h3
                          className={` font-bold ${paymentMethod === "cash" ? "text-main-color" : "text-[#101828]"}`}
                        >
                          Cash on Delivery
                        </h3>
                        <p className="text-sm leading-5 font-medium text-text-color">
                          Pay when your order arrives at your doorstep
                        </p>
                      </div>
                      <div
                        className={`flex shrink-0 items-center justify-center rounded-full border-2  w-7 h-7 text-white ${paymentMethod === "cash" ? "border-main-color bg-main-color" : "border-[#E5E7EB]"}`}
                      >
                        {paymentMethod === "cash" ? <FaCheck /> : ""}
                      </div>
                    </Button>
                    <Button
                      onClick={() => setpaymentMethod("online")}
                      className={`h-auto! whitespace-normal text-start flex gap-4 justify-start p-5 rounded-xl border-2  ${paymentMethod === "online" ? "bg-gradient-to-r from-green-50 to-blue-50 border-main-color" : "bg-transparent border-[#E5E7EB]"}  w-full shadow-[0px_1px_2px_-px_#0000001A,0px_1px_3px_0px_#0000001A]`}
                    >
                      <div
                        className={`w-14 h-14 shrink-0 flex items-center justify-center rounded-xl  text-xl ${paymentMethod === "online" ? "bg-gradient-to-br from-green-500 to-blue-600 text-white shadow-green-500/30" : "bg-[#F3F4F6] text-[#99A1AF]"}`}
                      >
                        <FaCreditCard />
                      </div>
                      <div className="flex flex-col gap-0.5 flex-1 ">
                        <h3
                          className={`font-bold ${paymentMethod === "online" ? "text-main-color" : "text-[#101828]"}`}
                        >
                          Pay Online
                        </h3>
                        <p className="text-sm leading-5 font-medium text-text-color ">
                          Secure payment with Credit/Debit Card via Stripe
                        </p>
                        <div className="flex gap-2 pt-1.5 ">
                          <div className="relative w-5 h-5">
                            <Image
                              fill
                              className=" object-contain"
                              src={visa}
                              alt="visa"
                            ></Image>
                          </div>
                          <div className="relative w-5 h-5">
                            <Image
                              fill
                              className=" object-contain"
                              src={amex}
                              alt="visa"
                            ></Image>
                          </div>
                          <div className="relative w-5 h-5">
                            <Image
                              fill
                              className=" object-contain"
                              src={mastercard}
                              alt="visa"
                            ></Image>
                          </div>
                        </div>
                      </div>
                      <div
                        className={`flex shrink-0 items-center justify-center rounded-full border-2  w-7 h-7 text-white ${paymentMethod === "online" ? "border-main-color bg-main-color" : "border-[#E5E7EB]"}`}
                      >
                        {paymentMethod === "online" ? <FaCheck /> : ""}
                      </div>
                    </Button>
                    <div className="flex items-center gap-3 p-4 rounded-xl border border-main-color-subtle bg-linear-to-r from-[#F0FDF4] to-[#F3F4F6] ">
                      <div className="bg-main-color-subtle flex items-center justify-center w-10 h-10 rounded-full text-main-color shrink-0 ">
                        <FaShieldHalved />
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <p className="text-sm text-[#016630] leading-5 font-medium">
                          Secure & Encrypted
                        </p>
                        <p className="text-xs font-medium leading-4 text-[#00A63E]">
                          Your payment info is protected with 256-bit SSL
                          encryption
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-1">
                <div className="rounded-2xl border border-[#F3F4F6] bg-white sticky top-24 overflow-hidden shadow-[0px_1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A]">
                  <div className="flex flex-col gap-1 px-4 py-6 bg-linear-to-r from-main-color to-main-color-hover">
                    <h2 className="text-lg flex gap-2 text-white font-bold leading-7 ">
                      <FaShoppingBag />
                      Order Summary
                    </h2>
                    <p className="text-main-color-subtle leading-5 font-medium text-sm">
                      {cartItems?.products.length} items
                    </p>
                  </div>
                  <div className="p-5">
                    <div className=" h-56 space-y-3 overflow-y-auto">
                      {cartItems?.products.map((item) => (
                        <div
                          key={item._id}
                          className="flex items-center gap-3 p-3 rounded-xl bg-[#F9FAFB] hover:bg-gray-100 transition-colors"
                        >
                          <div className="relative overflow-hidden w-14 h-14 rounded-lg p-1 border border-[#F3F4F6] bg-[#F3F4F6]">
                            <Image
                              fill
                              className="object-contain"
                              src={item.product.imageCover}
                              alt={item.product.title}
                            ></Image>
                          </div>
                          <div className="flex flex-1 flex-col gap-0.5 ">
                            <p className="text-sm font-medium text-[#101828] leading-5">
                              {item.product.title}
                            </p>
                            <p className="text-xs font-medium leading-4 text-text-color">
                              {item.count} × {item.price} EGP
                            </p>
                          </div>
                          <p className="text-sm leading-5 font-bold text-[#101828]">
                            {item.price}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="border-t border-[#F3F4F6] h-px mt-5"></div>
                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between font-medium">
                        <span className="text-[#4A5565]">Subtotal</span>
                        <span className="text-[#4A5565]">
                          {cartItems?.totalCartPrice} EGP
                        </span>
                      </div>
                      <div className="flex justify-between font-medium">
                        <span className=" flex gap-2 pb-px text-[#4A5565]">
                          <FaTruckFast />
                          Shipping
                        </span>
                        <span className="text-[#00A63E] font-semibold">
                          FREE
                        </span>
                      </div>
                      <div className="border-t border-[#F3F4F6] h-px "></div>
                      <div className="flex justify-between">
                        <span className="text-lg text-[#101828] font-bold leading-7">
                          Total
                        </span>
                        <div>
                          <span className="text-main-color font-semibold text-2xl leading-8">
                            {cartItems?.totalCartPrice}
                          </span>
                          <span className="text-sm font-medium leading-5 text-text-color">
                            EGP
                          </span>
                        </div>
                      </div>
                    </div>
                    <Button
                      disabled={isLoading}
                      type="submit"
                      form="checkoutForm"
                      className="flex w-full h-auto gap-3 mb-6 items-center justify-center rounded-xl py-4 px-6 bg-linear-to-r from-[#16A34A] to-[#15803D] shadow-[0px_4px_6px_-4px_#16A34A33,0px_10px_15px_-3px_#16A34A33] text-white font-semibold hover:from-[#157F3D] hover:to-[#14532D] transition-all duration-300"
                    >
                      {isLoading ? (
                        <>
                          <LuLoaderCircle className="animate-spin" />
                          Ordering...
                        </>
                      ) : (
                        <>
                          <FaBox />
                          Place Order
                        </>
                      )}
                    </Button>
                    <div className="flex mt-4 gap-4 py-2 items-center justify-center">
                      <div className="flex gap-1.5">
                        <FaShieldHalved color="#00C950" />
                        <span className="text-[12px] leading-4 font-medium text-text-color">
                          Secure Payment
                        </span>
                      </div>
                      <div className="w-px h-4 bg-[#E5E7EB]"></div>
                      <div className="flex gap-1.5">
                        <FaTruckFast color="#2B7FFF" />
                        <span className="text-[12px] leading-4 font-medium text-text-color">
                          Fast Delivery
                        </span>
                      </div>
                      <div className="w-px h-4 bg-[#E5E7EB]"></div>
                      <div className="flex gap-1.5">
                        <FaBox color="#FF6900" />
                        <span className="text-[12px] leading-4 font-medium text-text-color">
                          Easy Returns
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
