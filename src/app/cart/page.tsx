import Link from "next/link";
import React from "react";
import {
  FaBoxOpen,
  FaCheck,
  FaLock,
  FaMinus,
  FaPlus,
  FaShoppingBag,
  FaShoppingCart,
  FaTag,
  FaTruck,
} from "react-icons/fa";
import me from "../../assets/image/01207179348.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MdDelete } from "react-icons/md";
import { FaArrowRightLong, FaShieldHalved } from "react-icons/fa6";
import CartItem from "./cartItem/CartItem";
import { getCartItems } from "@/api/services/route.services";
import ClearAllItems from "./ClearAllItems";
import EmptyMsg from "../_component/EmptyMsg";
export default async function Cart() {
  const listOfCartItems = await getCartItems();
  const totalItemsCount = listOfCartItems?.products?.length;
  // const totalItemsCount  = listOfCartItems?.products.reduce(
  //   (accumulator, item) => {
  //     return accumulator + item.count;
  //   },
  //   0,
  // );
  return (
    <section className="bg-gray-50 py-8 min-h-screen">
      <div className="container mx-auto px-4">
        {(totalItemsCount as number) > 0 ? (
          <>
            <div className="mb-8 flex gap-4 flex-col">
              <ul className="flex gap-2">
                <li className="flex items-center text-text-color text-[14px] font-medium leading-5">
                  <Link className="flex items-center gap-1.5 " href={"/"}>
                    <span>Home</span>
                  </Link>
                </li>
                <span>/</span>

                <li className="flex items-center text-[#101828] text-[14px] font-medium leading-5">
                  <Link className="flex items-center gap-1.5 " href={"/"}>
                    Shopping Cart
                  </Link>
                </li>
              </ul>
              <div className="flex flex-col gap-2">
                <div className="flex gap-3 items-center text-3xl font-bold leading-9 text-[#101828]">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-linear-to-r from-main-color to-main-color-hover">
                    <FaShoppingCart color="white" />
                  </div>
                  <h1>Shopping Cart</h1>
                </div>
                <p className="text-text-color font-medium">
                  You have{" "}
                  <span className="text-main-color">
                    {totalItemsCount} items
                  </span>{" "}
                  in your cart
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 flex flex-col gap-6">
                {listOfCartItems?.products?.map((item) => (
                  <CartItem key={item._id} product={item}></CartItem>
                ))}
                <div className="pt-6 flex justify-between border-t border-[#E5E7EB] items-center">
                  <Link
                    href={"/"}
                    className="flex gap-2  items-center text-main-color font-medium text-sm leading-5 hover:text-main-color-hover transition-all duration-300"
                  >
                    <span>←</span>
                    Continue Shopping
                  </Link>
                  <ClearAllItems />
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
                      {totalItemsCount} items in your cart
                    </p>
                  </div>
                  <div className="flex flex-col gap-5 p-6">
                    <div className="rounded-xl  p-4 flex flex-1 gap-3 bg-linear-to-r from-[#F0FDF4] to-[#F3F4F6]">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full text-[#00A63E] bg-main-color-subtle">
                        <FaTruck size={18} />
                      </div>
                      <div>
                        <p className="font-semibold text-[#008236]">
                          Free Shipping!
                        </p>
                        <p className="text-sm font-medium leading-5 text-[#00A63E]">
                          You qualify for free delivery
                        </p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center font-medium">
                        <span className="text-text-color">Subtotal</span>
                        <span className="text-[#101828]">
                          {listOfCartItems?.totalCartPrice} EGP
                        </span>
                      </div>
                      <div className="flex justify-between items-center font-medium">
                        <span className="text-text-color">Shipping</span>
                        <span className="text-main-color">FREE</span>
                      </div>
                      <div className="border-t border-dashed pt-3 border-[#E5E7EB]">
                        <div className="flex justify-between items-center font-medium">
                          <span className="text-[#101828]">Total</span>
                          <div>
                            <span className="text-[#101828] font-bold text-2xl leading-8">
                              {listOfCartItems?.totalCartPrice}
                            </span>
                            <span className="text-sm text-text-color leading-5 font-medium">
                              EGP
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button className="w-full h-auto flex items-center justify-center gap-2 py-3 border border-dashed border-[#D1D5DC] rounded-xl text-text-color hover:text-main-color hover:bg-main-color-subtle hover:border-main-color transition-all duration-300 ">
                      <FaTag />
                      <span className="text-sm font-medium leading-5">
                        Apply Promo Code
                      </span>
                    </Button>
                    <Link
                      href={"/checkout"}
                      className="flex gap-3 items-center justify-center rounded-xl py-4 px-6 bg-linear-to-r from-[#16A34A] to-[#15803D] shadow-[0px_4px_6px_-4px_#16A34A33,0px_10px_15px_-3px_#16A34A33] text-white font-semibold hover:from-[#157F3D] hover:to-[#14532D] transition-all duration-300"
                    >
                      <FaLock />
                      Secure Checkout
                    </Link>
                    <div className="flex gap-4 py-2 items-center justify-center">
                      <div className="flex gap-1.5">
                        <FaShieldHalved color="#00C950" />
                        <span className="text-[12px] leading-4 font-medium text-text-color">
                          Secure Payment
                        </span>
                      </div>
                      <div className="w-px h-4 bg-[#E5E7EB]"></div>
                      <div className="flex gap-1.5">
                        <FaShieldHalved color="#2B7FFF" />
                        <span className="text-[12px] leading-4 font-medium text-text-color">
                          Fast Delivery
                        </span>
                      </div>
                    </div>
                    <Link
                      className="py-2 text-main-color font-medium text-sm leading-5 text-center hover:text-main-color-hover transition-all duration-300"
                      href={"/"}
                    >
                      ← Continue Shopping
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="min-h-[60vh] px-x flex items-center justify-center">
            <div className="max-w-md text-center">
              <EmptyMsg
                icon={<FaBoxOpen />}
                title="Your cart is empty"
                desc={<p>Looks like you haven&apos;t added anything to your cart yet.
                        <br />
                        Start exploring our products!</p>} 
              />
              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-400 mb-4">Popular Categories</p>
                <div className="flex flex-wrap justify-center gap-2">
                  <Link
                    className="px-4 py-2 bg-gray-100 hover:bg-main-color-subtle hover:text-main-color text-gray-600 rounded-full text-sm font-medium transition-colors"
                    href={"/"}
                  >
                    Electronics
                  </Link>
                  <Link
                    className="px-4 py-2 bg-gray-100 hover:bg-main-color-subtle hover:text-main-color text-gray-600 rounded-full text-sm font-medium transition-colors"
                    href={"/"}
                  >
                    Fashion
                  </Link>
                  <Link
                    className="px-4 py-2 bg-gray-100 hover:bg-main-color-subtle hover:text-main-color text-gray-600 rounded-full text-sm font-medium transition-colors"
                    href={"/"}
                  >
                    Home
                  </Link>
                  <Link
                    className="px-4 py-2 bg-gray-100 hover:bg-main-color-subtle hover:text-main-color text-gray-600 rounded-full text-sm font-medium transition-colors"
                    href={"/"}
                  >
                    Beauty
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
