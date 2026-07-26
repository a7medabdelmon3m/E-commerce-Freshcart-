import React from "react";
import Breadcrumbs from "../_component/Breadcrumbs";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import WishListProductCard from "./WishListProductCard";
import Link from "next/link";
import { getCartItems, getUserWishlist } from "@/api/services/route.services";
import EmptyMsg from "../_component/EmptyMsg";
import { FaArrowRightLong } from "react-icons/fa6";
import { cartItemType } from "@/api/types";

export default async function Page() {
  const wishlist = await getUserWishlist();
  const cartItems = await getCartItems()

  //  console.log('wishlist : ' , cartItems);

  return (
    <section className="min-h-screen bg-[#F9FAFB80]">
      {!wishlist || wishlist.length === 0 ? (
        <div className="min-h-[60vh] px-x flex items-center justify-center">
          <div className="max-w-md text-center">
            <EmptyMsg
              title="Your wishlist is empty"
              desc={<>Browse products and save your favorites here.</>}
              icon={<FaRegHeart className="text-3xl text-gray-400" />}
              buttonName={ <> Browse Products <FaArrowRightLong className="text-sm inline-block ml-2" /> </> }
              iconStylings="w-20 h-20 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-6"
            />
          </div>
        </div>
      ) : (
        <>
          <div className="border-b bg-white border-[#F3F4F6]">
            <div className="container mx-auto px-4 py-8 flex flex-col gap-4">
              <Breadcrumbs
                customName={["Wishlist"]}
                pageColor="text-[#101828]"
                linkColor="text-[#6A7282]"
                linkColorHover="hover:text-black"
              />
              <div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-[#FEF2F2] flex justify-center items-center">
                    <FaHeart color="#FB2C36" size={20} />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold leading-8 text-[#101828] ">
                      My Wishlist
                    </h1>
                    <p className="text-text-color font-medium leading-5 text-sm">
                      {wishlist.length} items saved
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container mx-auto px-4 py-8 space-y-8">
            <div className="rounded-2xl border border-[#F3F4F6] bg-[#FFFFFF]">
              <div className=" hidden lg:flex border border-[#F9FAFB] gap-4 py-4 px-6 bg-[#F3F4F6]">
                <div className="text-text-color font-medium text-sm leading-5 flex-6 text-center ">
                  Product
                </div>
                <div className="text-text-color font-medium text-sm leading-5 flex-2 text-center ">
                  Price
                </div>
                <div className="text-text-color font-medium text-sm leading-5 flex-2 text-center ">
                  Status
                </div>
                <div className="text-text-color font-medium text-sm leading-5 flex-2 text-center ">
                  Actions
                </div>
              </div>
              <div className="divide-y">
                {wishlist?.map((item) => {
                  return (
                    <WishListProductCard key={item.id} productDetails={item} cartItems={cartItems as cartItemType} />
                  );
                })}
              </div>
            </div>
            <div className="mt-8">
              <Link
                href={"/home"}
                className="text-text-color text-sm leading-5 "
              >
                ← Continue Shopping
              </Link>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
